/* ==========================================================================
   VOLTIX — api/send-email.js

   This is a tiny serverless function (runs on Vercel, NOT in the visitor's
   browser). It receives the form data from script.js and sends a real email
   through Gmail's own SMTP servers using Nodemailer.

   The site itself, and every visitor, never sees any password or key —
   the Gmail credentials live only in this file's environment variables,
   set once in the Vercel dashboard.

   ------------------------------------------------------------------------
   ONE-TIME SETUP (about 5 minutes)
   ------------------------------------------------------------------------
   1. Turn on 2-Step Verification on the Gmail account voltixeg6@gmail.com:
        https://myaccount.google.com/security

   2. Create an "App Password" for that account:
        https://myaccount.google.com/apppasswords
      - App name: anything, e.g. "VOLTIX Website"
      - Google will show you a 16-character password. Copy it.
      (This App Password is NOT your normal Gmail password — it only works
       for sending mail through this app, and can be revoked any time.)

   3. Deploy this project to Vercel (free):
        https://vercel.com/new
      Import the project's GitHub repo, or drag-and-drop the folder.

   4. In the Vercel project → Settings → Environment Variables, add:
        GMAIL_USER          = voltixeg6@gmail.com
        GMAIL_APP_PASSWORD  = the 16-character app password from step 2
      Then redeploy (Vercel → Deployments → ⋯ → Redeploy).

   That's it. From then on, submitting either form on the site sends a real
   email straight to voltixeg6@gmail.com, automatically, with nothing for
   the visitor to configure and no key ever exposed in the site's code.
   ========================================================================== */

const nodemailer = require('nodemailer');
const Busboy = require('busboy');

const COMPANY_EMAIL = 'voltixeg6@gmail.com';

function parseMultipart(req) {
  return new Promise((resolve, reject) => {
    const busboy = new Busboy({ headers: req.headers });
    const fields = {};
    const attachments = [];
    let fileIndex = 0;

    busboy.on('field', (name, value) => {
      fields[name] = value;
    });

    busboy.on('file', (name, stream, filename, encoding, mimeType) => {
      fileIndex++;
      const chunks = [];
      stream.on('data', chunk => chunks.push(chunk));
      stream.on('end', () => {
        attachments.push({
          filename: filename || `attachment_${fileIndex}`,
          content: Buffer.concat(chunks),
          contentType: mimeType || 'application/octet-stream'
        });
      });
    });

    busboy.on('finish', () => {
      resolve({ fields, attachments });
    });

    busboy.on('error', reject);
    req.pipe(busboy);
  });
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const GMAIL_USER = process.env.GMAIL_USER;
  const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.error('VOLTIX: GMAIL_USER / GMAIL_APP_PASSWORD env vars are not set.');
    res.status(500).json({ error: 'Email sending is not configured on the server yet.' });
    return;
  }

  let body = req.body;
  let attachments = [];

  if (req.headers['content-type']?.startsWith('multipart/form-data')) {
    const parsed = await parseMultipart(req);
    const { kind, ...rest } = parsed.fields;
    body = { kind, data: rest };
    attachments = parsed.attachments;
  } else {
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch (_) { body = {}; }
    }
  }

  const { kind, data } = body || {};

  if (!data || (kind !== 'request' && kind !== 'contact' && kind !== 'order' && kind !== 'newsletter')) {
    res.status(400).json({ error: 'Invalid request.' });
    return;
  }

  if (attachments.length > 0 && !data.fileNames) {
    data.fileNames = attachments.map(a => a.filename);
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD }
    });

    const replyTo = kind === 'request' ? data.email : kind === 'order' ? data.customerEmail : kind === 'newsletter' ? data.email : data.email;
    const subject = kind === 'request'
      ? `New Service Request — ${data.fullName || 'Website Visitor'}`
      : kind === 'order'
        ? `New Order Received — ${data.customerEmail || 'Website Visitor'}`
        : kind === 'newsletter'
          ? `New Newsletter Subscription — ${data.email || 'Website Visitor'}`
          : `New Contact Message — ${data.subject || ''}`;
    const html = kind === 'request' ? buildRequestEmailHtml(data) : kind === 'order' ? buildOrderEmailHtml(data) : kind === 'newsletter' ? buildNewsletterEmailHtml(data) : buildContactEmailHtml(data);

    const mailOptions = {
      from: `"VOLTIX Website" <${GMAIL_USER}>`,
      to: COMPANY_EMAIL,
      replyTo,
      subject,
      html
    };

    if (attachments.length > 0) {
      mailOptions.attachments = attachments.map(a => ({
        filename: a.filename,
        content: a.content,
        contentType: a.contentType
      }));
    }

    await transporter.sendMail(mailOptions);

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('VOLTIX: failed to send email:', err);
    res.status(500).json({ error: 'Failed to send email.' });
  }
};

/* ==========================================================================
   Email design — same look for both forms, matches the VOLTIX brand colors.
   ========================================================================== */
const EMAIL_BG = '#36505C';
const EMAIL_CARD = '#f4f7f8';
const EMAIL_ACCENT_TEAL = '#2fe6c0';
const EMAIL_ACCENT_BLUE = '#38bdf8';
const EMAIL_FONT = "'Helvetica Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif";

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function emailRow(label, value) {
  return `
    <tr>
      <td style="font-family:${EMAIL_FONT};padding:11px 14px;border-bottom:1px solid #e2e8ea;color:#6b7a80;font-size:13px;font-weight:500;width:38%;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="font-family:${EMAIL_FONT};padding:11px 14px;border-bottom:1px solid #e2e8ea;color:#1c2b30;font-size:14px;line-height:1.55;vertical-align:top;">${value && String(value).trim() ? escapeHtml(value) : '—'}</td>
    </tr>`;
}

function sectionTitle(text) {
  return `<h3 style="font-family:${EMAIL_FONT};margin:20px 0 6px;color:#0e7aa3;font-size:13px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;border-bottom:2px solid #dfe7e9;padding-bottom:8px;">${escapeHtml(text)}</h3>`;
}

function emailShell({ heading, submittedAt, bodyHtml }) {
  return `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${EMAIL_BG};padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:${EMAIL_CARD};border-radius:14px;overflow:hidden;font-family:${EMAIL_FONT};">
          <tr>
            <td style="background:${EMAIL_BG};padding:28px;border-bottom:3px solid ${EMAIL_ACCENT_TEAL};">
              <span style="font-family:${EMAIL_FONT};font-size:23px;font-weight:700;letter-spacing:1.5px;color:#ffffff;">VOLT<span style="color:${EMAIL_ACCENT_TEAL};">I</span><span style="color:${EMAIL_ACCENT_BLUE};">X</span></span>
              <div style="font-family:${EMAIL_FONT};color:#cfe3e8;font-size:14px;font-weight:400;margin-top:8px;">${escapeHtml(heading)}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 28px 4px;">
              <p style="font-family:${EMAIL_FONT};margin:0;color:#8a979b;font-size:12px;">Submitted: ${escapeHtml(submittedAt)}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:12px 28px 28px;">
              ${bodyHtml}
            </td>
          </tr>
          <tr>
            <td style="font-family:${EMAIL_FONT};background:#e9eef0;padding:18px 28px;text-align:center;color:#7a8890;font-size:12px;">
              VOLTIX · Sadat City, Menofia, Egypt · ${escapeHtml(COMPANY_EMAIL)}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`;
}

function buildRequestEmailHtml(data) {
  const body = `
    ${sectionTitle('Contact Information')}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
      ${emailRow('Full Name', data.fullName)}
      ${emailRow('Company Name', data.companyName)}
      ${emailRow('Email', data.email)}
      ${emailRow('Phone', data.phone)}
      ${emailRow('Country', data.country)}
      ${emailRow('Preferred Contact Method', data.contactMethod)}
    </table>

    ${sectionTitle('Project Details')}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
      ${emailRow('Project Type', data.projectType)}
      ${emailRow('Service(s) Needed', data.services_list)}
      ${emailRow('Budget', data.budget)}
      ${emailRow('Deadline', data.deadline)}
    </table>

    ${sectionTitle('Description')}
    <p style="font-family:${EMAIL_FONT};margin:0 0 14px;color:#1c2b30;font-size:14px;line-height:1.65;">${escapeHtml(data.description).replace(/\n/g, '<br>')}</p>

    ${sectionTitle('Extra Notes')}
    <p style="font-family:${EMAIL_FONT};margin:0 0 14px;color:#1c2b30;font-size:14px;line-height:1.65;">${data.notes && data.notes.trim() ? escapeHtml(data.notes).replace(/\n/g, '<br>') : '—'}</p>

    ${sectionTitle('Attached Files (from form)')}
    <p style="font-family:${EMAIL_FONT};margin:0;color:#1c2b30;font-size:14px;">${data.fileNames && data.fileNames.length ? escapeHtml(data.fileNames.join(', ')) : 'No files uploaded.'}</p>
  `;

  return emailShell({
    heading: 'New Service Request',
    submittedAt: data.submitted_at,
    bodyHtml: body
  });
}

function buildContactEmailHtml(data) {
  const body = `
    ${sectionTitle('Contact Information')}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
      ${emailRow('Name', data.name)}
      ${emailRow('Email', data.email)}
      ${emailRow('Subject', data.subject)}
    </table>

    ${sectionTitle('Message')}
    <p style="font-family:${EMAIL_FONT};margin:0 0 14px;color:#1c2b30;font-size:14px;line-height:1.65;">${escapeHtml(data.message).replace(/\n/g, '<br>')}</p>
  `;

  return emailShell({
    heading: 'New Contact Message',
    submittedAt: data.submitted_at,
    bodyHtml: body
  });
}

function buildOrderEmailHtml(data) {
  const itemsHtml = (data.items || [])
    .map(
      (item) =>
        `<tr>
        <td style="font-family:${EMAIL_FONT};padding:11px 14px;border-bottom:1px solid #e2e8ea;color:#1c2b30;font-size:14px;line-height:1.55;vertical-align:top;">${escapeHtml(item.title)}</td>
        <td style="font-family:${EMAIL_FONT};padding:11px 14px;border-bottom:1px solid #e2e8ea;color:#6b7a80;font-size:13px;font-weight:500;width:38%;vertical-align:top;text-align:center;">x${escapeHtml(String(item.quantity))}</td>
      </tr>`
    )
    .join('');

  const body = `
    ${sectionTitle('Customer Information')}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
      ${emailRow('Customer Email', data.customerEmail)}
      ${emailRow('Customer Phone', data.customerPhone)}
    </table>

    ${sectionTitle('Order Items')}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
      <tr>
        <th style="font-family:${EMAIL_FONT};padding:11px 14px;border-bottom:2px solid #dfe7e9;color:#0e7aa3;font-size:13px;font-weight:700;text-align:left;width:62%;">Product</th>
        <th style="font-family:${EMAIL_FONT};padding:11px 14px;border-bottom:2px solid #dfe7e9;color:#0e7aa3;font-size:13px;font-weight:700;text-align:center;width:38%;">Quantity</th>
      </tr>
      ${itemsHtml || `<tr><td colspan="2" style="font-family:${EMAIL_FONT};padding:11px 14px;color:#6b7a80;font-size:14px;">No items in order.</td></tr>`}
    </table>

    ${sectionTitle('Notes')}
    <p style="font-family:${EMAIL_FONT};margin:0 0 14px;color:#1c2b30;font-size:14px;line-height:1.65;">${data.notes && data.notes.trim() ? escapeHtml(data.notes).replace(/\n/g, '<br>') : '—'}</p>
  `;

  return emailShell({
    heading: 'New Order Received',
    submittedAt: data.submitted_at,
    bodyHtml: body
  });
}

function buildNewsletterEmailHtml(data) {
  const body = `
    ${sectionTitle('Subscription Information')}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
      ${emailRow('Email', data.email)}
      ${emailRow('Submitted At', data.submitted_at)}
    </table>
  `;

  return emailShell({
    heading: 'New Newsletter Subscription',
    submittedAt: data.submitted_at,
    bodyHtml: body
  });
}
