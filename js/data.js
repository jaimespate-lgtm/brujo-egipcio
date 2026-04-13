// ============================================
// BRUJO EGIPCIO — Base de datos de piedras
// Fuente: hardcoded (migrar a Airtable)
// ============================================

const PIEDRAS = [
  {
    nombre: "Amazonita",
    slug: "amazonita",
    origen: "Brasil",
    mina: "Minas Gerais",
    color: "Verde",
    rareza: "Poco común",
    precio: 12000,
    tamano: "3 cm aprox",
    peso: "28 gramos",
    descripción: "Verde agua con destellos de esperanza. Su tonalidad evoca los rios profundos de la Amazonia.",
    caracteristicas: ["Verde turquesa con vetas blancas naturales", "Brillo vitreo con acabado suave", "Excelente grado de pulido"],
    propiedades: "Asociada a la armonía emocional y la comunicación fluida.",
    educativo: {
      composición: "Microclina (KAlSi₃O₈), variedad de feldespato potásico con trazas de plomo y agua que generan su color",
      dureza: "6 - 6.5",
      sistema: "Triclínico",
      porque_rara: "Solo un pequeño porcentaje de la microclina desarrolla esta coloración verde azulada. Los ejemplares de color intenso y uniforme son escasos",
      historia: "Su nombre proviene del rio Amazonas, aunque paradójicamente no se ha encontrado amazonita en esa region. Fue utilizada por los antiguos egipcios: se hallaron piezas talladas en la tumba de Tutankamon, incluyendo un anillo escarabajo. Los guerreros amazonas del mito griego supuestamente adornaban sus escudos con ella. El color verde azulado, que durante años se atribuyó al cobre, fue identificado en 1985 como resultado de pequeñas cantidades de plomo y agua atrapadas en la estructura cristalina durante su formación a altas temperaturas. Los principales yacimientos se encuentran en Minas Gerais (Brasil), los montes Ilmen (Rusia), Colorado (EE.UU.) y Madagascar."
    },
    stock: 5, disponible: true, destacada: false
  },
  {
    nombre: "Apatita",
    slug: "apatita",
    origen: "Madagascar",
    mina: "",
    color: "Azul",
    rareza: "Poco común",
    precio: 15000,
    tamano: "2.5 cm aprox",
    peso: "24 gramos",
    descripción: "Azul neon vibrante que parece iluminado desde su interior. Una gema que captura la mirada.",
    caracteristicas: ["Azul intenso con transparencia parcial", "Brillo vitreo excepcional", "Color natural sin tratamiento"],
    propiedades: "Vinculada a la claridad mental y la motivación personal.",
    educativo: { composición: "Fosfato de calcio", dureza: "5", sistema: "Hexagonal", porque_rara: "Los cristales de calidad gema son escasos" },
    stock: 4, disponible: true, destacada: false
  },
  {
    nombre: "Aragonita Beige",
    slug: "aragonita-beige",
    origen: "España",
    mina: "Molina de Aragón",
    color: "Dorado",
    rareza: "Común",
    precio: 8000,
    tamano: "3.5 cm aprox",
    peso: "35 gramos",
    descripción: "Tonos tierra cálidos que transmiten estabilidad. Un fragmento del corazón de Castilla.",
    caracteristicas: ["Tonalidad beige anaranjado cálido", "Formación estalagnmítica natural", "Textura organica única"],
    propiedades: "Relacionada con el enraizamiento y la paciencia.",
    educativo: { composición: "Carbonato de calcio", dureza: "3.5 - 4", sistema: "Ortorrómbico", porque_rara: "Comun pero las formas estalagmiticas pulidas son valoradas" },
    stock: 8, disponible: true, destacada: false
  },
  {
    nombre: "Atlantisita",
    slug: "atlantisita",
    origen: "Australia",
    mina: "Tasmania",
    color: "Multicolor",
    rareza: "Rara",
    precio: 22000,
    tamano: "3 cm aprox",
    peso: "30 gramos",
    descripción: "Fusion natural de serpentina verde y stichtita púrpura. Dos mundos en una sola piedra.",
    caracteristicas: ["Combinación verde-púrpura única", "Solo se encuentra en Tasmania", "Patrón organico irrepetible"],
    propiedades: "Simboliza la union de fuerzas opuestas y el equilibrio.",
    educativo: { composición: "Serpentina + Stichtita", dureza: "2.5 - 4", sistema: "Monoclínico/Trigonal", porque_rara: "Solo existe en una localidad de Tasmania, Australia" },
    stock: 2, disponible: true, destacada: false
  },
  {
    nombre: "Azurita",
    slug: "azurita",
    origen: "Marruecos",
    mina: "Mibladen",
    color: "Azul",
    rareza: "Poco común",
    precio: 18000,
    tamano: "2.5 cm aprox",
    peso: "26 gramos",
    descripción: "Azul profundo medieval que los pintores del Renacimiento usaban como pigmento sagrado.",
    caracteristicas: ["Azul ultramarino intenso y profundo", "Cristalización natural visible", "Historia artística milenaria"],
    propiedades: "Asociada a la intuición y la visión interior.",
    educativo: { composición: "Carbonato basico de cobre", dureza: "3.5 - 4", sistema: "Monoclínico", porque_rara: "Cristales grandes son escasos; se transforma en malaquita con el tiempo" },
    stock: 3, disponible: true, destacada: false
  },
  {
    nombre: "Bolivianita",
    slug: "bolivianita",
    origen: "Bolivia",
    mina: "Anahi",
    color: "Multicolor",
    rareza: "Muy rara",
    precio: 35000,
    tamano: "2.5 cm aprox",
    peso: "22 gramos",
    descripción: "Fusion natural de amatista y citrino en un solo cristal. Exclusiva de las minas de Anahi.",
    caracteristicas: ["Bicolor púrpura-dorado natural", "Exclusiva de Bolivia", "Transición de color única"],
    propiedades: "Representa la dualidad y la integración de opuestos.",
    educativo: { composición: "Cuarzo bicolor (SiO2)", dureza: "7", sistema: "Trigonal", porque_rara: "Solo se extrae de la mina Anahi en Bolivia" },
    stock: 1, disponible: true, destacada: true
  },
  {
    nombre: "Calcita Caribe",
    slug: "calcita-caribe",
    origen: "Pakistán",
    mina: "",
    color: "Azul",
    rareza: "Poco común",
    precio: 14000,
    tamano: "3 cm aprox",
    peso: "30 gramos",
    descripción: "Azul cielo tropical que transporta a aguas cristalinas. Serenidad en forma de piedra.",
    caracteristicas: ["Azul celeste con translucidez suave", "Acabado pulido sedoso", "Tono relajante natural"],
    propiedades: "Conectada con la calma interior y la serenidad.",
    educativo: { composición: "Carbonato de calcio", dureza: "3", sistema: "Trigonal", porque_rara: "La coloración azul intensa es poco frecuente en calcitas" },
    stock: 6, disponible: true, destacada: false
  },
  {
    nombre: "Calcopirita",
    slug: "calcopirita",
    origen: "México",
    mina: "Chihuahua",
    color: "Dorado",
    rareza: "Común",
    precio: 10000,
    tamano: "3 cm aprox",
    peso: "45 gramos",
    descripción: "Superficie iridiscente que despliega todos los colores del arcoíris sobre un fondo dorado metalico.",
    caracteristicas: ["Iridiscencia multicolor sobre base dorada", "Brillo metalico intenso", "Peso notable por contenido de cobre"],
    propiedades: "Asociada a la abundancia y la vitalidad creativa.",
    educativo: { composición: "Sulfuro de cobre y hierro", dureza: "3.5 - 4", sistema: "Tetragonal", porque_rara: "Comun en yacimientos pero la iridiscencia es valorada" },
    stock: 7, disponible: true, destacada: false
  },
  {
    nombre: "Charoita",
    slug: "charoita",
    origen: "Rusia",
    mina: "Murun Massif",
    color: "Violeta",
    rareza: "Exclusiva",
    precio: 25000,
    tamano: "3 cm aprox",
    peso: "32 gramos",
    descripción: "Piedra única con patrones violetas hipnóticos, considerada una de las más exclusivas del mundo.",
    caracteristicas: ["Tonalidad morado profundo con vetas dinámicas", "Alta rareza a nivel global", "Acabado pulido de alto brillo"],
    propiedades: "Asociada a transformación personal y claridad mental.",
    educativo: { composición: "Silicato de calcio, potasio y sodio", dureza: "5 - 6", sistema: "Monoclínico", porque_rara: "Solo se extrae de un yacimiento en el mundo: Murun Massif, Siberia" },
    stock: 1, disponible: true, destacada: true
  },
  {
    nombre: "Cianita Azul",
    slug: "cianita-azul",
    origen: "Brasil",
    mina: "Minas Gerais",
    color: "Azul",
    rareza: "Poco común",
    precio: 13000,
    tamano: "4 cm aprox",
    peso: "20 gramos",
    descripción: "Cristal laminar de azul zafiro con brillo nacarado. Elegancia natural en estado puro.",
    caracteristicas: ["Azul zafiro con brillo nacarado", "Estructura laminar natural", "Doble dureza según eje"],
    propiedades: "Vinculada a la alineación energética y la expresión auténtica.",
    educativo: { composición: "Silicato de aluminio", dureza: "4.5 - 7 (anisotrópica)", sistema: "Triclínico", porque_rara: "Dureza variable según el eje de corte, fenómeno único" },
    stock: 4, disponible: true, destacada: false
  },
  {
    nombre: "Cobaltocalcita",
    slug: "cobaltocalcita",
    origen: "Congo",
    mina: "Katanga",
    color: "Rosa",
    rareza: "Rara",
    precio: 28000,
    tamano: "2.5 cm aprox",
    peso: "25 gramos",
    descripción: "Rosa intenso eléctrico que parece pintado con pigmento puro. La calcita más rara del mundo.",
    caracteristicas: ["Rosa intenso por contenido de cobalto", "Brillo vitreo excepcional", "Rareza extrema a nivel mundial"],
    propiedades: "Relacionada con el amor incondicional y la compasión.",
    educativo: { composición: "Carbonato de calcio con cobalto", dureza: "3", sistema: "Trigonal", porque_rara: "El cobalto que le da color rosa solo aparece en yacimientos específicos" },
    stock: 2, disponible: true, destacada: true
  },
  {
    nombre: "Crisocola",
    slug: "crisocola",
    origen: "Perú",
    mina: "Cusco",
    color: "Verde",
    rareza: "Poco común",
    precio: 14000,
    tamano: "3 cm aprox",
    peso: "28 gramos",
    descripción: "Azul verdoso que recuerda a la Tierra vista desde el espacio. Mineral de cobre de belleza hipnótica.",
    caracteristicas: ["Gradiente azul-verde natural", "Textura sedosa al tacto", "Patrón de vetas organico"],
    propiedades: "Asociada a la expresión auténtica y la sabiduría femenina.",
    educativo: { composición: "Silicato de cobre hidratado", dureza: "2.5 - 3.5", sistema: "Amorfo", porque_rara: "Calidad gema es poco comun; la mayoria es opaca" },
    stock: 5, disponible: true, destacada: false
  },
  {
    nombre: "Crisoprasa",
    slug: "crisoprasa",
    origen: "Australia",
    mina: "Queensland",
    color: "Verde",
    rareza: "Rara",
    precio: 20000,
    tamano: "2.5 cm aprox",
    peso: "22 gramos",
    descripción: "Verde manzana translúcido que brilla con luz propia. La calcedonia más preciada del mundo.",
    caracteristicas: ["Verde manzana translúcido vivido", "Calcedonia de máxima calidad", "Color por niquel natural"],
    propiedades: "Vinculada a la renovación y la apertura emocional.",
    educativo: { composición: "Calcedonia (SiO2) con niquel", dureza: "6.5 - 7", sistema: "Trigonal", porque_rara: "La variedad más valiosa de calcedonia; color por trazas de niquel" },
    stock: 3, disponible: true, destacada: false
  },
  {
    nombre: "Cuarzo Hematoide",
    slug: "cuarzo-hematoide",
    origen: "Brasil",
    mina: "",
    color: "Dorado",
    rareza: "Común",
    precio: 9000,
    tamano: "3 cm aprox",
    peso: "30 gramos",
    descripción: "Cuarzo bañado en óxido de hierro que le otorga un tono rojo-dorado de fuego interior.",
    caracteristicas: ["Rojo-dorado por inclusiones de hematita", "Translucidez parcial calida", "Peso ligeramente mayor al cuarzo comun"],
    propiedades: "Relacionado con la vitalidad y la fuerza interior.",
    educativo: { composición: "Cuarzo (SiO2) con hematita", dureza: "7", sistema: "Trigonal", porque_rara: "Comun pero las inclusiones uniformes de hematita son valoradas" },
    stock: 8, disponible: true, destacada: false
  },
  {
    nombre: "Cuarzo Rutilado Dorado",
    slug: "cuarzo-rutilado-dorado",
    origen: "Brasil",
    mina: "Bahia",
    color: "Dorado",
    rareza: "Rara",
    precio: 22000,
    tamano: "2.5 cm aprox",
    peso: "24 gramos",
    descripción: "Hilos de oro atrapados en cristal transparente. Cada pieza es una obra de arte natural irrepetible.",
    caracteristicas: ["Agujas de rutilo dorado dentro del cuarzo", "Transparencia cristalina excepcional", "Patrón de agujas único en cada pieza"],
    propiedades: "Asociado a la iluminación y la amplificación de la intención.",
    educativo: { composición: "Cuarzo (SiO2) con inclusiones de rutilo (TiO2)", dureza: "7", sistema: "Trigonal", porque_rara: "Cada pieza tiene un patrón de rutilo único e irrepetible" },
    stock: 3, disponible: true, destacada: true
  },
  {
    nombre: "Cuarzo Rutilado Plateado",
    slug: "cuarzo-rutilado-plateado",
    origen: "Brasil",
    mina: "",
    color: "Multicolor",
    rareza: "Rara",
    precio: 20000,
    tamano: "2.5 cm aprox",
    peso: "24 gramos",
    descripción: "Hilos de plata congelados en cuarzo cristalino. Como telarañas de luz atrapadas en hielo.",
    caracteristicas: ["Agujas plateadas de turmalina en cuarzo", "Transparencia con efecto tridimensional", "Patrón único en cada ejemplar"],
    propiedades: "Vinculado a la protección y la claridad de pensamiento.",
    educativo: { composición: "Cuarzo con inclusiones de turmalina plateada", dureza: "7", sistema: "Trigonal", porque_rara: "Inclusiones de turmalina plateada son menos comunes que las doradas" },
    stock: 2, disponible: true, destacada: false
  },
  {
    nombre: "Esmeralda en matriz",
    slug: "esmeralda-en-matriz",
    origen: "Colombia",
    mina: "Muzo",
    color: "Verde",
    rareza: "Exclusiva",
    precio: 65000,
    tamano: "3 cm aprox",
    peso: "40 gramos",
    descripción: "Cristales de esmeralda colombiana incrustados en su roca madre. La reina verde en su trono natural.",
    caracteristicas: ["Cristales de esmeralda visibles en matriz", "Origen colombiano certificado", "Pieza de museo en miniatura"],
    propiedades: "Símbolo ancestral de renovación, prosperidad y visión.",
    educativo: { composición: "Berilo (Be3Al2Si6O18) con cromo", dureza: "7.5 - 8", sistema: "Hexagonal", porque_rara: "Las esmeraldas de Muzo son las más valoradas del mundo" },
    stock: 1, disponible: true, destacada: true
  },
  {
    nombre: "Fluorita Multicolor",
    slug: "fluorita-multicolor",
    origen: "China",
    mina: "",
    color: "Multicolor",
    rareza: "Poco común",
    precio: 14000,
    tamano: "3 cm aprox",
    peso: "32 gramos",
    descripción: "Bandas de color que van del verde al púrpura en capas perfectas. Un arcoíris solidificado.",
    caracteristicas: ["Multiples bandas de color natural", "Transiciónes verde-púrpura-azul", "Cada corte revela un patrón distinto"],
    propiedades: "Asociada a la creatividad y la fluidez emocional.",
    educativo: { composición: "Fluoruro de calcio (CaF2) con trazas variables", dureza: "4", sistema: "Cúbico", porque_rara: "Las bandas multicolor uniformes son poco comunes" },
    stock: 5, disponible: true, destacada: false
  },
  {
    nombre: "Fosfosiderita",
    slug: "fosfosiderita",
    origen: "Chile",
    mina: "Atacama",
    color: "Rosa",
    rareza: "Rara",
    precio: 18000,
    tamano: "2.5 cm aprox",
    peso: "22 gramos",
    descripción: "Lavanda suave con textura de seda. Un mineral chileno que enamora por su delicadeza extrema.",
    caracteristicas: ["Lavanda-rosa palido delicado", "Textura sedosa al tacto", "Mineral chileno de alto valor"],
    propiedades: "Vinculada a la calma profunda y la sanación emocional.",
    educativo: { composición: "Fosfato de hierro hidratado", dureza: "3.5 - 4", sistema: "Monoclínico", porque_rara: "Cristales de calidad gema son raros; la mayoría es masiva" },
    stock: 3, disponible: true, destacada: false
  },
  {
    nombre: "Fucsita con Rubi",
    slug: "fucsita-con-rubi",
    origen: "India",
    mina: "Karnataka",
    color: "Multicolor",
    rareza: "Poco común",
    precio: 16000,
    tamano: "3.5 cm aprox",
    peso: "38 gramos",
    descripción: "Verde brillante salpicado de puntos rojos de rubí natural. Dos piedras preciosas en una sola pieza.",
    caracteristicas: ["Verde fucsita con cristales de rubí rojo", "Combinación natural de dos minerales", "Contraste cromático espectacular"],
    propiedades: "Simboliza la union de corazón y naturaleza.",
    educativo: { composición: "Mica crómica (fucsita) + Corindón (rubí)", dureza: "2-3 (fucsita) / 9 (rubí)", sistema: "Monoclínico/Trigonal", porque_rara: "Combinación natural de un mineral blando con el segundo más duro" },
    stock: 4, disponible: true, destacada: false
  },
  {
    nombre: "Granate",
    slug: "granate",
    origen: "India",
    mina: "Rajasthan",
    color: "Rosa",
    rareza: "Común",
    precio: 11000,
    tamano: "2.5 cm aprox",
    peso: "28 gramos",
    descripción: "Rojo intenso profundo con brillo que recuerda a las semillas de granada. Pasión mineralizada.",
    caracteristicas: ["Rojo profundo con brillo adamantino", "Alta densidad y peso notable", "Acabado pulido espectacular"],
    propiedades: "Asociado a la pasión, la energía vital y el compromiso.",
    educativo: { composición: "Silicato de hierro y aluminio", dureza: "6.5 - 7.5", sistema: "Cúbico", porque_rara: "Abundante pero los ejemplares de color intenso uniforme son valorados" },
    stock: 6, disponible: true, destacada: false
  },
  {
    nombre: "Iolita",
    slug: "iolita",
    origen: "India",
    mina: "Tamil Nadu",
    color: "Azul",
    rareza: "Poco común",
    precio: 17000,
    tamano: "2 cm aprox",
    peso: "18 gramos",
    descripción: "Azul violáceo que los vikingos usaban como brujula solar. La piedra que encuentra el norte.",
    caracteristicas: ["Pleocroísmo: cambia de azul a amarillo según el ángulo", "La 'brujula vikinga' histórica", "Transparencia de gema fina"],
    propiedades: "Asociada a la visión clara y la navegación interior.",
    educativo: { composición: "Silicato de magnesio y aluminio", dureza: "7 - 7.5", sistema: "Ortorrómbico", porque_rara: "Fuerte pleocroísmo tridimensional, único entre gemas" },
    stock: 3, disponible: true, destacada: false
  },
  {
    nombre: "Jaspe Abejorro",
    slug: "jaspe-abejorro",
    origen: "Indonesia",
    mina: "Java",
    color: "Multicolor",
    rareza: "Rara",
    precio: 19000,
    tamano: "3 cm aprox",
    peso: "30 gramos",
    descripción: "Rayas amarillas, naranjas y negras como un abejorro tropical. Energia volcánica solidificada.",
    caracteristicas: ["Bandas amarillo-naranja-negro vibrantes", "Origen volcánico de Java", "Patrón de rayas único en cada pieza"],
    propiedades: "Relacionado con la alegria, la aventura y la vitalidad.",
    educativo: { composición: "Mezcla volcánica con azufre, hematita y anhydrita", dureza: "5", sistema: "Amorfo", porque_rara: "Solo se encuentra cerca del volcan Papandayan en Java" },
    stock: 3, disponible: true, destacada: false
  },
  {
    nombre: "Jaspe Imperial",
    slug: "jaspe-imperial",
    origen: "México",
    mina: "Guadalajara",
    color: "Multicolor",
    rareza: "Poco común",
    precio: 15000,
    tamano: "3 cm aprox",
    peso: "32 gramos",
    descripción: "Patrones paisajísticos en tonos tierra que parecen pinturas abstractas de la naturaleza.",
    caracteristicas: ["Tonos crema, verde y terracota", "Patrones paisajísticos naturales", "Exclusivo de Jalisco, México"],
    propiedades: "Asociado a la estabilidad y la conexión con la tierra.",
    educativo: { composición: "Sílice microcristalino con óxidos de hierro", dureza: "6.5 - 7", sistema: "Trigonal", porque_rara: "Solo se extrae de una zona de Jalisco, México" },
    stock: 4, disponible: true, destacada: false
  },
  {
    nombre: "Jaspe Oceano",
    slug: "jaspe-océano",
    origen: "Madagascar",
    mina: "Costa noroeste",
    color: "Multicolor",
    rareza: "Rara",
    precio: 22000,
    tamano: "3 cm aprox",
    peso: "34 gramos",
    descripción: "Circulos concentricos en verdes y cremas que parecen ojos del océano petrificados.",
    caracteristicas: ["Órbitas concéntricas multicolor", "Solo se extrae durante marea baja", "Agotamiento progresivo del yacimiento"],
    propiedades: "Vinculado a la renovación ciclica y la paciencia.",
    educativo: { composición: "Sílice esferoidal con inclusiones diversas", dureza: "6.5 - 7", sistema: "Trigonal", porque_rara: "Yacimiento costero casi agotado; solo accesible en marea baja" },
    stock: 2, disponible: true, destacada: true
  },
  {
    nombre: "K2",
    slug: "k2",
    origen: "Pakistán",
    mina: "Karakorum",
    color: "Azul",
    rareza: "Muy rara",
    precio: 30000,
    tamano: "3 cm aprox",
    peso: "35 gramos",
    descripción: "Granito blanco con gotas de azurita azul. Nace a 5000 metros de altura en la segunda montaña más alta del mundo.",
    caracteristicas: ["Granito blanco con círculos de azurita azul", "Recolectada a 5000m de altitud", "Nombre por la montaña K2"],
    propiedades: "Asociada a la elevación espiritual y la perspectiva amplia.",
    educativo: { composición: "Granito con inclusiones de azurita", dureza: "6", sistema: "Mixto", porque_rara: "Solo se encuentra en las faldas del K2, a gran altitud" },
    stock: 2, disponible: true, destacada: false
  },
  {
    nombre: "Labradorita Negra",
    slug: "labradorita-negra",
    origen: "Madagascar",
    mina: "",
    color: "Multicolor",
    rareza: "Rara",
    precio: 15000,
    tamano: "3 cm aprox",
    peso: "30 gramos",
    descripción: "Destellos iridiscentes que cambian con cada ángulo de luz, como una aurora boreal atrapada en piedra.",
    caracteristicas: ["Labradorescencia multicolor espectacular", "Destellos azul-verde-dorado", "Cada angulo revela colores distintos"],
    propiedades: "Conocida como la piedra de la transformación y la magia.",
    educativo: { composición: "Feldespato plagioclasa", dureza: "6 - 6.5", sistema: "Triclínico", porque_rara: "La labradorescencia intensa es poco común; muchas son opacas" },
    stock: 5, disponible: true, destacada: false
  },
  {
    nombre: "Labradorita Blanca",
    slug: "labradorita-blanca",
    origen: "India",
    mina: "",
    color: "Multicolor",
    rareza: "Poco común",
    precio: 18000,
    tamano: "3 cm aprox",
    peso: "28 gramos",
    descripción: "Base blanca nacarada con destellos azules y arcoíris. También conocida como Piedra Luna Arcoíris.",
    caracteristicas: ["Base blanca con adularescencia azul", "Destellos arcoíris internos", "Transparencia parcial luminosa"],
    propiedades: "Vinculada a la intuición y los ciclos naturales.",
    educativo: { composición: "Feldespato plagioclasa (albita)", dureza: "6 - 6.5", sistema: "Triclínico", porque_rara: "Los destellos arcoíris sobre base blanca son poco frecuentes" },
    stock: 3, disponible: true, destacada: false
  },
  {
    nombre: "Lapislazuli",
    slug: "lapislazuli",
    origen: "Afganistán",
    mina: "Badakhshan",
    color: "Azul",
    rareza: "Rara",
    precio: 18000,
    tamano: "3 cm aprox",
    peso: "32 gramos",
    descripción: "Azul profundo salpicado de pirita dorada, la piedra de los faraones y símbolo de sabiduría ancestral.",
    caracteristicas: ["Azul ultramarino con vetas de pirita dorada", "Piedra sagrada del Antiguo Egipto", "Mina activa desde hace 6000 años"],
    propiedades: "Asociado a la verdad, la sabiduría y la realeza desde la antigüedad.",
    educativo: { composición: "Lazurita, calcita y pirita", dureza: "5 - 5.5", sistema: "Cúbico", porque_rara: "La mejor calidad solo viene de Afganistán; mina más antigua del mundo" },
    stock: 3, disponible: true, destacada: true
  },
  {
    nombre: "Larimar",
    slug: "larimar",
    origen: "República Dominicana",
    mina: "Barahona",
    color: "Azul",
    rareza: "Exclusiva",
    precio: 35000,
    tamano: "3.5 cm aprox",
    peso: "28 gramos",
    descripción: "Azul caribe con vetas blancas que evocan olas del mar. Exclusiva del Caribe, no existe en ningún otro lugar.",
    caracteristicas: ["Azul caribe con vetas blancas naturales", "Única en el mundo: solo Rep. Dominicana", "Textura sedosa con brillo suave"],
    propiedades: "Vinculada a la paz interior y la conexión con el océano.",
    educativo: { composición: "Pectolita azul con cobre", dureza: "4.5 - 5", sistema: "Triclínico", porque_rara: "Solo existe en una montaña de República Dominicana" },
    stock: 2, disponible: true, destacada: true
  },
  {
    nombre: "Larvikita",
    slug: "larvikita",
    origen: "Noruega",
    mina: "Larvik",
    color: "Negro",
    rareza: "Común",
    precio: 9000,
    tamano: "3.5 cm aprox",
    peso: "40 gramos",
    descripción: "Negro profundo con destellos azul metalico. La piedra nocturna de los fiordos noruegos.",
    caracteristicas: ["Negro con schiller azul metalico", "Peso notable y solidez", "Destellos que cambian con la luz"],
    propiedades: "Asociada a la protección y el anclaje a la realidad.",
    educativo: { composición: "Sienita monzonitica con feldespato", dureza: "6", sistema: "Monoclínico", porque_rara: "Comun en Noruega pero los destellos azules intensos son valorados" },
    stock: 6, disponible: true, destacada: false
  },
  {
    nombre: "Malaquita",
    slug: "malaquita",
    origen: "Congo",
    mina: "Katanga",
    color: "Verde",
    rareza: "Poco común",
    precio: 20000,
    tamano: "3 cm aprox",
    peso: "38 gramos",
    descripción: "Bandas concentricas en verde intenso. Cada corte revela un patrón irrepetible como una huella digital.",
    caracteristicas: ["Bandas concentricas verde esmeralda", "Patrón tipo 'ojo de buey' natural", "Alto peso por contenido de cobre"],
    propiedades: "Asociada a la transformación y la protección desde la antigüedad.",
    educativo: { composición: "Carbonato basico de cobre", dureza: "3.5 - 4", sistema: "Monoclínico", porque_rara: "Abundante pero los patrones bandeados perfectos son muy valorados" },
    stock: 4, disponible: true, destacada: false
  },
  {
    nombre: "Nuummita",
    slug: "nuummita",
    origen: "Groenlandia",
    mina: "Nuuk",
    color: "Negro",
    rareza: "Muy rara",
    precio: 38000,
    tamano: "3 cm aprox",
    peso: "35 gramos",
    descripción: "La roca más antigua de la Tierra: 3.8 mil millones de anos. Destellos dorados sobre negro absoluto.",
    caracteristicas: ["3.800 millones de años de antigüedad", "Iridiscencia dorada sobre negro", "Solo se extrae en Groenlandia"],
    propiedades: "Considerada la piedra del hechicero, asociada al poder ancestral.",
    educativo: { composición: "Antofilita y gedrita (anfiboles)", dureza: "5.5 - 6", sistema: "Ortorrómbico", porque_rara: "La roca más antigua conocida; solo se extrae de un lugar en Groenlandia" },
    stock: 1, disponible: true, destacada: true
  },
  {
    nombre: "Obsidiana Arcoiris",
    slug: "obsidiana-arcoíris",
    origen: "México",
    mina: "Jalisco",
    color: "Negro",
    rareza: "Poco común",
    precio: 12000,
    tamano: "3 cm aprox",
    peso: "28 gramos",
    descripción: "Vidrio volcánico negro que esconde destellos arcoíris cuando la luz lo acaricia en el ángulo justo.",
    caracteristicas: ["Negro intenso con iridiscencia arcoíris", "Vidrio volcánico natural", "Efecto optico por nanoestructuras internas"],
    propiedades: "Asociada a la introspección profunda y la revelación.",
    educativo: { composición: "Vidrio volcánico siliceo", dureza: "5 - 5.5", sistema: "Amorfo", porque_rara: "La iridiscencia arcoíris se debe a nanoestructuras aleatorias" },
    stock: 5, disponible: true, destacada: false
  },
  {
    nombre: "Obsidiana Caoba",
    slug: "obsidiana-caoba",
    origen: "México",
    mina: "Hidalgo",
    color: "Negro",
    rareza: "Común",
    precio: 8000,
    tamano: "3 cm aprox",
    peso: "30 gramos",
    descripción: "Negro volcánico con manchas caoba que parecen pinceladas de lava en movimiento.",
    caracteristicas: ["Negro con inclusiones rojo-caoba", "Vidrio volcánico con óxidos de hierro", "Pulido espejo perfecto"],
    propiedades: "Relacionada con el enraizamiento y la fuerza interior.",
    educativo: { composición: "Vidrio volcánico con inclusiones de hematita/magnetita", dureza: "5 - 5.5", sistema: "Amorfo", porque_rara: "Comun pero valorada por sus patrones únicos" },
    stock: 7, disponible: true, destacada: false
  },
  {
    nombre: "Opalo Dendritico",
    slug: "opalo-dendritico",
    origen: "Australia",
    mina: "Queensland",
    color: "Multicolor",
    rareza: "Poco común",
    precio: 16000,
    tamano: "2.5 cm aprox",
    peso: "18 gramos",
    descripción: "Paisajes en miniatura atrapados en opalo translúcido. Árboles y helechos pintados por el manganeso.",
    caracteristicas: ["Inclusiones dendriticas tipo paisaje", "Base opalina translucida", "Cada pieza es un cuadro natural"],
    propiedades: "Vinculado a la conexión con la naturaleza y el crecimiento.",
    educativo: { composición: "Sílice hidratado con dendritas de manganeso", dureza: "5.5 - 6.5", sistema: "Amorfo", porque_rara: "Las dendritas detalladas dentro de ópalo son poco comunes" },
    stock: 3, disponible: true, destacada: false
  },
  {
    nombre: "Opalo de Fuego",
    slug: "opalo-de-fuego",
    origen: "México",
    mina: "Querétaro",
    color: "Dorado",
    rareza: "Rara",
    precio: 30000,
    tamano: "2 cm aprox",
    peso: "15 gramos",
    descripción: "Transparencia anaranjada con destellos internos de fuego. Como sostener una brasa viva en la palma.",
    caracteristicas: ["Naranja-rojo con transparencia de gema", "Juego de fuego interno", "Exclusivo de los yacimientos mexicanos"],
    propiedades: "Asociado a la creatividad ardiente y la pasión.",
    educativo: { composición: "Sílice hidratado (SiO2·nH2O)", dureza: "5.5 - 6.5", sistema: "Amorfo", porque_rara: "Los ópalos de fuego mexicanos con juego de color son raros" },
    stock: 2, disponible: true, destacada: true
  },
  {
    nombre: "Opalo Etiope",
    slug: "opalo-etiope",
    origen: "Etiopía",
    mina: "Welo",
    color: "Multicolor",
    rareza: "Rara",
    precio: 55000,
    tamano: "2 cm aprox",
    peso: "12 gramos",
    descripción: "Juego de colores espectacular en base translúcida. Cada movimiento revela un universo de luz.",
    caracteristicas: ["Juego de colores completo espectacular", "Base cristalina o lechosa", "Uno de los ópalos más codiciados"],
    propiedades: "Vinculado a la inspiración, la creatividad y la espontaneidad.",
    educativo: { composición: "Sílice hidratado con esferas de cristobalita", dureza: "5.5 - 6.5", sistema: "Amorfo", porque_rara: "El juego de colores se debe a difracción por nanoesferas internas" },
    stock: 1, disponible: true, destacada: true
  },
  {
    nombre: "Ortoclasa",
    slug: "ortoclasa",
    origen: "Madagascar",
    mina: "",
    color: "Dorado",
    rareza: "Común",
    precio: 9000,
    tamano: "3 cm aprox",
    peso: "28 gramos",
    descripción: "Dorado cálido con brillo terroso. Solidez y elegancia discreta del mundo mineral.",
    caracteristicas: ["Dorado-champagne con brillo vitreo", "Estabilidad y dureza notable", "Coloración cálida uniforme"],
    propiedades: "Asociada a la estabilidad emocional y la perseverancia.",
    educativo: { composición: "Feldespato potásico (KAlSi3O8)", dureza: "6", sistema: "Monoclínico", porque_rara: "Comun en geologia pero los ejemplares de color uniforme son valorados" },
    stock: 5, disponible: true, destacada: false
  },
  {
    nombre: "Piedra Luna",
    slug: "piedra-luna",
    origen: "Sri Lanka",
    mina: "",
    color: "Multicolor",
    rareza: "Poco común",
    precio: 16000,
    tamano: "2.5 cm aprox",
    peso: "20 gramos",
    descripción: "Resplandor azulado flotante sobre base translúcida. Como la luna llena atrapada en cristal.",
    caracteristicas: ["Adularescencia azul plateada", "Base translucida a transparente", "Efecto luminoso que flota dentro"],
    propiedades: "Asociada a la intuición, los ciclos y la feminidad.",
    educativo: { composición: "Feldespato ortoclasa con albita", dureza: "6 - 6.5", sistema: "Monoclínico", porque_rara: "La adularescencia azul intensa es rara; la mayoría tiene brillo blanco" },
    stock: 4, disponible: true, destacada: false
  },
  {
    nombre: "Piedra Sol",
    slug: "piedra-sol",
    origen: "India",
    mina: "",
    color: "Dorado",
    rareza: "Poco común",
    precio: 14000,
    tamano: "3 cm aprox",
    peso: "26 gramos",
    descripción: "Naranja dorado con destellos metalicos internos que brillan como el sol de mediodía.",
    caracteristicas: ["Aventurescencia dorada-cobriza", "Inclusiones de hematita que brillan", "Tonalidad calida solar"],
    propiedades: "Relacionada con la vitalidad, la alegria y el liderazgo.",
    educativo: { composición: "Feldespato oligoclasa con hematita", dureza: "6 - 6.5", sistema: "Triclínico", porque_rara: "Las inclusiones de hematita que crean el 'aventurescencia' son valoradas" },
    stock: 5, disponible: true, destacada: false
  },
  {
    nombre: "Pietersita",
    slug: "pietersita",
    origen: "Namibia",
    mina: "",
    color: "Multicolor",
    rareza: "Muy rara",
    precio: 38000,
    tamano: "3 cm aprox",
    peso: "32 gramos",
    descripción: "Tormenta de colores azules, dorados y rojos en movimiento. Llamada 'la piedra de la tempestad'.",
    caracteristicas: ["Chatoyancia multicolor en torbellino", "Azul, dorado y rojo en movimiento", "Conocida como 'la piedra de la tempestad'"],
    propiedades: "Asociada al cambio, la voluntad y la visión.",
    educativo: { composición: "Cuarzo con fibras de crocidolita y limonita", dureza: "6.5 - 7", sistema: "Trigonal", porque_rara: "Solo dos yacimientos conocidos: Namibia y China" },
    stock: 1, disponible: true, destacada: true
  },
  {
    nombre: "Pirita",
    slug: "pirita",
    origen: "Perú",
    mina: "Huanzala",
    color: "Dorado",
    rareza: "Común",
    precio: 12000,
    tamano: "3 cm aprox",
    peso: "48 gramos",
    descripción: "Brillo metálico dorado que le otorgó el nombre de 'oro de los tontos'. Pura geometría natural.",
    caracteristicas: ["Brillo metálico dorado perfecto", "Peso notable por densidad", "Formas cubicas naturales"],
    propiedades: "Asociada a la abundancia, la protección y la determinación.",
    educativo: { composición: "Disulfuro de hierro (FeS2)", dureza: "6 - 6.5", sistema: "Cúbico", porque_rara: "Abundante pero los cubos perfectos y el brillo intenso son codiciados" },
    stock: 8, disponible: true, destacada: false
  },
  {
    nombre: "Prehnita",
    slug: "prehnita",
    origen: "Mali",
    mina: "",
    color: "Verde",
    rareza: "Poco común",
    precio: 13000,
    tamano: "3 cm aprox",
    peso: "26 gramos",
    descripción: "Verde palido translúcido con luminosidad interna. Como una gota de rocío primaveral petrificada.",
    caracteristicas: ["Verde palido luminoso con translucidez", "Efecto de brillo interno suave", "Textura botroidal natural"],
    propiedades: "Vinculada a la sanación preventiva y la paz profunda.",
    educativo: { composición: "Silicato de calcio y aluminio", dureza: "6 - 6.5", sistema: "Ortorrómbico", porque_rara: "Primer mineral nombrado en honor a una persona (Coronel Prehn)" },
    stock: 4, disponible: true, destacada: false
  },
  {
    nombre: "Rodocrosita",
    slug: "rodocrosita",
    origen: "Argentina",
    mina: "Capillitas",
    color: "Rosa",
    rareza: "Rara",
    precio: 25000,
    tamano: "3 cm aprox",
    peso: "30 gramos",
    descripción: "Rosa intenso con bandas blancas concentricas. La piedra nacional de Argentina y símbolo de amor.",
    caracteristicas: ["Rosa intenso con bandas blancas", "Piedra nacional de Argentina", "Patrón de bandas irrepetible"],
    propiedades: "Asociada al amor propio, la compasión y la sanación emocional.",
    educativo: { composición: "Carbonato de manganeso", dureza: "3.5 - 4", sistema: "Trigonal", porque_rara: "Las stalactitas bandeadas de Capillitas son únicas en el mundo" },
    stock: 2, disponible: true, destacada: false
  },
  {
    nombre: "Rodonita",
    slug: "rodonita",
    origen: "Brasil",
    mina: "",
    color: "Rosa",
    rareza: "Común",
    precio: 11000,
    tamano: "3 cm aprox",
    peso: "30 gramos",
    descripción: "Rosa vibrante con vetas negras de manganeso que crean un contraste dramático y elegante.",
    caracteristicas: ["Rosa vibrante con vetas negras", "Contraste cromático natural", "Excelente para pulido"],
    propiedades: "Vinculada al equilibrio emocional y la resiliencia.",
    educativo: { composición: "Silicato de manganeso", dureza: "5.5 - 6.5", sistema: "Triclínico", porque_rara: "Las vetas de óxido de manganeso crean patrones únicos" },
    stock: 6, disponible: true, destacada: false
  },
  {
    nombre: "Rubi",
    slug: "rubi",
    origen: "India",
    mina: "Mysore",
    color: "Rosa",
    rareza: "Rara",
    precio: 40000,
    tamano: "2 cm aprox",
    peso: "20 gramos",
    descripción: "Rojo pasional del corindón más valioso. La piedra de los reyes y las reinas de la historia.",
    caracteristicas: ["Rojo intenso por cromo", "Segunda piedra más dura después del diamante", "Historia real milenaria"],
    propiedades: "Simbolo universal de pasion, poder y protección real.",
    educativo: { composición: "Corindón (Al2O3) con cromo", dureza: "9", sistema: "Trigonal", porque_rara: "La segunda gema más dura; el color rojo por cromo es excepcional" },
    stock: 2, disponible: true, destacada: true
  },
  {
    nombre: "Rubi en matriz",
    slug: "rubi-en-matriz",
    origen: "India",
    mina: "",
    color: "Rosa",
    rareza: "Poco común",
    precio: 28000,
    tamano: "3.5 cm aprox",
    peso: "42 gramos",
    descripción: "Cristales de rubí rojo incrustados en su roca madre verde. La realeza en su estado más natural.",
    caracteristicas: ["Cristales de rubí visibles en roca madre", "Contraste rojo sobre verde/gris", "Pieza de colección naturalista"],
    propiedades: "Combina la fuerza del rubí con la estabilidad de la tierra.",
    educativo: { composición: "Corindón en matriz de zoisita o fucsita", dureza: "9 (rubí) / variable (matriz)", sistema: "Trigonal", porque_rara: "Los rubíes visibles en matriz conservan su contexto geológico" },
    stock: 3, disponible: true, destacada: false
  },
  {
    nombre: "Shattuckita",
    slug: "shattuckita",
    origen: "Namibia",
    mina: "",
    color: "Azul",
    rareza: "Muy rara",
    precio: 45000,
    tamano: "2.5 cm aprox",
    peso: "24 gramos",
    descripción: "Azul eléctrico intenso que parece pintado con pigmento puro. Una de las piedras azules más raras.",
    caracteristicas: ["Azul eléctrico de saturación extrema", "Textura fibrosa sedosa", "Rareza extrema a nivel mundial"],
    propiedades: "Vinculada a la comunicación clara y la verdad.",
    educativo: { composición: "Silicato de cobre", dureza: "3.5", sistema: "Ortorrómbico", porque_rara: "Formación muy específica; calidad gema es extremadamente rara" },
    stock: 1, disponible: true, destacada: true
  },
  {
    nombre: "Sugilita",
    slug: "sugilita",
    origen: "Sudáfrica",
    mina: "Mina Wessels",
    color: "Violeta",
    rareza: "Muy rara",
    precio: 38000,
    tamano: "2.5 cm aprox",
    peso: "24 gramos",
    descripción: "Violeta real profundo que solo emerge de una mina en el planeta. Exclusividad en estado puro.",
    caracteristicas: ["Violeta real intenso y uniforme", "Solo una mina activa en el mundo", "Una de las piedras violetas más raras"],
    propiedades: "Asociada a la protección espiritual y la sabiduria superior.",
    educativo: { composición: "Ciclosilicato de potasio, sodio, hierro y litio", dureza: "5.5 - 6.5", sistema: "Hexagonal", porque_rara: "Descubierta en 1944 pero calidad gema solo en una mina sudafricana" },
    stock: 1, disponible: true, destacada: true
  },
  {
    nombre: "Tanzanita",
    slug: "tanzanita",
    origen: "Tanzania",
    mina: "Merelani",
    color: "Violeta",
    rareza: "Exclusiva",
    precio: 45000,
    tamano: "2 cm aprox",
    peso: "16 gramos",
    descripción: "Solo existe en un lugar del planeta. Azul violáceo que rivaliza con el zafiro en intensidad y rareza.",
    caracteristicas: ["Azul-violeta pleocroico excepcional", "Solo existe en Merelani, Tanzania", "1000 veces más rara que el diamante"],
    propiedades: "Asociada a la elevación espiritual y la conciencia expandida.",
    educativo: { composición: "Zoisita con vanadio (Ca2Al3Si3O12(OH))", dureza: "6 - 7", sistema: "Ortorrómbico", porque_rara: "Un único yacimiento de 8km2 en Tanzania; se estima agotamiento en décadas" },
    stock: 1, disponible: true, destacada: true
  },
  {
    nombre: "Turmalina Negra",
    slug: "turmalina-negra",
    origen: "Brasil",
    mina: "Minas Gerais",
    color: "Negro",
    rareza: "Común",
    precio: 10000,
    tamano: "3 cm aprox",
    peso: "32 gramos",
    descripción: "Negro absoluto con estriaciones verticales naturales. La piedra de protección por excelencia.",
    caracteristicas: ["Negro profundo con estriaciones naturales", "Propiedades piezoeléctricas reales", "La piedra protectora más popular"],
    propiedades: "Universalmente reconocida como escudo energético y protección.",
    educativo: { composición: "Borosilicato complejo (schorlita)", dureza: "7 - 7.5", sistema: "Trigonal", porque_rara: "Abundante pero valorada por sus propiedades piezoeléctricas reales" },
    stock: 10, disponible: true, destacada: false
  },
  {
    nombre: "Turmalina Rosa",
    slug: "turmalina-rosa",
    origen: "Brasil",
    mina: "Minas Gerais",
    color: "Rosa",
    rareza: "Poco común",
    precio: 22000,
    tamano: "2.5 cm aprox",
    peso: "22 gramos",
    descripción: "Rosa vibrante con brillo vitreo que captura la esencia misma de la primavera en cristal.",
    caracteristicas: ["Rosa vibrante por litio y manganeso", "Brillo vitreo excepcional", "Transparencia parcial a total"],
    propiedades: "Asociada al amor, la alegria y la sanación emocional.",
    educativo: { composición: "Borosilicato de litio (elbaita)", dureza: "7 - 7.5", sistema: "Trigonal", porque_rara: "Las turmalinas rosa de calidad gema son escasas" },
    stock: 3, disponible: true, destacada: false
  },
  {
    nombre: "Turquesa",
    slug: "turquesa",
    origen: "Irán",
    mina: "Nishapur",
    color: "Azul",
    rareza: "Rara",
    precio: 20000,
    tamano: "3 cm aprox",
    peso: "22 gramos",
    descripción: "Azul cielo con matriz dorada. La piedra sagrada de persas, egipcios y nativos americanos.",
    caracteristicas: ["Azul cielo clasico con matriz dorada", "Piedra sagrada multicultural", "5000 años de historia humana"],
    propiedades: "Simbolo universal de protección, sabiduria y nobleza.",
    educativo: { composición: "Fosfato de cobre y aluminio hidratado", dureza: "5 - 6", sistema: "Triclínico", porque_rara: "La turquesa persa de Nishapur es la más valorada del mundo" },
    stock: 3, disponible: true, destacada: true
  },
  {
    nombre: "Lepidolita",
    slug: "lepidolita",
    origen: "Brasil",
    mina: "Minas Gerais",
    color: "Violeta",
    rareza: "Rara",
    precio: 16000,
    tamano: "3 cm aprox",
    peso: "25 gramos",
    descripción: "Lavanda natural con litio en su estructura. El tranquilizante de la naturaleza en forma mineral.",
    caracteristicas: ["Color lavanda-púrpura natural uniforme", "Contiene litio natural en su composición", "Textura micacea con brillo perlado"],
    propiedades: "Piedra de calma profunda y equilibrio emocional. Su litio natural induce serenidad.",
    educativo: { composición: "Mica de litio: K(Li,Al)3(Si,Al)4O10(F,OH)2", dureza: "2.5 - 3", sistema: "Monoclínico", porque_rara: "Es una de las pocas piedras que contiene litio natural, el mismo elemento usado en medicina para estabilizar el ánimo" },
    stock: 3, disponible: true, destacada: false
  },
  {
    nombre: "Mokaita",
    slug: "mokaita",
    origen: "Australia",
    mina: "Mooka Creek",
    color: "Multicolor",
    rareza: "Poco común",
    precio: 10000,
    tamano: "3 cm aprox",
    peso: "30 gramos",
    descripción: "Fusión de jaspe y ópalo en tonos tierra, crema y burdeos. El paisaje del outback australiano en miniatura.",
    caracteristicas: ["Patrones únicos de rojo, crema y amarillo", "Combinación natural de jaspe y opalo", "Cada pieza es irrepetible"],
    propiedades: "Piedra de aventura y conexión con la tierra. Fomenta el deseo de nuevas experiencias.",
    educativo: { composición: "Jaspe + Opalo (SiO₂ con inclusiones de opalo)", dureza: "6.5 - 7", sistema: "Trigonal/Amorfo", porque_rara: "Solo se encuentra en la región de Mooka Creek en Australia Occidental" },
    stock: 4, disponible: true, destacada: false
  },
  {
    nombre: "Thulite",
    slug: "thulite",
    origen: "Noruega",
    mina: "Lom",
    color: "Rosa",
    rareza: "Rara",
    precio: 20000,
    tamano: "3 cm aprox",
    peso: "28 gramos",
    descripción: "Rosa intenso con vetas blancas naturales. La piedra nacional de Noruega, nombrada por la mítica Thule.",
    caracteristicas: ["Rosa vibrante por contenido de manganeso", "Vetas blancas de calcita natural", "Opaca con brillo vitreo"],
    propiedades: "Asociada a la alegria, vitalidad y expresión emocional. Estimula la creatividad.",
    educativo: { composición: "Zoisita con manganeso: Ca₂Al₃(SiO₄)₃(OH)", dureza: "6 - 6.5", sistema: "Ortorrómbico", porque_rara: "Variedad rosa de la zoisita, solo en depósitos específicos de Noruega y algunos en Austria" },
    stock: 3, disponible: true, destacada: false
  },
  {
    nombre: "Unakita",
    slug: "unakita",
    origen: "Estados Unidos",
    mina: "Montes Unaka, Carolina del Norte",
    color: "Multicolor",
    rareza: "Común",
    precio: 8000,
    tamano: "3 cm aprox",
    peso: "32 gramos",
    descripción: "Verde oliva y salmón rosado en armonía perfecta. La dualidad de la naturaleza en una sola piedra.",
    caracteristicas: ["Combinación verde y rosa natural", "Mezcla de epidota, feldespato y cuarzo", "Patrón moteado único"],
    propiedades: "Piedra de visión y equilibrio emocional. Conecta el corazón con el tercer ojo.",
    educativo: { composición: "Epidota + Feldespato potásico + Cuarzo", dureza: "6 - 7", sistema: "Monoclínico/Triclínico", porque_rara: "Aunque no es rara, las piezas con balance perfecto de color verde-rosa son valoradas" },
    stock: 6, disponible: true, destacada: false
  },
  {
    nombre: "Sodalita",
    slug: "sodalita",
    origen: "Brasil",
    mina: "Bahia",
    color: "Azul",
    rareza: "Poco común",
    precio: 11000,
    tamano: "3 cm aprox",
    peso: "27 gramos",
    descripción: "Azul real profundo con venas blancas de calcita. Como contemplar un cielo nocturno entre nubes.",
    caracteristicas: ["Azul intenso con inclusiones blancas", "Brillo vitreo a graso", "Color uniforme y profundo"],
    propiedades: "Piedra de la lógica y la verdad. Estimula el pensamiento racional y la comunicación honesta.",
    educativo: { composición: "Tectosilicato de sodio: Na₈(Al₆Si₆O₂₄)Cl₂", dureza: "5.5 - 6", sistema: "Cúbico", porque_rara: "Aunque se encuentra en varios paises, los ejemplares de azul profundo uniforme son escasos" },
    stock: 5, disponible: true, destacada: false
  },
  {
    nombre: "Riolita",
    slug: "riolita",
    origen: "México",
    mina: "Chihuahua",
    color: "Multicolor",
    rareza: "Poco común",
    precio: 9000,
    tamano: "3 cm aprox",
    peso: "30 gramos",
    descripción: "Patrones orbiculares hipnóticos en tonos tierra. Cada pieza es un paisaje abstracto creado por la lava.",
    caracteristicas: ["Patrones circulares y orbiculares naturales", "Tonos crema, verde, marron y terracota", "Origen volcánico visible en su textura"],
    propiedades: "Piedra de creatividad y resolución. Ayuda a procesar el pasado y avanzar con claridad.",
    educativo: { composición: "Roca volcánica felsitica rica en silice (SiO₂ > 69%)", dureza: "6 - 7", sistema: "Amorfo (roca, no mineral)", porque_rara: "Las variedades orbiculares con patrones bien definidos son poco comunes y muy buscadas por colecciónistas" },
    stock: 4, disponible: true, destacada: false
  },
  {
    nombre: "Aguamarina",
    slug: "aguamarina",
    origen: "Brasil",
    mina: "Minas Gerais",
    color: "Azul",
    rareza: "Rara",
    precio: 28000,
    tamano: "2.5 cm aprox",
    peso: "22 gramos",
    descripción: "Azul celeste cristalino que evoca las aguas más puras del océano. Un berilo de claridad excepcional.",
    caracteristicas: ["Azul celeste transparente con brillo vitreo", "Cristal limpio sin inclusiones visibles", "Corte natural con facetas suaves"],
    propiedades: "Piedra de calma y comunicación. Facilita la expresión emocional y la serenidad interior.",
    educativo: { composición: "Berilo (Be₃Al₂Si₆O₁₈) con trazas de hierro ferroso", dureza: "7.5 - 8", sistema: "Hexagonal", porque_rara: "Los ejemplares de color intenso y buena transparencia son cada vez más escasos en el mercado" },
    stock: 2, disponible: true, destacada: true
  },
  {
    nombre: "Calcita Miel",
    slug: "calcita-miel",
    origen: "México",
    mina: "Chihuahua",
    color: "Dorado",
    rareza: "Poco común",
    precio: 10000,
    tamano: "3.5 cm aprox",
    peso: "32 gramos",
    descripción: "Dorado cálido y translúcido como la miel al sol. Una calcita que irradia dulzura mineral.",
    caracteristicas: ["Tono ámbar dorado translúcido", "Superficie pulida con brillo ceroso", "Formación romboédrica natural"],
    propiedades: "Asociada a la confianza y la motivación personal. Estimula la voluntad y el optimismo.",
    educativo: { composición: "Carbonato de calcio (CaCO₃) con trazas de hierro", dureza: "3", sistema: "Trigonal", porque_rara: "La variedad miel con buena translucidez y color uniforme es menos frecuente que la calcita blanca" },
    stock: 6, disponible: true, destacada: false
  },
  {
    nombre: "Calcita Naranja",
    slug: "calcita-naranja",
    origen: "México",
    mina: "San Luis Potosí",
    color: "Dorado",
    rareza: "Común",
    precio: 8000,
    tamano: "3.5 cm aprox",
    peso: "34 gramos",
    descripción: "Naranja vibrante y cálido como el atardecer del desierto. Energía solar concentrada en piedra.",
    caracteristicas: ["Naranja intenso con translucidez parcial", "Textura cerosa al tacto", "Color natural sin tratamiento"],
    propiedades: "Piedra de creatividad y vitalidad. Estimula la alegría y la expresión artística.",
    educativo: { composición: "Carbonato de calcio (CaCO₃) con inclusiones de hierro", dureza: "3", sistema: "Trigonal", porque_rara: "Común en su forma básica, pero los ejemplares de color saturado y pulido uniforme son apreciados" },
    stock: 7, disponible: true, destacada: false
  },
  {
    nombre: "Cavansita",
    slug: "cavansita",
    origen: "India",
    mina: "Pune, Maharashtra",
    color: "Azul",
    rareza: "Muy rara",
    precio: 45000,
    tamano: "2 cm aprox",
    peso: "18 gramos",
    descripción: "Azul eléctrico deslumbrante sobre matriz basáltica. Una de las piedras más raras y codiciadas del mundo mineral.",
    caracteristicas: ["Azul eléctrico profundo sobre roca madre", "Cristales aciculares formando rosetas", "Localidad única en el mundo"],
    propiedades: "Piedra de visión y conexión espiritual profunda. Amplifica la intuición y el tercer ojo.",
    educativo: { composición: "Silicato de calcio y vanadio Ca(VO)Si₄O₁₀·4H₂O", dureza: "3 - 4", sistema: "Ortorrómbico", porque_rara: "Solo se encuentra en cantidades significativas en Pune, India. Los cristales grandes y bien formados son extremadamente raros" },
    stock: 1, disponible: true, destacada: true
  },
  {
    nombre: "Cianita con Rubi",
    slug: "cianita-con-rubi",
    origen: "India",
    mina: "Mysore, Karnataka",
    color: "Multicolor",
    rareza: "Rara",
    precio: 25000,
    tamano: "3 cm aprox",
    peso: "28 gramos",
    descripción: "Fusión natural de cianita azul con cristales de rubí rojo. Dos gemas nobles unidas por la geología.",
    caracteristicas: ["Cianita azul con cristales de rubí incrustados", "Contraste cromático natural único", "Ambos minerales en estado natural"],
    propiedades: "Combina la claridad mental de la cianita con la pasión del rubí. Piedra de equilibrio entre razón y corazón.",
    educativo: { composición: "Silicato de aluminio (Al₂SiO₅) + Corindón (Al₂O₃ con cromo)", dureza: "5-7 (cianita) / 9 (rubí)", sistema: "Triclínico / Trigonal", porque_rara: "La coexistencia de ambos minerales en una misma pieza es poco frecuente y muy buscada por coleccionistas" },
    stock: 3, disponible: true, destacada: false
  },
  {
    nombre: "Cinabrio",
    slug: "cinabrio",
    origen: "China",
    mina: "Hunan",
    color: "Rosa",
    rareza: "Rara",
    precio: 20000,
    tamano: "2.5 cm aprox",
    peso: "35 gramos",
    descripción: "Rojo bermellón intenso, el pigmento de los emperadores chinos. Una reliquia de poder ancestral.",
    caracteristicas: ["Rojo bermellón profundo e intenso", "Brillo adamantino característico", "Peso notablemente superior al esperado"],
    propiedades: "Piedra de transformación y poder. Asociada a la alquimia y la transmutación espiritual.",
    educativo: { composición: "Sulfuro de mercurio (HgS)", dureza: "2 - 2.5", sistema: "Trigonal", porque_rara: "Los cristales bien formados son escasos. Históricamente usado como pigmento sagrado en China y Roma" },
    stock: 2, disponible: true, destacada: false
  },
  {
    nombre: "Coral Fosilizado",
    slug: "coral-fosilizado",
    origen: "Indonesia",
    mina: "",
    color: "Dorado",
    rareza: "Poco común",
    precio: 12000,
    tamano: "3 cm aprox",
    peso: "30 gramos",
    descripción: "Coral antiguo convertido en piedra por millones de años. Los patrones marinos permanecen intactos.",
    caracteristicas: ["Patrones coralinos fosilizados visibles", "Tonos beige y crema naturales", "Superficie pulida que revela la estructura original"],
    propiedades: "Conexión con la sabiduría antigua del océano. Simboliza la paciencia y la transformación lenta.",
    educativo: { composición: "Coral calcificado reemplazado por ágata/calcedonia (SiO₂)", dureza: "6.5 - 7", sistema: "Amorfo", porque_rara: "La fosilización con preservación de la estructura coralina original requiere condiciones geológicas muy específicas" },
    stock: 4, disponible: true, destacada: false
  },
  {
    nombre: "Dumortierita",
    slug: "dumortierita",
    origen: "Brasil",
    mina: "Bahía",
    color: "Azul",
    rareza: "Poco común",
    precio: 14000,
    tamano: "3 cm aprox",
    peso: "30 gramos",
    descripción: "Azul índigo profundo con vetas que parecen pinceladas cósmicas. Un mineral discreto pero poderoso.",
    caracteristicas: ["Azul índigo profundo con variaciones de tono", "Textura fibrosa visible en superficie", "Color completamente natural"],
    propiedades: "Piedra de organización mental y disciplina. Ayuda a estructurar pensamientos y tomar decisiones.",
    educativo: { composición: "Borosilicato de aluminio Al₇(BO₃)(SiO₄)₃O₃", dureza: "7", sistema: "Ortorrómbico", porque_rara: "Los ejemplares de color azul intenso y uniforme son poco frecuentes" },
    stock: 5, disponible: true, destacada: false
  },
  {
    nombre: "Jaspe Cocodrilo",
    slug: "jaspe-cocodrilo",
    origen: "Australia",
    mina: "",
    color: "Verde",
    rareza: "Poco común",
    precio: 11000,
    tamano: "3.5 cm aprox",
    peso: "32 gramos",
    descripción: "Verde selvático con patrones que evocan la piel de reptiles prehistóricos. Naturaleza salvaje en piedra.",
    caracteristicas: ["Patrones verdes que recuerdan piel de cocodrilo", "Mezcla de tonos verde oscuro y claro", "Textura orgánica irrepetible"],
    propiedades: "Piedra de fuerza primitiva y conexión con la naturaleza. Enraiza y protege.",
    educativo: { composición: "Calcedonia (SiO₂) con inclusiones de epidota y feldespato", dureza: "6.5 - 7", sistema: "Trigonal", porque_rara: "Exclusivo de Australia, los patrones reptilianos bien definidos son inusuales" },
    stock: 4, disponible: true, destacada: false
  },
  {
    nombre: "Jaspe Leopardita",
    slug: "jaspe-leopardita",
    origen: "México",
    mina: "Chihuahua",
    color: "Multicolor",
    rareza: "Poco común",
    precio: 10000,
    tamano: "3 cm aprox",
    peso: "28 gramos",
    descripción: "Manchas y patrones que imitan la piel de leopardo. Arte abstracto creado por la tierra.",
    caracteristicas: ["Patrones orbiculares tipo piel de leopardo", "Combinación de negro, beige y dorado", "Cada pieza con diseño único"],
    propiedades: "Piedra de coraje y determinación. Conecta con la fuerza animal interior.",
    educativo: { composición: "Riolita orbicular (SiO₂ + feldespatos + mica)", dureza: "6.5 - 7", sistema: "Amorfo", porque_rara: "Los patrones leopardo bien definidos solo se forman bajo condiciones volcánicas muy específicas" },
    stock: 5, disponible: true, destacada: false
  },
  {
    nombre: "Obsidiana Dorada",
    slug: "obsidiana-dorada",
    origen: "México",
    mina: "Jalisco",
    color: "Negro",
    rareza: "Poco común",
    precio: 15000,
    tamano: "3 cm aprox",
    peso: "30 gramos",
    descripción: "Negro profundo con un resplandor dorado interior que aparece al girar la piedra. Magia volcánica pura.",
    caracteristicas: ["Negro con sheen dorado al moverla", "Efecto de brillo interno por inclusiones de magnetita", "Superficie pulida tipo espejo"],
    propiedades: "Piedra de autoconocimiento y revelación. Muestra las verdades ocultas del subconsciente.",
    educativo: { composición: "Vidrio volcánico (SiO₂ 70-75%) con nanopartículas de magnetita orientadas", dureza: "5 - 5.5", sistema: "Amorfo", porque_rara: "El sheen dorado requiere una orientación específica de inclusiones de magnetita durante el enfriamiento de la lava" },
    stock: 4, disponible: true, destacada: false
  },
  {
    nombre: "Obsidiana Plateada",
    slug: "obsidiana-plateada",
    origen: "México",
    mina: "Jalisco",
    color: "Negro",
    rareza: "Poco común",
    precio: 14000,
    tamano: "3 cm aprox",
    peso: "30 gramos",
    descripción: "Negro absoluto con destellos plateados como estrellas en la noche. Un espejo del cosmos en miniatura.",
    caracteristicas: ["Negro con sheen plateado brillante", "Efecto de luz plateada al girarla", "Superficie pulida de alta calidad"],
    propiedades: "Piedra de protección y clarividencia. Actúa como escudo energético y espejo del alma.",
    educativo: { composición: "Vidrio volcánico (SiO₂ 70-75%) con inclusiones de cristobalita", dureza: "5 - 5.5", sistema: "Amorfo", porque_rara: "Las inclusiones de cristobalita que crean el sheen plateado se forman solo bajo condiciones de enfriamiento específicas" },
    stock: 3, disponible: true, destacada: false
  },
  {
    nombre: "Ojo de Buey",
    slug: "ojo-de-buey",
    origen: "Sudáfrica",
    mina: "",
    color: "Dorado",
    rareza: "Poco común",
    precio: 12000,
    tamano: "3 cm aprox",
    peso: "26 gramos",
    descripción: "Rojo caoba con chatoyancia dorada. La versión más intensa y pasional del cuarzo ojo de tigre.",
    caracteristicas: ["Rojo caoba con efecto ojo de gato", "Chatoyancia dorada al moverla", "Tratamiento térmico del ojo de tigre"],
    propiedades: "Piedra de pasión y determinación. Combina la fuerza del tigre con el fuego interior.",
    educativo: { composición: "Cuarzo fibroso (SiO₂) con crocidolita oxidada por calor", dureza: "6.5 - 7", sistema: "Trigonal", porque_rara: "Es ojo de tigre transformado por calor natural o tratamiento. Los ejemplares con chatoyancia intensa son valorados" },
    stock: 5, disponible: true, destacada: false
  },
  {
    nombre: "Ojo de Halcon",
    slug: "ojo-de-halcon",
    origen: "Sudáfrica",
    mina: "",
    color: "Azul",
    rareza: "Poco común",
    precio: 13000,
    tamano: "3 cm aprox",
    peso: "26 gramos",
    descripción: "Azul grisáceo sedoso con reflejos que imitan el ojo de un ave rapaz. Visión y precisión en piedra.",
    caracteristicas: ["Azul grisáceo con efecto chatoyante", "Fibras sedosas visibles en la superficie", "Precursor natural del ojo de tigre"],
    propiedades: "Piedra de percepción y visión clara. Agudiza la intuición y la capacidad de observación.",
    educativo: { composición: "Cuarzo fibroso (SiO₂) con crocidolita azul preservada", dureza: "6.5 - 7", sistema: "Trigonal", porque_rara: "Es la forma no oxidada del ojo de tigre. La preservación del color azul original de la crocidolita es menos común" },
    stock: 4, disponible: true, destacada: false
  },
  {
    nombre: "Ojo de Tigre",
    slug: "ojo-de-tigre",
    origen: "Sudáfrica",
    mina: "",
    color: "Dorado",
    rareza: "Común",
    precio: 9000,
    tamano: "3 cm aprox",
    peso: "26 gramos",
    descripción: "Dorado y marrón con bandas sedosas que danzan con la luz. El clásico protector de los guerreros.",
    caracteristicas: ["Bandas doradas y marrones con chatoyancia", "Efecto ojo de gato brillante", "Piedra clásica de protección"],
    propiedades: "Piedra de protección y confianza. Fortalece la voluntad y el coraje personal.",
    educativo: { composición: "Cuarzo fibroso (SiO₂) con crocidolita pseudomorfizada por limonita", dureza: "6.5 - 7", sistema: "Trigonal", porque_rara: "Aunque relativamente común, los ejemplares con chatoyancia fuerte y bandas bien definidas son los más buscados" },
    stock: 8, disponible: true, destacada: false
  },
  {
    nombre: "Onix Cielo",
    slug: "onix-cielo",
    origen: "Argentina",
    mina: "San Luis",
    color: "Azul",
    rareza: "Poco común",
    precio: 11000,
    tamano: "3.5 cm aprox",
    peso: "32 gramos",
    descripción: "Azul celeste con bandas blancas como nubes en un cielo claro. Serenidad congelada en piedra.",
    caracteristicas: ["Azul celeste con bandas blancas translúcidas", "Superficie pulida con brillo sedoso", "Patrón de bandas único en cada pieza"],
    propiedades: "Piedra de paz y comunicación. Facilita la expresión y disuelve la ansiedad.",
    educativo: { composición: "Calcedonia bandeada (SiO₂) con trazas de cobre", dureza: "6.5 - 7", sistema: "Trigonal", porque_rara: "La variedad azul celeste es mucho menos frecuente que el ónix negro o verde" },
    stock: 5, disponible: true, destacada: false
  },
  {
    nombre: "Septaria",
    slug: "septaria",
    origen: "Madagascar",
    mina: "",
    color: "Dorado",
    rareza: "Poco común",
    precio: 15000,
    tamano: "4 cm aprox",
    peso: "45 gramos",
    descripción: "Nódulo ancestral con venas doradas de calcita sobre arcilla oscura. Parece un huevo de dragón fosilizado.",
    caracteristicas: ["Venas doradas de calcita sobre fondo oscuro", "Patrón de grietas naturales tipo piel de dragón", "Interior hueco con cristales en algunas piezas"],
    propiedades: "Piedra de la Tierra y la paciencia. Conecta con la sabiduría ancestral y el tiempo profundo.",
    educativo: { composición: "Concreción de arcilla con calcita (CaCO₃), aragonita y ocasionalmente barita", dureza: "3.5 - 4", sistema: "Variable (mezcla)", porque_rara: "Las septarias con buen contraste cromático entre calcita dorada y la matriz oscura son las más valoradas" },
    stock: 3, disponible: true, destacada: false
  },
  {
    nombre: "Serafinita",
    slug: "serafinita",
    origen: "Rusia",
    mina: "Lago Baikal, Siberia",
    color: "Verde",
    rareza: "Rara",
    precio: 22000,
    tamano: "3 cm aprox",
    peso: "28 gramos",
    descripción: "Verde profundo con plumas plateadas que parecen alas de ángel. Solo existe en un lugar del planeta.",
    caracteristicas: ["Verde oscuro con inclusiones plumosas plateadas", "Efecto visual de alas angélicas", "Exclusiva de Siberia"],
    propiedades: "Piedra de sanación y conexión angelical. Considerada una de las piedras de vibración más alta.",
    educativo: { composición: "Clinocloro (Mg,Fe)₅Al(Si₃Al)O₁₀(OH)₈, variedad de clorita", dureza: "2 - 2.5", sistema: "Monoclínico", porque_rara: "Solo se extrae en la región del Lago Baikal en Siberia. Las piezas con efecto plumoso pronunciado son escasas" },
    stock: 2, disponible: true, destacada: true
  },
  {
    nombre: "Serpentina",
    slug: "serpentina",
    origen: "Perú",
    mina: "",
    color: "Verde",
    rareza: "Común",
    precio: 8000,
    tamano: "3.5 cm aprox",
    peso: "30 gramos",
    descripción: "Verde reptiliano con vetas que recuerdan la piel de serpiente. Un mineral ancestral de la Tierra profunda.",
    caracteristicas: ["Verde con patrones serpenteantes naturales", "Textura cerosa suave al tacto", "Variaciones de verde claro a oscuro"],
    propiedades: "Piedra de renovación y sanación. Asociada al kundalini y la energía vital ascendente.",
    educativo: { composición: "Silicato de magnesio hidratado Mg₃Si₂O₅(OH)₄", dureza: "2.5 - 4", sistema: "Monoclínico", porque_rara: "Común como mineral, pero los ejemplares pulidos con buenos patrones serpentinos son apreciados" },
    stock: 6, disponible: true, destacada: false
  },
  {
    nombre: "Zoisita",
    slug: "zoisita",
    origen: "Tanzania",
    mina: "Arusha",
    color: "Verde",
    rareza: "Rara",
    precio: 20000,
    tamano: "3 cm aprox",
    peso: "30 gramos",
    descripción: "Verde intenso con inclusiones de rubí rojo. La misma familia que la tanzanita, pero en su forma más salvaje.",
    caracteristicas: ["Verde intenso con cristales de rubí incrustados", "Contraste verde-rojo natural espectacular", "Cada pieza con distribución de rubí única"],
    propiedades: "Piedra de vitalidad y crecimiento. Une la fuerza del rubí con la regeneración de la zoisita.",
    educativo: { composición: "Sorosilicato de calcio y aluminio Ca₂Al₃(SiO₄)(Si₂O₇)O(OH) + Corindón", dureza: "6 - 7 (zoisita) / 9 (rubí)", sistema: "Ortorrómbico", porque_rara: "La combinación natural de zoisita verde con rubí rojo solo se encuentra en Tanzania" },
    stock: 3, disponible: true, destacada: false
  }
];

// Colores de fondo para las cards (en función del color principal)
const COLOR_GRADIENTS = {
  "Azul": "linear-gradient(135deg, #0A1628, #1A3A6B)",
  "Violeta": "linear-gradient(135deg, #1A0A28, #2D1B4E)",
  "Verde": "linear-gradient(135deg, #0A1A0A, #1A4A1A)",
  "Rosa": "linear-gradient(135deg, #1A0A14, #3A1A2A)",
  "Dorado": "linear-gradient(135deg, #1A1A0A, #3A3A1A)",
  "Negro": "linear-gradient(135deg, #0A0A0A, #1A1A1A)",
  "Multicolor": "linear-gradient(135deg, #0A1A1A, #1A3A3B)"
};

// Utilidades
function formatPrice(n) {
  return "$" + n.toLocaleString("es-CL");
}

function getPiedraBySlug(slug) {
  return PIEDRAS.find(p => p.slug === slug) || null;
}

function getRelacionadas(piedra, max = 4) {
  // Priorizar mismo color, luego misma rareza
  const sameColor = PIEDRAS.filter(p => p.slug !== piedra.slug && p.disponible && p.color === piedra.color);
  const others = PIEDRAS.filter(p => p.slug !== piedra.slug && p.disponible && p.color !== piedra.color);
  const pool = [...sameColor.sort(() => Math.random() - 0.5), ...others.sort(() => Math.random() - 0.5)];
  return pool.slice(0, max);
}

function getDestacadas() {
  return PIEDRAS.filter(p => p.destacada && p.disponible);
}

function getRecientes(max = 4) {
  return PIEDRAS.filter(p => p.disponible).slice(-max).reverse();
}

// Piedra del dia (rotación diaria basada en fecha)
function getPiedraDelDia() {
  const disponibles = PIEDRAS.filter(p => p.disponible);
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(),0,0)) / 86400000);
  return disponibles[dayOfYear % disponibles.length];
}

// Fase lunar actual
function getFaseLunar() {
  const LUNAR_CYCLE = 29.53059;
  const KNOWN_NEW_MOON = new Date(2024, 0, 11, 11, 57); // Known new moon
  const diff = (Date.now() - KNOWN_NEW_MOON.getTime()) / 86400000;
  const phase = ((diff % LUNAR_CYCLE) + LUNAR_CYCLE) % LUNAR_CYCLE;
  const pct = phase / LUNAR_CYCLE;
  if (pct < 0.0625) return { nombre: "Luna Nueva", icono: "🌑", mensaje: "Tiempo de introspección. Las piedras oscuras amplifican tu visión interior.", piedras: "Negro" };
  if (pct < 0.1875) return { nombre: "Creciente", icono: "🌒", mensaje: "La energía crece. Piedras de intención y manifestación te acompañan.", piedras: "Verde" };
  if (pct < 0.3125) return { nombre: "Cuarto Creciente", icono: "🌓", mensaje: "Momento de acción. Las piedras de poder fortalecen tu voluntad.", piedras: "Dorado" };
  if (pct < 0.4375) return { nombre: "Gibosa Creciente", icono: "🌔", mensaje: "Tu energía se expande. Piedras de amplificación magnifican tu aura.", piedras: "Multicolor" };
  if (pct < 0.5625) return { nombre: "Luna Llena", icono: "🌕", mensaje: "Máxima potencia lunar. Todas las piedras vibran en su frecuencia más alta.", piedras: "Azul" };
  if (pct < 0.6875) return { nombre: "Gibosa Menguante", icono: "🌖", mensaje: "Tiempo de gratitud. Las piedras de corazón amplifican el amor.", piedras: "Rosa" };
  if (pct < 0.8125) return { nombre: "Cuarto Menguante", icono: "🌗", mensaje: "Libera lo que no sirve. Piedras de transformación te guían.", piedras: "Violeta" };
  return { nombre: "Menguante", icono: "🌘", mensaje: "Cierre del ciclo. Piedras de protección sellan tu campo energético.", piedras: "Negro" };
}

// ====== QUIZ "LECTOR DE AURA" ======
const QUIZ_PREGUNTAS = [
  {
    pregunta: "Cuando cierras los ojos, ¿qué color inunda tu mente?",
    opciones: [
      { texto: "Azul profundo, como el océano de noche", tags: ["Azul", "calma"] },
      { texto: "Verde vibrante, como un bosque antiguo", tags: ["Verde", "sanación"] },
      { texto: "Violeta misterioso, entre sueños y estrellas", tags: ["Violeta", "espiritual"] },
      { texto: "Dorado cálido, como el sol del atardecer", tags: ["Dorado", "abundancia"] }
    ]
  },
  {
    pregunta: "¿Qué elemento te llama con más fuerza?",
    opciones: [
      { texto: "Agua: fluir, adaptarme, profundizar", tags: ["Azul", "calma"] },
      { texto: "Tierra: enraizar, construir, proteger", tags: ["Negro", "protección"] },
      { texto: "Fuego: transformar, crear, brillar", tags: ["Rosa", "amor"] },
      { texto: "Aire: pensar, comunicar, expandir", tags: ["Verde", "sanación"] }
    ]
  },
  {
    pregunta: "¿Qué necesitas más en este momento de tu vida?",
    opciones: [
      { texto: "Paz interior y claridad mental", tags: ["Azul", "calma"] },
      { texto: "Protección y fortaleza", tags: ["Negro", "protección"] },
      { texto: "Amor propio y conexión emocional", tags: ["Rosa", "amor"] },
      { texto: "Abundancia y prosperidad", tags: ["Dorado", "abundancia"] }
    ]
  },
  {
    pregunta: "Si pudieras viajar a un lugar sagrado, ¿cuál sería?",
    opciones: [
      { texto: "Las pirámides de Egipto al amanecer", tags: ["Dorado", "espiritual"] },
      { texto: "Un templo oculto en la selva amazónica", tags: ["Verde", "sanación"] },
      { texto: "Una cueva de cristales en México", tags: ["Violeta", "espiritual"] },
      { texto: "Las costas de una isla volcánica", tags: ["Negro", "protección"] }
    ]
  },
  {
    pregunta: "¿Qué frase resuena más contigo?",
    opciones: [
      { texto: "Confío en el camino, aunque no vea el final", tags: ["Azul", "calma"] },
      { texto: "Mi energía es mi escudo, nada me perturba", tags: ["Negro", "protección"] },
      { texto: "Merezco amor y lo atraigo naturalmente", tags: ["Rosa", "amor"] },
      { texto: "Estoy conectado con algo más grande que yo", tags: ["Violeta", "espiritual"] }
    ]
  }
];

const QUIZ_RESULTADOS = {
  calma:      { titulo: "Alma de Océano", emoji: "&#x1F30A;", desc: "Tu energía busca profundidad y serenidad. Las piedras azules resuenan con tu esencia.", color: "Azul" },
  protección: { titulo: "Guardián de Obsidiana", emoji: "&#x1F6E1;", desc: "Tu aura necesita escudo y enraizamiento. Las piedras oscuras son tu armadura natural.", color: "Negro" },
  amor:       { titulo: "Corazón de Cuarzo", emoji: "&#x1F339;", desc: "Tu energía vibra en la frecuencia del amor. Las piedras rosas amplifican tu conexión.", color: "Rosa" },
  sanación:   { titulo: "Sanador de Esmeralda", emoji: "&#x1F33F;", desc: "Tu espíritu busca equilibrio y restauración. Las piedras verdes son tu medicina.", color: "Verde" },
  abundancia:  { titulo: "Faraón Dorado", emoji: "&#x2728;", desc: "Tu camino está iluminado por la prosperidad. Las piedras doradas multiplican tu magnetismo.", color: "Dorado" },
  espiritual: { titulo: "Místico de Amatista", emoji: "&#x1F52E;", desc: "Tu conciencia se expande más allá del velo. Las piedras violetas son tu portal.", color: "Violeta" }
};

// ====== CLASIFICACION POR TIER ======
const TIER_MAP = {
  "Común": null,
  "Poco común": "selecta",
  "Rara": "exclusiva",
  "Muy rara": "reliquia"
};
PIEDRAS.forEach(p => { p.tier = TIER_MAP[p.rareza] || null; });

// ====== TRILOGIAS ======
const KITS = [
  {
    id: "protección",
    nombre: "Trilogía de Protección",
    icono: "&#x1F6E1;",
    desc: "Escudo energético ancestral. Tres reliquias guardianas para el hogar y el alma.",
    piedras: ["turmalina-negra", "obsidiana-caoba", "labradorita-negra"],
    descuento: 15
  },
  {
    id: "amor",
    nombre: "Trilogía del Amor",
    icono: "&#x1F339;",
    desc: "Abre tu corazón y atrae conexiónes profundas. Tres reliquias que vibran en la frecuencia del amor.",
    piedras: ["cobaltocalcita", "rodocrosita", "turmalina-rosa"],
    descuento: 15
  },
  {
    id: "prosperidad",
    nombre: "Trilogía de Prosperidad",
    icono: "&#x2728;",
    desc: "Atrae abundancia y éxito a tu vida. Tres reliquias de poder que magnifican tu intención.",
    piedras: ["pirita", "calcopirita", "cuarzo-rutilado-dorado"],
    descuento: 15
  },
  {
    id: "espiritual",
    nombre: "Trilogía Espiritual",
    icono: "&#x1F52E;",
    desc: "Eleva tu conciencia y conecta con lo divino. Tres reliquias de alta vibración espiritual.",
    piedras: ["charoita", "lapislazuli", "lepidolita"],
    descuento: 20
  },
  {
    id: "sanación",
    nombre: "Trilogía de Sanación",
    icono: "&#x1F33F;",
    desc: "Restaura cuerpo, mente y espíritu. Tres reliquias sanadoras de la tradición ancestral.",
    piedras: ["amazonita", "malaquita", "prehnita"],
    descuento: 15
  }
];

// ====== REVIEWS ======
const REVIEWS = [
  { nombre: "Carolina M.", ciudad: "Santiago", rating: 5, texto: "La Lapislázuli llegó impecable. El empaque es una experiencia en sí mismo. Se nota el cuidado artesanal.", piedra: "lapislazuli" },
  { nombre: "Andrés P.", ciudad: "Valparaíso", rating: 5, texto: "Compré una Charoita para mi altar y es exactamente como las fotos. Color profundo, energía increíble.", piedra: "charoita" },
  { nombre: "Valentina R.", ciudad: "Concepción", rating: 5, texto: "Mi tercer pedido y cada vez me sorprenden más. La Amazonita tiene un color que no existe en otro lado.", piedra: "amazonita" },
  { nombre: "Ignacio L.", ciudad: "Temuco", rating: 5, texto: "El certificado de autenticidad le da una confianza que no encuentras en otros sitios. 100% recomendado.", piedra: "turquesa" },
  { nombre: "Francisca S.", ciudad: "Viña del Mar", rating: 5, texto: "Regalé un Cuarzo Rosa y fue el mejor regalo que he hecho. Viene en una caja preciosa con su historia.", piedra: "cuarzo-rosa" },
  { nombre: "Matías G.", ciudad: "La Serena", rating: 5, texto: "Increíble la calidad. La Obsidiana Arcoíris tiene un brillo de espejo que hipnotiza. Ya quiero la siguiente.", piedra: "obsidiana-arcoíris" }
];

// ====== BLOG ARTICULOS ======
const BLOG_ARTICULOS = [
  {
    slug: "piedras-para-dormir-mejor",
    titulo: "3 Piedras para Dormir Mejor",
    resumen: "Descubre qué minerales pueden transformar tu descanso nocturno según la tradición cristalográfica.",
    contenido: "El insomnio y el sueño irregular son problemas cada vez más comunes. Desde la antigüedad, ciertas piedras han sido asociadas con el descanso profundo. La Charoita, conocida como la piedra de los sueños, ha sido colocada bajo almohadas por su vibración violeta profunda asociada con la calma mental. El Cuarzo Rosa emite una energía suave que disuelve la ansiedad y promueve la paz emocional antes de dormir. La Lepidolita, rica en litio natural, es considerada el tranquilizante de la naturaleza. Coloca cualquiera de estas piedras en tu mesa de noche y permite que su presencia acompañe tu descanso.",
    piedras: ["charoita", "cuarzo-rosa", "lepidolita"],
    categoria: "bienestar"
  },
  {
    slug: "como-limpiar-tus-piedras",
    titulo: "Guía: Cómo Limpiar y Recargar tus Cristales",
    resumen: "Los métodos ancestrales y modernos para mantener la energía de tu colección en su máximo potencial.",
    contenido: "Las piedras absorben energía del entorno y necesitan limpieza periódica. El método más universal es el agua corriente: sostiene la piedra bajo el chorro durante 30 segundos visualizando cómo la energía estancada se disuelve. IMPORTANTE: No todas las piedras toleran agua (la Selenita se disuelve, la Pirita se oxida). El humo de salvia o palo santo es seguro para todas. La luz de luna llena es ideal para recargar: coloca tus piedras en un plato cerca de la ventana la noche de luna llena. La luz solar directa recarga piedras oscuras (Obsidiana Caoba, Turmalina) pero puede decolorar piedras claras (Fluorita, Cuarzo Rosa). El sonido de un cuenco tibetano limpia por vibración. Elige el método que resuene contigo y crea un ritual mensual.",
    piedras: ["fluorita", "obsidiana-caoba", "turmalina-negra"],
    categoria: "guia"
  },
  {
    slug: "piedras-del-antiguo-egipto",
    titulo: "Las Piedras Sagradas del Antiguo Egipto",
    resumen: "Lapislázuli, Turquesa y Cornalina: los tres pilares minerales de la civilización faraónica.",
    contenido: "Ninguna civilización veneró los minerales como el Antiguo Egipto. El Lapislázuli era más valioso que el oro: representaba el cielo nocturno y se usaba en la máscara mortuoria de Tutankamón. La Turquesa era la piedra de Hathor, diosa del amor, y los faraones enviaban expediciones peligrosas al Sinaí para extraerla. La Cornalina roja simbolizaba la sangre de Isis y se tallaba en amuletos funerarios para proteger al alma en el más allá. La Malaquita, además de sus propiedades místicas, era el eyeshadow de Cleopatra: molida en polvo, protegía contra infecciones oculares en el desierto. Cada piedra cargaba un propósito que iba más allá de lo decorativo: eran tecnología espiritual.",
    piedras: ["lapislazuli", "turquesa", "malaquita"],
    categoria: "historia"
  },
  {
    slug: "cuarzos-guia-completa",
    titulo: "Cuarzos: La Familia más Diversa del Reino Mineral",
    resumen: "De transparente a rosa, de ahumado a citrino. Todo sobre la familia de piedras más versátil del planeta.",
    contenido: "Los cuarzos representan el 12% de la corteza terrestre, pero su diversidad es asombrosa. El Cuarzo Transparente es el maestro sanador, amplificando cualquier intención. El Cuarzo Rosa, teñido por manganeso, es la piedra universal del amor. El Cuarzo Ahumado debe su color a la radiación natural y es un poderoso enraizador. El Cuarzo Rutilado Dorado contiene agujas de titanio atrapadas hace millones de años, como un insecto en ámbar. El Cuarzo Hematoide, bañado en óxido de hierro, irradia vitalidad con su tono rojo-dorado. Cada variante tiene la misma fórmula base (SiO2) pero trazas microscópicas de distintos elementos crean una paleta infinita.",
    piedras: ["cuarzo-rosa", "cuarzo-ahumado", "cuarzo-rutilado-dorado", "cuarzo-hematoide"],
    categoria: "educativo"
  }
];

// ====== MAPEO DE CONTINENTES ======
const CONTINENTE_MAP = {
  "Brasil": "Sudamérica", "Colombia": "Sudamérica", "Bolivia": "Sudamérica",
  "Perú": "Sudamérica", "Argentina": "Sudamérica", "Chile": "Sudamérica",
  "República Dominicana": "Sudamérica",
  "México": "Norteamérica", "EE.UU.": "Norteamérica", "Canadá": "Norteamérica",
  "Groenlandia": "Norteamérica",
  "España": "Europa", "Rusia": "Europa", "Finlandia": "Europa",
  "Noruega": "Europa", "Italia": "Europa", "Rep. Checa": "Europa",
  "Madagascar": "África", "Marruecos": "África", "Sudáfrica": "África",
  "Tanzania": "África", "Congo": "África", "Namibia": "África",
  "Etiopía": "África", "Mali": "África",
  "India": "Asia", "Pakistán": "Asia", "Myanmar": "Asia",
  "Afganistán": "Asia", "China": "Asia", "Sri Lanka": "Asia",
  "Irán": "Asia", "Indonesia": "Asia",
  "Australia": "Oceanía"
};

const CONTINENTE_ICONS = {
  "Sudamérica": "&#x1F30E;", "Norteamérica": "&#x1F30E;",
  "Europa": "&#x1F30D;", "Africa": "&#x1F30D;",
  "Asia": "&#x1F30F;", "Oceanía": "&#x1F30F;"
};

function getContinente(origen) {
  return CONTINENTE_MAP[origen] || "Otro";
}

function getPiedrasByContinente(continente) {
  return PIEDRAS.filter(p => getContinente(p.origen) === continente && p.disponible);
}

// ====== COLECCIONES ZODIACALES ======
const COLECCIONES_ZODIACALES = [
  {
    id: "tauro", nombre: "Tauro", signo: "\u2649", elemento: "Tierra",
    fechaInicio: "2026-04-21", fechaFin: "2026-05-20",
    descripción: "Piedras de firmeza y abundancia. La energía de Tauro conecta con la tierra, la estabilidad y los placeres sensoriales.",
    piedras: [] // 48 slugs pendientes
  },
  {
    id: "geminis", nombre: "Géminis", signo: "\u264A", elemento: "Aire",
    fechaInicio: "2026-05-21", fechaFin: "2026-06-20",
    descripción: "Piedras de dualidad y comunicación. La energía de Géminis fluye entre mundos.",
    piedras: []
  }
];

function getColeccionActual() {
  const hoy = new Date().toISOString().split('T')[0];
  return COLECCIONES_ZODIACALES.find(c => hoy >= c.fechaInicio && hoy <= c.fechaFin) || null;
}

function getProximaColeccion() {
  const hoy = new Date().toISOString().split('T')[0];
  return COLECCIONES_ZODIACALES.find(c => hoy < c.fechaInicio) || null;
}

function getPiedrasDisponiblesPrimero(piedras) {
  return [...piedras.filter(p => p.disponible), ...piedras.filter(p => !p.disponible)];
}

// ====== MAPA DE IMAGENES — ColeccionPiedras ======
const PIEDRA_IMG_MAP = {
  "Aguamarina": "Aguamarina.png",
  "Amazonita": "Amazonita.jpg",
  "Apatita": "Apatita.jpg",
  "Aragonita Beige": "Aragonita Beige.jpg",
  "Atlantisita": "Atlantisita.png",
  "Azurita": "Azurita.jpg",
  "Bolivianita": "Bolivianita.jpg",
  "Calcita Caribe": "Calcita Caribe.png",
  "Calcita Miel": "Calcita Miel.png",
  "Calcita Naranja": "Calcita Naranja.jpg",
  "Calcopirita": "Calcopirita.png",
  "Cavansita": "Cavansita.jpg",
  "Charoita": "Charoita.jpg",
  "Cianita Azul": "Cianita Azul.jpg",
  "Cianita con Rubi": "Cianita con Rubi.jpg",
  "Cinabrio": "Cinabrio.jpg",
  "Cobaltocalcita": "Cobaltocalcita.jpg",
  "Coral Fosilizado": "Coral Fosilizado.jpg",
  "Crisocola": "Crisocola.jpg",
  "Crisoprasa": "Crisoprasa.jpg",
  "Cuarzo Hematoide": "Cuarzo Hematoide.jpg",
  "Cuarzo Rutilado Dorado": "Cuarzo Rutilado Dorado.jpg",
  "Cuarzo Rutilado Plateado": "Cuarzo Rutilado Plateado.jpg",
  "Dumortierita": "Dumortierita.jpg",
  "Esmeralda en matriz": "Esmeralda en matriz.png",
  "Esmeralda en Matriz": "Esmeralda en matriz.png",
  "Fluorita Multicolor": "Fluorita Multicolor.jpg",
  "Fosfosiderita": "Fosfosiderita.jpg",
  "Fucsita con Rubi": "Fucsita con Rubi.jpg",
  "Granate": "Granate.jpg",
  "Iolita": "Iolita.jpg",
  "Jaspe Abejorro": "Jaspe Abejorro.jpg",
  "Jaspe Cocodrilo": "Jaspe Cocodrilo.png",
  "Jaspe Imperial": "Jaspe Imperial.jpg",
  "Jaspe Leopardita": "Jaspe Leopardita.png",
  "Jaspe Oceano": "Jaspe Oceano.jpg",
  "K2": "K2.jpg",
  "Labradorita Blanca": "Labradorita Blanca.jpg",
  "Labradorita Negra": "Labradorita Negra.jpg",
  "Lapislazuli": "Lapislazuli.jpg",
  "Larimar": "Larimar.png",
  "Larvikita": "Larvikita.jpg",
  "Lepidolita": "Lepidolita.png",
  "Malaquita": "Malaquita.png",
  "Mokaita": "Mokaita.png",
  "Nuummita": "Nuummita.jpg",
  "Obsidiana Arcoiris": "Obsidiana Arcoiris.jpg",
  "Obsidiana Caoba": "Obsidiana Caoba.png",
  "Obsidiana Dorada": "Obsidiana Dorada.jpg",
  "Obsidiana Plateada": "Obsidiana Plateada.png",
  "Ojo de Buey": "Ojo de Buey.png",
  "Ojo de Halcon": "Ojo de Halcon.png",
  "Ojo de Tigre": "Ojo de Tigre.png",
  "Onix Cielo": "Onix Cielo.jpg",
  "Opalo Dendritico": "Opalo Dendritico.png",
  "Opalo de Fuego": "Opalo de Fuego.png",
  "Opalo Etiope": "Opalo Etiope.jpg",
  "Ortoclasa": "Ortoclasa.png",
  "Piedra Luna": "Piedra Luna.jpg",
  "Piedra Sol": "Piedra Sol.jpg",
  "Pietersita": "Pietersita.jpg",
  "Pirita": "Pirita.jpg",
  "Prehnita": "Prehnita.jpg",
  "Riolita": "Riolita.jpg",
  "Rodocrosita": "Rodocrosita.jpg",
  "Rodonita": "Rodonita.png",
  "Rubi": "Rubi.jpg",
  "Rubi en matriz": "Rubi en matriz.png",
  "Rubi en Matriz": "Rubi en matriz.png",
  "Septaria": "Septaria.png",
  "Serafinita": "Serafinita.png",
  "Serpentina": "Serpentina.jpg",
  "Shattuckita": "Shattuckita.jpg",
  "Sodalita": "Sodalita.png",
  "Sugilita": "Sugilita.jpg",
  "Tanzanita": "Tanzanita.jpg",
  "Thulite": "Thulite.png",
  "Turmalina Negra": "Turmalina Negra.jpg",
  "Turmalina Rosa": "Turmalina Rosa.png",
  "Turquesa": "Turquesa.jpg",
  "Unakita": "Unakita.png",
  "Zoisita": "Zoisita.png"
};

function getPiedraImgSrc(nombre) {
  var file = PIEDRA_IMG_MAP[nombre];
  return file ? 'img/ColeccionPiedras/' + file : '';
}
