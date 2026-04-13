# BRUJO EGIPCIO - Arquitectura Completa
## Handoff de Celia para Fidel
**Fecha:** 2026-04-01
**Cliente:** Jaime Spate
**Tipo:** E-commerce de piedras preciosas roladas premium

---

## 1. VISION DEL PROYECTO

E-commerce premium de piedras roladas con estetica egipcia mistica. La tienda debe transmitir exclusividad, misterio y valor de coleccion. El catalogo general muestra imagenes IA uniformes para coherencia visual; al entrar a cada piedra, se muestran las fotos reales con informacion detallada.

**Referencia de estilo:** FRESCON (interfaz limpia y minimalista) pero con paleta oscura/mistica.

---

## 2. IDENTIDAD VISUAL

### Paleta de colores

| Token CSS | Color | Hex | Uso |
|-----------|-------|-----|-----|
| `--bg-primary` | Negro profundo | `#0A0A0A` | Fondo principal |
| `--bg-secondary` | Negro suave | `#141414` | Cards, secciones alternas |
| `--bg-card` | Gris oscuro | `#1A1A1A` | Cards de producto |
| `--bg-card-hover` | Gris medio | `#222222` | Hover en cards |
| `--gold-primary` | Dorado egipcio | `#C5A028` | Titulos, bordes, acentos principales |
| `--gold-light` | Dorado claro | `#D4A853` | Hover dorado, textos secundarios dorados |
| `--gold-subtle` | Dorado sutil | `#C5A02833` | Bordes sutiles, separadores (20% opacidad) |
| `--purple-primary` | Purpura mistico | `#6B2FA0` | Badges, acentos secundarios |
| `--purple-deep` | Purpura profundo | `#4B0082` | Gradientes, fondos de seccion |
| `--purple-glow` | Purpura glow | `#6B2FA033` | Sombras, glows (20% opacidad) |
| `--blue-deep` | Azul profundo | `#1A3A6B` | Links, elementos interactivos |
| `--blue-bright` | Azul brillante | `#0066CC` | CTAs secundarios |
| `--turquoise` | Turquesa | `#00CED1` | Badges de rareza, highlights |
| `--text-primary` | Blanco | `#F5F5F5` | Texto principal |
| `--text-secondary` | Gris claro | `#A0A0A0` | Texto secundario |
| `--text-muted` | Gris medio | `#666666` | Texto terciario |
| `--success` | Verde exito | `#2ECC71` | Disponible, en stock |
| `--warning` | Naranja | `#F39C12` | Ultimas unidades |
| `--danger` | Rojo | `#E74C3C` | Agotado |

### Tipografia

| Uso | Fuente | Peso | Fallback |
|-----|--------|------|----------|
| Logo / H1 hero | Cinzel Decorative | 700 | serif |
| H2, H3, nombres de piedra | Cinzel | 600-700 | serif |
| Cuerpo, descripciones | Inter | 400-500 | sans-serif |
| Precios | Inter | 700 | sans-serif |
| Badges, etiquetas | Inter | 600 uppercase | sans-serif |

**Google Fonts import:**
```
Cinzel+Decorative:wght@700&family=Cinzel:wght@400;600;700&family=Inter:wght@400;500;600;700
```

### Efectos visuales
- **Glow dorado** en hover de cards: `box-shadow: 0 0 20px rgba(197, 160, 40, 0.15)`
- **Glow purpura** en elementos destacados: `box-shadow: 0 0 30px rgba(107, 47, 160, 0.2)`
- **Gradiente hero:** `linear-gradient(135deg, #0A0A0A 0%, #1A0A2E 50%, #0A0A0A 100%)`
- **Borde dorado sutil** en cards: `border: 1px solid rgba(197, 160, 40, 0.15)`
- **Transiciones:** `transition: all 0.3s ease` en cards y botones
- **Backdrop blur** en header: `backdrop-filter: blur(20px)`

---

## 3. ARQUITECTURA DE INFORMACION

### Mapa del sitio

```
/ (Home)
├── Header (fijo, blur)
│   ├── Logo "Brujo Egipcio"
│   ├── Nav: Catalogo | Nosotros | Contacto
│   ├── Buscador (icono → expand)
│   └── Carrito (icono + badge)
│
├── Hero Section
│   ├── Titulo principal
│   ├── Subtitulo
│   └── CTA "Explorar Coleccion"
│
├── Catalogo (seccion principal)
│   ├── Filtros: Todos | Por color | Por origen | Por precio | Por rareza
│   ├── Ordenar: Relevancia | Precio ↑↓ | A-Z | Mas recientes
│   ├── Grid de productos (3 cols desktop, 2 mobile)
│   │   └── Card de producto (imagen IA + nombre + precio + badge)
│   └── "Cargar mas" o scroll infinito
│
├── Sobre Nosotros (breve)
│   ├── Historia de Brujo Egipcio
│   ├── Compromiso con autenticidad
│   └── Foto/imagen de Jaime
│
├── Contacto
│   ├── WhatsApp directo
│   ├── Instagram
│   └── Email
│
├── Footer
│   ├── Logo
│   ├── Links rapidos
│   ├── Redes sociales
│   └── Copyright
│
└── /piedra/[slug] (Pagina de detalle)
    ├── Galeria de fotos reales (swiper/carousel)
    ├── Nombre completo
    ├── Origen
    ├── Precio
    ├── Descripcion breve (1 linea potente)
    ├── Caracteristicas clave (3 bullets)
    ├── Propiedades
    ├── Tamano y peso
    ├── Boton "Consultar por WhatsApp"
    ├── Boton "Agregar al carrito" (si aplica)
    └── Piedras relacionadas (3-4 sugerencias)
```

### Jerarquia visual (orden de atencion)

1. **Imagen de la piedra** (protagonista absoluta)
2. **Nombre** (tipografia Cinzel, dorado)
3. **Precio** (Inter bold, blanco)
4. **Badge de rareza** (si aplica: "Rara", "Exclusiva", "Unica")
5. **Descripcion** (texto secundario)

---

## 4. STACK TECNICO RECOMENDADO

| Capa | Tecnologia | Justificacion |
|------|-----------|---------------|
| Framework | Vanilla HTML/CSS/JS | Simplicidad, sin build step, rapido de iterar. Similar a otros proyectos del equipo |
| Datos | Airtable | Consistente con ecosistema del equipo. Catalogo manejable por cliente |
| Hosting | Vercel | Deploy inmediato, SSL, CDN global |
| Imagenes | Carpeta local + URLs Airtable | IA para catalogo, reales en Airtable para detalle |
| Contacto | WhatsApp API link | Sin backend, directo |

### Estructura de archivos

```
brujo-egipcio/
├── index.html              # Pagina principal (home + catalogo)
├── piedra.html             # Pagina de detalle de piedra
├── css/
│   └── styles.css          # Estilos globales con variables CSS
├── js/
│   ├── app.js              # Logica principal, inicializacion
│   ├── catalogo.js         # Render de catalogo, filtros, busqueda
│   ├── piedra.js           # Render de detalle de piedra
│   └── airtable.js         # Conexion con Airtable API
├── img/
│   ├── logo.png            # Logo Brujo Egipcio
│   ├── hero-bg.jpg         # Fondo hero
│   ├── piedras-ia/         # Imagenes IA para catalogo (60 imgs)
│   └── og-image.jpg        # Open Graph
├── maquetas/               # Documentos de arquitectura
└── vercel.json             # Config de deploy
```

---

## 5. MODELO DE DATOS (AIRTABLE)

### Tabla: Piedras

| Campo | Tipo | Descripcion | Ejemplo |
|-------|------|-------------|---------|
| `nombre` | Single line text | Nombre oficial | "Charoita" |
| `slug` | Single line text | URL-friendly, unico | "charoita" |
| `nombre_premium` | Single line text | Naming premium (opcional) | "Llama Violeta de Siberia" |
| `origen_pais` | Single line text | Pais de origen | "Rusia" |
| `origen_mina` | Single line text | Mina especifica (opcional) | "Murun Massif" |
| `descripcion_breve` | Single line text | 1 linea potente | "Piedra unica con patrones violetas hipnoticos..." |
| `descripcion_larga` | Long text | Descripcion completa para detalle | Texto largo |
| `caracteristica_1` | Single line text | Bullet visual | "Tonalidad morado profundo con vetas dinamicas" |
| `caracteristica_2` | Single line text | Bullet material | "Alta rareza a nivel global" |
| `caracteristica_3` | Single line text | Bullet calidad | "Acabado pulido de alto brillo" |
| `propiedades` | Single line text | Sin esoterismo cliche | "Asociada a transformacion personal y claridad mental" |
| `tamano` | Single line text | Medida aprox | "3 cm aprox" |
| `peso` | Single line text | En gramos | "32 gramos" |
| `precio` | Number (currency) | Precio en CLP | 25000 |
| `precio_display` | Single line text | Precio formateado (opcional) | "$25.000" |
| `categoria` | Single select | Tipo de piedra | "Cuarzo", "Jaspe", "Opalo", "Turmalina", "Otra" |
| `color_principal` | Single select | Para filtro por color | "Violeta", "Azul", "Verde", "Rosa", "Dorado", "Negro", "Multicolor" |
| `rareza` | Single select | Nivel de rareza | "Comun", "Poco comun", "Rara", "Muy rara", "Exclusiva" |
| `stock` | Number | Unidades disponibles | 3 |
| `disponible` | Checkbox | Si se muestra en catalogo | true |
| `destacada` | Checkbox | Para mostrar primero | false |
| `imagen_ia` | Attachment | Imagen IA para catalogo | URL |
| `fotos_reales` | Attachment (multiple) | Fotos reales para detalle | URLs |
| `orden` | Number | Orden en catalogo | 1 |
| `fecha_agregada` | Date | Cuando se agrego | 2026-04-01 |

---

## 6. COMPONENTES UI

### 6.1 Header

```
┌─────────────────────────────────────────────────────────────┐
│  [Ojo de Horus]  BRUJO EGIPCIO    Catalogo  Nosotros  Contacto    🔍  🛒(2)  │
└─────────────────────────────────────────────────────────────┘
```

- **Posicion:** Fijo, top 0, z-index alto
- **Fondo:** `rgba(10, 10, 10, 0.85)` + `backdrop-filter: blur(20px)`
- **Logo:** Icono Ojo de Horus SVG (dorado) + "BRUJO EGIPCIO" en Cinzel Decorative
- **Nav:** Links con hover dorado, transicion suave
- **Buscador:** Icono que expande input con animacion
- **Responsive mobile:** Hamburguesa → sidebar overlay

### 6.2 Hero Section

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│           Piedras que guardan                                │
│           el poder de la Tierra                              │
│                                                             │
│     Coleccion premium de gemas naturales                    │
│     seleccionadas a mano                                    │
│                                                             │
│           [ Explorar Coleccion ]                            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

- **Fondo:** Gradiente oscuro con textura sutil (patron egipcio o particulas)
- **Titulo:** Cinzel Decorative, dorado, 3.5rem desktop / 2rem mobile
- **Subtitulo:** Inter, gris claro, 1.2rem
- **CTA:** Borde dorado, texto dorado, hover relleno dorado con texto negro
- **Altura:** 70vh desktop, 60vh mobile

### 6.3 Card de Producto (Catalogo)

```
┌───────────────────┐
│                   │
│   [Imagen IA]     │
│                   │
│                   │
├───────────────────┤
│  CHAROITA         │
│  Rusia            │
│                   │
│  Piedra unica con │
│  patrones violetas│
│  hipnoticos...    │
│                   │
│  $25.000     RARA │
└───────────────────┘
```

- **Imagen:** aspect-ratio 1:1, object-fit cover, border-radius 8px top
- **Nombre:** Cinzel 600, dorado, 1.1rem
- **Origen:** Inter 400, gris claro, 0.85rem
- **Descripcion:** Inter 400, gris medio, 0.85rem, max 2 lineas con ellipsis
- **Precio:** Inter 700, blanco, 1.1rem, alineado izquierda
- **Badge rareza:** Pill pequeño, fondo purpura sutil, texto turquesa, alineado derecha
- **Hover:** Elevacion + glow dorado sutil + scale 1.02
- **Click:** Navega a `/piedra.html?id=[slug]`

### 6.4 Pagina de Detalle

```
┌─────────────────────────────────────────────────────────────┐
│  ← Volver al catalogo                                      │
├────────────────────────┬────────────────────────────────────┤
│                        │                                    │
│   [Foto real 1]        │  CHAROITA                          │
│                        │  "Llama Violeta de Siberia"        │
│   ○ ○ ● ○              │                                    │
│                        │  Origen: Rusia — Murun Massif      │
│   [Thumb] [Thumb]      │                                    │
│   [Thumb] [Thumb]      │  Piedra unica con patrones         │
│                        │  violetas hipnoticos, considerada  │
│                        │  una de las mas exclusivas del     │
│                        │  mundo.                            │
│                        │                                    │
│                        │  Caracteristicas:                  │
│                        │  • Tonalidad morado profundo       │
│                        │  • Alta rareza a nivel global      │
│                        │  • Acabado pulido de alto brillo   │
│                        │                                    │
│                        │  Propiedades:                      │
│                        │  Asociada a transformacion         │
│                        │  personal y claridad mental        │
│                        │                                    │
│                        │  3 cm aprox / 32 gramos            │
│                        │                                    │
│                        │  $25.000                           │
│                        │                                    │
│                        │  [ Consultar por WhatsApp ]        │
│                        │  [ Agregar al Carrito ]            │
├────────────────────────┴────────────────────────────────────┤
│  Tambien te puede interesar                                 │
│  [Card] [Card] [Card] [Card]                                │
└─────────────────────────────────────────────────────────────┘
```

- **Layout:** 2 columnas desktop (50/50), 1 columna mobile (foto arriba, info abajo)
- **Galeria:** Carousel/swiper con thumbnails, fotos reales del Airtable
- **Nombre:** Cinzel 700, dorado, 2rem
- **Nombre premium:** Cinzel 400 italic, dorado claro, 1.1rem (debajo del nombre)
- **Origen:** Inter 500, gris claro, con iconito de ubicacion
- **Descripcion breve:** Inter 400, blanco, 1rem, destacada
- **Caracteristicas:** Lista con bullet dorado, Inter 400, gris claro
- **Propiedades:** Inter 400 italic, gris medio, con linea dorada sutil arriba
- **Tamano/Peso:** Inter 500, gris claro, con iconos
- **Precio:** Inter 700, blanco, 1.8rem
- **CTA WhatsApp:** Boton solido verde WhatsApp (#25D366), texto blanco, icono WA
- **CTA Carrito:** Boton borde dorado, texto dorado (secundario)
- **Relacionadas:** Grid 4 cols con cards mini

### 6.5 Filtros del Catalogo

```
┌─────────────────────────────────────────────────────────────┐
│  Todos   Color ▼   Origen ▼   Precio ▼   Rareza ▼  | Ordenar ▼  │
└─────────────────────────────────────────────────────────────┘
```

- **Estilo:** Pills/tabs con fondo transparente, borde dorado sutil
- **Activo:** Fondo dorado, texto negro
- **Dropdowns:** Fondo #1A1A1A, borde dorado sutil
- **Filtro por color:** Circulos de color + nombre
- **Filtro por precio:** Rangos predefinidos ($0-15k, $15k-30k, $30k-50k, $50k+)
- **Mobile:** Boton "Filtrar" que abre modal fullscreen

### 6.6 Buscador

- Input con borde dorado sutil, icono lupa
- Busqueda en tiempo real (debounce 300ms)
- Busca en: nombre, origen, descripcion
- Resultados: filtra el grid existente
- Sin resultados: "No encontramos piedras con ese nombre. Prueba otro termino."

---

## 7. ESTADOS UI

### Card de producto
| Estado | Visual |
|--------|--------|
| Default | Card con imagen, info basica |
| Hover | Elevacion + glow dorado + scale 1.02 |
| Loading | Skeleton con shimmer dorado |
| Sin stock | Overlay semi-transparente + badge "Agotado" |
| Pocas unidades | Badge naranja "Ultimas unidades" |

### Catalogo
| Estado | Visual |
|--------|--------|
| Cargando | Grid de 6 skeletons con shimmer |
| Vacio (filtro) | Icono de gema + "No encontramos piedras con esos filtros" + boton limpiar |
| Error Airtable | "No pudimos cargar el catalogo. Intenta de nuevo." + boton reintentar |
| Exito | Grid de cards renderizadas |

### Detalle de piedra
| Estado | Visual |
|--------|--------|
| Cargando | Skeleton 2 columnas |
| Exito | Contenido completo |
| Error / No existe | "Esta piedra no esta disponible" + link volver al catalogo |

---

## 8. RESPONSIVE BREAKPOINTS

| Breakpoint | Ancho | Grid catalogo | Layout detalle | Header |
|-----------|-------|--------------|----------------|--------|
| Desktop | > 1024px | 3 columnas | 2 columnas 50/50 | Nav completo |
| Tablet | 768-1024px | 2 columnas | 2 columnas 40/60 | Nav completo |
| Mobile | < 768px | 2 columnas | 1 columna (stacked) | Hamburguesa |
| Mobile S | < 480px | 1 columna | 1 columna | Hamburguesa |

### Decisiones responsive
- **Mobile:** Hero height 50vh, titulo 1.8rem
- **Mobile:** Filtros colapsan en boton "Filtros" que abre modal
- **Mobile:** Cards muestran precio mas prominente
- **Mobile:** Detalle: galeria full-width arriba, info abajo con scroll
- **Mobile:** CTA WhatsApp se convierte en boton flotante fijo al bottom

---

## 9. COPY DEFINITIVO

### Hero
- **Titulo:** "Piedras que guardan el poder de la Tierra"
- **Subtitulo:** "Coleccion premium de gemas naturales seleccionadas a mano"
- **CTA:** "Explorar Coleccion"

### Catalogo
- **Titulo seccion:** "Nuestra Coleccion"
- **Filtro activo todos:** "Todas las piedras"
- **Sin resultados:** "No encontramos piedras con esos filtros. Prueba con otra combinacion."
- **Busqueda sin resultados:** "No encontramos piedras con ese nombre. Prueba otro termino."
- **Loading:** (skeleton, sin texto)

### Detalle
- **Volver:** "← Volver al catalogo"
- **Seccion caracteristicas:** "Caracteristicas"
- **Seccion propiedades:** "Propiedades"
- **Seccion tamano:** (icono regla) + (icono balanza)
- **CTA WhatsApp:** "Consultar por WhatsApp"
- **CTA Carrito:** "Agregar al Carrito"
- **Relacionadas:** "Tambien te puede interesar"
- **No disponible:** "Esta piedra no esta disponible actualmente"

### Sobre Nosotros
- **Titulo:** "Brujo Egipcio"
- **Texto:** "Seleccionamos las piedras mas extraordinarias del mundo para coleccionistas que valoran la autenticidad y la rareza. Cada pieza es unica, verificada y lista para ser parte de tu coleccion."

### Footer
- **Copyright:** "2026 Brujo Egipcio. Todos los derechos reservados."
- **Contacto:** "Contactanos por WhatsApp para consultas personalizadas"

---

## 10. CATALOGO COMPLETO DE PIEDRAS (60)

Lista oficial para cargar en Airtable:

| # | Nombre | Slug |
|---|--------|------|
| 1 | Amazonita | amazonita |
| 2 | Apatita Azul | apatita-azul |
| 3 | Aragonita Beige | aragonita-beige |
| 4 | Atlantisita | atlantisita |
| 5 | Azurita | azurita |
| 6 | Bolivianita | bolivianita |
| 7 | Calcita Caribe | calcita-caribe |
| 8 | Calcopirita | calcopirita |
| 9 | Charoita | charoita |
| 10 | Cianita Azul | cianita-azul |
| 11 | Cobaltocalcita | cobaltocalcita |
| 12 | Crisocola | crisocola |
| 13 | Crisoprasa | crisoprasa |
| 14 | Cuarzo Hematoide | cuarzo-hematoide |
| 15 | Cuarzo Rosa | cuarzo-rosa |
| 16 | Cuarzo Rutilado Dorado | cuarzo-rutilado-dorado |
| 17 | Cuarzo Rutilado Plateado | cuarzo-rutilado-plateado |
| 18 | Diopsido Cromado | diopsido-cromado |
| 19 | Esmeralda en Matriz | esmeralda-en-matriz |
| 20 | Fluorita | fluorita |
| 21 | Fluorita Arcoiris | fluorita-arcoiris |
| 22 | Fosfosiderita | fosfosiderita |
| 23 | Fucsita con Rubi | fucsita-con-rubi |
| 24 | Granate | granate |
| 25 | Hackmanita | hackmanita |
| 26 | Iolita | iolita |
| 27 | Jaspe Abejorro | jaspe-abejorro |
| 28 | Jaspe Imperial | jaspe-imperial |
| 29 | Jaspe Oceano | jaspe-oceano |
| 30 | K2 | k2 |
| 31 | Labradorita | labradorita |
| 32 | Labradorita Blanca | labradorita-blanca |
| 33 | Labradorita Espectrolita | labradorita-espectrolita |
| 34 | Lapislazuli | lapislazuli |
| 35 | Larimar | larimar |
| 36 | Larvikita | larvikita |
| 37 | Malaquita | malaquita |
| 38 | Nuummita | nuummita |
| 39 | Obsidiana Arcoiris | obsidiana-arcoiris |
| 40 | Obsidiana Caoba | obsidiana-caoba |
| 41 | Opalo Dendritico | opalo-dendritico |
| 42 | Opalo de Fuego | opalo-de-fuego |
| 43 | Opalo Etiope | opalo-etiope |
| 44 | Ortoclasa | ortoclasa |
| 45 | Piedra Luna | piedra-luna |
| 46 | Piedra Sol | piedra-sol |
| 47 | Pietersita | pietersita |
| 48 | Pirita | pirita |
| 49 | Prehnita | prehnita |
| 50 | Rodocrosita | rodocrosita |
| 51 | Rodonita | rodonita |
| 52 | Rubi | rubi |
| 53 | Rubi en Matriz | rubi-en-matriz |
| 54 | Serafinita | serafinita |
| 55 | Shattuckita | shattuckita |
| 56 | Sugilita | sugilita |
| 57 | Tanzanita | tanzanita |
| 58 | Turmalina Negra | turmalina-negra |
| 59 | Turmalina Rosa | turmalina-rosa |
| 60 | Turquesa | turquesa |

---

## 11. API / AIRTABLE

### Endpoint de lectura

```
GET https://api.airtable.com/v0/{BASE_ID}/Piedras
Headers: Authorization: Bearer {AIRTABLE_TOKEN}
```

**Params catalogo:**
- `filterByFormula={disponible}=TRUE()`
- `sort[0][field]=orden&sort[0][direction]=asc`
- `fields[]=nombre&fields[]=slug&fields[]=origen_pais&fields[]=descripcion_breve&fields[]=precio&fields[]=rareza&fields[]=color_principal&fields[]=stock&fields[]=imagen_ia&fields[]=destacada`

**Params detalle (por slug):**
- `filterByFormula={slug}="charoita"`
- Todos los campos

### Seguridad
- Token de Airtable: read-only, scope limitado a tabla Piedras
- Token expuesto en frontend (aceptable para read-only de catalogo publico)
- NO exponer token de escritura en frontend

---

## 12. FLUJOS DE USUARIO

### Flujo principal: Explorar y consultar
1. Usuario llega a home → ve hero
2. Scroll o click CTA → ve catalogo
3. Puede filtrar por color/origen/precio/rareza
4. Click en card → navega a detalle
5. Ve fotos reales + info completa
6. Click "Consultar por WhatsApp" → abre WA con mensaje pre-armado
7. O click "Volver al catalogo" → regresa

### Mensaje WhatsApp pre-armado
```
Hola! Me interesa la piedra [NOMBRE] ($[PRECIO]). Me gustaria saber mas detalles. Vi tu catalogo en Brujo Egipcio.
```

---

## 13. SEO Y META TAGS

### Home
```html
<title>Brujo Egipcio | Piedras Preciosas Roladas Premium</title>
<meta name="description" content="Coleccion exclusiva de piedras preciosas roladas. Amatista, lapislazuli, labradorita y mas. Gemas naturales seleccionadas a mano para coleccionistas.">
<meta property="og:title" content="Brujo Egipcio — Piedras Preciosas Premium">
<meta property="og:description" content="Gemas naturales seleccionadas a mano. Coleccion exclusiva.">
<meta property="og:image" content="/img/og-image.jpg">
```

### Detalle (dinamico)
```html
<title>[Nombre Piedra] | Brujo Egipcio</title>
<meta name="description" content="[descripcion_breve]. Origen: [origen]. [tamano] / [peso]. Piedra premium seleccionada a mano.">
```

---

## 14. CHECKLIST DE ENTREGA PARA FIDEL

- [ ] Variables CSS con todos los tokens de la paleta
- [ ] Google Fonts cargadas (Cinzel Decorative, Cinzel, Inter)
- [ ] Header fijo con blur, responsive con hamburguesa mobile
- [ ] Hero con gradiente, copy definitivo, CTA
- [ ] Conexion Airtable read-only funcionando
- [ ] Grid de catalogo responsive (3/2/1 columnas)
- [ ] Cards con imagen IA, nombre, origen, descripcion, precio, badge rareza
- [ ] Filtros funcionales (color, origen, precio, rareza)
- [ ] Buscador con debounce
- [ ] Pagina de detalle con galeria de fotos reales
- [ ] Toda la info de la piedra renderizada segun formato
- [ ] Boton WhatsApp con mensaje pre-armado
- [ ] Seccion "Tambien te puede interesar" con 4 piedras relacionadas
- [ ] Estados: loading (skeleton), error, vacio, sin stock
- [ ] Sobre Nosotros con copy definitivo
- [ ] Footer con links y copyright
- [ ] Meta tags SEO (home + detalle dinamico)
- [ ] Responsive completo (desktop/tablet/mobile)
- [ ] Transiciones y hover effects segun spec
- [ ] Favicon (Ojo de Horus mini)

---

## 15. PRIORIDADES DE IMPLEMENTACION

### Fase 1 (MVP) — Prioridad Alta
1. Estructura HTML + CSS con variables de diseno
2. Header + Hero
3. Conexion Airtable + render de catalogo
4. Cards de producto con imagenes IA
5. Pagina de detalle con fotos reales
6. Boton WhatsApp funcional
7. Responsive basico

### Fase 2 — Prioridad Media
8. Filtros y buscador
9. Skeleton loading states
10. Seccion Sobre Nosotros
11. Footer completo
12. SEO meta tags
13. Piedras relacionadas en detalle

### Fase 3 — Prioridad Baja (post-lanzamiento)
14. Carrito lateral (si se decide venta online)
15. Animaciones avanzadas (parallax, scroll reveal)
16. PWA / offline
17. Analytics (GA4 eventos)

---

*Documento generado por Celia — Arquitecta del equipo*
*Listo para handoff a Fidel*
