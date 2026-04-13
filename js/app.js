// ============================================
// BRUJO EGIPCIO — Logica compartida
// Header, mobile menu, search, promo carousel
// ============================================

// ====== MOBILE MENU ======
(function initMobileMenu() {
  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('mobileMenu');
  const close = document.getElementById('menuClose');
  if (!btn || !menu || !close) return;

  btn.addEventListener('click', () => menu.classList.add('open'));
  close.addEventListener('click', () => menu.classList.remove('open'));
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => menu.classList.remove('open'));
  });
})();

// ====== SEARCH OVERLAY ======
(function initSearch() {
  const btn = document.getElementById('searchBtn');
  const overlay = document.getElementById('searchOverlay');
  const close = document.getElementById('searchClose');
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');
  if (!btn || !overlay) return;

  btn.addEventListener('click', () => {
    overlay.classList.add('open');
    if (input) input.focus();
  });

  if (close) {
    close.addEventListener('click', () => {
      overlay.classList.remove('open');
      if (input) input.value = '';
      if (results) results.innerHTML = '';
    });
  }

  // ESC to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      overlay.classList.remove('open');
      if (input) input.value = '';
      if (results) results.innerHTML = '';
    }
  });

  // Live search
  if (input && results && typeof PIEDRAS !== 'undefined') {
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      if (q.length < 2) {
        results.innerHTML = '';
        return;
      }
      const matches = PIEDRAS.filter(p =>
        p.disponible &&
        (p.nombre.toLowerCase().includes(q) ||
         p.origen.toLowerCase().includes(q) ||
         p.color.toLowerCase().includes(q))
      ).slice(0, 8);

      if (matches.length === 0) {
        results.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:1rem;">No se encontraron piedras</p>';
        return;
      }

      results.innerHTML = matches.map(p => `
        <a href="piedra.html?slug=${p.slug}" class="search-result-item">
          <div>
            <div class="search-result-name">${p.nombre}</div>
            <div class="search-result-origin">${p.origen}</div>
          </div>
          <div class="search-result-price">${formatPrice(p.precio)}</div>
        </a>
      `).join('');
    });
  }
})();

// ====== FAQ ACCORDION ======
(function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
})();
