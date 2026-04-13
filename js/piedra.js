// ============================================
// BRUJO EGIPCIO — Pagina de detalle
// Lee slug de URL, renderiza toda la info
// ============================================

(function() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');

  if (!slug) {
    window.location.href = 'index.html';
    return;
  }

  const piedra = getPiedraBySlug(slug);
  if (!piedra) {
    window.location.href = 'index.html';
    return;
  }

  // Imagenes: {Nombre}_{Variante}.png
  const n = piedra.nombre;
  const IMGS = {
    frontal:      `img/piedras/${n}_Frontal.png`,
    frontalFondo: `img/piedras/${n}_Frontal_fondo.png`,
    v1:           `img/piedras/${n}_1.png`,
    v2:           `img/piedras/${n}_2.png`,
    v3:           `img/piedras/${n}_3.png`
  };

  // Title y meta
  document.title = `${piedra.nombre} — Brujo Egipcio`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = piedra.descripcion;

  // Breadcrumb
  const breadcrumbName = document.getElementById('breadcrumbName');
  if (breadcrumbName) breadcrumbName.textContent = piedra.nombre;

  // Gallery — principal: Frontal, thumbs: 1, 2, 3, Frontal_fondo
  const gallery = document.getElementById('gallery');
  if (gallery) {
    gallery.innerHTML = `
      <div class="gallery-main">
        <div class="gallery-main-content">
          <img src="${IMGS.frontal}" alt="${piedra.nombre}" id="mainImg">
        </div>
      </div>
      <div class="gallery-thumbs">
        <div class="gallery-thumb active" data-src="${IMGS.frontal}">
          <img src="${IMGS.frontal}" alt="${piedra.nombre} frontal">
        </div>
        <div class="gallery-thumb" data-src="${IMGS.v2}">
          <img src="${IMGS.v2}" alt="${piedra.nombre} variante 2">
        </div>
        <div class="gallery-thumb" data-src="${IMGS.v3}">
          <img src="${IMGS.v3}" alt="${piedra.nombre} variante 3">
        </div>
        <div class="gallery-thumb" data-src="${IMGS.frontalFondo}">
          <img src="${IMGS.frontalFondo}" alt="${piedra.nombre} en entorno">
        </div>
      </div>
      <div class="photo-label">
        <span class="dot"></span>
        Fotos reales del ejemplar
      </div>
    `;

    // Thumb click — cambia imagen principal
    const mainImg = document.getElementById('mainImg');
    gallery.querySelectorAll('.gallery-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        gallery.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        if (mainImg) mainImg.src = thumb.dataset.src;
      });
    });
  }

  // Badge de rareza
  let badgeText = '';
  if (piedra.rareza === 'Exclusiva') badgeText = '&#x13080; Exclusiva';
  else if (piedra.rareza === 'Muy rara') badgeText = '&#x13080; Muy rara';
  else if (piedra.rareza === 'Rara') badgeText = '&#x13080; Rara';
  else badgeText = '&#x13080; Colección';

  // Origen completo
  const origenFull = piedra.mina
    ? `${piedra.origen} — ${piedra.mina}`
    : piedra.origen;

  // Info section
  const info = document.getElementById('infoSection');
  if (info) {
    info.innerHTML = `
      <div class="info-header-card">
        <span class="info-badge">${badgeText}</span>
        <h1>${piedra.nombre}</h1>
        <p class="info-premium">"${piedra.caracteristicas[0]}"</p>
        <div class="info-origin">
          <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          ${origenFull}
        </div>
        <div class="info-divider"></div>
        <p class="info-desc">${piedra.descripcion}</p>
      </div>

      <div class="info-section">
        <div class="info-section-title">Caracteristicas</div>
        <ul class="info-features">
          ${piedra.caracteristicas.map(c => `<li>${c}</li>`).join('')}
        </ul>
      </div>

      <div class="info-section">
        <div class="info-section-title">Propiedades</div>
        <p class="info-properties">${piedra.propiedades}</p>
      </div>

      <div class="info-specs">
        <div class="info-spec">
          <div class="info-spec-label">Tamano</div>
          <div class="info-spec-value">${piedra.tamano}</div>
        </div>
        <div class="info-spec">
          <div class="info-spec-label">Peso</div>
          <div class="info-spec-value">${piedra.peso}</div>
        </div>
        <div class="info-spec">
          <div class="info-spec-label">Rareza</div>
          <div class="info-spec-value" style="color: var(--gold-primary);">${piedra.rareza}</div>
        </div>
      </div>

      ${piedra.stock <= 3 ? '<div class="info-scarcity"><span class="scarcity-dot"></span>' + (piedra.stock === 1 ? 'Última unidad disponible' : 'Solo quedan ' + piedra.stock + ' unidades') + ' <span class="scarcity-timer" id="scarcityTimer"></span></div>' : ''}

      <div class="info-price">${formatPrice(piedra.precio)}</div>
      <p class="info-price-note">Precio incluye certificado de autenticidad — <button class="link-cert" onclick="showCertificado(getPiedraBySlug('${piedra.slug}'))">ver muestra</button></p>

      <div class="info-ctas">
        <a href="https://wa.me/569XXXXXXXX?text=${encodeURIComponent('¡Hola! Me interesa la piedra ' + piedra.nombre + '. ¿Está disponible?')}" class="btn-wa" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Consultar
        </a>
        <button class="btn-cart" onclick="addToCart('${piedra.slug}')">Adquirir Reliquia</button>
        <button class="btn-wish" data-wish-slug="${piedra.slug}" onclick="toggleWishlist('${piedra.slug}')">${typeof isInWishlist === 'function' && isInWishlist(piedra.slug) ? '&#9829;' : '&#9825;'}</button>
      </div>

      <div class="viewing-now">
        <span class="viewing-dot"></span>
        <span class="viewing-text">${Math.floor(Math.random() * 8) + 2} almas observan esta reliquia ahora</span>
      </div>

      <div class="info-guarantee">
        <div class="guarantee-item">
          <span class="guarantee-icon">&#x13080;</span>
          Autenticidad verificada
        </div>
        <div class="guarantee-item">
          <span class="guarantee-icon">&#x1335D;</span>
          Envío protegido
        </div>
        <div class="guarantee-item">
          <span class="guarantee-icon">&#x13079;</span>
          Pieza única
        </div>
      </div>
    `;
  }

  // Educativo
  const educativo = document.getElementById('educativoSection');
  if (educativo && piedra.educativo) {
    const ed = piedra.educativo;
    educativo.innerHTML = `
      <div class="educativo-inner">
        <div class="educativo-overline">&#x13143; Sobre esta piedra</div>
        <h3 class="educativo-title">El origen de la ${piedra.nombre}</h3>
        <div class="educativo-grid">
          <div class="educativo-text">
            ${ed.historia
              ? `<p>${ed.historia}</p>`
              : `<p>${piedra.descripcion}</p><p>${ed.porque_rara}</p>`
            }
          </div>
          <div class="educativo-data">
            <div class="educativo-data-item">
              <div class="educativo-data-label">Composicion</div>
              <div class="educativo-data-value">${ed.composicion}</div>
            </div>
            <div class="educativo-data-item">
              <div class="educativo-data-label">Dureza (Mohs)</div>
              <div class="educativo-data-value">${ed.dureza}</div>
            </div>
            <div class="educativo-data-item">
              <div class="educativo-data-label">Sistema cristalino</div>
              <div class="educativo-data-value">${ed.sistema}</div>
            </div>
            <div class="educativo-data-item">
              <div class="educativo-data-label">Por qué es rara</div>
              <div class="educativo-data-value">${ed.porque_rara}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Relacionadas
  const related = document.getElementById('relatedSection');
  if (related) {
    const rel = getRelacionadas(piedra, 4);
    related.innerHTML = `
      <div class="related-header">
        <h3 class="related-title">También te puede interesar</h3>
        <a href="index.html#catalogo" class="related-link">Ver toda la coleccion &#8594;</a>
      </div>
      <div class="related-grid">
        ${rel.map(r => `
          <a href="piedra.html?slug=${r.slug}" class="card-mini">
            <div class="card-mini-img">
              <img src="img/piedras/${r.nombre}_Frontal.png" alt="${r.nombre}" loading="lazy">
            </div>
            <div class="card-mini-body">
              <div class="card-mini-name">${r.nombre}</div>
              <div class="card-mini-origin">${r.origen}</div>
              <div class="card-mini-price">${formatPrice(r.precio)}</div>
            </div>
          </a>
        `).join('')}
      </div>
    `;
  }

})();
