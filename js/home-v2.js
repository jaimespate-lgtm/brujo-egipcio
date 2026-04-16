// ============================================
// BRUJO EGIPCIO — Home V2
// FAQ accordion, Mapa interactivo, Kit buttons
// ============================================

// ====== FAQ ACCORDION (v2 uses .faq-q) ======
(function initFAQv2() {
    document.querySelectorAll('.faq-v2 .faq-q').forEach(function(b) {
        b.addEventListener('click', function() {
            var item = b.parentElement;
            var wasActive = item.classList.contains('active');
            document.querySelectorAll('.faq-v2 .faq-item.active').forEach(function(x) {
                x.classList.remove('active');
            });
            if (!wasActive) item.classList.add('active');
        });
    });
})();

// ====== KIT BUTTONS → addToCart ======
(function initKitButtons() {
    document.querySelectorAll('.kit-btn[data-kit-id]').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var kitId = btn.dataset.kitId;
            if (typeof KITS === 'undefined' || typeof addToCart !== 'function') return;

            var kit = KITS.find(function(k) { return k.id === kitId; });
            if (!kit) return;

            kit.piedras.forEach(function(slug) {
                addToCart(slug, 1);
            });

            // Apply kit discount as coupon
            var kitCuponKey = 'KIT' + kit.descuento;
            if (typeof CUPONES !== 'undefined') {
                CUPONES[kitCuponKey] = { tipo: 'porcentaje', valor: kit.descuento };
            }
            if (typeof appliedCupon !== 'undefined' && !appliedCupon) {
                appliedCupon = kitCuponKey;
                if (typeof saveCart === 'function') saveCart();
                if (typeof renderCart === 'function') renderCart();
            }
            if (typeof showToast === 'function') {
                showToast('Kit ' + kit.nombre + ' agregado con ' + kit.descuento + '% de descuento');
            }
        });
    });
})();

// ====== MAPA INTERACTIVO — Rarezas del Mundo ======
(function initMapa() {
    var tooltip = document.getElementById('mapaTooltip');
    var tooltipRegion = document.getElementById('tooltipRegion');
    var tooltipCount = document.getElementById('tooltipCount');
    var tooltipStones = document.getElementById('tooltipStones');
    var mapaWrap = document.querySelector('.mapa-wrap');
    var dots = document.querySelectorAll('.mapa-dot');
    if (!tooltip || !mapaWrap || dots.length === 0) return;

    var activeRegion = null;

    var PIEDRAS_POR_REGION = {
        afganistan: [
            { nombre: 'Lapislázuli', img: 'Lapislázuli.jpg', detalle: 'Lazurita azul profundo' }
        ],
        argentina: [
            { nombre: 'Rodocrosita', img: 'Rodocrosita.jpg', detalle: 'Rosa mangano argentino' },
            { nombre: 'Ónix Cielo', img: 'Ónix Cielo.jpg', detalle: 'Calcedonia celeste patagónica' }
        ],
        australia: [
            { nombre: 'Crisoprasa', img: 'Crisoprasa.jpg', detalle: 'Calcedonia verde níquel' },
            { nombre: 'Ópalo Dendrítico', img: 'Ópalo Dendrítico.png', detalle: 'Sílice con dendritas internas' },
            { nombre: 'Jaspe Cocodrilo', img: 'Jaspe Cocodrilo.png', detalle: 'Calcedonia con textura reptil' },
            { nombre: 'Atlantisita', img: 'Atlantisita.jpg', detalle: 'Serpentina + stichtita' },
            { nombre: 'Mokaita', img: 'Mokaita.png', detalle: 'Jaspe australiano multicolor' }
        ],
        bolivia: [
            { nombre: 'Bolivianita', img: 'Bolivianita.jpg', detalle: 'Ametrino exclusivo boliviano' }
        ],
        brasil: [
            { nombre: 'Cianita Azul', img: 'Cianita Azul.jpg', detalle: 'Silicato de aluminio laminar' },
            { nombre: 'Cuarzo Hematoide', img: 'Cuarzo Hematoide.jpg', detalle: 'Cuarzo con hierro rojo' },
            { nombre: 'Cuarzo Rutilado Dorado', img: 'Cuarzo Rutilado Dorado.jpg', detalle: 'Agujas de titanio doradas' },
            { nombre: 'Cuarzo Rutilado Plateado', img: 'Cuarzo Rutilado Plateado.jpg', detalle: 'Hilos de plata internos' },
            { nombre: 'Sodalita', img: 'Sodalita.jpg', detalle: 'Tectosilicato azul intenso' },
            { nombre: 'Rodonita', img: 'Rodonita.png', detalle: 'Silicato mangano rosa y negro' },
            { nombre: 'Dumortierita', img: 'Dumortierita.png', detalle: 'Borosilicato azul violáceo' },
            { nombre: 'Aguamarina', img: 'Aguamarina.jpg', detalle: 'Berilo azul transparente' },
            { nombre: 'Amazonita', img: 'Amazonita.jpg', detalle: 'Feldespato verde agua' },
            { nombre: 'Turmalina Negra', img: 'Turmalina Negra.png', detalle: 'Borosilicato protector' },
            { nombre: 'Lepidolita', img: 'Lepidolita.png', detalle: 'Mica litio violeta' },
            { nombre: 'Turmalina Rosa', img: 'Turmalina Rosa.jpg', detalle: 'Elbaíta rosa del corazón' }
        ],
        chile: [
            { nombre: 'Fosfosiderita', img: 'Fosfosiderita.png', detalle: 'Fosfato lila delicado' }
        ],
        china: [
            { nombre: 'Fluorita Multicolor', img: 'Fluorita Multicolor.jpg', detalle: 'Fluoruro con bandas de color' },
            { nombre: 'Cinabrio', img: 'Cinabrio.jpg', detalle: 'Sulfuro de mercurio rojo' }
        ],
        colombia: [
            { nombre: 'Esmeralda en Matriz', img: 'Esmeralda en matriz.png', detalle: 'Berilo verde en roca madre' }
        ],
        congo: [
            { nombre: 'Cobaltocalcita', img: 'Cobaltocalcita.jpg', detalle: 'Rosa intenso de cobalto' },
            { nombre: 'Malaquita', img: 'Malaquita.jpg', detalle: 'Carbonato de cobre bandeado' }
        ],
        dominicana: [
            { nombre: 'Larimar', img: 'Larimar.png', detalle: 'Pectolita azul caribeña' }
        ],
        espana: [
            { nombre: 'Aragonita', img: 'Aragonita.png', detalle: 'Carbonato en cristales tabulares' }
        ],
        eeuu: [
            { nombre: 'Unakita', img: 'Unakita.png', detalle: 'Epidota + feldespato rosa' }
        ],
        etiopia: [
            { nombre: 'Ópalo Etíope', img: 'Ópalo Etíope.png', detalle: 'Sílice con juego de colores' }
        ],
        groenlandia: [
            { nombre: 'Nuummita', img: 'Nuummita.jpg', detalle: 'Antofilita iridiscente milenaria' }
        ],
        india: [
            { nombre: 'Fucsita con Rubí', img: 'Fucsita con Rubí.jpg', detalle: 'Mica verde con corindón' },
            { nombre: 'Granate', img: 'Granate.jpg', detalle: 'Silicato rojo profundo' },
            { nombre: 'Iolita', img: 'Iolita.jpg', detalle: 'Cordierita violeta pleocroica' },
            { nombre: 'Labradorita Blanca', img: 'Labradorita Blanca.jpg', detalle: 'Moonstone arcoíris' },
            { nombre: 'Piedra Sol', img: 'Piedra Sol.jpg', detalle: 'Feldespato con aventurescencia' },
            { nombre: 'Rubí en matriz', img: 'Rubí en matriz.png', detalle: 'Corindón rojo en roca madre' },
            { nombre: 'Cavansita', img: 'Cavansita.jpg', detalle: 'Vanadio-silicato azul intenso' },
            { nombre: 'Cianita con Rubí', img: 'Cianita con Rubí.jpg', detalle: 'Silicato azul con corindón' },
            { nombre: 'Rubí', img: 'Rubí.jpg', detalle: 'Corindón rojo noble' }
        ],
        indonesia: [
            { nombre: 'Jaspe Abejorro', img: 'Jaspe Abejorro.jpg', detalle: 'Volcánico amarillo y negro' },
            { nombre: 'Coral Fosilizado', img: 'Coral Fosilizado.jpg', detalle: 'Coral antiguo mineralizado' }
        ],
        iran: [
            { nombre: 'Turquesa', img: 'Turquesa.jpg', detalle: 'Fosfato de cobre milenario' }
        ],
        madagascar: [
            { nombre: 'Jaspe Océano', img: 'Jaspe Océano.jpg', detalle: 'Orbicular con patrones marinos' },
            { nombre: 'Labradorita Negra', img: 'Labradorita Negra.jpg', detalle: 'Iridiscencia espectral' },
            { nombre: 'Ortoclasa', img: 'Ortoclasa.jpg', detalle: 'Feldespato dorado' },
            { nombre: 'Septaria', img: 'Septaria.png', detalle: 'Nódulo con vetas de calcita' },
            { nombre: 'Apatita', img: 'Apatita.jpg', detalle: 'Fosfato azul neón' }
        ],
        mali: [
            { nombre: 'Prehnita', img: 'Prehnita.jpg', detalle: 'Silicato verde translúcido' }
        ],
        marruecos: [
            { nombre: 'Azurita', img: 'Azurita.png', detalle: 'Carbonato de cobre azul' }
        ],
        mexico: [
            { nombre: 'Calcopirita', img: 'Calcopirita.jpg', detalle: 'Sulfuro iridiscente' },
            { nombre: 'Jaspe Imperial', img: 'Jaspe Imperial.jpg', detalle: 'Calcedonia roja imperial' },
            { nombre: 'Obsidiana Arcoíris', img: 'Obsidiana Arcoíris.png', detalle: 'Vidrio volcánico iridiscente' },
            { nombre: 'Obsidiana Caoba', img: 'Obsidiana Caoba.png', detalle: 'Vidrio volcánico con hierro' },
            { nombre: 'Ópalo de Fuego', img: 'Ópalo de Fuego.jpg', detalle: 'Sílice naranja brillante' },
            { nombre: 'Riolita', img: 'Riolita.png', detalle: 'Volcánica con patrones orbiculares' },
            { nombre: 'Calcita Miel', img: 'Calcita Miel.jpg', detalle: 'Carbonato dorado translúcido' },
            { nombre: 'Calcita Naranja', img: 'Calcita Naranja.jpg', detalle: 'Carbonato naranja vibrante' },
            { nombre: 'Obsidiana Dorada', img: 'Obsidiana Dorada.png', detalle: 'Vidrio volcánico con sheen dorado' },
            { nombre: 'Obsidiana Plateada', img: 'Obsidiana Plateada.png', detalle: 'Vidrio volcánico con sheen plata' },
            { nombre: 'Jaspe Leopardita', img: 'Jaspe Leopardita.png', detalle: 'Riolita con manchas orbiculares' }
        ],
        namibia: [
            { nombre: 'Pietersita', img: 'Pietersita.png', detalle: 'Ojo de halcón brechado' },
            { nombre: 'Shattuckita', img: 'Shattuckita.jpg', detalle: 'Silicato de cobre azul intenso' }
        ],
        noruega: [
            { nombre: 'Larvikita', img: 'Larvikita.jpg', detalle: 'Feldespato con labradorescencia' },
            { nombre: 'Thulite', img: 'Thulite.jpg', detalle: 'Zoisita rosa noruega' }
        ],
        pakistan: [
            { nombre: 'K2', img: 'K2.jpg', detalle: 'Granito con azurita del Karakorum' },
            { nombre: 'Calcita Caribe', img: 'Calcita Caribe.png', detalle: 'Carbonato azul vibrante' }
        ],
        peru: [
            { nombre: 'Crisocola', img: 'Crisocola.jpg', detalle: 'Silicato de cobre andino' },
            { nombre: 'Pirita', img: 'Pirita.jpg', detalle: 'Sulfuro de hierro dorado' },
            { nombre: 'Serpentina', img: 'Serpentina.png', detalle: 'Silicato verde serpentiforme' }
        ],
        rusia: [
            { nombre: 'Serafinita', img: 'Serafinita.png', detalle: 'Clinocloro con plumas plateadas' },
            { nombre: 'Charoita', img: 'Charoita.jpg', detalle: 'Silicato púrpura del lago Baikal' }
        ],
        srilanka: [
            { nombre: 'Piedra Luna', img: 'Piedra Luna.jpg', detalle: 'Feldespato con adularescencia' }
        ],
        sudafrica: [
            { nombre: 'Ojo de Halcón', img: 'Ojo de Halcón.png', detalle: 'Cuarzo fibroso azul' },
            { nombre: 'Ojo de Tigre', img: 'Ojo de Tigre.png', detalle: 'Cuarzo fibroso dorado' },
            { nombre: 'Ojo de Buey', img: 'Ojo de Buey.png', detalle: 'Cuarzo fibroso rojo' },
            { nombre: 'Sugilita', img: 'Sugilita.jpg', detalle: 'Ciclosilicato púrpura raro' }
        ],
        tanzania: [
            { nombre: 'Zoisita con Rubí', img: 'Zoisita con Rubí.jpg', detalle: 'Zoisita verde con corindón' },
            { nombre: 'Tanzanita', img: 'Tanzanita.jpg', detalle: 'Zoisita azul violáceo' }
        ]
    };

    var NOMBRES_REGION = {
        afganistan: 'Afganistán', argentina: 'Argentina', australia: 'Australia',
        bolivia: 'Bolivia', brasil: 'Brasil', chile: 'Chile', china: 'China',
        colombia: 'Colombia', congo: 'Congo', dominicana: 'Rep. Dominicana',
        espana: 'España', eeuu: 'Estados Unidos', etiopia: 'Etiopía',
        groenlandia: 'Groenlandia', india: 'India', indonesia: 'Indonesia',
        iran: 'Irán', madagascar: 'Madagascar', mali: 'Mali',
        marruecos: 'Marruecos', mexico: 'México', namibia: 'Namibia',
        noruega: 'Noruega', pakistan: 'Pakistán', peru: 'Perú',
        rusia: 'Rusia', srilanka: 'Sri Lanka', sudafrica: 'Sudáfrica',
        tanzania: 'Tanzania'
    };

    function showTooltipMap(dot, region) {
        var piedras = PIEDRAS_POR_REGION[region];
        if (!piedras) return;

        document.querySelectorAll('.mapa-dot.active').forEach(function(d) { d.classList.remove('active'); });
        dot.classList.add('active');
        activeRegion = region;

        tooltipRegion.textContent = NOMBRES_REGION[region] || region;
        tooltipCount.textContent = piedras.length + (piedras.length === 1 ? ' reliquia' : ' reliquias');

        tooltipStones.innerHTML = piedras.map(function(p) {
            var slug = p.nombre.toLowerCase().replace(/\s+/g, '-');
            return '<a href="piedra.html?slug=' + slug + '" class="mapa-tooltip-stone" style="text-decoration:none;color:inherit;cursor:pointer">' +
                '<img src="img/ColeccionPiedras/' + p.img + '" alt="' + p.nombre + '" loading="lazy">' +
                '<div>' +
                    '<div class="mapa-tooltip-stone-name">' + p.nombre + '</div>' +
                    '<div class="mapa-tooltip-stone-detail">' + p.detalle + '</div>' +
                '</div>' +
            '</a>';
        }).join('');

        var wrapRect = mapaWrap.getBoundingClientRect();
        var dotRect = dot.getBoundingClientRect();
        var posX = dotRect.left - wrapRect.left + dotRect.width + 12;
        var posY = dotRect.top - wrapRect.top - 10;

        tooltip.classList.add('active');

        requestAnimationFrame(function() {
            var tRect = tooltip.getBoundingClientRect();
            if (posX + tRect.width > wrapRect.width) {
                posX = dotRect.left - wrapRect.left - tRect.width - 12;
            }
            if (posY + tRect.height > wrapRect.height) {
                posY = wrapRect.height - tRect.height - 10;
            }
            if (posY < 0) posY = 10;
            tooltip.style.left = posX + 'px';
            tooltip.style.top = posY + 'px';
        });

        tooltip.style.left = posX + 'px';
        tooltip.style.top = posY + 'px';
    }

    function hideTooltipMap() {
        tooltip.classList.remove('active');
        document.querySelectorAll('.mapa-dot.active').forEach(function(d) { d.classList.remove('active'); });
        activeRegion = null;
    }

    dots.forEach(function(dot) {
        var region = dot.dataset.region;

        dot.addEventListener('click', function(e) {
            e.stopPropagation();
            if (activeRegion === region) {
                hideTooltipMap();
            } else {
                showTooltipMap(dot, region);
            }
        });

        dot.addEventListener('mouseenter', function() {
            if (!activeRegion) showTooltipMap(dot, region);
        });

        dot.addEventListener('mouseleave', function() {
            if (activeRegion === region && !tooltip.matches(':hover')) {
                hideTooltipMap();
            }
        });
    });

    tooltip.addEventListener('mouseleave', hideTooltipMap);
    document.addEventListener('click', function(e) {
        if (!tooltip.contains(e.target) && !e.target.closest('.mapa-dot')) {
            hideTooltipMap();
        }
    });
})();

// ====== ENERGIAS CROMATICAS — MAP SYSTEM ======
(function initCromaticasMap() {
    var cards = document.querySelectorAll('.color-card[data-color]');
    if (!cards.length || typeof PIEDRAS === 'undefined') return;

    // Usa PIEDRA_IMG_MAP de data.js

    function getStonesWithImages(color) {
        return PIEDRAS.filter(function(p) { return p.color === color && PIEDRA_IMG_MAP[p.nombre]; });
    }

    // Setup: wrap grid in map container + create SVG
    var grid = document.querySelector('.colores-grid');
    var mapWrap = document.createElement('div');
    mapWrap.className = 'cromaticas-map';
    grid.parentNode.insertBefore(mapWrap, grid);
    mapWrap.appendChild(grid);

    var svgNS = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('class', 'cromaticas-svg');
    mapWrap.insertBefore(svg, grid);

    // State
    var activeColor = null;
    var activeStone = null;
    var deployed = [];
    var timers = [];
    var infoPanel = null;

    function getCenter(el) {
        var r = el.getBoundingClientRect();
        var p = mapWrap.getBoundingClientRect();
        return { x: r.left + r.width / 2 - p.left, y: r.top + r.height / 2 - p.top };
    }

    function computePositions(origin, count, containerW, containerH) {
        var radius = 150 + Math.max(0, count - 4) * 18;
        var spread = Math.min(count * 40, 240);
        var center = 90; // downward
        var start = center - spread / 2;
        var positions = [];
        for (var i = 0; i < count; i++) {
            var angle = count === 1 ? center : start + (spread / (count - 1)) * i;
            var rad = angle * Math.PI / 180;
            var x = origin.x + Math.cos(rad) * radius;
            var y = origin.y + Math.sin(rad) * radius;
            x = Math.max(45, Math.min(containerW - 45, x));
            y = Math.max(45, Math.min(containerH + 120, y));
            positions.push({ x: x, y: y });
        }
        return positions;
    }

    function buildMap(card) {
        var color = card.dataset.color;
        var stones = getStonesWithImages(color).slice(0, 8);
        if (!stones.length) return;

        var orb = card.querySelector('.color-orb');
        var origin = getCenter(orb);
        var wrapRect = mapWrap.getBoundingClientRect();
        var positions = computePositions(origin, stones.length, wrapRect.width, wrapRect.height);

        // Expand container to fit stones
        var maxY = 0;
        positions.forEach(function(p) { if (p.y > maxY) maxY = p.y; });
        mapWrap.style.minHeight = (maxY + 80) + 'px';

        // Update SVG size
        svg.setAttribute('width', wrapRect.width);
        svg.setAttribute('height', maxY + 80);
        svg.style.height = (maxY + 80) + 'px';

        stones.forEach(function(stone, i) {
            var pos = positions[i];

            // SVG line from origin to stone position
            var line = document.createElementNS(svgNS, 'line');
            line.setAttribute('x1', origin.x);
            line.setAttribute('y1', origin.y);
            line.setAttribute('x2', pos.x);
            line.setAttribute('y2', pos.y);
            var len = Math.sqrt(Math.pow(pos.x - origin.x, 2) + Math.pow(pos.y - origin.y, 2));
            line.setAttribute('stroke-dasharray', '6 4');
            line.setAttribute('stroke-dashoffset', len);
            line.style.strokeDashoffset = len + 'px';
            svg.appendChild(line);

            // Stone circle element
            var el = document.createElement('div');
            el.className = 'map-stone';
            el.style.left = pos.x + 'px';
            el.style.top = pos.y + 'px';
            el.dataset.idx = i;

            var circle = document.createElement('div');
            circle.className = 'map-stone-circle';
            var img = document.createElement('img');
            img.src = 'img/ColeccionPiedras/' + PIEDRA_IMG_MAP[stone.nombre];
            img.alt = stone.nombre;
            img.loading = 'lazy';
            circle.appendChild(img);

            var label = document.createElement('div');
            label.className = 'map-stone-label';
            label.textContent = stone.nombre;

            el.appendChild(circle);
            el.appendChild(label);
            mapWrap.appendChild(el);

            deployed.push({ line: line, el: el, stone: stone, pos: pos });

            // Staggered animation: draw line, then deploy stone
            timers.push(setTimeout(function() {
                line.style.strokeDashoffset = '0';
                line.classList.add('drawn');
            }, 60 + i * 90));

            timers.push(setTimeout(function() {
                el.classList.add('deployed');
            }, 200 + i * 110));

            // Click on stone → show info
            el.addEventListener('click', function(e) {
                e.stopPropagation();
                showStoneInfo(stone, pos, el);
            });
        });
    }

    function showStoneInfo(stone, pos, el) {
        // Toggle if same stone
        if (activeStone === el) {
            closeInfo();
            return;
        }
        closeInfo();
        activeStone = el;
        el.classList.add('active');

        if (!infoPanel) {
            infoPanel = document.createElement('div');
            infoPanel.className = 'stone-info-panel';
            mapWrap.appendChild(infoPanel);
        }

        infoPanel.innerHTML =
            '<div class="stone-info-header">' +
                '<div class="stone-info-name">' + stone.nombre + '</div>' +
                '<div class="stone-info-origin">' + stone.origen + ' &middot; ' + stone.color + '</div>' +
            '</div>' +
            '<div class="stone-info-body">' +
                '<div class="stone-info-desc">' + stone.descripcion + '</div>' +
                '<div class="stone-info-props">' + stone.propiedades + '</div>' +
            '</div>' +
            '<a href="piedra.html?slug=' + stone.slug + '" class="stone-info-cta">Ver reliquia &#x2192;</a>';

        // Position: to the right of stone, or left if near edge
        var wrapW = mapWrap.getBoundingClientRect().width;
        var panelW = 280;
        var left = pos.x + 45;
        if (left + panelW > wrapW - 20) left = pos.x - panelW - 45;
        if (left < 10) left = 10;
        infoPanel.style.left = left + 'px';
        infoPanel.style.top = (pos.y - 20) + 'px';

        // Force reflow then open
        infoPanel.offsetHeight;
        infoPanel.classList.add('open');
    }

    function closeInfo() {
        if (infoPanel) infoPanel.classList.remove('open');
        if (activeStone) activeStone.classList.remove('active');
        activeStone = null;
    }

    function expandCard(card) {
        if (activeColor === card) return;
        collapseAll();
        activeColor = card;
        card.classList.add('expanded');
        cards.forEach(function(c) { if (c !== card) c.classList.add('dimmed'); });
        var section = document.querySelector('.cromaticas');
        if (section) section.classList.add('color-active');
        buildMap(card);
    }

    function collapseAll() {
        timers.forEach(clearTimeout);
        timers = [];
        closeInfo();
        // Remove stones and lines
        deployed.forEach(function(d) {
            d.el.remove();
            d.line.remove();
        });
        deployed = [];
        cards.forEach(function(c) { c.classList.remove('expanded', 'dimmed'); });
        var section = document.querySelector('.cromaticas');
        if (section) section.classList.remove('color-active');
        mapWrap.style.minHeight = '';
        svg.style.height = '';
        activeColor = null;
    }

    // Click on color cards
    cards.forEach(function(card) {
        card.addEventListener('click', function(e) {
            e.stopPropagation();
            if (activeColor === card) {
                collapseAll();
            } else {
                expandCard(card);
            }
        });
    });

    // Close on outside click
    document.addEventListener('click', function(e) {
        if (activeColor && !e.target.closest('.cromaticas-map')) collapseAll();
    });

    // Close on resize
    var resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() { if (activeColor) collapseAll(); }, 200);
    });
})();
