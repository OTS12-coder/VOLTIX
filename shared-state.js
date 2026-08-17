/* ==========================================================================
   VOLTIX — Shared Global State (Cart + Favorites)
   Persists across all pages using a single localStorage key.
   Load this BEFORE any page-specific cart/favorites logic.
   ========================================================================== */

const GLOBAL_CART_KEY = 'voltix_global_cart';
const GLOBAL_FAV_KEY = 'voltix_global_favorites';

/* ------------------------------------------------------------------ */
/*  Migration: move old page-specific keys into the global keys       */
/* ------------------------------------------------------------------ */
const OLD_KEYS = [
  'voltix_frontend_cart',
  'voltix_frontend_favorites',
  'voltix_analytics_cart',
  'voltix_analytics_favorites'
];

function migrateOldKeys() {
  try {
    OLD_KEYS.forEach(oldKey => {
      const raw = localStorage.getItem(oldKey);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (oldKey.includes('cart')) {
        const global = getGlobalCart();
        parsed.forEach(item => {
          if (!global.find(g => g.id === item.id && g.source === (item.source || oldKey))) {
            global.push(item);
          }
        });
        saveGlobalCart(global);
      } else if (oldKey.includes('favorites')) {
        const global = getGlobalFavorites();
        parsed.forEach(id => {
          if (!global.includes(id)) global.push(id);
        });
        saveGlobalFavorites(global);
      }
      localStorage.removeItem(oldKey);
    });
  } catch (_) {}
}

/* ------------------------------------------------------------------ */
/*  Cart                                                               */
/* ------------------------------------------------------------------ */
function getGlobalCart() {
  try {
    const raw = localStorage.getItem(GLOBAL_CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (_) { return []; }
}

function saveGlobalCart(cart) {
  try { localStorage.setItem(GLOBAL_CART_KEY, JSON.stringify(cart)); } catch (_) {}
}

function addToGlobalCart(item) {
  const cart = getGlobalCart();
  const existing = cart.find(entry => entry.id === item.id && entry.source === item.source);
  if (!existing) {
    cart.push({
      id: item.id,
      title: item.title,
      category: item.category,
      image: item.image || '',
      source: item.source || 'unknown',
      price: item.price || 0
    });
    saveGlobalCart(cart);
    emitStateChange('cart');
    return true;
  }
  return false;
}

function removeFromGlobalCart(id, source) {
  let cart = getGlobalCart();
  cart = cart.filter(entry => !(entry.id === id && entry.source === source));
  saveGlobalCart(cart);
  emitStateChange('cart');
}

function clearGlobalCart() {
  saveGlobalCart([]);
  emitStateChange('cart');
}

function getGlobalCartCount() {
  return getGlobalCart().length;
}

/* ------------------------------------------------------------------ */
/*  Favorites                                                          */
/* ------------------------------------------------------------------ */
function getGlobalFavorites() {
  try {
    const raw = localStorage.getItem(GLOBAL_FAV_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (_) { return []; }
}

function saveGlobalFavorites(favs) {
  try { localStorage.setItem(GLOBAL_FAV_KEY, JSON.stringify(favs)); } catch (_) {}
}

function toggleGlobalFavorite(id) {
  const favs = getGlobalFavorites();
  const idx = favs.indexOf(id);
  if (idx > -1) {
    favs.splice(idx, 1);
  } else {
    favs.push(id);
  }
  saveGlobalFavorites(favs);
  emitStateChange('favorites');
}

function isGlobalFavorite(id) {
  return getGlobalFavorites().includes(id);
}

function getGlobalFavoritesCount() {
  return getGlobalFavorites().length;
}

/* ------------------------------------------------------------------ */
/*  Event system for cross-page UI sync                                */
/* ------------------------------------------------------------------ */
const stateListeners = { cart: [], favorites: [] };

function onGlobalStateChange(type, callback) {
  if (stateListeners[type]) stateListeners[type].push(callback);
}

function emitStateChange(type) {
  if (stateListeners[type]) {
    stateListeners[type].forEach(cb => {
      try { cb(); } catch (_) {}
    });
  }
}

/* ------------------------------------------------------------------ */
/*  Run migration once                                                 */
/* ------------------------------------------------------------------ */
migrateOldKeys();
