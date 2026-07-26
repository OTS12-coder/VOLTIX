/* ==========================================================================
   VOLTIX — script.js
   Vanilla JS only. Organized by feature, each section self-contained.
   ========================================================================== */

/* ==========================================================================
   COMPANY INFO — edit these values once and every part of the site
   (quick-contact links, footer socials, contact form) updates automatically.
   ========================================================================== */
const COMPANY_INFO = {
  email: 'contact@voltix-eg.com',       // TODO: replace with your real company email
  phone: '+20 100 123 4567',            // TODO: replace with your real phone number
  whatsapp: '201001234567',             // TODO: digits only, country code, no + or spaces
  address: 'Sadat City, Menofia, Egypt',
  linkedin: 'https://www.linkedin.com/company/voltix-eg/',
  x: '',                                 // TODO: e.g. 'https://x.com/voltix_eg'
  instagram: ''                          // TODO: e.g. 'https://instagram.com/voltix_eg'
};

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------ */
  /* 0. Populate contact info + footer socials from COMPANY_INFO        */
  /* ------------------------------------------------------------------ */
  const quickEmail = document.getElementById('quickEmail');
  const quickPhone = document.getElementById('quickPhone');
  const quickWhatsapp = document.getElementById('quickWhatsapp');
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
  if (quickAddress) quickAddress.textContent = COMPANY_INFO.address;

  const footerLinkedin = document.querySelector('.footer__social a[href*="linkedin.com"]');
  if (footerLinkedin) footerLinkedin.href = COMPANY_INFO.linkedin;

  const footerX = document.getElementById('footerX');
  if (footerX) {
    if (COMPANY_INFO.x) { footerX.href = COMPANY_INFO.x; }
    else { footerX.removeAttribute('target'); footerX.setAttribute('aria-disabled', 'true'); footerX.style.opacity = '0.4'; footerX.style.pointerEvents = 'none'; }
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
  const openers = ['openModalNav', 'openModalHero', 'openModalServices', 'openModalContact']
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

  form.addEventListener('submit', (e) => {
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

    form.hidden = true;
    modalSuccess.hidden = false;
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
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    newsletterMsg.textContent = 'Thanks — you\'re on the list.';
    newsletterForm.reset();
  });

  /* ------------------------------------------------------------------ */
  /* 15. Contact form — opens the user's email client with the message  */
  /*     prefilled. No backend required; works on any static host.      */
  /* ------------------------------------------------------------------ */
  const contactForm = document.getElementById('contactForm');
  const contactFormMsg = document.getElementById('contactFormMsg');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
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

      const mailBody =
        `Name: ${name.value.trim()}\nEmail: ${email.value.trim()}\n\n${message.value.trim()}`;
      const mailtoUrl =
        `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(subject.value.trim())}&body=${encodeURIComponent(mailBody)}`;

      window.location.href = mailtoUrl;

      contactFormMsg.textContent = 'Opening your email app to send this to us…';
      contactForm.reset();
    });
  }

});