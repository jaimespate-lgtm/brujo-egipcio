// ============================================
// BRUJO EGIPCIO — Features v2
// Reviews, Kits, Certificado, Lunar header
// (Piedra del dia y pop-up eliminados)
// ============================================

// ====== REVIEWS CAROUSEL ======
(function initReviews() {
  var container = document.getElementById('reviewsTrack');
  if (!container || typeof REVIEWS === 'undefined') return;

  container.innerHTML = REVIEWS.map(function(r) {
    return '<div class="review-card">' +
      '<div class="review-stars">' + '&#9733;'.repeat(r.rating) + '</div>' +
      '<p class="review-text">"' + r.texto + '"</p>' +
      '<div class="review-author">' +
        '<span class="review-name">' + r.nombre + '</span>' +
        '<span class="review-city">' + r.ciudad + '</span>' +
      '</div>' +
    '</div>';
  }).join('');

  var offset = 0;
  var track = container;
  setInterval(function() {
    var cardW = track.querySelector('.review-card');
    if (!cardW) return;
    var step = cardW.offsetWidth + 24;
    offset += step;
    if (offset >= track.scrollWidth - track.parentElement.offsetWidth) offset = 0;
    track.style.transform = 'translateX(-' + offset + 'px)';
  }, 4000);
})();

// ====== KITS "ALQUIMIA SAGRADA" ======
(function initKits() {
  var container = document.getElementById('kitsGrid');
  if (!container || typeof KITS === 'undefined') return;

  container.innerHTML = KITS.map(function(kit) {
    var piedras = kit.piedras.map(function(s) { return getPiedraBySlug(s); }).filter(Boolean);
    var precioOriginal = piedras.reduce(function(sum, p) { return sum + p.precio; }, 0);
    var precioKit = Math.round(precioOriginal * (1 - kit.descuento / 100));

    return '<div class="kit-card carousel-item" data-kit="' + kit.id + '">' +
      '<div class="kit-header">' +
        '<span class="kit-icon">' + kit.icono + '</span>' +
        '<h3 class="kit-name">' + kit.nombre + '</h3>' +
        '<span class="kit-discount">-' + kit.descuento + '%</span>' +
      '</div>' +
      '<p class="kit-desc">' + kit.desc + '</p>' +
      '<div class="kit-piedras">' +
        piedras.map(function(p) {
          return '<div class="kit-piedra">' +
            '<img src="img/piedras/' + p.nombre + '_Transparente.png" alt="' + p.nombre + '" loading="lazy" onerror="this.src=\'img/piedras/' + p.nombre + '_Frontal.png\'">' +
            '<span>' + p.nombre + '</span>' +
          '</div>';
        }).join('') +
      '</div>' +
      '<div class="kit-pricing">' +
        '<span class="kit-price-old">' + formatPrice(precioOriginal) + '</span>' +
        '<span class="kit-price-new">' + formatPrice(precioKit) + '</span>' +
      '</div>' +
      '<button class="kit-add-btn" data-kit-id="' + kit.id + '">Adquirir Trilogía</button>' +
    '</div>';
  }).join('');

  container.addEventListener('click', function(e) {
    var btn = e.target.closest('.kit-add-btn');
    if (!btn) return;
    var kitId = btn.dataset.kitId;
    var kit = KITS.find(function(k) { return k.id === kitId; });
    if (!kit) return;
    kit.piedras.forEach(function(slug) {
      if (typeof addToCart === 'function') addToCart(slug, 1);
    });
    var kitCuponKey = 'KIT' + kit.descuento;
    if (typeof CUPONES !== 'undefined') {
      CUPONES[kitCuponKey] = { tipo: 'porcentaje', valor: kit.descuento };
    }
    if (typeof appliedCupon !== 'undefined' && !appliedCupon) {
      appliedCupon = kitCuponKey;
      if (typeof saveCart === 'function') saveCart();
      if (typeof renderCart === 'function') renderCart();
    }
    if (typeof showToast === 'function') showToast('Kit ' + kit.nombre + ' agregado con ' + kit.descuento + '% de descuento');
  });

  // Init carousel for kits
  var kitsCarousel = document.getElementById('kitsCarousel');
  if (kitsCarousel && typeof initCarousel === 'function') {
    initCarousel(kitsCarousel, { gap: 20 });
  }
})();

// ====== CERTIFICADO DIGITAL ======
function showCertificado(piedra) {
  var overlay = document.createElement('div');
  overlay.className = 'cert-overlay';
  var serial = 'BE-' + piedra.slug.toUpperCase().replace(/-/g, '').slice(0, 6) + '-' + Math.floor(Math.random() * 9000 + 1000);

  overlay.innerHTML =
    '<div class="cert-modal">' +
      '<button class="cert-close" onclick="this.closest(\'.cert-overlay\').remove()">&times;</button>' +
      '<div class="cert-inner">' +
        '<div class="cert-border">' +
          '<div class="cert-header">' +
            '<div class="cert-logo">&#x13080; BRUJO EGIPCIO &#x13080;</div>' +
            '<h2 class="cert-title">Certificado de Autenticidad</h2>' +
          '</div>' +
          '<div class="cert-divider"></div>' +
          '<div class="cert-body">' +
            '<div class="cert-serial">N° ' + serial + '</div>' +
            '<h3 class="cert-piedra-name">' + piedra.nombre + '</h3>' +
            '<div class="cert-data">' +
              '<div class="cert-row"><span>Origen</span><strong>' + piedra.origen + (piedra.mina ? ' — ' + piedra.mina : '') + '</strong></div>' +
              '<div class="cert-row"><span>Peso</span><strong>' + piedra.peso + '</strong></div>' +
              '<div class="cert-row"><span>Tamaño</span><strong>' + piedra.tamano + '</strong></div>' +
              '<div class="cert-row"><span>Rareza</span><strong>' + piedra.rareza + '</strong></div>' +
              (piedra.educativo ? '<div class="cert-row"><span>Composición</span><strong>' + piedra.educativo.composicion + '</strong></div>' : '') +
              (piedra.educativo ? '<div class="cert-row"><span>Dureza (Mohs)</span><strong>' + piedra.educativo.dureza + '</strong></div>' : '') +
            '</div>' +
          '</div>' +
          '<div class="cert-divider"></div>' +
          '<div class="cert-footer">' +
            '<p>Verificado por Brujo Egipcio. Pieza única e irrepetible.</p>' +
            '<div class="cert-seal">&#x13079;</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';

  document.body.appendChild(overlay);
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) overlay.remove();
  });
}

// ====== LUNAR HEADER (solo icono, sin banner) ======
(function initLunarHeader() {
  var headerMoon = document.getElementById('headerMoon');
  if (typeof getFaseLunar !== 'function' || !headerMoon) return;
  var fase = getFaseLunar();
  headerMoon.textContent = fase.icono;
  headerMoon.title = fase.nombre;
})();
