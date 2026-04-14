// ============================================
// BRUJO EGIPCIO — Ambient Egyptian Soundscape
// Web Audio API generative ambient music
// ============================================
(function() {
  var ctx, started = false;
  var masterGain;

  function startAmbient() {
    if (started) return;
    started = true;

    ctx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = ctx.createGain();
    masterGain.gain.value = 0;
    masterGain.connect(ctx.destination);

    // Fade in over 3 seconds
    masterGain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 3);

    // Deep drone D2 (73.42 Hz)
    createDrone(73.42, 0.12);
    // Perfect 5th A2 (110 Hz)
    createDrone(110, 0.06);
    // Octave D3 (146.83 Hz)
    createDrone(146.83, 0.04);

    // Subtle harmonic shimmer
    createShimmer();

    // Gentle wind/breath noise
    createBreath();
  }

  function createDrone(freq, vol) {
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    var filter = ctx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.value = freq;
    gain.gain.value = vol;

    filter.type = 'lowpass';
    filter.frequency.value = 300;
    filter.Q.value = 1;

    // Slow vibrato
    var lfo = ctx.createOscillator();
    var lfoGain = ctx.createGain();
    lfo.type = 'sine';
    lfo.frequency.value = 0.15 + Math.random() * 0.1;
    lfoGain.gain.value = freq * 0.003;
    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);
    lfo.start();

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(masterGain);
    osc.start();
  }

  function createShimmer() {
    // Arabic/Phrygian scale notes: D, Eb, F#, G, A, Bb
    var notes = [293.66, 311.13, 369.99, 392.00, 440.00, 466.16];
    var noteIndex = 0;

    function playNote() {
      if (!ctx) return;
      var freq = notes[noteIndex % notes.length];
      noteIndex++;

      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      var filter = ctx.createBiquadFilter();

      osc.type = 'triangle';
      osc.frequency.value = freq;

      filter.type = 'bandpass';
      filter.frequency.value = freq;
      filter.Q.value = 8;

      var now = ctx.currentTime;
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.015, now + 1.5);
      gain.gain.linearRampToValueAtTime(0, now + 5);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);
      osc.start(now);
      osc.stop(now + 5.5);

      // Next note in 4-8 seconds (random, organic)
      setTimeout(playNote, 4000 + Math.random() * 4000);
    }

    setTimeout(playNote, 2000);
  }

  function createBreath() {
    var bufferSize = ctx.sampleRate * 2;
    var buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    var data = buffer.getChannelData(0);
    for (var i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.5;
    }

    var noise = ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    var filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 400;
    filter.Q.value = 0.5;

    var gain = ctx.createGain();
    gain.gain.value = 0.008;

    // Slow breathing modulation
    var lfo = ctx.createOscillator();
    var lfoGain = ctx.createGain();
    lfo.type = 'sine';
    lfo.frequency.value = 0.08;
    lfoGain.gain.value = 0.006;
    lfo.connect(lfoGain);
    lfoGain.connect(gain.gain);
    lfo.start();

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(masterGain);
    noise.start();
  }

  // Mute/unmute toggle
  function createToggle() {
    var btn = document.createElement('button');
    btn.className = 'ambient-toggle';
    btn.innerHTML = '&#9835;';
    btn.title = 'Música ambiente';
    btn.setAttribute('aria-label', 'Toggle música ambiente');
    var muted = false;
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      if (!started) {
        startAmbient();
        btn.classList.add('active');
        return;
      }
      muted = !muted;
      masterGain.gain.linearRampToValueAtTime(muted ? 0 : 0.18, ctx.currentTime + 0.5);
      btn.classList.toggle('active', !muted);
    });
    document.body.appendChild(btn);
    return btn;
  }

  // Start on first user interaction
  var btn = createToggle();
  function onFirstInteraction() {
    if (!started) {
      startAmbient();
      btn.classList.add('active');
    }
    document.removeEventListener('click', onFirstInteraction);
    document.removeEventListener('scroll', onFirstInteraction);
    document.removeEventListener('touchstart', onFirstInteraction);
  }
  document.addEventListener('click', onFirstInteraction);
  document.addEventListener('scroll', onFirstInteraction);
  document.addEventListener('touchstart', onFirstInteraction);
})();
