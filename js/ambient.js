// ============================================
// BRUJO EGIPCIO — Música ambiente egipcia
// Sin autoplay. Solo suena al pulsar el botón.
// ============================================
(function() {
  var audio = null;
  var playing = false;
  var btn;

  function initAudio() {
    if (audio) return;
    audio = new Audio('audio/egyptian-ambient.mp3');
    audio.loop = true;
    audio.volume = 0.25;
  }

  function toggleMusic(e) {
    if (e) e.stopPropagation();
    initAudio();
    if (playing) {
      audio.pause();
      playing = false;
      btn.classList.remove('active');
      btn.title = 'Activar música';
    } else {
      audio.play().catch(function() {});
      playing = true;
      btn.classList.add('active');
      btn.title = 'Pausar música';
    }
  }

  btn = document.createElement('button');
  btn.className = 'ambient-toggle';
  btn.innerHTML = '&#9835;';
  btn.title = 'Activar música';
  btn.addEventListener('click', toggleMusic);
  document.body.appendChild(btn);
})();
