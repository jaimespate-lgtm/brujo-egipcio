// ============================================
// BRUJO EGIPCIO — Catalogo v4
// Grid en desktop, scroll horizontal en mobile
// Rarezas del Mundo | Energias Cromaticas | Alquimia
// ============================================

// Imagen: usa getPiedraImgSrc(nombre) de data.js

// Estado global del catalogo
let currentFilter = 'todas';
let currentSub = null;

function filterByCollection(type) {
  const el = document.getElementById('catalogo');
  if (el) el.scrollIntoView({ behavior: 'smooth' });

  const map = { rarezas: 'rarezas', cromaticas: 'cromaticas', alquimia: 'alquimia' };
  if (map[type]) {
    currentFilter = map[type];
    currentSub = null;
    renderFiltros();
    renderCatalogo();
  }
}

// ====== FILTROS ======
const FILTROS_MAIN = [
  { key: 'todas', label: 'Todas' },
  { key: 'rarezas', label: 'Rarezas del Mundo' },
  { key: 'cromaticas', label: 'Energias Cromaticas' },
  { key: 'alquimia', label: 'Alquimia Sagrada' }
];

const COLORES = [
  { name: 'Azul', hex: '#4A90D9' },
  { name: 'Violeta', hex: '#8B5EC0' },
  { name: 'Verde', hex: '#3DAA6D' },
  { name: 'Rosa', hex: '#D4708F' },
  { name: 'Dorado', hex: '#C5A028' },
  { name: 'Negro', hex: '#444' },
  { name: 'Multicolor', hex: 'linear-gradient(90deg,#D4708F,#4A90D9,#3DAA6D)' }
];

function renderFiltros() {
  const filtrosEl = document.getElementById('filtros');
  if (!filtrosEl) return;

  let html = '<div class="filtros-main">';
  FILTROS_MAIN.forEach(f => {
    html += `<button class="filtro-btn${currentFilter === f.key ? ' active' : ''}" data-filter="${f.key}">${f.label}</button>`;
  });
  html += '</div>';

  // Sub-filtros
  if (currentFilter === 'rarezas') {
    const continentes = [...new Set(PIEDRAS.filter(p => p.disponible).map(p => getContinente(p.origen)))].filter(c => c !== 'Otro').sort();
    html += '<div class="sub-filtros">';
    html += `<button class="sub-filtro-btn${!currentSub ? ' active' : ''}" data-sub="todas">Todos</button>`;
    continentes.forEach(c => {
      html += `<button class="sub-filtro-btn${currentSub === c ? ' active' : ''}" data-sub="${c}">${CONTINENTE_ICONS[c] || ''} ${c}</button>`;
    });
    html += '</div>';
  } else if (currentFilter === 'cromaticas') {
    html += '<div class="sub-filtros">';
    html += `<button class="sub-filtro-btn${!currentSub ? ' active' : ''}" data-sub="todas">Todos</button>`;
    COLORES.forEach(c => {
      html += `<button class="sub-filtro-btn${currentSub === c.name ? ' active' : ''}" data-sub="${c.name}"><span class="color-dot" style="background:${c.hex}"></span>${c.name}</button>`;
    });
    html += '</div>';
  }

  filtrosEl.innerHTML = html;

  // Event listeners
  filtrosEl.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentFilter = btn.dataset.filter;
      currentSub = null;
      renderFiltros();
      renderCatalogo();
    });
  });

  filtrosEl.querySelectorAll('.sub-filtro-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentSub = btn.dataset.sub === 'todas' ? null : btn.dataset.sub;
      filtrosEl.querySelectorAll('.sub-filtro-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCatalogo();
    });
  });
}

// ====== RENDER GRID ======
function getFilteredPiedras() {
  let piedras = PIEDRAS.filter(p => p.disponible);

  if (currentFilter === 'rarezas') {
    if (currentSub) {
      piedras = piedras.filter(p => getContinente(p.origen) === currentSub);
    }
  } else if (currentFilter === 'cromaticas') {
    if (currentSub) {
      piedras = piedras.filter(p => p.color === currentSub);
    }
  } else if (currentFilter === 'alquimia') {
    // Mostrar solo piedras que pertenecen a kits
    const kitSlugs = new Set();
    if (typeof KITS !== 'undefined') {
      KITS.forEach(k => k.piedras.forEach(s => kitSlugs.add(s)));
    }
    piedras = piedras.filter(p => kitSlugs.has(p.slug));
  }

  return piedras;
}

function renderPiedraCard(p) {
  let badge = '';
  if (p.rareza === 'Exclusiva') badge = '<span class="card-badge badge-exclusiva">Exclusiva</span>';
  else if (p.rareza === 'Muy rara') badge = '<span class="card-badge badge-muy-rara">Muy rara</span>';
  else if (p.rareza === 'Rara') badge = '<span class="card-badge badge-rara">Rara</span>';

  let stockBadge = '';
  if (p.stock === 1) stockBadge = '<span class="card-stock-badge stock-last">Ultima pieza</span>';
  else if (p.stock <= 3) stockBadge = `<span class="card-stock-badge stock-low">Quedan ${p.stock}</span>`;

  return `
    <a href="piedra.html?slug=${p.slug}" class="card">
      <div class="card-img-wrap">
        ${stockBadge}
        <div class="card-img-clean">
          <img src="${getPiedraImgSrc(p.nombre)}" alt="${p.nombre}" loading="lazy">
        </div>
        <div class="card-img-real">
          <img src="${getPiedraImgSrc(p.nombre)}" alt="${p.nombre}" loading="lazy">
        </div>
        <div class="card-quickview"><span>Ver Detalle</span></div>
      </div>
      <div class="card-body">
        <div class="card-name">${p.nombre}</div>
        <div class="card-origin">${p.origen}</div>
        <div class="card-desc">${p.descripcion}</div>
        <div class="card-footer">
          <div class="card-price">${formatPrice(p.precio)}</div>
          ${badge}
        </div>
      </div>
    </a>
  `;
}

function renderCatalogo() {
  const grid = document.getElementById('catalogoGrid');
  if (!grid) return;

  const piedras = getFilteredPiedras();

  if (piedras.length === 0) {
    grid.innerHTML = '<div class="catalogo-empty">No se encontraron piedras en esta categoria</div>';
    return;
  }

  grid.innerHTML = piedras.map(renderPiedraCard).join('');
}

// ====== INIT ======
(function() {

  // Render filtros y catalogo
  renderFiltros();
  renderCatalogo();

  // ====== COLECCION ZODIACAL ======
  const zodiacEl = document.getElementById('zodiacCollection');
  if (zodiacEl) {
    const colActual = typeof getColeccionActual === 'function' ? getColeccionActual() : null;
    const proxima = typeof getProximaColeccion === 'function' ? getProximaColeccion() : null;
    const col = colActual || proxima;

    if (col) {
      const esProxima = !colActual;
      const fechaTarget = esProxima ? new Date(col.fechaInicio) : new Date(col.fechaFin);

      zodiacEl.innerHTML = `
        <div class="section-header">
          <span class="section-overline">${col.signo} Coleccion del Mes</span>
          <h2 class="section-title">${col.nombre}</h2>
          <div class="section-divider"></div>
          <p class="section-sub">${col.descripcion}</p>
        </div>
        <div class="zodiac-countdown" id="zodiacCountdown">
          <span class="zodiac-countdown-label">${esProxima ? 'Se lanza en' : 'Disponible por'}:</span>
          <span class="zodiac-countdown-timer" id="zodiacTimer"></span>
        </div>
        <div class="zodiac-coming-soon">
          <div class="zodiac-signo-big">${col.signo}</div>
          <p>${esProxima ? 'Lanzamiento ' + formatFecha(col.fechaInicio) : '48 piezas unicas por descubrir'}</p>
          <span class="zodiac-elemento">${col.elemento}</span>
        </div>
      `;

      function updateCountdown() {
        const diff = fechaTarget - new Date();
        if (diff <= 0) { document.getElementById('zodiacTimer').textContent = 'Disponible ahora'; return; }
        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff % 86400000) / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        document.getElementById('zodiacTimer').textContent = d + 'd ' + h + 'h ' + m + 'm';
      }
      updateCountdown();
      setInterval(updateCountdown, 60000);
    }
  }

  // ====== RELIQUIA ======
  const reliquiaEl = document.getElementById('reliquiaSection');
  if (reliquiaEl) {
    const destacadas = typeof getDestacadas === 'function' ? getDestacadas() : [];
    if (destacadas.length > 0) {
      const p = destacadas[Math.floor(Math.random() * destacadas.length)];
      reliquiaEl.innerHTML = `
        <div class="reliquia-inner">
          <div class="reliquia-img">
            <img src="${getPiedraImgSrc(p.nombre)}" alt="${p.nombre}">
          </div>
          <div class="reliquia-info">
            <span class="section-overline">&#x13079; Reliquia</span>
            <h2 class="reliquia-name">${p.nombre}</h2>
            <p class="reliquia-premium">"${p.caracteristicas[0]}"</p>
            <p class="reliquia-desc">${p.descripcion}</p>
            <div class="reliquia-specs">
              <div class="reliquia-spec"><strong>${p.origen}</strong><span>Origen</span></div>
              <div class="reliquia-spec"><strong>${p.tamano}</strong><span>Tamano</span></div>
              <div class="reliquia-spec"><strong>${p.peso}</strong><span>Peso</span></div>
            </div>
            <div class="reliquia-price">${formatPrice(p.precio)}</div>
            <a href="piedra.html?slug=${p.slug}" class="btn-primary">Ver Reliquia</a>
          </div>
        </div>
      `;
    }
  }

  function formatFecha(str) {
    const d = new Date(str + 'T00:00:00');
    return d.toLocaleDateString('es-CL', { day: 'numeric', month: 'long' });
  }

})();
