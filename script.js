/* ==========================================================================
   VOLTIX — script.js
   Vanilla JS only. Organized by feature, each section self-contained.
   ========================================================================== */

/* ==========================================================================
   COMPANY INFO — edit these values once and every part of the site
   (quick-contact links, footer socials, contact form) updates automatically.
   ========================================================================== */
const COMPANY_INFO = {
  email: 'voltixeg6@gmail.com',       
  phone: '+20 1035151545',            
  whatsapp: '201035151545',
  address: 'Sadat City, Menofia, Egypt',
  linkedin: 'https://www.linkedin.com/company/voltix-eg/',
  tiktok: 'https://www.tiktok.com/@voltix.egg?_r=1&_t=ZS-98Pjr6WTSZ5',                            
  instagram: 'https://www.instagram.com/volti_xeg/'           
};

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function showToast(message) {
  let toast = document.getElementById('voltixToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'voltixToast';
    toast.style.cssText = `
      position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%) translateY(20px);
      padding: 14px 24px; border-radius: 12px; background: var(--bg-surface);
      border: 1px solid var(--border-glass-strong); color: var(--white);
      font-family: var(--font-mono); font-size: 0.85rem; z-index: 500;
      opacity: 0; pointer-events: none; transition: opacity 0.4s var(--ease), transform 0.4s var(--ease);
      box-shadow: 0 12px 40px rgba(0,0,0,0.45); white-space: nowrap;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
  }, 2800);
}

/* ==========================================================================
   EMAIL DELIVERY — sends the "Request a Service" form AND the contact form
   straight to COMPANY_INFO.email as a real Gmail email, automatically, with
   no third-party keys anywhere in this file or in the browser.

   How it works:
   - The form data is POSTed to /api/send-email (a tiny serverless function,
     see api/send-email.js).
   - That function logs in to Gmail with COMPANY_INFO.email using an "App
     Password" and sends the email through Gmail's real SMTP servers.
   - The App Password is stored ONLY as an environment variable on the
     hosting provider (e.g. Vercel), never in this file and never sent to
     the visitor's browser. See api/send-email.js for the one-time setup.
   ========================================================================== */
const SEND_EMAIL_ENDPOINT = '/api/send-email';

async function sendEmail(kind, data) {
  const res = await fetch(SEND_EMAIL_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ kind, data })
  });
  if (!res.ok) {
    let msg = 'Failed to send email';
    try { msg = (await res.json()).error || msg; } catch (_) {}
    throw new Error(msg);
  }
  return res.json();
}

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------ */
  /* 0. Populate contact info + footer socials from COMPANY_INFO        */
  /* ------------------------------------------------------------------ */
  const quickEmail = document.getElementById('quickEmail');
  const quickPhone = document.getElementById('quickPhone');
  const quickWhatsapp = document.getElementById('quickWhatsapp');
  const quickInstagram = document.getElementById('quickInstagram');
  const quickTiktok = document.getElementById('quickTiktok');
  const quickLinkedin = document.getElementById('quickLinkedin');
  const quickAddress = document.getElementById('quickAddress');

  if (quickEmail) {
    quickEmail.href = `mailto:${COMPANY_INFO.email}`;
    quickEmail.querySelector('span').textContent = COMPANY_INFO.email;
  }
  if (quickPhone) {
    quickPhone.href = `tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`;
    quickPhone.querySelector('span').textContent = COMPANY_INFO.phone;
  }
  if (quickWhatsapp) {
    quickWhatsapp.href = `https://wa.me/${COMPANY_INFO.whatsapp}`;
    quickWhatsapp.querySelector('span').textContent = 'Chat on WhatsApp';
  }
  if (quickInstagram) quickInstagram.href = COMPANY_INFO.instagram;
  if (quickTiktok) quickTiktok.href = COMPANY_INFO.tiktok;
  if (quickLinkedin) quickLinkedin.href = COMPANY_INFO.linkedin;
  if (quickAddress) quickAddress.textContent = COMPANY_INFO.address;

  const footerLinkedin = document.querySelector('.footer__social a[href*="linkedin.com"]');
  if (footerLinkedin) footerLinkedin.href = COMPANY_INFO.linkedin;

  const footerTiktok = document.getElementById('footerTiktok');
  if (footerTiktok) {
    if (COMPANY_INFO.tiktok) { footerTiktok.href = COMPANY_INFO.tiktok; }
    else { footerTiktok.removeAttribute('target'); footerTiktok.setAttribute('aria-disabled', 'true'); footerTiktok.style.opacity = '0.4'; footerTiktok.style.pointerEvents = 'none'; }
  }
  const footerInstagram = document.getElementById('footerInstagram');
  if (footerInstagram) {
    if (COMPANY_INFO.instagram) { footerInstagram.href = COMPANY_INFO.instagram; }
    else { footerInstagram.removeAttribute('target'); footerInstagram.setAttribute('aria-disabled', 'true'); footerInstagram.style.opacity = '0.4'; footerInstagram.style.pointerEvents = 'none'; }
  }

  /* ------------------------------------------------------------------ */
  /* 1. Footer year                                                     */
  /* ------------------------------------------------------------------ */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ------------------------------------------------------------------ */
  /* 2. Navbar: blur on scroll + mobile menu                            */
  /* ------------------------------------------------------------------ */
  const navbar = document.getElementById('navbar');
  const burgerBtn = document.getElementById('burgerBtn');
  const navLinks = document.getElementById('navLinks');

  const onScrollNav = () => {
    if (window.scrollY > 24) navbar.classList.add('is-scrolled');
    else navbar.classList.remove('is-scrolled');
  };
  onScrollNav();
  window.addEventListener('scroll', onScrollNav, { passive: true });

  burgerBtn.addEventListener('click', () => {
    const isOpen = navbar.classList.toggle('mobile-open');
    burgerBtn.classList.toggle('is-open', isOpen);
    burgerBtn.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('mobile-open');
      burgerBtn.classList.remove('is-open');
      burgerBtn.setAttribute('aria-expanded', 'false');
    });
  });

  /* ------------------------------------------------------------------ */
  /* 3. Scroll reveal via IntersectionObserver                          */
  /* ------------------------------------------------------------------ */
  const revealEls = document.querySelectorAll('[data-reveal]');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ------------------------------------------------------------------ */
  /* 5. Hero circuit canvas — signature animated background             */
  /* ------------------------------------------------------------------ */
  const canvas = document.getElementById('circuitCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height, nodes = [];
    const NODE_COUNT_BASE = 46;
    let mouse = { x: null, y: null };

    function resize() {
      width = canvas.width = canvas.offsetWidth * devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * devicePixelRatio;
      canvas.style.width = canvas.offsetWidth + 'px';
      canvas.style.height = canvas.offsetHeight + 'px';
      initNodes();
    }

    function initNodes() {
      const count = Math.min(NODE_COUNT_BASE, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 26000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
        r: (Math.random() * 1.6 + 0.8) * devicePixelRatio
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      const maxDist = 170 * devicePixelRatio;

      // update
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      });

      // connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.35;
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        // connect to mouse
        if (mouse.x !== null) {
          const dx = nodes[i].x - mouse.x, dy = nodes[i].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist * 1.4) {
            const alpha = (1 - dist / (maxDist * 1.4)) * 0.5;
            ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      // nodes
      nodes.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(148, 217, 245, 0.75)';
        ctx.fill();
      });

      requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', e => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) * devicePixelRatio;
      mouse.y = (e.clientY - rect.top) * devicePixelRatio;
    });
    canvas.addEventListener('mouseleave', () => { mouse.x = null; mouse.y = null; });
    requestAnimationFrame(draw);
  }

  /* ------------------------------------------------------------------ */
  /* 6. Animated counters (Stats section)                                */
  /* ------------------------------------------------------------------ */
  const counters = document.querySelectorAll('.stat__num');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1600;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target) + (progress >= 1 ? suffix : '');
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.6 });
  counters.forEach(c => counterObserver.observe(c));

  /* ------------------------------------------------------------------ */
  /* 7. Button ripple effect                                             */
  /* ------------------------------------------------------------------ */
  document.querySelectorAll('.ripple').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height);
      ripple.className = 'ripple-effect';
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
      ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 650);
    });
  });

  /* ------------------------------------------------------------------ */
  /* 8. Accordion (FAQ)                                                  */
  /* ------------------------------------------------------------------ */
  document.querySelectorAll('.accordion__item').forEach(item => {
    const trigger = item.querySelector('.accordion__trigger');
    const panel = item.querySelector('.accordion__panel');

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      document.querySelectorAll('.accordion__item.is-open').forEach(open => {
        if (open !== item) {
          open.classList.remove('is-open');
          open.querySelector('.accordion__trigger').setAttribute('aria-expanded', 'false');
          open.querySelector('.accordion__panel').style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
        panel.style.maxHeight = null;
      } else {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  /* ------------------------------------------------------------------ */
  /* 9. Testimonials slider                                              */
  /* ------------------------------------------------------------------ */
  const track = document.getElementById('sliderTrack');
  const slides = track ? Array.from(track.children) : [];
  const dotsWrap = document.getElementById('sliderDots');
  const prevBtn = document.getElementById('sliderPrev');
  const nextBtn = document.getElementById('sliderNext');
  let current = 0;
  let sliderTimer;

  function renderDots() {
    dotsWrap.innerHTML = '';
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
      if (i === current) dot.classList.add('is-active');
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    });
  }

  function goTo(index) {
    slides[current].classList.remove('is-active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('is-active');
    dotsWrap.querySelectorAll('button').forEach((d, i) => d.classList.toggle('is-active', i === current));
    resetTimer();
  }

  function resetTimer() {
    clearInterval(sliderTimer);
    sliderTimer = setInterval(() => goTo(current + 1), 6000);
  }

  if (slides.length) {
    slides[0].classList.add('is-active');
    renderDots();
    prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn.addEventListener('click', () => goTo(current + 1));
    resetTimer();
  }

  /* ------------------------------------------------------------------ */
  /* 10. Back to top                                                     */
  /* ------------------------------------------------------------------ */
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('is-visible', window.scrollY > 600);
  }, { passive: true });
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ------------------------------------------------------------------ */
  /* 11. Request Service modal                                           */
  /* ------------------------------------------------------------------ */
  const modal = document.getElementById('requestModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const closeModalBtn = document.getElementById('closeModal');
  const cancelFormBtn = document.getElementById('cancelForm');
  const openers = ['openModalNav', 'openModalHero', 'openModalServices', 'openModalContact', 'openModalFrontend', 'openModalDataAnalytics', 'openModalDataAnalyticsCta', 'openModalFrontendNav', 'openModalUiUxNav', 'openModalUiUxCta', 'openModalCybersecurityNav', 'openModalCybersecurityCta', 'openModalDataAnalyticsNav', 'openModalDotnetNav', 'openModalDotnet']
    .map(id => document.getElementById(id))
    .filter(Boolean);

  let lastFocused = null;

  function openModal() {
    lastFocused = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    const firstField = modal.querySelector('#fullName');
    if (firstField) setTimeout(() => firstField.focus(), 350);
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }

  openers.forEach(btn => btn.addEventListener('click', openModal));
  modalBackdrop.addEventListener('click', closeModal);
  closeModalBtn.addEventListener('click', closeModal);
  cancelFormBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });

  /* ------------------------------------------------------------------ */
  /* 12. Form validation + fake submit                                   */
  /* ------------------------------------------------------------------ */
  const form = document.getElementById('requestForm');
  const modalSuccess = document.getElementById('modalSuccess');
  const closeSuccessBtn = document.getElementById('closeSuccess');
  const serviceChips = document.getElementById('serviceChips');
  const serviceError = document.getElementById('serviceError');

  function validateField(field) {
    const wrapper = field.closest('.field');
    if (!wrapper) return true;
    const valid = field.checkValidity();
    wrapper.classList.toggle('has-error', !valid);
    return valid;
  }

  form.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.closest('.field')?.classList.contains('has-error')) validateField(field);
    });
  });

  const submitBtn = form.querySelector('button[type="submit"]');
  const submitBtnLabel = submitBtn ? submitBtn.querySelector('span') : null;
  const modalErrorMsg = document.getElementById('modalErrorMsg');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let valid = true;

    form.querySelectorAll('[required]').forEach(field => {
      if (!validateField(field)) valid = false;
    });

    const anyServiceChecked = serviceChips.querySelectorAll('input:checked').length > 0;
    serviceError.style.display = anyServiceChecked ? 'none' : 'block';
    if (!anyServiceChecked) valid = false;

    if (!valid) {
      const firstError = form.querySelector('.field.has-error, #serviceError[style*="block"]');
      if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const fd = new FormData(form);
    const servicesList = fd.getAll('service').join(', ');
    const data = {
      fullName: fd.get('fullName'),
      companyName: fd.get('companyName'),
      email: fd.get('email'),
      phone: fd.get('phone'),
      country: fd.get('country'),
      projectType: fd.get('projectType'),
      services_list: servicesList,
      description: fd.get('description'),
      budget: fd.get('budget'),
      deadline: fd.get('deadline') || 'Not specified',
      contactMethod: fd.get('contactMethod'),
      notes: fd.get('notes'),
      fileNames: fileInput.files ? Array.from(fileInput.files).map(f => f.name) : [],
      submitted_at: new Date().toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' })
    };

    if (submitBtn) submitBtn.disabled = true;
    if (submitBtnLabel) submitBtnLabel.textContent = 'Sending…';
    if (modalErrorMsg) modalErrorMsg.textContent = '';

    try {
      await sendEmail('request', data);

      closeModal();
      openThankYouPopup();
    } catch (err) {
      console.error('VOLTIX request submission failed:', err);
      if (modalErrorMsg) {
        modalErrorMsg.textContent = "Something went wrong sending your request. Please try again, or email us directly at " + COMPANY_INFO.email + ".";
      }
    } finally {
      if (submitBtn) submitBtn.disabled = false;
      if (submitBtnLabel) submitBtnLabel.textContent = 'Submit Request';
    }
  });

  closeSuccessBtn.addEventListener('click', () => {
    closeModal();
    setTimeout(() => {
      form.reset();
      form.hidden = false;
      modalSuccess.hidden = true;
      form.querySelectorAll('.field.has-error').forEach(f => f.classList.remove('has-error'));
      serviceError.style.display = 'none';
    }, 400);
  });

  /* ------------------------------------------------------------------ */
  /* 13. File drop UI                                                    */
  /* ------------------------------------------------------------------ */
  const fileDrop = document.getElementById('fileDrop');
  const fileInput = document.getElementById('files');
  const fileDropText = document.getElementById('fileDropText');

  ['dragenter', 'dragover'].forEach(evt => {
    fileDrop.addEventListener(evt, (e) => { e.preventDefault(); fileDrop.classList.add('is-dragover'); });
  });
  ['dragleave', 'drop'].forEach(evt => {
    fileDrop.addEventListener(evt, (e) => { e.preventDefault(); fileDrop.classList.remove('is-dragover'); });
  });
  fileDrop.addEventListener('drop', (e) => {
    if (e.dataTransfer.files.length) {
      fileInput.files = e.dataTransfer.files;
      updateFileText();
    }
  });
  fileInput.addEventListener('change', updateFileText);
  function updateFileText() {
    const count = fileInput.files.length;
    fileDropText.textContent = count ? `${count} file${count > 1 ? 's' : ''} selected` : 'Drag files here or click to browse';
  }

  /* ------------------------------------------------------------------ */
  /* 14. Newsletter form (footer)                                        */
  /* ------------------------------------------------------------------ */
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterMsg = document.getElementById('newsletterMsg');
  newsletterForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector('input[type="email"]');
    const email = input?.value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newsletterMsg.textContent = 'Please enter a valid email address.';
      return;
    }
    try {
      await sendEmail('newsletter', { email, submitted_at: new Date().toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' }) });
      newsletterMsg.textContent = 'Thanks — you\'re on the list.';
      newsletterForm.reset();
    } catch (err) {
      console.error('VOLTIX newsletter submission failed:', err);
      newsletterMsg.textContent = "Something went wrong. Please try again, or email us directly at " + COMPANY_INFO.email + ".";
    }
  });

  /* ------------------------------------------------------------------ */
  /* 15. Contact form — opens the user's email client with the message  */
  /*     prefilled. No backend required; works on any static host.      */
  /* ------------------------------------------------------------------ */
  const contactForm = document.getElementById('contactForm');
  const contactFormMsg = document.getElementById('contactFormMsg');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('ctName');
      const email = document.getElementById('ctEmail');
      const subject = document.getElementById('ctSubject');
      const message = document.getElementById('ctMessage');

      let valid = true;
      [name, email, subject, message].forEach((field) => {
        const wrapper = field.closest('.field');
        const isEmpty = !field.value.trim();
        const isBadEmail = field === email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
        const hasError = isEmpty || isBadEmail;
        wrapper.classList.toggle('has-error', hasError);
        if (hasError) valid = false;
      });
      if (!valid) return;

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;
      contactFormMsg.textContent = 'Sending…';

      const data = {
        name: name.value.trim(),
        email: email.value.trim(),
        subject: subject.value.trim(),
        message: message.value.trim(),
        submitted_at: new Date().toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' })
      };

      try {
        await sendEmail('contact', data);
        contactFormMsg.textContent = 'Thanks — your message has been sent.';
        contactForm.reset();
      } catch (err) {
        console.error('VOLTIX contact submission failed:', err);
        contactFormMsg.textContent = "Something went wrong sending your message. Please try again, or email us directly at " + COMPANY_INFO.email + ".";
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

  /* ------------------------------------------------------------------ */
  /* 16. Homepage Cart & Favourites                                      */
  /* ------------------------------------------------------------------ */
  const homepageFavBtn = document.getElementById('openHomepageFavSidebar');
  const homepageCartBtn = document.getElementById('openHomepageCartSidebar');
  const homepageFavSidebar = document.getElementById('homepageFavSidebar');
  const homepageCartSidebar = document.getElementById('homepageCartSidebar');
  const homepageFavCount = document.getElementById('homepageFavCount');
  const homepageCartCount = document.getElementById('homepageCartCount');
  const homepageFavList = document.getElementById('homepageFavList');
  const homepageCartList = document.getElementById('homepageCartList');

  if (homepageFavBtn && homepageCartBtn) {
    function getCombinedProducts() {
      const products = [];
      if (typeof FRONTEND_PRODUCTS !== 'undefined') products.push(...FRONTEND_PRODUCTS);
      if (typeof DATA_ANALYTICS_PRODUCTS !== 'undefined') products.push(...DATA_ANALYTICS_PRODUCTS);
      return products;
    }

    function openHomepageSidebar(id) {
      const panel = document.getElementById(id);
      if (!panel) return;
      panel.classList.add('is-open');
      panel.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (id === 'homepageFavSidebar') renderHomepageFavSidebar();
      if (id === 'homepageCartSidebar') renderHomepageCartSidebar();
    }

    function closeHomepageSidebar(id) {
      const panel = document.getElementById(id);
      if (!panel) return;
      panel.classList.remove('is-open');
      panel.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    function renderHomepageFavSidebar() {
      const list = document.getElementById('homepageFavList');
      if (!list) return;
      const favs = getGlobalFavorites();
      const allProducts = getCombinedProducts();
      const items = allProducts.filter(p => favs.includes(p.id));
      if (!items.length) {
        list.innerHTML = `<div class="side-panel__empty"><i class="fa-regular fa-heart" aria-hidden="true"></i><p>No favourites yet. Browse our services and tap the heart on any product to save it here.</p></div>`;
        return;
      }
      list.innerHTML = items.map(product => {
        const imageHtml = product.image ? `<img src="${product.image}" alt="${escapeHtml(product.title)}">` : `<i class="fa-regular fa-image" aria-hidden="true"></i>`;
        return `<div class="side-panel__item">
          <div class="side-panel__item-img">${imageHtml}</div>
          <div class="side-panel__item-body">
            <div class="side-panel__item-title">${escapeHtml(product.title)}</div>
            <div class="side-panel__item-meta">${escapeHtml(product.category)}</div>
          </div>
          <button class="side-panel__item-action" data-remove-fav="${product.id}" aria-label="Remove from favourites" title="Remove from favourites"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>
        </div>`;
      }).join('');
      list.querySelectorAll('[data-remove-fav]').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-remove-fav');
          toggleGlobalFavorite(id);
          updateHomepageNavCounts();
          renderHomepageFavSidebar();
        });
      });
    }

    function renderHomepageCartSidebar() {
      const list = document.getElementById('homepageCartList');
      if (!list) return;
      const globalCart = getGlobalCart();
      if (!globalCart.length) {
        list.innerHTML = `<div class="side-panel__empty"><i class="fa-solid fa-cart-shopping" aria-hidden="true"></i><p>Your cart is empty. Browse our services and tap the cart icon to add items.</p></div>`;
        return;
      }
      list.innerHTML = globalCart.map(item => {
        const imageHtml = item.image ? `<img src="${item.image}" alt="${escapeHtml(item.title)}">` : `<i class="fa-regular fa-image" aria-hidden="true"></i>`;
        return `<div class="side-panel__item">
          <div class="side-panel__item-img">${imageHtml}</div>
          <div class="side-panel__item-body">
            <div class="side-panel__item-title">${escapeHtml(item.title)}</div>
            <div class="side-panel__item-meta">${escapeHtml(item.category)}</div>
          </div>
          <button class="side-panel__item-action" data-remove-cart="${item.id}" data-cart-source="${item.source}" aria-label="Remove from cart" title="Remove from cart"><i class="fa-solid fa-trash" aria-hidden="true"></i></button>
        </div>`;
      }).join('');
      list.querySelectorAll('[data-remove-cart]').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-remove-cart');
          const source = btn.getAttribute('data-cart-source');
          removeFromGlobalCart(id, source);
          updateHomepageNavCounts();
          renderHomepageCartSidebar();
        });
      });
    }

    function updateHomepageNavCounts() {
      if (homepageFavCount) {
        const count = getGlobalFavoritesCount();
        homepageFavCount.textContent = count;
        homepageFavCount.style.display = count ? 'inline-flex' : 'none';
      }
      if (homepageCartCount) {
        const count = getGlobalCartCount();
        homepageCartCount.textContent = count;
        homepageCartCount.style.display = count ? 'inline-flex' : 'none';
      }
    }

    homepageFavBtn.addEventListener('click', () => openHomepageSidebar('homepageFavSidebar'));
    homepageCartBtn.addEventListener('click', () => openHomepageSidebar('homepageCartSidebar'));

    document.querySelectorAll('[data-close="homepageFavSidebar"]').forEach(el => {
      el.addEventListener('click', () => closeHomepageSidebar('homepageFavSidebar'));
    });
    document.querySelectorAll('[data-close="homepageCartSidebar"]').forEach(el => {
      el.addEventListener('click', () => closeHomepageSidebar('homepageCartSidebar'));
    });

    const homepageCheckoutBtn = document.getElementById('homepageCheckoutBtn');
    const homepageCheckoutModal = document.getElementById('homepageCheckoutModal');

    homepageCheckoutBtn?.addEventListener('click', () => {
      if (!getGlobalCart().length) {
        showToast('Your cart is empty');
        return;
      }
      openHomepageCheckoutModal();
    });

    function openHomepageCheckoutModal() {
      if (!homepageCheckoutModal) return;
      homepageCheckoutModal.classList.add('is-open');
      homepageCheckoutModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      renderHomepageCheckoutSummary();
      const emailInput = document.getElementById('homepageCheckoutEmail');
      if (emailInput) setTimeout(() => emailInput.focus(), 350);
    }

    function closeHomepageCheckoutModal() {
      if (!homepageCheckoutModal) return;
      homepageCheckoutModal.classList.remove('is-open');
      homepageCheckoutModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      const form = document.getElementById('homepageCheckoutForm');
      if (form) {
        form.hidden = false;
        form.reset();
      }
      const success = document.getElementById('homepageCheckoutSuccess');
      if (success) success.hidden = true;
      const error = document.getElementById('homepageCheckoutError');
      if (error) {
        error.textContent = '';
        error.style.display = 'none';
      }
    }

    function renderHomepageCheckoutSummary() {
      const itemsEl = document.getElementById('homepageCheckoutItems');
      const totalEl = document.getElementById('homepageCheckoutTotal');
      if (!itemsEl || !totalEl) return;
      const globalCart = getGlobalCart();
      itemsEl.innerHTML = globalCart.map(item => `
        <div class="checkout-modal__item">
          <span>${escapeHtml(item.title)}</span>
          <span>× 1</span>
        </div>
      `).join('');
      const total = globalCart.reduce((sum, item) => sum + (item.price || 0), 0);
      totalEl.textContent = total > 0 ? `Total: $${total.toFixed(2)}` : 'Total: Price on request';
    }

    async function submitHomepageCheckout(e) {
      e.preventDefault();
      const email = document.getElementById('homepageCheckoutEmail');
      const phone = document.getElementById('homepageCheckoutPhone');
      const errorEl = document.getElementById('homepageCheckoutError');
      const submitBtn = e.target.querySelector('button[type="submit"]');
      const submitLabel = submitBtn?.querySelector('span');

      let valid = true;
      [email, phone].forEach(field => {
        const wrapper = field.closest('.field');
        if (!field.value.trim() || (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim()))) {
          wrapper?.classList.add('has-error');
          valid = false;
        } else {
          wrapper?.classList.remove('has-error');
        }
      });

      if (!valid) {
        errorEl.textContent = 'Please fill in all required fields correctly.';
        errorEl.style.display = 'block';
        return;
      }
      errorEl.style.display = 'none';

      if (submitBtn) submitBtn.disabled = true;
      if (submitLabel) submitLabel.textContent = 'Sending…';

      const globalCart = getGlobalCart();
      const orderData = {
        customerEmail: email.value.trim(),
        customerPhone: phone.value.trim(),
        items: globalCart.map(item => ({ id: item.id, title: item.title, category: item.category, quantity: 1 })),
        total: globalCart.reduce((sum, item) => sum + (item.price || 0), 0),
        submitted_at: new Date().toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' })
      };

      try {
        await sendEmail('order', orderData);
        closeHomepageCheckoutModal();
        openThankYouPopup();
        clearGlobalCart();
        updateHomepageNavCounts();
        renderHomepageCartSidebar();
      } catch (err) {
        console.error('VOLTIX checkout failed:', err);
        errorEl.textContent = "Something went wrong sending your order. Please try again, or email us directly at " + COMPANY_INFO.email + ". (Error: " + (err.message || 'unknown') + ")";
        errorEl.style.display = 'block';
      } finally {
        if (submitBtn) submitBtn.disabled = false;
        if (submitLabel) submitLabel.textContent = 'Place Order';
      }
    }

    document.getElementById('homepageCheckoutForm')?.addEventListener('submit', submitHomepageCheckout);
    document.getElementById('homepageCheckoutBackdrop')?.addEventListener('click', closeHomepageCheckoutModal);
    document.getElementById('homepageCheckoutClose')?.addEventListener('click', closeHomepageCheckoutModal);
    document.getElementById('homepageCheckoutCancel')?.addEventListener('click', closeHomepageCheckoutModal);
    document.getElementById('homepageCheckoutDone')?.addEventListener('click', closeHomepageCheckoutModal);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && homepageCheckoutModal?.classList.contains('is-open')) closeHomepageCheckoutModal();
    });

    ['homepageCheckoutEmail', 'homepageCheckoutPhone'].forEach(id => {
      const field = document.getElementById(id);
      if (!field) return;
      field.addEventListener('input', () => {
        const wrapper = field.closest('.field');
        if (wrapper && wrapper.classList.contains('has-error')) {
          const isEmpty = !field.value.trim();
          const isBadEmail = field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
          if (!isEmpty && !isBadEmail) wrapper.classList.remove('has-error');
        }
      });
    });

    onGlobalStateChange('cart', updateHomepageNavCounts);
    onGlobalStateChange('favorites', updateHomepageNavCounts);
    updateHomepageNavCounts();

    /* thank-you popup */
    const thankyouPopup = document.getElementById('thankyouPopup');
    const thankyouClose = document.getElementById('thankyouClose');
    const thankyouDone = document.getElementById('thankyouDone');
    const thankyouBackdrop = thankyouPopup?.querySelector('.thankyou-popup__backdrop');

    function openThankYouPopup() {
      thankyouPopup?.classList.add('is-open');
      thankyouPopup?.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeThankYouPopup() {
      thankyouPopup?.classList.remove('is-open');
      thankyouPopup?.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    window.openThankYouPopup = openThankYouPopup;
    window.closeThankYouPopup = closeThankYouPopup;

    thankyouClose?.addEventListener('click', closeThankYouPopup);
    thankyouDone?.addEventListener('click', closeThankYouPopup);
    thankyouBackdrop?.addEventListener('click', closeThankYouPopup);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && thankyouPopup?.classList.contains('is-open')) closeThankYouPopup();
    });
  }

});