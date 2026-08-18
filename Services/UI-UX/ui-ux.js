/* ==========================================================================
   VOLTIX — UI/UX Service Page Logic
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------ */
  /* State                                                              */
  /* ------------------------------------------------------------------ */
  let activeCategory = 'all';
  let searchQuery = '';
  let categoriesExpanded = false;
  let favorites = new Set();
  let cart = [];

  const PAGE_SOURCE = 'ui-ux';

  /* ------------------------------------------------------------------ */
  /* Favorites — global                                                 */
  /* ------------------------------------------------------------------ */
  function loadFavorites() {
    favorites = new Set(getGlobalFavorites());
  }

  function saveFavorites() {
    saveGlobalFavorites([...favorites]);
  }

  function isFavorite(id) {
    return isGlobalFavorite(id);
  }

  function toggleFavorite(id) {
    toggleGlobalFavorite(id);
    favorites = new Set(getGlobalFavorites());
    updateFavButton(id);
    renderFavSidebar();
    updateNavCounts();
  }

  function updateFavButton(id) {
    const btn = document.querySelector(`.product-card__action--fav[data-id="${id}"]`);
    if (!btn) return;
    const icon = btn.querySelector('i');
    if (isFavorite(id)) {
      btn.classList.add('is-active');
      icon.className = 'fa-solid fa-heart';
      btn.setAttribute('aria-label', 'Remove from favourites');
    } else {
      btn.classList.remove('is-active');
      icon.className = 'fa-regular fa-heart';
      btn.setAttribute('aria-label', 'Add to favourites');
    }
  }

  /* ------------------------------------------------------------------ */
  /* Cart — global                                                      */
  /* ------------------------------------------------------------------ */
  function loadCart() {
    cart = getGlobalCart().map(entry => ({
      id: entry.id,
      title: entry.title,
      category: entry.category,
      image: entry.image || '',
      price: entry.price || 0,
      source: entry.source || 'unknown'
    }));
  }

  function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);
    if (!existing) {
      cart.push({
        id: product.id,
        title: product.title,
        category: product.category,
        image: product.image || '',
        price: product.price || 0,
        source: PAGE_SOURCE
      });
      addToGlobalCart({ ...product, source: PAGE_SOURCE });
      showToast(`Added "${product.title}" to cart`);
    } else {
      showToast(`"${product.title}" is already in cart`);
    }
    renderCartSidebar();
    updateNavCounts();
  }

  function removeFromCart(id) {
    const item = cart.find(i => i.id === id);
    if (item) {
      removeFromGlobalCart(id, item.source);
    }
    cart = cart.filter(item => item.id !== id);
    renderCartSidebar();
    updateNavCounts();
    renderProducts();
  }

  function updateNavCounts() {
    const favCountEl = document.getElementById('favCount');
    const cartCountEl = document.getElementById('cartCount');
    if (favCountEl) {
      const count = getGlobalFavoritesCount();
      favCountEl.textContent = count;
      favCountEl.style.display = count ? 'inline-flex' : 'none';
    }
    if (cartCountEl) {
      const count = getGlobalCartCount();
      cartCountEl.textContent = count;
      cartCountEl.style.display = count ? 'inline-flex' : 'none';
    }
  }

  /* ------------------------------------------------------------------ */
  /* Toast                                                              */
  /* ------------------------------------------------------------------ */
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

  /* ------------------------------------------------------------------ */
  /* Side panels                                                        */
  /* ------------------------------------------------------------------ */
  function openSidebar(id) {
    const panel = document.getElementById(id);
    if (!panel) return;
    panel.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar(id) {
    const panel = document.getElementById(id);
    if (!panel) return;
    panel.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function initSidePanels() {
    document.getElementById('openFavSidebar')?.addEventListener('click', () => { renderFavSidebar(); openSidebar('favSidebar'); });
    document.getElementById('openCartSidebar')?.addEventListener('click', () => { renderCartSidebar(); openSidebar('cartSidebar'); });
    document.getElementById('checkoutBtn')?.addEventListener('click', () => {
      if (!cart.length) { showToast('Your cart is empty'); return; }
      openCheckoutModal();
    });
    document.querySelectorAll('[data-close]').forEach(el => {
      el.addEventListener('click', () => closeSidebar(el.getAttribute('data-close')));
    });
  }

  function renderFavSidebar() {
    const list = document.getElementById('favList');
    if (!list) return;
    const items = UI_UX_PRODUCTS.filter(p => favorites.has(p.id));
    if (!items.length) {
      list.innerHTML = `<div class="side-panel__empty"><i class="fa-regular fa-heart" aria-hidden="true"></i><p>No favourites yet. Tap the heart on any product to save it here.</p></div>`;
      return;
    }
    list.innerHTML = items.map(product => {
      const imageHtml = product.image ? `<img src="${product.image}" alt="${escapeHtml(product.title)}">` : `<i class="fa-regular fa-image" aria-hidden="true"></i>`;
      return `<div class="side-panel__item">
        <div class="side-panel__item-img">${imageHtml}</div>
        <div class="side-panel__item-body">
          <div class="side-panel__item-title">${escapeHtml(product.title)}</div>
          <div class="side-panel__item-meta">${escapeHtml(getCategoryName(product.category))}</div>
        </div>
        <button class="side-panel__item-action" data-remove-fav="${product.id}" aria-label="Remove from favourites" title="Remove from favourites"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>
        <button class="side-panel__item-action side-panel__item-action--cart" data-fav-cart="${product.id}" aria-label="Add to cart" title="Add to cart"><i class="fa-solid fa-cart-shopping" aria-hidden="true"></i></button>
      </div>`;
    }).join('');
    list.querySelectorAll('[data-remove-fav]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-remove-fav');
        toggleFavorite(id);
      });
    });
    list.querySelectorAll('[data-fav-cart]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-fav-cart');
        const product = UI_UX_PRODUCTS.find(p => p.id === id);
        if (product) addToCart(product);
      });
    });
  }

  function renderCartSidebar() {
    const list = document.getElementById('cartList');
    if (!list) return;
    if (!cart.length) {
      list.innerHTML = `<div class="side-panel__empty"><i class="fa-solid fa-cart-shopping" aria-hidden="true"></i><p>Your cart is empty. Browse products and tap the cart icon to add items.</p></div>`;
      return;
    }
    list.innerHTML = cart.map(item => {
      const imageHtml = item.image ? `<img src="${item.image}" alt="${escapeHtml(item.title)}">` : `<i class="fa-regular fa-image" aria-hidden="true"></i>`;
      return `<div class="side-panel__item">
        <div class="side-panel__item-img">${imageHtml}</div>
        <div class="side-panel__item-body">
          <div class="side-panel__item-title">${escapeHtml(item.title)}</div>
          <div class="side-panel__item-meta">${escapeHtml(getCategoryName(item.category))}</div>
        </div>
        <button class="side-panel__item-action" data-remove-cart="${item.id}" aria-label="Remove from cart" title="Remove from cart"><i class="fa-solid fa-trash" aria-hidden="true"></i></button>
      </div>`;
    }).join('');
    list.querySelectorAll('[data-remove-cart]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-remove-cart');
        removeFromCart(id);
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* Checkout Modal                                                     */
  /* ------------------------------------------------------------------ */
  function openCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    if (!modal) return;
    document.getElementById('checkoutForm').style.display = '';
    const successElOpen = document.getElementById('checkoutSuccess');
    successElOpen.hidden = true;
    successElOpen.classList.remove('is-visible');
    successElOpen.style.display = 'none';
    document.getElementById('checkoutEyebrow').style.display = '';
    document.getElementById('checkoutTitle').style.display = '';
    document.getElementById('checkoutSub').style.display = '';
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    renderCheckoutSummary();
    const emailInput = document.getElementById('checkoutEmail');
    if (emailInput) setTimeout(() => emailInput.focus(), 350);
  }

  function closeCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    document.getElementById('checkoutForm').style.display = '';
    const successElReset = document.getElementById('checkoutSuccess');
    successElReset.hidden = true;
    successElReset.classList.remove('is-visible');
    successElReset.style.display = 'none';
    document.getElementById('checkoutEyebrow').style.display = '';
    document.getElementById('checkoutTitle').style.display = '';
    document.getElementById('checkoutSub').style.display = '';
    document.getElementById('checkoutForm').reset();
    document.getElementById('checkoutError').textContent = '';
    document.getElementById('checkoutError').style.display = 'none';
  }

  function renderCheckoutSummary() {
    const itemsEl = document.getElementById('checkoutItems');
    const totalEl = document.getElementById('checkoutTotal');
    if (!itemsEl || !totalEl) return;
    itemsEl.innerHTML = cart.map(item => `
      <div class="checkout-modal__item">
        <span>${escapeHtml(item.title)}</span>
        <span>× 1</span>
      </div>
    `).join('');
    const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);
    totalEl.textContent = total > 0 ? `Total: $${total.toFixed(2)}` : 'Total: Price on request';
  }

  async function submitCheckout(e) {
    e.preventDefault();
    const email = document.getElementById('checkoutEmail');
    const phone = document.getElementById('checkoutPhone');
    const errorEl = document.getElementById('checkoutError');
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

    const orderData = {
      customerEmail: email.value.trim(),
      customerPhone: phone.value.trim(),
      items: cart.map(item => ({ id: item.id, title: item.title, category: item.category, quantity: 1 })),
      total: cart.reduce((sum, item) => sum + (item.price || 0), 0),
      submitted_at: new Date().toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' })
    };

    try {
      await sendEmail('order', orderData);
      document.getElementById('checkoutForm').style.display = 'none';
      const successEl = document.getElementById('checkoutSuccess');
      successEl.hidden = false;
      successEl.classList.add('is-visible');
      successEl.style.display = 'block';
      document.getElementById('checkoutEyebrow').style.display = 'none';
      document.getElementById('checkoutTitle').style.display = 'none';
      document.getElementById('checkoutSub').style.display = 'none';
      cart = [];
      clearGlobalCart();
      renderCartSidebar();
      updateNavCounts();
      renderProducts();
    } catch (err) {
      console.error('VOLTIX checkout failed:', err);
      errorEl.textContent = 'Something went wrong sending your order. Please email us directly at ' + COMPANY_INFO.email + '. (Error: ' + (err.message || 'unknown') + ')';
      errorEl.style.display = 'block';
    } finally {
      if (submitBtn) submitBtn.disabled = false;
      if (submitLabel) submitLabel.textContent = 'Place Order';
    }
  }

  /* ------------------------------------------------------------------ */
  /* Product Detail Modal                                               */
  /* ------------------------------------------------------------------ */
  let currentProduct = null;
  let currentMediaIndex = 0;
  let productMediaList = [];

  function openProductModal(product) {
    currentProduct = product;
    currentMediaIndex = 0;
    productMediaList = [];

    const images = product.images && product.images.length ? product.images : (product.image ? [product.image] : []);
    const video = product.video || null;
    productMediaList = [...images];
    if (video) productMediaList.push({ type: 'video', src: video });

    document.getElementById('productModalCategory').textContent = getCategoryName(product.category);
    document.getElementById('productModalTitle').textContent = product.title;
    document.getElementById('productModalDesc').textContent = product.description;

    const tagsEl = document.getElementById('productModalTags');
    if (product.tags && product.tags.length) {
      tagsEl.innerHTML = product.tags.map(t => `<span class="product-modal__tag">${escapeHtml(t)}</span>`).join('');
      tagsEl.style.display = 'flex';
    } else {
      tagsEl.innerHTML = '';
      tagsEl.style.display = 'none';
    }

    const priceEl = document.getElementById('productModalPrice');
    if (product.price && product.price > 0) {
      priceEl.textContent = `$${product.price.toFixed(2)}`;
      priceEl.style.display = 'block';
    } else {
      priceEl.textContent = 'Price on request';
      priceEl.style.display = 'block';
    }

    updateProductModalMedia();
    updateProductModalFavButton();

    const modal = document.getElementById('productModal');
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    currentProduct = null;
    productMediaList = [];
    const mediaEl = document.getElementById('productModalMedia');
    if (mediaEl) mediaEl.innerHTML = '';
  }

  function updateProductModalMedia() {
    const mediaEl = document.getElementById('productModalMedia');
    const counterEl = document.getElementById('productModalCounter');
    const prevBtn = document.getElementById('productModalPrev');
    const nextBtn = document.getElementById('productModalNext');
    const thumbsEl = document.getElementById('productModalThumbs');

    if (!productMediaList.length) {
      mediaEl.innerHTML = `<div class="product-modal__placeholder"><i class="fa-regular fa-image" aria-hidden="true"></i><span>No media available</span></div>`;
      if (counterEl) counterEl.textContent = '';
      if (prevBtn) prevBtn.classList.add('is-disabled');
      if (nextBtn) nextBtn.classList.add('is-disabled');
      if (thumbsEl) thumbsEl.innerHTML = '';
      return;
    }

    const current = productMediaList[currentMediaIndex];
    if (current.type === 'video') {
      mediaEl.innerHTML = `<video src="${escapeHtml(current.src)}" controls playsinline style="max-width:100%;max-height:100%;border-radius:var(--radius-sm);background:#000;"></video>`;
    } else {
      mediaEl.innerHTML = `<img src="${escapeHtml(current)}" alt="${escapeHtml(currentProduct.title)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:var(--radius-sm);">`;
    }

    if (counterEl) counterEl.textContent = `${currentMediaIndex + 1} / ${productMediaList.length}`;
    if (prevBtn) prevBtn.classList.toggle('is-disabled', currentMediaIndex === 0);
    if (nextBtn) nextBtn.classList.toggle('is-disabled', currentMediaIndex === productMediaList.length - 1);

    if (thumbsEl) {
      thumbsEl.innerHTML = productMediaList.map((m, i) => {
        if (m.type === 'video') {
          return `<button class="product-modal__thumb product-modal__thumb--video ${i === currentMediaIndex ? 'is-active' : ''}" data-thumb="${i}" type="button"><i class="fa-solid fa-play" aria-hidden="true"></i></button>`;
        }
        return `<button class="product-modal__thumb ${i === currentMediaIndex ? 'is-active' : ''}" data-thumb="${i}" type="button"><img src="${escapeHtml(m)}" alt=""></button>`;
      }).join('');
      thumbsEl.querySelectorAll('[data-thumb]').forEach(btn => {
        btn.addEventListener('click', () => {
          currentMediaIndex = parseInt(btn.getAttribute('data-thumb'), 10);
          updateProductModalMedia();
        });
      });
    }
  }

  function updateProductModalFavButton() {
    const btn = document.getElementById('productModalFav');
    if (!btn || !currentProduct) return;
    const icon = btn.querySelector('i');
    const span = btn.querySelector('span');
    if (isFavorite(currentProduct.id)) {
      btn.classList.add('is-active');
      icon.className = 'fa-solid fa-heart';
      if (span) span.textContent = 'Favourited';
    } else {
      btn.classList.remove('is-active');
      icon.className = 'fa-regular fa-heart';
      if (span) span.textContent = 'Favourite';
    }
  }

  function navigateProductMedia(direction) {
    const newIndex = currentMediaIndex + direction;
    if (newIndex < 0 || newIndex >= productMediaList.length) return;
    currentMediaIndex = newIndex;
    updateProductModalMedia();
  }

  /* ------------------------------------------------------------------ */
  /* Filtering                                                          */
  /* ------------------------------------------------------------------ */
  function getFilteredProducts() {
    return UI_UX_PRODUCTS.filter(product => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch = !q ||
        product.title.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        (product.tags && product.tags.some(tag => tag.toLowerCase().includes(q)));
      return matchesCategory && matchesSearch;
    });
  }

  function getCategoryName(id) {
    const cat = UI_UX_CATEGORIES.find(c => c.id === id);
    return cat ? cat.name : id;
  }

  /* ------------------------------------------------------------------ */
  /* Render                                                             */
  /* ------------------------------------------------------------------ */
  function renderProducts() {
    const grid = document.getElementById('catalogGrid');
    if (!grid) return;

    const products = getFilteredProducts();

    if (products.length === 0) {
      grid.innerHTML = `
        <div class="catalog__empty">
          <i class="fa-solid fa-box-open" aria-hidden="true"></i>
          <h3>Nothing here yet</h3>
          <p>More UI/UX products are coming soon. Check back later or try a different category.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = products.map(product => {
      const favClass = isFavorite(product.id) ? 'is-active' : '';
      const favIcon = isFavorite(product.id) ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
      const favLabel = isFavorite(product.id) ? 'Remove from favourites' : 'Add to favourites';
      const tagsHtml = product.tags && product.tags.length > 0
        ? `<div class="product-card__tags">${product.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>`
        : '';
      const imageHtml = product.image
        ? `<img src="${product.image}" alt="${product.title}" loading="lazy">`
        : `<div class="product-card__placeholder"><i class="fa-regular fa-image" aria-hidden="true"></i><span>Preview coming soon</span></div>`;

      return `
        <article class="product-card reveal" data-reveal data-product-id="${product.id}">
          <div class="product-card__image-wrap">
            ${imageHtml}
          </div>
          <div class="product-card__body">
            <span class="product-card__category">${getCategoryName(product.category)}</span>
            <h3 class="product-card__title">${escapeHtml(product.title)}</h3>
            <p class="product-card__desc">${escapeHtml(product.description)}</p>
            ${tagsHtml}
            <div class="product-card__actions">
              <button class="product-card__action product-card__action--fav ${favClass}"
                      data-id="${product.id}"
                      aria-label="${favLabel}"
                      title="${favLabel}"
                      type="button">
                <i class="${favIcon}" aria-hidden="true"></i>
              </button>
               <button class="product-card__action product-card__action--order"
                       data-id="${product.id}"
                       aria-label="Add to cart"
                       title="Add to cart"
                       type="button">
                 <i class="fa-solid fa-cart-shopping" aria-hidden="true"></i>
               </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    bindCardEvents();

    requestAnimationFrame(() => {
      document.querySelectorAll('.product-card.reveal:not(.is-visible)').forEach(el => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
        observer.observe(el);
      });
    });
  }

  function bindCardEvents() {
    document.querySelectorAll('.product-card__action--fav').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        const product = UI_UX_PRODUCTS.find(p => p.id === id);
        if (product) toggleFavorite(product.id);
      });
    });

    document.querySelectorAll('.product-card__action--order').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        const product = UI_UX_PRODUCTS.find(p => p.id === id);
        if (product) addToCart(product);
      });
    });

    document.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.product-card__action')) return;
        const id = card.getAttribute('data-product-id');
        const product = UI_UX_PRODUCTS.find(p => p.id === id);
        if (product) openProductModal(product);
      });
    });
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ------------------------------------------------------------------ */
  /* Category navigation                                                */
  /* ------------------------------------------------------------------ */
  function initCategories() {
    const nav = document.getElementById('categoryNav');
    if (!nav) return;

    const total = UI_UX_CATEGORIES.length;
    const maxVisible = 4;

    UI_UX_CATEGORIES.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = 'category-nav__btn';
      btn.textContent = cat.name;
      btn.setAttribute('data-category', cat.id);
      btn.type = 'button';
      if (cat.id === activeCategory) btn.classList.add('is-active');
      btn.addEventListener('click', () => setCategory(cat.id));
      nav.appendChild(btn);
    });

    if (total > maxVisible) {
      const moreBtn = document.createElement('button');
      moreBtn.className = 'category-nav__more';
      moreBtn.type = 'button';
      moreBtn.id = 'categoryMore';
      updateMoreButton(moreBtn, total, maxVisible);
      moreBtn.addEventListener('click', toggleCategories);
      nav.appendChild(moreBtn);
      nav.classList.add('category-nav--collapsed');
    }
  }

  function updateMoreButton(btn, total, maxVisible) {
    const hiddenCount = categoriesExpanded ? 0 : total - maxVisible;
    btn.textContent = categoriesExpanded ? 'Show Less' : `+ ${hiddenCount} More`;
  }

  function toggleCategories() {
    categoriesExpanded = !categoriesExpanded;
    const nav = document.getElementById('categoryNav');
    const moreBtn = document.getElementById('categoryMore');
    if (!nav || !moreBtn) return;

    nav.classList.toggle('category-nav--collapsed', !categoriesExpanded);
    nav.classList.toggle('category-nav--expanded', categoriesExpanded);
    updateMoreButton(moreBtn, UI_UX_CATEGORIES.length, 4);
  }

  function setCategory(id) {
    activeCategory = id;
    document.querySelectorAll('.category-nav__btn').forEach(btn => {
      btn.classList.toggle('is-active', btn.getAttribute('data-category') === id);
    });
    renderProducts();
  }

  /* ------------------------------------------------------------------ */
  /* Search                                                             */
  /* ------------------------------------------------------------------ */
  function initSearch() {
    const input = document.getElementById('catalogSearch');
    if (!input) return;
    input.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderProducts();
    });
  }

  /* ------------------------------------------------------------------ */
  /* Navbar hide on scroll down                                          */
  /* ------------------------------------------------------------------ */
  function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    let lastScroll = window.scrollY;

    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      if (currentScroll <= 0) {
        navbar.classList.remove('is-hidden');
        lastScroll = currentScroll;
        return;
      }
      if (currentScroll > lastScroll && currentScroll > 80) {
        navbar.classList.add('is-hidden');
      } else {
        navbar.classList.remove('is-hidden');
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }

  /* ------------------------------------------------------------------ */
  /* Toolbar hide on scroll down                                          */
  /* ------------------------------------------------------------------ */
  function initToolbarScroll() {
    const toolbar = document.querySelector('.catalog-toolbar');
    if (!toolbar) return;
    let lastScroll = window.scrollY;
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      if (currentScroll <= 0) {
        toolbar.classList.remove('is-hidden');
        lastScroll = currentScroll;
        return;
      }
      if (currentScroll > lastScroll && currentScroll > 120) {
        toolbar.classList.add('is-hidden');
      } else {
        toolbar.classList.remove('is-hidden');
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }

  /* ------------------------------------------------------------------ */
  /* Init                                                               */
  /* ------------------------------------------------------------------ */
  function init() {
    loadFavorites();
    loadCart();
    initCategories();
    initSearch();
    initNavbarScroll();
    initToolbarScroll();
    initSidePanels();
    initCheckoutModal();
    initProductModal();
    updateNavCounts();
    renderFavSidebar();
    renderCartSidebar();
    renderProducts();
  }

  function initCheckoutModal() {
    const checkoutModal = document.getElementById('checkoutModal');
    const checkoutBackdrop = document.getElementById('checkoutBackdrop');
    const checkoutClose = document.getElementById('checkoutClose');
    const checkoutCancel = document.getElementById('checkoutCancel');
    const checkoutDone = document.getElementById('checkoutDone');
    const checkoutForm = document.getElementById('checkoutForm');

    checkoutBackdrop?.addEventListener('click', closeCheckoutModal);
    checkoutClose?.addEventListener('click', closeCheckoutModal);
    checkoutCancel?.addEventListener('click', closeCheckoutModal);
    checkoutDone?.addEventListener('click', closeCheckoutModal);
    checkoutForm?.addEventListener('submit', submitCheckout);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && checkoutModal?.classList.contains('is-open')) closeCheckoutModal();
    });

    ['checkoutEmail', 'checkoutPhone'].forEach(id => {
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
  }

  function initProductModal() {
    const productModal = document.getElementById('productModal');
    const productModalBackdrop = document.getElementById('productModalBackdrop');
    const productModalClose = document.getElementById('productModalClose');
    const productModalPrev = document.getElementById('productModalPrev');
    const productModalNext = document.getElementById('productModalNext');
    const productModalFav = document.getElementById('productModalFav');
    const productModalCart = document.getElementById('productModalCart');

    productModalBackdrop?.addEventListener('click', closeProductModal);
    productModalClose?.addEventListener('click', closeProductModal);
    productModalPrev?.addEventListener('click', () => navigateProductMedia(-1));
    productModalNext?.addEventListener('click', () => navigateProductMedia(1));
    productModalFav?.addEventListener('click', () => {
      if (!currentProduct) return;
      toggleFavorite(currentProduct.id);
      updateProductModalFavButton();
    });
    productModalCart?.addEventListener('click', () => {
      if (!currentProduct) return;
      addToCart(currentProduct);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && productModal?.classList.contains('is-open')) closeProductModal();
      if (e.key === 'ArrowLeft' && productModal?.classList.contains('is-open')) navigateProductMedia(-1);
      if (e.key === 'ArrowRight' && productModal?.classList.contains('is-open')) navigateProductMedia(1);
    });
  }

  /* ------------------------------------------------------------------ */
  /* Newsletter form (footer)                                            */
  /* ------------------------------------------------------------------ */
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterMsg = document.getElementById('newsletterMsg');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input[type="email"]');
      const email = input?.value.trim();
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        if (newsletterMsg) newsletterMsg.textContent = 'Please enter a valid email address.';
        return;
      }
      try {
        await sendEmail('newsletter', { email, submitted_at: new Date().toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' }) });
        if (newsletterMsg) newsletterMsg.textContent = 'Thanks — you\'re on the list.';
        newsletterForm.reset();
      } catch (err) {
        console.error('VOLTIX newsletter submission failed:', err);
        if (newsletterMsg) newsletterMsg.textContent = 'Something went wrong. Please try again, or email us directly at ' + (COMPANY_INFO?.email || 'voltixeg6@gmail.com') + '.';
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();