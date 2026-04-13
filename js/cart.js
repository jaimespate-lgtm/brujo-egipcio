// ============================================
// BRUJO EGIPCIO — Sistema de Carrito
// Sidebar, codigos de descuento, formulario,
// finalizacion via WhatsApp
// ============================================

const WA_NUMBER = '569XXXXXXXX';

const CUPONES = {
  'BIENVENIDO10': { tipo: 'porcentaje', valor: 10 },
  'AMIGO15':      { tipo: 'porcentaje', valor: 15 },
  'PIEDRA5K':     { tipo: 'fijo', valor: 5000 },
};

const REFERIDOS = {
  'JAIME2026':  { descuento: 10, nombre: 'Jaime' },
  'MARIA2026':  { descuento: 5,  nombre: 'Maria' },
};

const REGIONES_CHILE = [
  'Arica y Parinacota','Tarapaca','Antofagasta','Atacama',
  'Coquimbo','Valparaiso','Metropolitana','O\'Higgins',
  'Maule','Nuble','Biobio','La Araucania',
  'Los Rios','Los Lagos','Aysen','Magallanes'
];

const CART_STORAGE_KEY = 'brujoEgipcioCart';

// ====== ESTADO ======
let cartItems = [];
let appliedCupon = null;
let appliedRef = null;

// ====== PERSISTENCIA ======
function saveCart() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify({
    items: cartItems,
    cupon: appliedCupon,
    referido: appliedRef
  }));
}

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    if (Array.isArray(data.items)) {
      cartItems = data.items.filter(i => {
        const p = getPiedraBySlug(i.slug);
        if (!p || !p.disponible) return false;
        if (i.cantidad > p.stock) i.cantidad = p.stock;
        return i.cantidad > 0;
      });
    }
    if (data.cupon && CUPONES[data.cupon]) appliedCupon = data.cupon;
    else if (data.cupon && data.cupon.startsWith('KIT')) {
      // Reconstruir cupon de kit dinamico
      var kitPct = parseInt(data.cupon.replace('KIT', ''));
      if (kitPct > 0) { CUPONES[data.cupon] = { tipo: 'porcentaje', valor: kitPct }; appliedCupon = data.cupon; }
      else appliedCupon = null;
    }
    else if (data.cupon) appliedCupon = null;
    if (data.referido && REFERIDOS[data.referido]) appliedRef = data.referido;
    else if (data.referido) appliedRef = null;
    saveCart();
  } catch (e) {
    localStorage.removeItem(CART_STORAGE_KEY);
    cartItems = [];
  }
}

// ====== FUNCIONES CORE ======
function addToCart(slug, qty) {
  qty = qty || 1;
  const piedra = getPiedraBySlug(slug);
  if (!piedra || !piedra.disponible) return false;

  const existing = cartItems.find(i => i.slug === slug);
  if (existing) {
    const newQty = existing.cantidad + qty;
    if (newQty > piedra.stock) {
      existing.cantidad = piedra.stock;
      saveCart(); renderCart(); updateBadge();
      showToast('Solo quedan ' + piedra.stock + ' unidades de ' + piedra.nombre);
      return false;
    }
    existing.cantidad = newQty;
  } else {
    if (qty > piedra.stock) qty = piedra.stock;
    cartItems.push({ slug: slug, cantidad: qty });
  }

  saveCart(); renderCart(); updateBadge();
  showToast(piedra.nombre + ' agregada al carrito');
  return true;
}

function removeFromCart(slug) {
  cartItems = cartItems.filter(i => i.slug !== slug);
  if (cartItems.length === 0) { appliedCupon = null; appliedRef = null; }
  saveCart(); renderCart(); updateBadge();
}

function updateQuantity(slug, newQty) {
  if (newQty <= 0) { removeFromCart(slug); return; }
  const piedra = getPiedraBySlug(slug);
  if (!piedra) return;
  if (newQty > piedra.stock) {
    newQty = piedra.stock;
    showToast('Solo quedan ' + piedra.stock + ' unidades');
  }
  const item = cartItems.find(i => i.slug === slug);
  if (item) item.cantidad = newQty;
  saveCart(); renderCart();
}

function clearCart() {
  cartItems = [];
  appliedCupon = null;
  appliedRef = null;
  saveCart(); renderCart(); updateBadge();
}

function getCartCount() {
  return cartItems.reduce(function(sum, i) { return sum + i.cantidad; }, 0);
}

function getSubtotal() {
  return cartItems.reduce(function(sum, i) {
    var p = getPiedraBySlug(i.slug);
    return sum + (p ? p.precio * i.cantidad : 0);
  }, 0);
}

// ====== CODIGOS DE DESCUENTO ======
function applyCode(code) {
  code = code.trim().toUpperCase().replace(/\s/g, '');
  if (!code) return { ok: false, msg: 'Ingresa un código' };

  if (CUPONES[code]) {
    if (appliedCupon) return { ok: false, msg: 'Ya tienes un cupón aplicado' };
    appliedCupon = code;
    saveCart(); renderCart();
    var c = CUPONES[code];
    var desc = c.tipo === 'porcentaje' ? c.valor + '% de descuento' : formatPrice(c.valor) + ' de descuento';
    return { ok: true, msg: 'Cupón ' + code + ' aplicado: ' + desc };
  }

  if (REFERIDOS[code]) {
    if (appliedRef) return { ok: false, msg: 'Ya tienes un código de referido aplicado' };
    appliedRef = code;
    saveCart(); renderCart();
    var r = REFERIDOS[code];
    return { ok: true, msg: 'Codigo de ' + r.nombre + ' aplicado: ' + r.descuento + '% de descuento' };
  }

  return { ok: false, msg: 'Código no válido' };
}

function removeCupon() {
  appliedCupon = null;
  saveCart(); renderCart();
}

function removeReferido() {
  appliedRef = null;
  saveCart(); renderCart();
}

function calculateTotals() {
  var subtotal = getSubtotal();
  var descuentoCupon = 0;
  var descuentoRef = 0;

  if (appliedCupon && CUPONES[appliedCupon]) {
    var c = CUPONES[appliedCupon];
    if (c.tipo === 'porcentaje') descuentoCupon = Math.round(subtotal * c.valor / 100);
    else descuentoCupon = Math.min(c.valor, subtotal);
  }

  if (appliedRef && REFERIDOS[appliedRef]) {
    var r = REFERIDOS[appliedRef];
    descuentoRef = Math.round((subtotal - descuentoCupon) * r.descuento / 100);
  }

  var total = Math.max(subtotal - descuentoCupon - descuentoRef, 0);
  return { subtotal: subtotal, descuentoCupon: descuentoCupon, descuentoRef: descuentoRef, total: total };
}

// ====== RENDERIZADO ======
function renderCart() {
  var emptyEl = document.getElementById('cartEmpty');
  var itemsEl = document.getElementById('cartItems');
  var codesEl = document.getElementById('cartCodes');
  var summaryEl = document.getElementById('cartSummary');
  var continueBtn = document.getElementById('cartContinueBtn');
  if (!itemsEl) return;

  if (cartItems.length === 0) {
    if (emptyEl) emptyEl.style.display = '';
    itemsEl.style.display = 'none';
    if (codesEl) codesEl.style.display = 'none';
    if (summaryEl) summaryEl.style.display = 'none';
    if (continueBtn) continueBtn.style.display = 'none';
    return;
  }

  if (emptyEl) emptyEl.style.display = 'none';
  itemsEl.style.display = '';
  if (codesEl) codesEl.style.display = '';
  if (summaryEl) summaryEl.style.display = '';
  if (continueBtn) continueBtn.style.display = '';

  itemsEl.innerHTML = cartItems.map(function(item) {
    var p = getPiedraBySlug(item.slug);
    if (!p) return '';
    return '<div class="cart-item" data-slug="' + item.slug + '">' +
      '<div class="cart-item-img">' +
        '<img src="img/piedras/' + p.nombre + '_Frontal.png" alt="' + p.nombre + '" onerror="this.style.display=\'none\'">' +
      '</div>' +
      '<div class="cart-item-info">' +
        '<div class="cart-item-name">' + p.nombre + '</div>' +
        '<div class="cart-item-origin">' + p.origen + '</div>' +
        '<div class="cart-item-price">' + formatPrice(p.precio) + '</div>' +
        '<div class="cart-item-qty">' +
          '<button class="cart-qty-btn" data-action="decrease" data-slug="' + item.slug + '" aria-label="Disminuir cantidad">&minus;</button>' +
          '<span class="cart-qty-value">' + item.cantidad + '</span>' +
          '<button class="cart-qty-btn" data-action="increase" data-slug="' + item.slug + '" aria-label="Aumentar cantidad">+</button>' +
        '</div>' +
      '</div>' +
      '<button class="cart-item-remove" data-slug="' + item.slug + '" aria-label="Eliminar">&times;</button>' +
    '</div>';
  }).join('');

  renderSummary();
  renderAppliedCodes();
}

function renderSummary() {
  var t = calculateTotals();
  var subtotalEl = document.getElementById('cartSubtotal');
  var totalEl = document.getElementById('cartTotal');
  var cuponRow = document.getElementById('cartDiscountCuponRow');
  var cuponLabel = document.getElementById('cartDiscountCuponLabel');
  var cuponVal = document.getElementById('cartDiscountCupon');
  var refRow = document.getElementById('cartDiscountRefRow');
  var refLabel = document.getElementById('cartDiscountRefLabel');
  var refVal = document.getElementById('cartDiscountRef');

  if (subtotalEl) subtotalEl.textContent = formatPrice(t.subtotal);
  if (totalEl) totalEl.textContent = formatPrice(t.total);

  if (cuponRow) {
    if (appliedCupon && t.descuentoCupon > 0) {
      cuponRow.style.display = '';
      var c = CUPONES[appliedCupon];
      if (cuponLabel) cuponLabel.textContent = 'Cupón ' + appliedCupon + (c.tipo === 'porcentaje' ? ' (-' + c.valor + '%)' : '');
      if (cuponVal) cuponVal.textContent = '-' + formatPrice(t.descuentoCupon);
    } else {
      cuponRow.style.display = 'none';
    }
  }

  if (refRow) {
    if (appliedRef && t.descuentoRef > 0) {
      refRow.style.display = '';
      var r = REFERIDOS[appliedRef];
      if (refLabel) refLabel.textContent = 'Referido ' + r.nombre + ' (-' + r.descuento + '%)';
      if (refVal) refVal.textContent = '-' + formatPrice(t.descuentoRef);
    } else {
      refRow.style.display = 'none';
    }
  }
}

function renderAppliedCodes() {
  var container = document.getElementById('cartCodeApplied');
  if (!container) return;
  var html = '';
  if (appliedCupon) {
    var c = CUPONES[appliedCupon];
    var desc = c.tipo === 'porcentaje' ? '-' + c.valor + '%' : '-' + formatPrice(c.valor);
    html += '<span class="cart-code-tag">' + appliedCupon + ' (' + desc + ') ' +
      '<button class="cart-code-remove" data-type="cupon" aria-label="Quitar cupón">&times;</button></span>';
  }
  if (appliedRef) {
    var r = REFERIDOS[appliedRef];
    html += '<span class="cart-code-tag">' + r.nombre + ' (-' + r.descuento + '%) ' +
      '<button class="cart-code-remove" data-type="referido" aria-label="Quitar referido">&times;</button></span>';
  }
  container.innerHTML = html;
}

function updateBadge() {
  var badge = document.getElementById('cartBadge');
  if (!badge) return;
  var count = getCartCount();
  if (count > 0) {
    badge.textContent = count;
    badge.classList.add('visible');
  } else {
    badge.textContent = '';
    badge.classList.remove('visible');
  }
}

// ====== SIDEBAR OPEN/CLOSE ======
function openCart() {
  var sidebar = document.getElementById('cartSidebar');
  var overlay = document.getElementById('cartOverlay');
  if (sidebar) sidebar.classList.add('open');
  if (overlay) overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  loadCart();
  renderCart();
  updateBadge();
}

function closeCart() {
  var sidebar = document.getElementById('cartSidebar');
  var overlay = document.getElementById('cartOverlay');
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
  showStep(1);
}

function showStep(step) {
  var step1 = document.getElementById('cartStepItems');
  var step2 = document.getElementById('cartStepForm');
  if (!step1 || !step2) return;
  if (step === 1) {
    step1.classList.remove('cart-step-hidden');
    step2.classList.add('cart-step-hidden');
  } else {
    step1.classList.add('cart-step-hidden');
    step2.classList.remove('cart-step-hidden');
  }
}

// ====== FORMULARIO ======
function populateRegiones() {
  var sel = document.getElementById('cartRegion');
  if (!sel) return;
  REGIONES_CHILE.forEach(function(r) {
    var opt = document.createElement('option');
    opt.value = r;
    opt.textContent = r;
    sel.appendChild(opt);
  });
}

function validateForm() {
  var fields = {
    nombre:    document.getElementById('cartNombre'),
    email:     document.getElementById('cartEmail'),
    telefono:  document.getElementById('cartTelefono'),
    direccion: document.getElementById('cartDireccion'),
    comuna:    document.getElementById('cartComuna'),
    region:    document.getElementById('cartRegion')
  };

  var valid = true;
  var data = {};

  // Limpiar errores previos
  Object.keys(fields).forEach(function(k) {
    if (fields[k]) {
      fields[k].classList.remove('cart-field-error');
      fields[k].parentElement.querySelectorAll('.cart-error-msg').forEach(function(msg) { msg.remove(); });
    }
  });

  function markError(el, message) {
    el.classList.add('cart-field-error');
    var span = document.createElement('span');
    span.className = 'cart-error-msg';
    span.textContent = message;
    el.parentElement.appendChild(span);
    valid = false;
  }

  // Nombre
  data.nombre = fields.nombre ? fields.nombre.value.trim() : '';
  if (!data.nombre) markError(fields.nombre, 'Ingresa tu nombre');

  // Email
  data.email = fields.email ? fields.email.value.trim() : '';
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    markError(fields.email, 'Ingresa un email válido');
  }

  // Telefono
  data.telefono = fields.telefono ? fields.telefono.value.trim() : '';
  if (!data.telefono || data.telefono.replace(/\D/g, '').length < 8) {
    markError(fields.telefono, 'Ingresa un teléfono válido');
  }

  // Direccion
  data.direccion = fields.direccion ? fields.direccion.value.trim() : '';
  if (!data.direccion) markError(fields.direccion, 'Ingresa tu dirección');

  // Comuna
  data.comuna = fields.comuna ? fields.comuna.value.trim() : '';
  if (!data.comuna) markError(fields.comuna, 'Ingresa tu comuna');

  // Region
  data.region = fields.region ? fields.region.value : '';
  if (!data.region) markError(fields.region, 'Selecciona tu región');

  return { valid: valid, data: data };
}

// ====== WHATSAPP ======
function buildWhatsAppMessage(formData) {
  var t = calculateTotals();
  var lines = [];
  lines.push('¡Hola! Quiero realizar el siguiente pedido:');
  lines.push('');
  lines.push('*PEDIDO BRUJO EGIPCIO*');
  lines.push('========================');
  lines.push('');

  cartItems.forEach(function(item) {
    var p = getPiedraBySlug(item.slug);
    if (p) lines.push('- ' + p.nombre + ' x' + item.cantidad + ' — ' + formatPrice(p.precio * item.cantidad));
  });

  lines.push('');
  lines.push('Subtotal: ' + formatPrice(t.subtotal));

  if (appliedCupon && t.descuentoCupon > 0) {
    lines.push('Cupón ' + appliedCupon + ': -' + formatPrice(t.descuentoCupon));
  }
  if (appliedRef && t.descuentoRef > 0) {
    var r = REFERIDOS[appliedRef];
    lines.push('Referido ' + r.nombre + ': -' + formatPrice(t.descuentoRef));
  }

  lines.push('*Total: ' + formatPrice(t.total) + '*');
  lines.push('');
  lines.push('*DATOS DE ENVÍO*');
  lines.push('========================');
  lines.push('Nombre: ' + formData.nombre);
  lines.push('Email: ' + formData.email);
  lines.push('Teléfono: ' + formData.telefono);
  lines.push('Dirección: ' + formData.direccion);
  lines.push('Comuna: ' + formData.comuna);
  lines.push('Región: ' + formData.region);
  lines.push('');
  lines.push('Quedo atento a los datos para la transferencia. Gracias!');

  return lines.join('\n');
}

function finalizePurchase(formData) {
  var message = buildWhatsAppMessage(formData);
  var url = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(message);
  var popup = window.open(url, '_blank');
  if (!popup || popup.closed || typeof popup.closed === 'undefined') {
    showToast('No se pudo abrir WhatsApp. Desactiva el bloqueador de pop-ups e intenta de nuevo.', 5000);
    return;
  }
  setTimeout(function() {
    clearCart();
    closeCart();
    showToast('¡Pedido enviado! Te contactaremos por WhatsApp');
  }, 800);
}

// ====== TOAST ======
var toastTimeout = null;
function showToast(text, duration) {
  duration = duration || 3000;
  var toast = document.getElementById('cartToast');
  var textEl = document.getElementById('cartToastText');
  if (!toast || !textEl) return;
  textEl.textContent = text;
  toast.classList.add('visible');
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(function() {
    toast.classList.remove('visible');
  }, duration);
}

// ====== EVENT HANDLERS ======
function handleItemClick(e) {
  var btn = e.target.closest('[data-action]');
  if (btn) {
    var slug = btn.dataset.slug;
    var action = btn.dataset.action;
    var item = cartItems.find(function(i) { return i.slug === slug; });
    if (!item) return;
    if (action === 'increase') updateQuantity(slug, item.cantidad + 1);
    if (action === 'decrease') updateQuantity(slug, item.cantidad - 1);
    return;
  }
  var removeBtn = e.target.closest('.cart-item-remove');
  if (removeBtn) {
    removeFromCart(removeBtn.dataset.slug);
  }
}

function handleCodeRemove(e) {
  var btn = e.target.closest('.cart-code-remove');
  if (!btn) return;
  if (btn.dataset.type === 'cupon') removeCupon();
  if (btn.dataset.type === 'referido') removeReferido();
}

function handleFormSubmit(e) {
  e.preventDefault();
  var result = validateForm();
  if (result.valid) finalizePurchase(result.data);
}

// ====== INICIALIZACION ======
(function initCart() {
  loadCart();
  populateRegiones();
  updateBadge();

  // Sidebar toggle
  var toggle = document.getElementById('cartToggle');
  if (toggle) toggle.addEventListener('click', openCart);

  var closeBtn = document.getElementById('cartClose');
  if (closeBtn) closeBtn.addEventListener('click', closeCart);

  var overlay = document.getElementById('cartOverlay');
  if (overlay) overlay.addEventListener('click', closeCart);

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      var sidebar = document.getElementById('cartSidebar');
      if (sidebar && sidebar.classList.contains('open')) closeCart();
    }
  });

  // Codigos
  var codeBtn = document.getElementById('cartCodeBtn');
  var codeInput = document.getElementById('cartCodeInput');
  if (codeBtn && codeInput) {
    codeBtn.addEventListener('click', function() {
      var result = applyCode(codeInput.value);
      if (result.ok) {
        codeInput.value = '';
        codeInput.classList.remove('cart-field-error');
      } else {
        codeInput.classList.add('cart-field-error');
      }
      showToast(result.msg);
    });
    codeInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') codeBtn.click();
    });
    codeInput.addEventListener('input', function() {
      codeInput.classList.remove('cart-field-error');
    });
  }

  // Steps
  var continueBtn = document.getElementById('cartContinueBtn');
  if (continueBtn) continueBtn.addEventListener('click', function() { showStep(2); });

  var backBtn = document.getElementById('cartBackBtn');
  if (backBtn) backBtn.addEventListener('click', function() { showStep(1); });

  // Form
  var form = document.getElementById('cartForm');
  if (form) form.addEventListener('submit', handleFormSubmit);

  // Event delegation
  var itemsContainer = document.getElementById('cartItems');
  if (itemsContainer) itemsContainer.addEventListener('click', handleItemClick);

  var appliedContainer = document.getElementById('cartCodeApplied');
  if (appliedContainer) appliedContainer.addEventListener('click', handleCodeRemove);
})();
