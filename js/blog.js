// ============================================
// BRUJO EGIPCIO — Blog dinamico
// Genera articulos desde BLOG_ARTICULOS
// ============================================

(function() {
  // Pagina de listado
  var listGrid = document.getElementById('blogGrid');
  if (listGrid) {
    listGrid.innerHTML = BLOG_ARTICULOS.map(function(a) {
      var piedra = a.piedras[0] ? getPiedraBySlug(a.piedras[0]) : null;
      var img = piedra ? 'img/piedras/' + piedra.nombre + '_Frontal_fondo.png' : '';
      return '<a href="blog.html?art=' + a.slug + '" class="blog-card">' +
        '<div class="blog-card-img">' +
          (img ? '<img src="' + img + '" alt="' + a.titulo + '" loading="lazy" onerror="this.style.display=\'none\'">' : '') +
        '</div>' +
        '<div class="blog-card-body">' +
          '<span class="blog-card-cat">' + a.categoria + '</span>' +
          '<h3 class="blog-card-title">' + a.titulo + '</h3>' +
          '<p class="blog-card-resumen">' + a.resumen + '</p>' +
        '</div>' +
      '</a>';
    }).join('');
    return;
  }

  // Pagina de articulo individual
  var artContainer = document.getElementById('blogArticle');
  if (!artContainer) return;

  var params = new URLSearchParams(window.location.search);
  var artSlug = params.get('art');
  if (!artSlug) { window.location.href = 'blog.html'; return; }

  var articulo = BLOG_ARTICULOS.find(function(a) { return a.slug === artSlug; });
  if (!articulo) { window.location.href = 'blog.html'; return; }

  document.title = articulo.titulo + ' — Brujo Egipcio';

  var piedrasRel = articulo.piedras.map(function(s) { return getPiedraBySlug(s); }).filter(Boolean);

  artContainer.innerHTML =
    '<span class="blog-art-cat">' + articulo.categoria + '</span>' +
    '<h1 class="blog-art-title">' + articulo.titulo + '</h1>' +
    '<p class="blog-art-resumen">' + articulo.resumen + '</p>' +
    '<div class="blog-art-divider"></div>' +
    '<div class="blog-art-content">' + articulo.contenido.split('. ').reduce(function(acc, sentence, i) {
      if (i > 0 && i % 4 === 0) return acc + '.</p><p>' + sentence;
      return acc + '. ' + sentence;
    }).replace(/^/, '<p>') + '</p></div>' +
    '<div class="blog-art-related">' +
      '<h3 class="blog-art-related-title">Piedras mencionadas</h3>' +
      '<div class="blog-art-related-grid">' +
        piedrasRel.map(function(p) {
          return '<a href="piedra.html?slug=' + p.slug + '" class="card-mini">' +
            '<div class="card-mini-img">' +
              '<img src="img/piedras/' + p.nombre + '_Frontal.png" alt="' + p.nombre + '" loading="lazy" onerror="this.style.display=\'none\'">' +
            '</div>' +
            '<div class="card-mini-body">' +
              '<div class="card-mini-name">' + p.nombre + '</div>' +
              '<div class="card-mini-origin">' + p.origen + '</div>' +
              '<div class="card-mini-price">' + formatPrice(p.precio) + '</div>' +
            '</div>' +
          '</a>';
        }).join('') +
      '</div>' +
    '</div>';
})();
