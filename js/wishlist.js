// ============================================
// BRUJO EGIPCIO — Wishlist / Favoritos
// Guardar favoritos en localStorage, compartir
// ============================================

var WISH_KEY = 'brujoEgipcioWishlist';

function getWishlist() {
  try {
    return JSON.parse(localStorage.getItem(WISH_KEY)) || [];
  } catch (e) { return []; }
}

function saveWishlist(list) {
  localStorage.setItem(WISH_KEY, JSON.stringify(list));
}

function toggleWishlist(slug) {
  var list = getWishlist();
  var idx = list.indexOf(slug);
  if (idx > -1) {
    list.splice(idx, 1);
    if (typeof showToast === 'function') showToast('Removida de favoritos');
  } else {
    list.push(slug);
    if (typeof showToast === 'function') showToast('Agregada a favoritos');
  }
  saveWishlist(list);
  updateWishButtons();
  updateWishBadge();
  return list;
}

function isInWishlist(slug) {
  return getWishlist().indexOf(slug) > -1;
}

function updateWishButtons() {
  document.querySelectorAll('[data-wish-slug]').forEach(function(btn) {
    var slug = btn.dataset.wishSlug;
    if (isInWishlist(slug)) {
      btn.classList.add('wish-active');
      btn.innerHTML = '&#9829;';
    } else {
      btn.classList.remove('wish-active');
      btn.innerHTML = '&#9825;';
    }
  });
}

function updateWishBadge() {
  var badge = document.getElementById('wishBadge');
  if (!badge) return;
  var count = getWishlist().length;
  if (count > 0) {
    badge.textContent = count;
    badge.classList.add('visible');
  } else {
    badge.textContent = '';
    badge.classList.remove('visible');
  }
}

function getWishlistShareUrl() {
  var list = getWishlist();
  return window.location.origin + '/wishlist.html?piedras=' + list.join(',');
}

// Pagina wishlist.html
function renderWishlistPage() {
  var container = document.getElementById('wishlistGrid');
  if (!container) return;

  // Leer de URL si hay parametro compartido
  var params = new URLSearchParams(window.location.search);
  var shared = params.get('piedras');
  var isShared = !!shared;
  var slugs = isShared ? shared.split(',') : getWishlist();

  var sharedBanner = document.getElementById('wishlistShared');
  if (sharedBanner && isShared) sharedBanner.style.display = '';

  if (slugs.length === 0) {
    container.innerHTML =
      '<div class="wish-empty">' +
        '<div class="wish-empty-icon">&#9825;</div>' +
        '<p class="wish-empty-text">No hay piedras en tu lista</p>' +
        '<a href="index.html#catalogo" class="cart-empty-link">Explorar Coleccion</a>' +
      '</div>';
    return;
  }

  var piedras = slugs.map(function(s) { return getPiedraBySlug(s); }).filter(Boolean);
  var total = piedras.reduce(function(sum, p) { return sum + p.precio; }, 0);

  container.innerHTML = piedras.map(function(p) {
    return '<div class="wish-card">' +
      '<a href="piedra.html?slug=' + p.slug + '" class="wish-card-link">' +
        '<div class="wish-card-img">' +
          '<img src="img/piedras/' + p.nombre + '_Frontal.png" alt="' + p.nombre + '" loading="lazy" onerror="this.style.display=\'none\'">' +
        '</div>' +
        '<div class="wish-card-info">' +
          '<div class="wish-card-name">' + p.nombre + '</div>' +
          '<div class="wish-card-origin">' + p.origen + '</div>' +
          '<div class="wish-card-price">' + formatPrice(p.precio) + '</div>' +
        '</div>' +
      '</a>' +
      (isShared ? '' : '<button class="wish-card-remove" onclick="toggleWishlist(\'' + p.slug + '\'); renderWishlistPage();">&times;</button>') +
    '</div>';
  }).join('');

  var totalEl = document.getElementById('wishlistTotal');
  if (totalEl) totalEl.textContent = formatPrice(total);
  var countEl = document.getElementById('wishlistCount');
  if (countEl) countEl.textContent = piedras.length + ' piedra' + (piedras.length > 1 ? 's' : '');
}

// Init
(function() {
  updateWishButtons();
  updateWishBadge();
  renderWishlistPage();

  // Boton compartir
  var shareBtn = document.getElementById('wishlistShare');
  if (shareBtn) {
    shareBtn.addEventListener('click', function() {
      var url = getWishlistShareUrl();
      if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(function() {
          if (typeof showToast === 'function') showToast('¡Link copiado! Compártelo con tus amigos');
        });
      } else {
        prompt('Copia este enlace:', url);
      }
    });
  }
})();
