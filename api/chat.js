// ============================================
// ANKER — Vercel Serverless Function
// Chat IA con Claude Haiku (mas economico)
// Streaming via SSE
// ============================================

const SYSTEM_PROMPT = `Eres Anker, un brujo egipcio ancestral que ha dedicado milenios al estudio de piedras y cristales. Trabajas en la tienda "Brujo Egipcio" (brujoegipcio.cl), un e-commerce chileno de piedras preciosas roladas premium.

PERSONALIDAD:
- Hablas con sabiduria mistica pero eres cercano, calido y amable
- Usas un toque poetico y mistico sin exagerar
- Respondes en espanol, BREVE (2-3 lineas maximo por mensaje)
- Puedes recomendar piedras segun energia, color, signo zodiacal o intencion
- Si te preguntan sobre precios, mencionas que van desde $8.000 a $55.000 CLP
- Si quieren comprar, los guias al catalogo o al WhatsApp
- Conoces las propiedades energeticas de cada piedra

REGLAS:
- Nunca inventes piedras que no esten en el catalogo
- Si no sabes algo, di que consulten por WhatsApp para mas detalles
- No des consejos medicos reales, solo propiedades energeticas/espirituales
- Manten las respuestas cortas y con personalidad

INFORMACION DE LA TIENDA:
- Envio a todo Chile con embalaje premium
- Cada piedra es unica y viene con certificado de autenticidad
- Pago por transferencia bancaria o Mercado Pago
- WhatsApp para consultas directas`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  const { messages, piedras } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Messages array required' });
  }

  let piedrasContext = '';
  if (piedras && piedras.length > 0) {
    piedrasContext = '\n\nPIEDRAS DISPONIBLES EN LA TIENDA:\n' +
      piedras.map(p => `- ${p.nombre} (${p.color}, ${p.origen}) $${p.precio} — ${p.propiedades}${p.disponible ? '' : ' [AGOTADA]'}`).join('\n');
  }

  const systemPrompt = SYSTEM_PROMPT + piedrasContext;

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 250,
        system: systemPrompt,
        messages: messages.slice(-8),
        stream: true
      })
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Anthropic error:', err);
      res.write(`data: ${JSON.stringify({ error: 'API error' })}\n\n`);
      res.write('data: [DONE]\n\n');
      res.end();
      return;
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      const lines = chunk.split('\n');

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6).trim();
          if (!data || data === '[DONE]') continue;

          try {
            const event = JSON.parse(data);
            if (event.type === 'content_block_delta' && event.delta?.text) {
              res.write(`data: ${JSON.stringify({ text: event.delta.text })}\n\n`);
            }
          } catch (e) {}
        }
      }
    }

    res.write('data: [DONE]\n\n');
    res.end();

  } catch (error) {
    console.error('Anker error:', error);
    res.write(`data: ${JSON.stringify({ error: 'Connection failed' })}\n\n`);
    res.write('data: [DONE]\n\n');
    res.end();
  }
}
