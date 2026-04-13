// ============================================
// BRUJO EGIPCIO — Componente Carrusel Reutilizable
// Soporta: arrows, dots, touch/swipe, auto-advance
// ============================================

function initCarousel(container, options = {}) {
  const track = container.querySelector('.carousel-track');
  if (!track) return null;

  const {
    itemSelector = '.carousel-item',
    arrowLeft = container.querySelector('.carousel-arrow-left'),
    arrowRight = container.querySelector('.carousel-arrow-right'),
    dotsContainer = container.querySelector('.carousel-dots'),
    autoAdvance = 0,
    loop = false,
    gap = 16,
    visibleItems = null, // auto-detect if null
    peekNext = 40
  } = options;

  let items = track.querySelectorAll(itemSelector);
  let currentIndex = 0;
  let autoTimer = null;
  let startX = 0;
  let isDragging = false;

  function getVisibleCount() {
    if (visibleItems) return typeof visibleItems === 'function' ? visibleItems() : visibleItems;
    const containerW = container.offsetWidth;
    if (containerW < 480) return 1.2;
    if (containerW < 768) return 2.2;
    if (containerW < 1024) return 3;
    return 4;
  }

  function getMaxIndex() {
    const vis = Math.floor(getVisibleCount());
    return Math.max(0, items.length - vis);
  }

  function slideTo(index) {
    items = track.querySelectorAll(itemSelector);
    const maxIdx = getMaxIndex();
    currentIndex = loop ? ((index % items.length) + items.length) % items.length : Math.max(0, Math.min(index, maxIdx));
    const itemW = items[0] ? items[0].offsetWidth + gap : 0;
    track.style.transform = `translateX(-${currentIndex * itemW}px)`;
    updateDots();
    updateArrows();
  }

  function next() { slideTo(currentIndex + 1); }
  function prev() { slideTo(currentIndex - 1); }

  function updateDots() {
    if (!dotsContainer) return;
    const maxIdx = getMaxIndex();
    dotsContainer.innerHTML = '';
    const totalDots = Math.min(maxIdx + 1, 8);
    for (let i = 0; i <= maxIdx && i < totalDots; i++) {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === currentIndex ? ' active' : '');
      dot.addEventListener('click', () => slideTo(i));
      dotsContainer.appendChild(dot);
    }
  }

  function updateArrows() {
    if (arrowLeft) arrowLeft.style.opacity = currentIndex === 0 && !loop ? '0.3' : '1';
    if (arrowRight) arrowRight.style.opacity = currentIndex >= getMaxIndex() && !loop ? '0.3' : '1';
  }

  // Arrows
  if (arrowLeft) arrowLeft.addEventListener('click', prev);
  if (arrowRight) arrowRight.addEventListener('click', next);

  // Touch/Swipe
  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
    if (autoTimer) clearInterval(autoTimer);
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    isDragging = false;
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
    startAutoAdvance();
  }, { passive: true });

  // Auto-advance
  function startAutoAdvance() {
    if (!autoAdvance) return;
    if (autoTimer) clearInterval(autoTimer);
    autoTimer = setInterval(next, autoAdvance);
  }

  // Init
  track.style.display = 'flex';
  track.style.gap = gap + 'px';
  track.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
  slideTo(0);
  startAutoAdvance();

  // Resize handler
  window.addEventListener('resize', () => slideTo(currentIndex));

  return { slideTo, next, prev, refresh: () => slideTo(currentIndex) };
}
