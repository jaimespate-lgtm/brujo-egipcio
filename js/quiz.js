// ============================================
// BRUJO EGIPCIO — Quiz "Lector de Aura"
// Recomienda piedras segun respuestas
// ============================================

(function() {
  var currentQ = 0;
  var respuestas = [];
  var container = document.getElementById('quizContainer');
  if (!container) return;

  function renderPregunta(idx) {
    var q = QUIZ_PREGUNTAS[idx];
    container.innerHTML =
      '<div class="quiz-progress">' +
        '<div class="quiz-progress-bar" style="width:' + ((idx + 1) / QUIZ_PREGUNTAS.length * 100) + '%"></div>' +
      '</div>' +
      '<div class="quiz-step">' + (idx + 1) + ' / ' + QUIZ_PREGUNTAS.length + '</div>' +
      '<h2 class="quiz-question">' + q.pregunta + '</h2>' +
      '<div class="quiz-options">' +
        q.opciones.map(function(o, i) {
          return '<button class="quiz-option" data-idx="' + i + '">' + o.texto + '</button>';
        }).join('') +
      '</div>';

    container.querySelectorAll('.quiz-option').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var opcion = q.opciones[parseInt(btn.dataset.idx)];
        respuestas = respuestas.concat(opcion.tags);
        currentQ++;
        if (currentQ < QUIZ_PREGUNTAS.length) {
          renderPregunta(currentQ);
        } else {
          renderResultado();
        }
      });
    });
  }

  function renderResultado() {
    // Contar tags
    var conteo = {};
    respuestas.forEach(function(tag) {
      conteo[tag] = (conteo[tag] || 0) + 1;
    });

    // Tag mas frecuente (excluyendo colores para encontrar la esencia)
    var esencias = ['calma', 'proteccion', 'amor', 'sanacion', 'abundancia', 'espiritual'];
    var esencia = esencias[0];
    var maxCount = 0;
    esencias.forEach(function(e) {
      if ((conteo[e] || 0) > maxCount) {
        maxCount = conteo[e] || 0;
        esencia = e;
      }
    });

    var resultado = QUIZ_RESULTADOS[esencia];

    // Buscar piedras recomendadas por color
    var recomendadas = PIEDRAS.filter(function(p) {
      return p.disponible && p.color === resultado.color;
    }).slice(0, 3);

    // Si no hay suficientes, completar con otras
    if (recomendadas.length < 3) {
      var extras = PIEDRAS.filter(function(p) {
        return p.disponible && p.color !== resultado.color;
      }).sort(function() { return Math.random() - 0.5; }).slice(0, 3 - recomendadas.length);
      recomendadas = recomendadas.concat(extras);
    }

    container.innerHTML =
      '<div class="quiz-result">' +
        '<div class="quiz-result-icon">' + resultado.emoji + '</div>' +
        '<h2 class="quiz-result-title">' + resultado.titulo + '</h2>' +
        '<p class="quiz-result-desc">' + resultado.desc + '</p>' +
        '<div class="quiz-result-cards">' +
          recomendadas.map(function(p) {
            return '<a href="piedra.html?slug=' + p.slug + '" class="quiz-result-card">' +
              '<div class="quiz-result-card-img">' +
                '<img src="img/piedras/' + p.nombre + '_Frontal.png" alt="' + p.nombre + '" loading="lazy">' +
              '</div>' +
              '<div class="quiz-result-card-name">' + p.nombre + '</div>' +
              '<div class="quiz-result-card-price">' + formatPrice(p.precio) + '</div>' +
            '</a>';
          }).join('') +
        '</div>' +
        '<div class="quiz-result-actions">' +
          '<button class="quiz-restart" onclick="location.reload()">Repetir Quiz</button>' +
          '<a href="index.html#catalogo" class="quiz-explore">Ver toda la coleccion</a>' +
        '</div>' +
      '</div>';
  }

  renderPregunta(0);
})();
