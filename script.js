const animalCatalog = {
    vaca: { n: "Vaca", f: "Bovino", u: "litros de leche", p: "litro de leche", foco: "Leche, carne y cria", s: "Mamifero bovino de alto valor en sistemas de leche y carne. Requiere nutricion estable, agua suficiente, confort y control sanitario continuo.", h: ["Produccion principal: leche, carne y terneros.", "Unidad de calculo: litros de leche por animal.", "Seguimiento clave: ubre, fertilidad y condicion corporal."], g: { p: "Leche, carne y reemplazos para el hato.", a: "Pastos, forrajes conservados, agua abundante y suplementos segun etapa.", m: "Ordeno higienico, sombra, pisos seguros y rutina estable.", c: "Litros diarios, mastitis, consumo y fertilidad." } },
    gallina: { n: "Gallina", f: "Ave de corral", u: "huevos", p: "huevo", foco: "Postura y carne", s: "Ave orientada a postura y carne. Su desempeno mejora con bioseguridad, ventilacion, agua limpia y balance mineral constante.", h: ["Produccion principal: huevos y carne.", "Unidad de calculo: huevos por ave.", "Seguimiento clave: postura, consumo y mortalidad."], g: { p: "Huevos comerciales, carne y lotes de reemplazo.", a: "Alimento balanceado con proteina, calcio y agua siempre disponible.", m: "Nidos limpios, ventilacion, luz controlada y recoleccion frecuente.", c: "Indice de postura, calidad de cascara y estado del plumaje." } },
    cerdo: { n: "Cerdo", f: "Porcino", u: "kilos de carne", p: "kilo de carne", foco: "Carne y reproduccion", s: "Animal porcino criado por su eficiencia en carne. El resultado depende de dieta por etapa, higiene y control del ambiente.", h: ["Produccion principal: carne y lechones.", "Unidad de calculo: kilos de carne por animal.", "Seguimiento clave: ganancia de peso y conversion."], g: { p: "Carne, genetica y lotes de crecimiento.", a: "Dietas formuladas por fase con energia, proteina y agua limpia.", m: "Corrales limpios, densidad adecuada y manejo tranquilo.", c: "Ganancia de peso, consumo y salud respiratoria." } },
    oveja: { n: "Oveja", f: "Rumiante menor", u: "kilos de lana", p: "kilo de lana", foco: "Lana, carne y cria", s: "Rumiante menor adaptable a sistemas pastoriles. Se aprovecha para lana, carne y reproduccion con cuidado especial en pezunas y parasitos.", h: ["Produccion principal: lana, carne y corderos.", "Unidad de calculo: kilos de lana por animal.", "Seguimiento clave: vellon, pezunas y condicion corporal."], g: { p: "Lana, carne y cria en sistemas de pastoreo.", a: "Pastos, heno, sales minerales y apoyo energetico en etapas exigentes.", m: "Esquila programada, rotacion de potreros y refugio frente al clima.", c: "Estado del vellon, crecimiento y carga parasitaria." } },
    cabra: { n: "Cabra", f: "Rumiante menor", u: "litros de leche", p: "litro de leche", foco: "Leche, carne y cria", s: "Animal rustico y adaptable. Destaca en leche y cria, aunque exige cierres seguros, control sanitario y buena nutricion.", h: ["Produccion principal: leche, carne y cabritos.", "Unidad de calculo: litros de leche por animal.", "Seguimiento clave: mastitis, produccion y estado corporal."], g: { p: "Leche, carne y cria con buena adaptacion al terreno.", a: "Forrajes, ramoneo controlado, agua limpia y minerales.", m: "Ordeno limpio, corrales secos y sombra suficiente.", c: "Litros diarios, salud mamaria y parasitosis." } },
    pato: { n: "Pato", f: "Ave acuatica", u: "huevos", p: "huevo", foco: "Huevos, carne y cria", s: "Ave acuatica usada para huevos, carne o pie de cria. Funciona mejor con agua limpia, camas secas y ambiente estable.", h: ["Produccion principal: huevos y carne.", "Unidad de calculo: huevos por ave.", "Seguimiento clave: postura, plumaje y limpieza del espacio."], g: { p: "Huevos, carne y lotes reproductivos.", a: "Balanceado por etapa y agua abundante para consumo e higiene.", m: "Camas secas, ventilacion y limpieza constante.", c: "Postura, ganancia de peso y humedad del ambiente." } },
    pavo: { n: "Pavo", f: "Ave de corral", u: "kilos de carne", p: "kilo de carne", foco: "Carne y reproduccion", s: "Ave de gran porte orientada sobre todo a carne. En etapas tempranas requiere temperatura, ventilacion y bioseguridad muy cuidadas.", h: ["Produccion principal: carne y huevos fertiles.", "Unidad de calculo: kilos de carne por ave.", "Seguimiento clave: crecimiento, patas y ambiente."], g: { p: "Carne de alto peso y lotes reproductivos.", a: "Dietas con proteina y energia ajustadas al crecimiento.", m: "Control termico, espacio suficiente y pisos secos.", c: "Peso, uniformidad y salud respiratoria." } },
    conejo: { n: "Conejo", f: "Lagomorfo", u: "kilos de carne", p: "kilo de carne", foco: "Carne y reproduccion", s: "Animal de crecimiento rapido util para carne y cria. Necesita fibra suficiente, higiene alta y ventilacion constante.", h: ["Produccion principal: carne y cria.", "Unidad de calculo: kilos de carne por animal.", "Seguimiento clave: fertilidad, digestion y crecimiento."], g: { p: "Carne, pie de cria y en algunos sistemas piel.", a: "Heno, fibra, concentrado formulado y agua limpia.", m: "Modulos ventilados, limpieza diaria y nidos bien preparados.", c: "Crecimiento, diarreas, fertilidad y calidad de camada." } },
    caballo: { n: "Caballo", f: "Equino", u: "jornadas o servicios", p: "jornada o servicio", foco: "Trabajo, reproduccion y servicio", s: "Equino empleado para trabajo rural, transporte o reproduccion. Su valor depende del estado corporal, cascos sanos y manejo diario consistente.", h: ["Produccion principal: trabajo, servicio y reproduccion.", "Unidad de calculo: jornadas o servicios por animal.", "Seguimiento clave: resistencia, hidratacion y salud de cascos."], g: { p: "Trabajo rural, servicios y apoyo operativo.", a: "Pasto, heno, agua abundante y minerales segun esfuerzo.", m: "Herraje periodico, ejercicio, cepillado y revision dental.", c: "Condicion corporal, cascos y respuesta al trabajo." } }
};

const animalProfiles = {
    vaca: { ql: "Numero de vacas en produccion", qh: "Incluya solo vacas activas en ordeno o en produccion del lote.", qp: "Ejemplo: 24", pl: "Litros de leche por vaca al dia", ph: "Registre el promedio diario de leche por vaca.", pp: "Ejemplo: 18.5", ps: "0.1", rl: "Precio por litro de leche", rh: "Use el valor comercial actual por litro producido.", rp: "Ejemplo: 1850", rs: "1", gl: "Gastos diarios del lote bovino", gh: "Incluya alimento, ordeno, manejo, medicamentos y personal.", gp: "Ejemplo: 185000", gs: "1", rg: "Rango guia: 12 a 25 litros por vaca al dia.", ck: "Control clave: mastitis, fertilidad y calidad del forraje." },
    gallina: { ql: "Numero de gallinas ponedoras", qh: "Use la cantidad de aves realmente activas en postura.", qp: "Ejemplo: 120", pl: "Huevos por gallina al dia", ph: "Puede usar promedio diario o semanal convertido a diario.", pp: "Ejemplo: 0.85", ps: "0.01", rl: "Precio por huevo", rh: "Ingrese el valor de venta por unidad de huevo.", rp: "Ejemplo: 650", rs: "1", gl: "Gastos diarios del galpon avicola", gh: "Incluya concentrado, agua, limpieza, luz y manejo.", gp: "Ejemplo: 78000", gs: "1", rg: "Rango guia: 0.75 a 0.95 huevos por ave al dia.", ck: "Control clave: postura, cascara, ventilacion y bioseguridad." },
    cerdo: { ql: "Numero de cerdos del lote", qh: "Agrupe animales del mismo corral o del mismo ciclo productivo.", qp: "Ejemplo: 18", pl: "Kilos de carne por cerdo", ph: "Use la produccion o ganancia vendible del periodo evaluado.", pp: "Ejemplo: 95", ps: "0.1", rl: "Precio por kilo de carne", rh: "Ingrese el valor comercial por kilo producido.", rp: "Ejemplo: 9500", rs: "1", gl: "Gastos diarios del corral porcino", gh: "Incluya concentrado, agua, limpieza, manejo y sanidad.", gp: "Ejemplo: 210000", gs: "1", rg: "Rango guia: 85 a 120 kilos por cerdo en etapa comercial.", ck: "Control clave: conversion alimenticia, peso y salud respiratoria." },
    oveja: { ql: "Numero de ovejas del lote", qh: "Ingrese las ovejas activas del grupo que esta evaluando.", qp: "Ejemplo: 32", pl: "Kilos de lana por oveja", ph: "Use el rendimiento promedio por animal en el ciclo evaluado.", pp: "Ejemplo: 2.8", ps: "0.1", rl: "Precio por kilo de lana", rh: "Ingrese el valor comercial del kilo de lana.", rp: "Ejemplo: 14000", rs: "1", gl: "Gastos diarios del lote ovino", gh: "Incluya pastoreo, suplementacion, esquila y sanidad.", gp: "Ejemplo: 92000", gs: "1", rg: "Rango guia: 2 a 5 kilos de lana por oveja segun sistema.", ck: "Control clave: parasitos, estado del vellon y pezunas." },
    cabra: { ql: "Numero de cabras en produccion", qh: "Use solo cabras activas en lactancia o produccion del lote.", qp: "Ejemplo: 20", pl: "Litros de leche por cabra al dia", ph: "Registre el promedio diario real por cabra en ordeno.", pp: "Ejemplo: 2.4", ps: "0.1", rl: "Precio por litro de leche caprina", rh: "Ingrese el valor de venta por litro de leche.", rp: "Ejemplo: 3200", rs: "1", gl: "Gastos diarios del lote caprino", gh: "Incluya forraje, suplementacion, sanidad, manejo y ordeno.", gp: "Ejemplo: 96000", gs: "1", rg: "Rango guia: 1.5 a 4 litros por cabra al dia.", ck: "Control clave: salud mamaria, condicion corporal y parasitos." },
    pato: { ql: "Numero de patos del lote", qh: "Use el total de aves activas en postura o produccion.", qp: "Ejemplo: 40", pl: "Huevos por pato al dia", ph: "Ingrese el promedio diario de postura por pato.", pp: "Ejemplo: 0.7", ps: "0.01", rl: "Precio por huevo de pato", rh: "Use el valor de venta por huevo.", rp: "Ejemplo: 900", rs: "1", gl: "Gastos diarios del lote de patos", gh: "Incluya alimento, agua, limpieza, cama y manejo.", gp: "Ejemplo: 54000", gs: "1", rg: "Rango guia: 0.5 a 0.8 huevos por pato al dia.", ck: "Control clave: limpieza del agua, plumaje y postura." },
    pavo: { ql: "Numero de pavos del lote", qh: "Agrupe pavos del mismo ciclo o del mismo corral.", qp: "Ejemplo: 16", pl: "Kilos de carne por pavo", ph: "Use el rendimiento comercial por ave del lote.", pp: "Ejemplo: 11.5", ps: "0.1", rl: "Precio por kilo de carne de pavo", rh: "Ingrese el valor comercial por kilo.", rp: "Ejemplo: 13000", rs: "1", gl: "Gastos diarios del lote de pavos", gh: "Incluya concentrado, cama, manejo, ambiente y sanidad.", gp: "Ejemplo: 118000", gs: "1", rg: "Rango guia: 8 a 18 kilos por ave segun etapa.", ck: "Control clave: crecimiento, uniformidad y salud respiratoria." },
    conejo: { ql: "Numero de conejos del lote", qh: "Ingrese el total del modulo o grupo productivo evaluado.", qp: "Ejemplo: 26", pl: "Kilos de carne por conejo", ph: "Use el rendimiento comercial promedio por conejo.", pp: "Ejemplo: 2.3", ps: "0.1", rl: "Precio por kilo de carne de conejo", rh: "Ingrese el valor de venta por kilo producido.", rp: "Ejemplo: 17000", rs: "1", gl: "Gastos diarios del modulo cunicola", gh: "Incluya fibra, concentrado, limpieza, manejo y sanidad.", gp: "Ejemplo: 64000", gs: "1", rg: "Rango guia: 1.8 a 3 kilos por conejo comercial.", ck: "Control clave: digestion, fertilidad y calidad de camada." },
    caballo: { ql: "Numero de caballos activos", qh: "Ingrese los caballos que participan en trabajo o servicio.", qp: "Ejemplo: 6", pl: "Jornadas o servicios por caballo", ph: "Registre el promedio diario o el equivalente del servicio prestado.", pp: "Ejemplo: 1", ps: "0.1", rl: "Precio por jornada o servicio", rh: "Use el valor comercial de cada jornada o servicio.", rp: "Ejemplo: 85000", rs: "1", gl: "Gastos diarios del lote equino", gh: "Incluya alimentacion, herraje, cuidado, transporte y manejo.", gp: "Ejemplo: 125000", gs: "1", rg: "Rango guia: 1 a 3 jornadas o servicios por caballo segun uso.", ck: "Control clave: cascos, hidratacion, descanso y condicion fisica." }
};

const glossarySections = {
    animales: { title: "Animales productivos", text: "Especies principales del sistema y su lectura productiva.", count: "Animales" },
    nutricion: { title: "Nutricion y alimentacion", text: "Conceptos clave para sostener consumo, conversion y calidad de la dieta.", count: "Nutricion" },
    manejo: { title: "Manejo y operacion del lote", text: "Practicas diarias para ordenar el trabajo del sistema ganadero.", count: "Manejo" },
    sanidad: { title: "Sanidad y bioseguridad", text: "Prevencion, control y seguimiento sanitario del hato o del lote.", count: "Sanidad" },
    reproduccion: { title: "Reproduccion y cria", text: "Procesos para mantener fertilidad, partos y reposicion productiva.", count: "Reproduccion" },
    instalaciones: { title: "Instalaciones y bienestar", text: "Espacios fisicos que influyen en confort, orden y seguridad.", count: "Instalaciones" },
    economia: { title: "Economia y comercializacion", text: "Indicadores para medir margen, costo, precio y retorno del negocio.", count: "Economia" }
};

const glossaryOrder = ["animales", "nutricion", "manejo", "sanidad", "reproduccion", "instalaciones", "economia"];

const glossaryTerms = [
    ["Alimentacion balanceada", "nutricion", "Plan nutricional que cubre energia, proteina, minerales, fibra y agua segun especie y objetivo.", ["Nutricion", "Racion"], [["Funcion", "Sostener crecimiento, produccion y reproduccion."], ["Clave practica", "Ajustar la racion por etapa y evitar cambios bruscos."]]],
    ["Bebedero", "instalaciones", "Punto de suministro de agua limpia y suficiente para el lote.", ["Agua", "Consumo"], [["Buena practica", "Mantener limpieza y caudal constante."], ["Impacto", "Afecta consumo, salud y rendimiento."]]],
    ["Bienestar animal", "manejo", "Condicion en la que el animal cuenta con alimento, agua, espacio, confort y bajo estres.", ["Confort", "Estres"], [["Indicadores", "Actitud normal, consumo estable y descanso adecuado."], ["Impacto", "Favorece produccion, reproduccion y sanidad."]]],
    ["Bioseguridad", "sanidad", "Medidas para reducir el ingreso y la propagacion de enfermedades dentro del sistema productivo.", ["Prevencion", "Control"], [["Medidas comunes", "Desinfeccion, limpieza y control de visitas."], ["Resultado", "Menor riesgo de brotes y mayor continuidad productiva."]]],
    ["Brete", "instalaciones", "Estructura de sujecion y manejo para revisar, vacunar o movilizar animales con seguridad.", ["Manejo", "Seguridad"], [["Ventaja", "Reduce estres y facilita el trabajo tecnico."], ["Cuidado", "Debe evitar golpes, resbalones y espacios inseguros."]]],
    ["Calostrado", "reproduccion", "Suministro temprano de calostro a la cria para reforzar defensas y arranque productivo.", ["Cria", "Inmunidad"], [["Momento", "Debe darse durante las primeras horas de vida."], ["Impacto", "Mejora defensa y adaptacion inicial."]]],
    ["Calendario sanitario", "sanidad", "Programacion ordenada de vacunas, desparasitaciones y revisiones preventivas.", ["Vacunas", "Prevencion"], [["Proposito", "Mantener consistencia sanitaria durante el ano."], ["Registro", "Guardar fecha, lote y practica realizada."]]],
    ["Canal de comercializacion", "economia", "Ruta por la que se vende el producto, como finca, plaza, intermediario o cliente directo.", ["Venta", "Mercado"], [["Valor", "Influye en precio final y margen."], ["Analisis", "Conviene comparar volumen, precio y costo logico."]]],
    ["Carga animal", "manejo", "Relacion entre cantidad de animales y capacidad del terreno o del alojamiento.", ["Pastoreo", "Densidad"], [["Riesgo", "El exceso reduce pasto, confort y sanidad."], ["Meta", "Ajustar el lote al recurso disponible."]]],
    ["Consumo voluntario", "nutricion", "Cantidad de alimento que el animal ingiere por decision natural en un periodo dado.", ["Consumo", "Dieta"], [["Lectura", "Ayuda a estimar desempeno y formulacion."], ["Alerta", "Una caida puede indicar estres o enfermedad."]]],
    ["Conversion alimenticia", "nutricion", "Relacion entre alimento consumido y produccion obtenida, como peso ganado o huevos.", ["Eficiencia", "Consumo"], [["Lectura", "Mide que tan bien el animal transforma alimento en resultado."], ["Uso", "Sirve para comparar dietas, lotes y manejo."]]],
    ["Corral", "instalaciones", "Area cercada para reunir, separar o manejar animales en condiciones controladas.", ["Espacio", "Control"], [["Funcion", "Ordenar lotes, movimientos y revisiones."], ["Cuidado", "Debe tener piso seguro, drenaje y facilidad de limpieza."]]],
    ["Costo de produccion", "economia", "Suma de recursos invertidos para obtener un producto animal.", ["Gastos", "Insumos"], [["Objetivo", "Conocer cuanto cuesta producir cada unidad."], ["Aplicacion", "Ayuda a fijar precios y revisar margenes."]]],
    ["Cuarentena", "sanidad", "Periodo de observacion para animales nuevos, enfermos o sospechosos antes de mezclarlos con el lote.", ["Prevencion", "Aislamiento"], [["Uso", "Reduce riesgo de ingreso sanitario."], ["Buena practica", "Separar, observar y registrar sintomas."]]],
    ["Destete", "manejo", "Proceso en el que la cria deja de depender de la leche y se adapta a una dieta independiente.", ["Cria", "Transicion"], [["Manejo clave", "Hacer el cambio de forma progresiva."], ["Senal positiva", "La cria mantiene consumo y crecimiento."]]],
    ["Ensilaje", "nutricion", "Forraje conservado por fermentacion controlada para alimentar el lote cuando baja la oferta de pasto.", ["Forraje", "Reserva"], [["Ventaja", "Sostiene oferta de alimento durante epocas criticas."], ["Clave", "Conservar humedad, compactacion y sellado correctos."]]],
    ["Establo", "instalaciones", "Espacio cubierto donde se alojan animales bajo control de manejo, sombra y proteccion.", ["Alojamiento", "Confort"], [["Uso", "Ayuda a ordenar produccion intensiva o semiestabulada."], ["Requisito", "Debe tener ventilacion, limpieza y circulacion segura."]]],
    ["Forraje", "nutricion", "Material vegetal como pastos, henos o ensilajes usado en la alimentacion animal.", ["Pasto", "Heno"], [["Valor", "Aporta fibra y base alimenticia en muchos sistemas."], ["Cuidado", "Conservar limpieza, calidad y disponibilidad."]]],
    ["Ganancia neta", "economia", "Resultado que queda despues de restar los gastos a los ingresos generados.", ["Utilidad", "Margen"], [["Interpretacion", "Mide cuanto valor libre deja la operacion."], ["Uso", "Ayuda a ajustar precio, volumen o costos."]]],
    ["Hato", "manejo", "Conjunto de animales que pertenecen a la unidad productiva y se manejan bajo un mismo sistema.", ["Lote", "Sistema"], [["Utilidad", "Ordena registros, lotes y decisiones de manejo."], ["Buena practica", "Diferenciar categorias y etapas productivas."]]],
    ["Inseminacion artificial", "reproduccion", "Tecnica reproductiva para introducir semen seleccionado sin monta natural.", ["Genetica", "Fertilidad"], [["Ventaja", "Permite mejorar genetica y controlar servicios."], ["Clave", "Depende de deteccion oportuna del celo y tecnica correcta."]]],
    ["Ingreso bruto", "economia", "Monto total generado por la venta antes de descontar gastos.", ["Ventas", "Facturacion"], [["Calculo basico", "Produccion total multiplicada por el precio por unidad."], ["Utilidad", "Mide el tamano comercial del resultado productivo."]]],
    ["Manejo reproductivo", "reproduccion", "Practicas para planear servicios, partos, fertilidad y reemplazos.", ["Fertilidad", "Cria"], [["Beneficio", "Ordena la continuidad del sistema productivo."], ["Control", "Requiere fechas y seguimiento de crias."]]],
    ["Mastitis", "sanidad", "Inflamacion de la glandula mamaria que afecta calidad y volumen de leche.", ["Leche", "Ubre"], [["Senales", "Cambios en leche y sensibilidad en la ubre."], ["Prevencion", "Ordeno higienico y revision frecuente."]]],
    ["Mortalidad", "sanidad", "Indicador que refleja cuantos animales se pierden en un periodo dado.", ["Lote", "Riesgo"], [["Lectura util", "Permite detectar fallas de ambiente, sanidad o nutricion."], ["Control", "Se reduce con prevencion y respuesta temprana."]]],
    ["Ordeno higienico", "manejo", "Rutina de ordeno limpia y ordenada para proteger la calidad de la leche.", ["Leche", "Rutina"], [["Elementos basicos", "Limpieza, secado y revision previa del animal."], ["Resultado", "Mejora inocuidad y reduce mastitis."]]],
    ["Palpacion", "reproduccion", "Revision tecnica para confirmar gestacion o evaluar el estado reproductivo del animal.", ["Gestacion", "Control"], [["Uso", "Ayuda a decidir manejo y programacion del lote."], ["Requisito", "Debe realizarla personal entrenado."]]],
    ["Parasitosis", "sanidad", "Presencia de parasitos internos o externos que reducen el desempeno productivo.", ["Parasitos", "Prevencion"], [["Efecto", "Disminuye crecimiento, fertilidad y condicion corporal."], ["Manejo", "Se controla con higiene y calendario sanitario."]]],
    ["Periodo seco", "reproduccion", "Etapa sin ordeno antes del parto para recuperar la glanda mamaria y preparar la siguiente lactancia.", ["Lactancia", "Preparto"], [["Objetivo", "Recuperar tejido y sostener produccion futura."], ["Control", "Exige dieta y manejo propios."]]],
    ["Peso vivo", "economia", "Peso del animal en pie, util para evaluar crecimiento, venta y alimentacion.", ["Crecimiento", "Venta"], [["Aplicacion", "Sirve para seguimiento productivo y comercial."], ["Ventaja", "Ayuda a comparar rendimiento entre lotes."]]],
    ["Punto de equilibrio", "economia", "Nivel minimo de produccion o venta necesario para cubrir costos sin perder dinero.", ["Margen", "Costo"], [["Funcion", "Define desde cuando el sistema comienza a dejar utilidad."], ["Uso", "Sirve para planear precio, volumen y gastos."]]],
    ["Postura", "manejo", "Produccion de huevos por parte de aves ponedoras durante un periodo de manejo.", ["Huevos", "Aves"], [["Seguimiento", "Se observa por ave, lote y persistencia."], ["Factores", "Influyen nutricion, luz, ambiente y sanidad."]]],
    ["Rentabilidad", "economia", "Relacion entre el beneficio obtenido y los recursos invertidos.", ["Margen", "Gestion"], [["Uso", "Permite saber si el sistema deja retorno atractivo."], ["Mejora", "Se fortalece con mejor produccion o menor gasto."]]],
    ["Rotacion de potreros", "manejo", "Movimiento planificado del ganado entre areas de pastoreo.", ["Pastoreo", "Suelo"], [["Beneficio", "Favorece recuperacion del forraje y orden del terreno."], ["Resultado", "Mejora disponibilidad de alimento."]]],
    ["Servicio", "reproduccion", "Momento en que se realiza la monta o la inseminacion del animal para buscar gestacion.", ["Celo", "Fertilidad"], [["Importancia", "Marca el inicio del ciclo reproductivo siguiente."], ["Control", "Se apoya en fechas y deteccion precisa."]]],
    ["Suplementacion mineral", "nutricion", "Aporte adicional de minerales y vitaminas que corrige carencias de la dieta base.", ["Minerales", "Balance"], [["Utilidad", "Fortalece produccion, hueso, fertilidad y defensas."], ["Criterio", "Debe ajustarse a especie, edad y sistema."]]],
    ["Trazabilidad", "economia", "Capacidad de seguir el historial del animal o del producto desde el manejo hasta la venta.", ["Registro", "Historial"], [["Apoyo clave", "Facilita control sanitario y decisiones comerciales."], ["Base", "Depende de registros claros y consistentes."]]],
    ["Vacunacion", "sanidad", "Aplicacion programada de biologicos para prevenir enfermedades.", ["Prevencion", "Proteccion"], [["Objetivo", "Reducir riesgo sanitario y mantener continuidad."], ["Buena practica", "Respetar dosis, fecha y registro."]]]
].map(([title, section, summary, tags, details]) => ({ title, section, summary, tags, details: details.map(([label, value]) => ({ label, value })) }));

const elements = {
    formAnimal: document.getElementById("formAnimal"),
    animalSelect: document.getElementById("animal"),
    animalSeleccionado: document.getElementById("animalSeleccionado"),
    animalFormContext: document.getElementById("animalFormContext"),
    formGanadero: document.getElementById("formGanadero"),
    numAnimales: document.getElementById("numAnimales"),
    produccionPorAnimal: document.getElementById("produccionPorAnimal"),
    precioPorUnidad: document.getElementById("precioPorUnidad"),
    gastosDiarios: document.getElementById("gastosDiarios"),
    labelCantidad: document.getElementById("labelCantidad"),
    labelProduccion: document.getElementById("labelProduccion"),
    labelPrecio: document.getElementById("labelPrecio"),
    labelGastos: document.getElementById("labelGastos"),
    hintCantidad: document.getElementById("hintCantidad"),
    hintProduccion: document.getElementById("hintProduccion"),
    hintPrecio: document.getElementById("hintPrecio"),
    hintGastos: document.getElementById("hintGastos"),
    resultados: document.getElementById("resultados"),
    chartShell: document.getElementById("chartShell"),
    chartPlaceholder: document.getElementById("chartPlaceholder"),
    chartCanvas: document.getElementById("graficaResultados"),
    glossaryToggle: document.getElementById("glossaryToggle"),
    glossaryPanel: document.getElementById("glosario"),
    glossarySearch: document.getElementById("glossarySearch"),
    glossaryOverview: document.getElementById("glossaryOverview"),
    glossarySummary: document.getElementById("glossarySummary"),
    glossaryGrid: document.getElementById("glossaryGrid"),
    filterChips: Array.from(document.querySelectorAll(".filter-chip"))
};

const numberFormatter = new Intl.NumberFormat("es-CO", { minimumFractionDigits: 0, maximumFractionDigits: 2 });
const currencyFormatter = new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0, maximumFractionDigits: 2 });
const storageKey = "gestionRuralPanelStateV2";

const glossaryState = { filter: "todos", query: "" };
const glossaryEntries = buildGlossaryEntries();

let selectedAnimalKey = "";
let resultsChart = null;

bootstrap();

function bootstrap() {
    populateAnimalSelect();
    restorePersistedState();
    renderGlossary();
    bindEvents();
    if (selectedAnimalKey && hasCompleteFormData()) {
        runCalculation();
        return;
    }
    if (selectedAnimalKey) {
        setReadyResultState(animalCatalog[selectedAnimalKey]);
        return;
    }
    resetChartState();
}

function bindEvents() {
    elements.formAnimal.addEventListener("submit", (event) => {
        event.preventDefault();
        applySelectedAnimal();
    });
    elements.animalSelect.addEventListener("change", applySelectedAnimal);
    elements.formGanadero.addEventListener("submit", calculateResults);
    elements.glossaryToggle.addEventListener("click", toggleGlossary);
    elements.glossarySearch.addEventListener("input", (event) => {
        glossaryState.query = event.target.value;
        persistState();
        renderGlossary();
    });
    elements.filterChips.forEach((chip) => {
        chip.addEventListener("click", () => {
            glossaryState.filter = chip.dataset.filter;
            activateFilterChip(glossaryState.filter);
            persistState();
            renderGlossary();
        });
    });
    [elements.numAnimales, elements.produccionPorAnimal, elements.precioPorUnidad, elements.gastosDiarios].forEach((input) => {
        input.addEventListener("input", handleCalculationInput);
        input.addEventListener("change", handleCalculationInput);
    });
}

function restorePersistedState() {
    const state = readPersistedState();
    if (state.animal && animalCatalog[state.animal]) {
        elements.animalSelect.value = state.animal;
    }
    if (typeof state.numAnimales === "string") {
        elements.numAnimales.value = state.numAnimales;
    }
    if (typeof state.produccionPorAnimal === "string") {
        elements.produccionPorAnimal.value = state.produccionPorAnimal;
    }
    if (typeof state.precioPorUnidad === "string") {
        elements.precioPorUnidad.value = state.precioPorUnidad;
    }
    if (typeof state.gastosDiarios === "string") {
        elements.gastosDiarios.value = state.gastosDiarios;
    }
    if (typeof state.query === "string") {
        glossaryState.query = state.query;
        elements.glossarySearch.value = state.query;
    }
    if (state.filter && (state.filter === "todos" || glossarySections[state.filter])) {
        glossaryState.filter = state.filter;
    }
    activateFilterChip(glossaryState.filter);
    const activeKey = elements.animalSelect.value;
    if (activeKey) {
        setAnimalContext(activeKey, { preserveValues: true, persist: false });
    }
}

function readPersistedState() {
    try {
        return JSON.parse(window.localStorage.getItem(storageKey) || "{}");
    } catch {
        return {};
    }
}

function persistState() {
    try {
        window.localStorage.setItem(storageKey, JSON.stringify({
            animal: elements.animalSelect.value,
            numAnimales: elements.numAnimales.value,
            produccionPorAnimal: elements.produccionPorAnimal.value,
            precioPorUnidad: elements.precioPorUnidad.value,
            gastosDiarios: elements.gastosDiarios.value,
            filter: glossaryState.filter,
            query: glossaryState.query
        }));
    } catch {
        return;
    }
}

function activateFilterChip(activeFilter) {
    elements.filterChips.forEach((button) => button.classList.toggle("is-active", button.dataset.filter === activeFilter));
}

function handleCalculationInput() {
    const currentKey = getCurrentAnimalKey();
    if (currentKey && currentKey !== selectedAnimalKey) {
        setAnimalContext(currentKey, { preserveValues: true });
    }
    persistState();
    if (!selectedAnimalKey || !animalCatalog[selectedAnimalKey]) {
        return;
    }
    if (hasCompleteFormData()) {
        runCalculation();
        return;
    }
    setReadyResultState(animalCatalog[selectedAnimalKey]);
}

function populateAnimalSelect() {
    const options = Object.entries(animalCatalog).map(([key, animal]) => `<option value="${key}">${animal.n} - ${animal.foco}</option>`).join("");
    elements.animalSelect.insertAdjacentHTML("beforeend", options);
}

function getCurrentAnimalKey() {
    const key = elements.animalSelect.value;
    return animalCatalog[key] ? key : "";
}

function clearCalculationInputs() {
    [elements.numAnimales, elements.produccionPorAnimal, elements.precioPorUnidad, elements.gastosDiarios].forEach((input) => {
        input.value = "";
    });
}

function setAnimalContext(key, options = {}) {
    const { preserveValues = false, persist = true } = options;
    const animal = animalCatalog[key];
    const profile = animalProfiles[key];
    if (!animal || !profile) {
        selectedAnimalKey = "";
        return null;
    }
    const changedAnimal = selectedAnimalKey && selectedAnimalKey !== key;
    selectedAnimalKey = key;
    applyAnimalProfile(animal, profile);
    renderAnimalHighlight(animal);
    if (changedAnimal && !preserveValues) {
        clearCalculationInputs();
    }
    if (persist) {
        persistState();
    }
    return animal;
}

function applySelectedAnimal() {
    const key = getCurrentAnimalKey();
    if (!key) {
        return;
    }
    const previousKey = selectedAnimalKey;
    const animal = setAnimalContext(key, { preserveValues: false });
    if (!animal) {
        return;
    }
    if (previousKey && previousKey !== key) {
        elements.resultados.className = "result-state";
        elements.resultados.innerHTML = `
            <div class="result-ready">
                <span class="result-ready__eyebrow">Animal actualizado</span>
                <h3 class="result-ready__title">${animal.n} activo</h3>
                <p class="result-ready__text">Se limpio el calculo anterior para evitar mezclar datos de otra especie. Ingrese valores propios de <strong>${animal.n.toLowerCase()}</strong> y el resumen saldra con su unidad correcta: <strong>${animal.u}</strong>.</p>
            </div>
        `;
        resetChartState();
        return;
    }
    if (hasCompleteFormData()) {
        runCalculation();
    } else {
        setReadyResultState(animal);
    }
}

function applyAnimalProfile(animal, profile) {
    elements.labelCantidad.textContent = profile.ql;
    elements.labelProduccion.textContent = profile.pl;
    elements.labelPrecio.textContent = profile.rl;
    elements.labelGastos.textContent = profile.gl;
    elements.hintCantidad.textContent = profile.qh;
    elements.hintProduccion.textContent = `${profile.ph} ${profile.rg}`;
    elements.hintPrecio.textContent = profile.rh;
    elements.hintGastos.textContent = profile.gh;
    configureInput(elements.numAnimales, profile.qp, "1", "1");
    configureInput(elements.produccionPorAnimal, profile.pp, profile.ps, "0");
    configureInput(elements.precioPorUnidad, profile.rp, profile.rs, "0");
    configureInput(elements.gastosDiarios, profile.gp, profile.gs, "0");
    elements.animalFormContext.classList.remove("animal-form-context--empty");
    elements.animalFormContext.innerHTML = `
        <div class="animal-form-context__grid">
            <div class="animal-form-context__item">
                <span class="animal-form-context__label">Unidad base</span>
                <span class="animal-form-context__value">${animal.u}</span>
            </div>
            <div class="animal-form-context__item">
                <span class="animal-form-context__label">Enfoque productivo</span>
                <span class="animal-form-context__value">${animal.foco}</span>
            </div>
            <div class="animal-form-context__item">
                <span class="animal-form-context__label">Rango guia</span>
                <span class="animal-form-context__value">${profile.rg}</span>
            </div>
            <div class="animal-form-context__item">
                <span class="animal-form-context__label">Control prioritario</span>
                <span class="animal-form-context__value">${profile.ck}</span>
            </div>
        </div>
    `;
}

function configureInput(input, placeholder, step, min) {
    input.placeholder = placeholder;
    input.step = step;
    input.min = min;
}

function renderAnimalHighlight(animal) {
    elements.animalSeleccionado.classList.remove("animal-highlight--empty");
    elements.animalSeleccionado.innerHTML = `
        <div class="animal-highlight__header">
            <div>
                <h3 class="animal-highlight__title">${animal.n}</h3>
                <p class="animal-highlight__description">${animal.s}</p>
            </div>
            <span class="animal-highlight__badge">${animal.f}</span>
        </div>
        <ul class="animal-highlight__details">
            ${animal.h.map((detail) => `<li>${detail}</li>`).join("")}
        </ul>
    `;
}

function hasCompleteFormData() {
    return [elements.numAnimales, elements.produccionPorAnimal, elements.precioPorUnidad, elements.gastosDiarios].every((input) => input.value.trim() !== "");
}

function setReadyResultState(animal) {
    elements.resultados.className = "result-state";
    elements.resultados.innerHTML = `
        <div class="result-ready">
            <span class="result-ready__eyebrow">Contexto activo</span>
            <h3 class="result-ready__title">${animal.n} listo para calcular</h3>
            <p class="result-ready__text">La unidad de calculo ya cambio a <strong>${animal.u}</strong>. Complete los campos o ajuste los valores actuales para que el resultado aparezca aqui en tiempo real.</p>
        </div>
    `;
    resetChartState();
}

function calculateResults(event) {
    event.preventDefault();
    runCalculation();
}

function runCalculation() {
    const currentKey = getCurrentAnimalKey();
    if (currentKey) {
        selectedAnimalKey = currentKey;
    }
    if (!selectedAnimalKey) {
        elements.resultados.className = "result-state";
        elements.resultados.textContent = "Seleccione primero un animal para activar la unidad de calculo correcta y obtener una lectura mas precisa.";
        resetChartState();
        return;
    }
    const numAnimales = Number(elements.numAnimales.value);
    const produccionPorAnimal = Number(elements.produccionPorAnimal.value);
    const precioPorUnidad = Number(elements.precioPorUnidad.value);
    const gastosDiarios = Number(elements.gastosDiarios.value);
    if ([numAnimales, produccionPorAnimal, precioPorUnidad, gastosDiarios].some((value) => Number.isNaN(value))) {
        return;
    }
    const animal = animalCatalog[selectedAnimalKey];
    const produccionTotal = numAnimales * produccionPorAnimal;
    const ingresos = produccionTotal * precioPorUnidad;
    const ganancia = ingresos - gastosDiarios;
    const promedio = numAnimales > 0 ? produccionTotal / numAnimales : 0;
    const rentabilidad = ingresos > 0 ? (ganancia / ingresos) * 100 : 0;
    const costoPorAnimal = numAnimales > 0 ? gastosDiarios / numAnimales : 0;
    const ingresoPorAnimal = numAnimales > 0 ? ingresos / numAnimales : 0;
    const proyeccionSemanal = ganancia * 7;
    const proyeccionMensual = ganancia * 30;
    const cobertura = ingresos > 0 ? (gastosDiarios / ingresos) * 100 : 0;
    renderResults({ animal, numAnimales, produccionTotal, ingresos, gastosDiarios, ganancia, promedio, rentabilidad, costoPorAnimal, ingresoPorAnimal, proyeccionSemanal, proyeccionMensual, cobertura });
    renderChart({ animal, produccionTotal, ingresos, gastosDiarios, ganancia });
    persistState();
}

function renderResults(data) {
    const note = data.ganancia >= 0
        ? `La operacion del lote de ${data.animal.n.toLowerCase()} mantiene cobertura diaria y deja una utilidad estimada util para sostener y escalar el manejo.`
        : `El lote necesita reforzar produccion, precio por unidad o control de gastos para mejorar el margen diario sin perder trazabilidad del calculo.`;
    elements.resultados.className = "result-state result-state--ready";
    elements.resultados.innerHTML = `
        <div class="result-hero ${data.ganancia >= 0 ? "result-hero--positive" : "result-hero--warning"}">
            <div class="result-hero__top">
                <h3 class="result-hero__title">Resultados</h3>
                <span class="result-hero__badge">${data.animal.n} · ${data.animal.p}</span>
            </div>
            <div class="result-hero__rows">
                <p>Produccion total: <strong>${numberFormatter.format(data.produccionTotal)} ${data.animal.u}</strong></p>
                <p>Ingresos: <strong>${currencyFormatter.format(data.ingresos)}</strong></p>
                <p>Ganancia neta: <strong>${currencyFormatter.format(data.ganancia)}</strong></p>
            </div>
            <div class="result-hero__divider"></div>
            <div class="result-hero__foot">
                <p>Promedio por animal: <strong>${numberFormatter.format(data.promedio)} ${data.animal.u}</strong></p>
                <p>Rentabilidad: <strong>${numberFormatter.format(data.rentabilidad)}%</strong></p>
            </div>
        </div>
        <div class="result-kpi-grid">
            <article class="result-kpi-card"><span class="result-kpi-card__label">Gastos diarios</span><span class="result-kpi-card__value">${currencyFormatter.format(data.gastosDiarios)}</span></article>
            <article class="result-kpi-card"><span class="result-kpi-card__label">Ingreso por animal</span><span class="result-kpi-card__value">${currencyFormatter.format(data.ingresoPorAnimal)}</span></article>
            <article class="result-kpi-card"><span class="result-kpi-card__label">Costo por animal</span><span class="result-kpi-card__value">${currencyFormatter.format(data.costoPorAnimal)}</span></article>
            <article class="result-kpi-card"><span class="result-kpi-card__label">Proyeccion mensual</span><span class="result-kpi-card__value">${currencyFormatter.format(data.proyeccionMensual)}</span></article>
        </div>
        <div class="result-note"><strong>Lectura operativa:</strong> ${note}</div>
        <div class="result-breakdown">
            <article class="result-breakdown__card"><span class="result-breakdown__title">Lectura del lote</span><p class="result-breakdown__text">El lote registra ${numberFormatter.format(data.produccionTotal)} ${data.animal.u} con ${numberFormatter.format(data.numAnimales)} animales activos.</p></article>
            <article class="result-breakdown__card"><span class="result-breakdown__title">Cobertura diaria</span><p class="result-breakdown__text">Los gastos representan ${numberFormatter.format(data.cobertura)}% del ingreso bruto estimado en el dia.</p></article>
            <article class="result-breakdown__card"><span class="result-breakdown__title">Proyeccion semanal</span><p class="result-breakdown__text">Si el comportamiento se mantiene, la utilidad corta proyecta ${currencyFormatter.format(data.proyeccionSemanal)} por semana.</p></article>
        </div>
    `;
}

function resetChartState() {
    if (resultsChart) {
        resultsChart.destroy();
        resultsChart = null;
    }
    elements.chartShell.classList.add("chart-shell--empty");
    elements.chartPlaceholder.textContent = "";
}

function renderChart(data) {
    if (typeof Chart === "undefined") {
        return;
    }
    elements.chartShell.classList.remove("chart-shell--empty");
    elements.chartPlaceholder.textContent = "";
    if (resultsChart) {
        resultsChart.destroy();
    }
    resultsChart = new Chart(elements.chartCanvas.getContext("2d"), {
        type: "bar",
        data: {
            labels: ["Produccion", "Ingresos", "Ganancia"],
            datasets: [{
                label: `Resumen de ${data.animal.n}`,
                data: [data.produccionTotal, data.ingresos, data.ganancia],
                backgroundColor: ["#7abb89", "#4a9be3", "#ff754c"],
                hoverBackgroundColor: ["#67ad78", "#3888d3", "#f2643c"],
                borderRadius: 14,
                maxBarThickness: 64,
                categoryPercentage: 0.72,
                barPercentage: 0.86
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 420
            },
            layout: {
                padding: { top: 10, right: 8, bottom: 0, left: 4 }
            },
            plugins: {
                legend: { display: false },
                title: { display: true, text: `Resultados en Grafica de ${data.animal.n}` },
                tooltip: {
                    displayColors: false,
                    padding: 12,
                    callbacks: {
                        title() {
                            return data.animal.n;
                        },
                        label(context) {
                            const label = context.label || "";
                            const value = context.raw;
                            return label === "Produccion" ? `${label}: ${numberFormatter.format(value)} ${data.animal.u}` : `${label}: ${currencyFormatter.format(value)}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: {
                        color: "#4f5f56",
                        font: { size: 12, weight: "700" }
                    }
                },
                y: {
                    beginAtZero: true,
                    grace: "6%",
                    ticks: {
                        color: "#68776e",
                        maxTicksLimit: 6,
                        callback(value) { return numberFormatter.format(value); }
                    }
                }
            }
        }
    });
    requestAnimationFrame(() => {
        if (resultsChart) {
            resultsChart.resize();
        }
    });
}

function toggleGlossary() {
    const isOpen = elements.glossaryToggle.getAttribute("aria-expanded") === "true";
    if (isOpen) {
        elements.glossaryToggle.setAttribute("aria-expanded", "false");
        elements.glossaryToggle.textContent = "GLOSARIO";
        elements.glossaryPanel.hidden = true;
        elements.glossaryPanel.classList.add("is-collapsed");
        return;
    }
    elements.glossaryToggle.setAttribute("aria-expanded", "true");
    elements.glossaryToggle.textContent = "OCULTAR GLOSARIO";
    elements.glossaryPanel.hidden = false;
    elements.glossaryPanel.classList.remove("is-collapsed");
    renderGlossary();
    elements.glossaryPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function buildGlossaryEntries() {
    const animals = Object.values(animalCatalog).map((animal) => ({
        title: animal.n,
        section: "animales",
        badge: animal.f,
        summary: animal.s,
        tags: [animal.foco, animal.f, animal.u],
        details: [
            { label: "Produccion principal", value: animal.g.p },
            { label: "Alimentacion", value: animal.g.a },
            { label: "Manejo recomendado", value: animal.g.m },
            { label: "Seguimiento clave", value: animal.g.c }
        ]
    }));
    return [...animals, ...glossaryTerms].sort((a, b) => a.title.localeCompare(b.title, "es", { sensitivity: "base" }));
}

function renderGlossary() {
    const items = glossaryEntries.filter((entry) => {
        const matchesFilter = glossaryState.filter === "todos" || entry.section === glossaryState.filter;
        return matchesFilter && matchesQuery(entry, glossaryState.query);
    });
    renderGlossaryOverview(items);
    elements.glossarySummary.textContent = `${items.length} entradas visibles, organizadas por bloques tecnicos ganaderos.`;
    if (!items.length) {
        elements.glossaryGrid.innerHTML = `<div class="glossary-empty">No se encontraron coincidencias con el filtro actual. Pruebe otro termino o una busqueda mas corta.</div>`;
        return;
    }
    elements.glossaryGrid.innerHTML = glossaryOrder.map((sectionKey) => {
        const sectionItems = items.filter((entry) => entry.section === sectionKey);
        return sectionItems.length ? renderGlossarySection(sectionKey, sectionItems) : "";
    }).join("");
}

function renderGlossaryOverview(items) {
    const sectionCount = new Set(items.map((entry) => entry.section)).size;
    const animalCount = glossaryEntries.filter((entry) => entry.section === "animales").length;
    elements.glossaryOverview.innerHTML = `
        <article class="glossary-overview__card"><span class="glossary-overview__value">${glossaryEntries.length}</span><span class="glossary-overview__label">entradas tecnicas cargadas</span></article>
        <article class="glossary-overview__card"><span class="glossary-overview__value">${items.length}</span><span class="glossary-overview__label">entradas visibles segun filtro</span></article>
        <article class="glossary-overview__card"><span class="glossary-overview__value">${sectionCount}</span><span class="glossary-overview__label">bloques tecnicos activos</span></article>
        <article class="glossary-overview__card"><span class="glossary-overview__value">${animalCount}</span><span class="glossary-overview__label">animales productivos cubiertos</span></article>
    `;
}

function renderGlossarySection(sectionKey, entries) {
    const section = glossarySections[sectionKey];
    return `
        <section class="glossary-section glossary-section--${sectionKey}" data-section="${sectionKey}">
            <div class="glossary-section__header">
                <div>
                    <span class="glossary-section__eyebrow">${section.count}</span>
                    <h3 class="glossary-section__title">${section.title}</h3>
                    <p class="glossary-section__text">${section.text}</p>
                </div>
                <span class="glossary-section__count">${entries.length} conceptos</span>
            </div>
            <div class="glossary-section__grid">${entries.map(renderGlossaryCard).join("")}</div>
        </section>
    `;
}

function matchesQuery(entry, rawQuery) {
    const query = normalize(rawQuery.trim());
    if (!query) {
        return true;
    }
    const content = normalize([entry.title, entry.section, entry.summary, entry.badge || "", entry.tags.join(" "), entry.details.map((detail) => `${detail.label} ${detail.value}`).join(" ")].join(" "));
    return content.includes(query);
}

function renderGlossaryCard(entry) {
    const badge = entry.badge || glossarySections[entry.section].count;
    return `
        <article class="glossary-card glossary-card--${entry.section}" data-section="${entry.section}">
            <div class="glossary-card__top">
                <h3 class="glossary-card__title">${entry.title}</h3>
                <span class="glossary-card__type">${badge}</span>
            </div>
            <p class="glossary-card__summary">${entry.summary}</p>
            <div class="glossary-tags">${entry.tags.map((tag) => `<span class="glossary-tag">${tag}</span>`).join("")}</div>
            <ul class="glossary-details">${entry.details.map((detail) => `<li><strong>${detail.label}:</strong> ${detail.value}</li>`).join("")}</ul>
        </article>
    `;
}

function normalize(value) {
    return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
