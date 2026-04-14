// ============================================
// BRUJO EGIPCIO — Música ambiente egipcia
// ============================================
(function() {
  var audio, started = false, btn;

  function startMusic() {
    if (started) return;
    started = true;
    audio = new Audio('audio/egyptian-ambient.mp3');
    audio.loop = true;
    audio.volume = 0.3;
    audio.play().catch(function() {});
  }

  function createToggle() {
    btn = document.createElement('button');
    btn.className = 'ambient-toggle';
    btn.innerHTML = '&#9835;';
    btn.title = 'Música ambiente';
    var muted = false;
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      if (!started) { startMusic(); btn.classList.add('active'); return; }
      muted = !muted;
      audio.volume = muted ? 0 : 0.3;
      btn.classList.toggle('active', !muted);
    });
    document.body.appendChild(btn);
  }

  createToggle();

  var events = ['click', 'scroll', 'touchstart', 'mousemove', 'keydown', 'pointerdown'];
  function onFirst() {
    if (!started) { startMusic(); btn.classList.add('active'); }
    events.forEach(function(ev) { document.removeEventListener(ev, onFirst); });
  }
  events.forEach(function(ev) { document.addEventListener(ev, onFirst, { once: true }); });
})();
