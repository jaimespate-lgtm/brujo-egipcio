// ============================================
// ANUBIS — Guardian del Templo (Frontend)
// Chat widget con streaming via SSE
// ============================================

(function() {
  const WA_NUMBER = '569XXXXXXXX';
  const floatEl = document.getElementById('ankerFloat');
  const greetEl = document.getElementById('ankerGreeting');
  const greetClose = document.getElementById('ankerGreetingClose');
  const chatEl = document.getElementById('ankerChat');
  const chatClose = document.getElementById('ankerChatClose');
  const messagesEl = document.getElementById('ankerMessages');
  const inputEl = document.getElementById('ankerInput');
  const sendBtn = document.getElementById('ankerSend');
  const quickBtns = document.querySelectorAll('.anker-quick-btn');

  if (!floatEl) return;

  let chatOpen = false;
  let conversationHistory = [];

  // Greeting after 20s
  setTimeout(() => {
    if (!chatOpen && !sessionStorage.getItem('ankerGreetDismissed')) {
      greetEl.classList.add('visible');
    }
  }, 20000);

  greetClose.addEventListener('click', (e) => {
    e.stopPropagation();
    greetEl.classList.remove('visible');
    sessionStorage.setItem('ankerGreetDismissed', '1');
  });

  // Open chat
  floatEl.addEventListener('click', () => {
    greetEl.classList.remove('visible');
    sessionStorage.setItem('ankerGreetDismissed', '1');
    chatOpen = true;
    chatEl.classList.add('open');
    floatEl.style.display = 'none';
    inputEl.focus();
  });

  // Close chat
  chatClose.addEventListener('click', () => {
    chatEl.classList.remove('open');
    chatOpen = false;
    floatEl.style.display = '';
  });

  // Quick replies
  quickBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const msg = btn.dataset.msg;
      if (msg.toLowerCase().includes('whatsapp')) {
        window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hola! Quiero consultar por piedras preciosas')}`, '_blank');
        return;
      }
      sendMessage(msg);
    });
  });

  // Send on Enter
  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && inputEl.value.trim()) {
      sendMessage(inputEl.value.trim());
    }
  });

  sendBtn.addEventListener('click', () => {
    if (inputEl.value.trim()) sendMessage(inputEl.value.trim());
  });

  function addMessage(text, type) {
    const div = document.createElement('div');
    div.className = `anker-msg anker-msg-${type}`;
    if (type === 'bot') {
      div.innerHTML = `<p>${text}</p>`;
    } else {
      div.innerHTML = `<p>${escapeHtml(text)}</p>`;
    }
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return div;
  }

  function addTyping() {
    const div = document.createElement('div');
    div.className = 'anker-msg anker-msg-bot anker-msg-typing';
    div.id = 'ankerTyping';
    div.innerHTML = '<div class="dots"><span></span><span></span><span></span></div>';
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return div;
  }

  function removeTyping() {
    const t = document.getElementById('ankerTyping');
    if (t) t.remove();
  }

  async function sendMessage(text) {
    addMessage(text, 'user');
    inputEl.value = '';
    conversationHistory.push({ role: 'user', content: text });

    // Hide quick replies after first message
    const quickEl = document.getElementById('ankerQuick');
    if (quickEl) quickEl.style.display = 'none';

    addTyping();

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: conversationHistory,
          piedras: getPiedrasContext()
        })
      });

      removeTyping();

      if (!res.ok) {
        addMessage('Los dioses han cerrado el portal momentaneamente. Intenta de nuevo o <a href="https://www.instagram.com/brujoegipcio" target="_blank" style="color:var(--gold-primary)">escribenos por Instagram</a>.', 'bot');
        return;
      }

      // Streaming response
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      const botDiv = addMessage('', 'bot');
      const pEl = botDiv.querySelector('p');
      let fullText = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') break;
            try {
              const parsed = JSON.parse(data);
              if (parsed.text) {
                fullText += parsed.text;
                pEl.innerHTML = formatBotText(fullText);
                messagesEl.scrollTop = messagesEl.scrollHeight;
              }
            } catch (e) {
              // partial JSON, skip
            }
          }
        }
      }

      conversationHistory.push({ role: 'assistant', content: fullText });

    } catch (err) {
      removeTyping();
      addMessage('Los astros no responden en este momento. Prueba de nuevo o <a href="https://www.instagram.com/brujoegipcio" target="_blank" style="color:var(--gold-primary)">escribenos por Instagram</a>.', 'bot');
    }
  }

  function getPiedrasContext() {
    if (typeof PIEDRAS === 'undefined') return [];
    return PIEDRAS.slice(0, 20).map(p => ({
      nombre: p.nombre, color: p.color, origen: p.origen,
      precio: p.precio, propiedades: p.propiedades, disponible: p.disponible
    }));
  }

  function formatBotText(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

})();
