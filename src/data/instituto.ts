import type {
  Anuncio,
  Asignatura,
  AsignaturaMalla,
  ModuloOrganizacion,
} from "../types";

// ============================================
// INSTITUTO BÍBLICO "Iglesia Bautista de Sola"
// Datos completos de la plataforma
// ============================================

export const INSTITUTO = {
  nombre: 'Instituto Bíblico "Iglesia Bautista de Sola"',
  nombreCorto: "IB Iglesia Bautista de Sola",
  siglas: "IBS",
  subtitulo:
    "Bajo los auspicios del Seminario Teológico Bautista de Cuba Oriental (STBCOr)",
  duracion: "24-30 meses",
  titulo: "Bachiller en Teología",
  sistema: "Sistema Modular",
  creditosMinimos: 50,
  modulosTotales: 11,
  descripcion:
    "Formación teológica integral con énfasis en la fidelidad bíblica, la piedad personal y el servicio ministerial. Una comunidad de aprendizaje donde la Palabra de Dios es la autoridad suprema para la fe y la práctica.",
};

// ============================================
// ANUNCIOS
// ============================================
export const ANUNCIOS: Anuncio[] = [
  {
    id: "anuncio-1",
    titulo: "Inicio del Módulo 2 — Antiguo Testamento I y Hermenéutica",
    fecha: "9 de septiembre de 2026",
    contenido:
      "Damos la bienvenida al segundo módulo del Bachillerato en Teología. Iniciamos dos asignaturas troncales: Antiguo Testamento I (IB-AT-101) con la Lic. Yordanka Álvarez Pérez y Hermenéutica Bíblica (IB-HM-401) con el Prof. Rolando Y. Desdín García. Las sesiones son presenciales en el Instituto.",
    categoria: "general",
    destacado: true,
  },
  {
    id: "anuncio-2",
    titulo: "Primera sesión de Antiguo Testamento I",
    fecha: "9 de septiembre de 2026",
    contenido:
      "Tema: Introducción al Antiguo Testamento — canon, estructura, temas y géneros. Llevar la Biblia NVI y el manual de la asignatura. La clase iniciará puntual.",
    categoria: "clase",
  },
  {
    id: "anuncio-3",
    titulo: "Lectura obligatoria para Hermenéutica (Sesión 1)",
    fecha: "9 de septiembre de 2026",
    contenido:
      "Capítulos 1, 2 y 3 del libro de Fee & Stuart, La Lectura Eficaz de la Biblia. Llegar con preguntas preparadas para la discusión sobre el contexto histórico y literario.",
    categoria: "tarea",
  },
  {
    id: "anuncio-4",
    titulo: "Formación de equipos de trabajo — Antiguo Testamento I",
    fecha: "23 de septiembre de 2026",
    contenido:
      "Se conformarán 5 equipos, uno por cada período histórico (Comienzos, Patriarcas, Éxodo y Desierto, Conquista, Jueces). Los temas de investigación serán asignados con un mes de antelación.",
    categoria: "general",
  },
  {
    id: "anuncio-5",
    titulo: "Entrega: Resumen Parte 1 — Hermenéutica",
    fecha: "7 de octubre de 2026",
    contenido:
      "Resumen analítico de los capítulos 1–6 del libro de Fee & Stuart. Estructura: idea central, principios clave, ejemplo práctico y aplicación personal por cada capítulo.",
    categoria: "tarea",
    destacado: true,
  },
  {
    id: "anuncio-6",
    titulo: "Tabla de los géneros literarios (recurso disponible)",
    fecha: "Actualizado",
    contenido:
      "Disponible en la sección de Recursos de la asignatura Introducción al Estudio de la Biblia. Material de consulta permanente para todo el programa.",
    categoria: "recurso",
  },
  {
    id: "anuncio-7",
    titulo: "Política de asistencia y puntualidad",
    fecha: "Permanente",
    contenido:
      "Se requiere mínimo 80% de asistencia para aprobar cada asignatura. La puntualidad es valorada; llegadas tardías mayores a 10 minutos cuentan como falta. Justificaciones solo por enfermedad (certificado médico) o emergencia familiar comprobable.",
    categoria: "nota",
  },
];

// ============================================
// ASIGNATURA 1 — INTRODUCCIÓN AL ESTUDIO DE LA BIBLIA
// (Módulo 1 — Marzo–Mayo 2026 — Completada)
// ============================================
const INTRODUCCION_BIBLIA: Asignatura = {
  id: "introduccion-biblia",
  codigo: "IB-BI-001",
  nombre: "Introducción al Estudio de la Biblia",
  nombreCorto: "Introducción a la Biblia",
  profesor: "Lic. Rolando Y. Desdín García (MET en proceso)",
  profesorCorreo: "Rolandodesdin3@outlook.com",
  descripcion:
    "Puerta de entrada a todo el programa de estudios teológicos. Establece una base sólida sobre la naturaleza, origen, transmisión y manejo general de la Biblia, preparando al estudiante para el estudio riguroso de las Escrituras en los módulos subsiguientes.",
  creditos: 2,
  horasTotales: "12 horas",
  horasPresenciales: "10 horas",
  modulo: 1,
  periodo: "Marzo – Mayo 2026",
  horario: "1er y 2do turno (3:00 PM – 4:20 PM)",
  totalClases: 6,
  activa: false,
  estado: "completada",
  color: "#1E3A5F",
  icono: "BookOpen",
  proximasClases: [
    { fecha: "4 de marzo", tema: "¿Por qué estudiar la Biblia? / Origen Divino" },
    {
      fecha: "18 de marzo",
      tema: "¿Cómo nos llegó la Biblia? Originales, manuscritos, traducciones",
    },
    {
      fecha: "1 de abril",
      tema: "¿Cómo nos llegó la Biblia (Parte 2)? Transmisión y Panorama del AT",
    },
    {
      fecha: "15 de abril",
      tema: "Período Intertestamentario y Panorama del NT",
    },
    { fecha: "29 de abril", tema: "Principios, Herramientas y Obstáculos" },
    { fecha: "13 de mayo", tema: "Conclusión y Evaluación Final" },
  ],
  clases: [
    {
      numero: 1,
      nombre: "Clase 1 — ¿Por qué estudiar la Biblia? (Hora 1)",
      fecha: "4 de marzo",
      hora: "3:00 PM – 3:40 PM",
      url: "clases/introduccion-biblia/clase-1-hora-1.html",
      temas: ["La Biblia como alimento (1 P 2:2)", "Lámpara (Sal 119:105)"],
      disponible: true,
      descripcion:
        "Introducción a la naturaleza y necesidad del estudio bíblico. La Biblia como alimento espiritual y guía para la vida.",
    },
    {
      numero: 1,
      nombre: "Clase 1 — El Origen Divino de la Biblia (Hora 2)",
      fecha: "4 de marzo",
      hora: "3:45 PM – 4:20 PM",
      url: "clases/introduccion-biblia/clase-1-hora-2.html",
      temas: ["Revelación", "Inspiración", "Iluminación"],
      disponible: true,
      descripcion:
        "Doctrina de la revelación, inspiración e iluminación. Cómo Dios se ha dado a conocer y cómo el Espíritu sigue abriendo las Escrituras.",
    },
    {
      numero: 2,
      nombre: "Clase 2 — ¿Cómo nos llegó la Biblia?",
      fecha: "18 de marzo",
      hora: "3:00 PM – 4:20 PM",
      url: "clases/introduccion-biblia/clase-2-completa.html",
      temas: [
        "Idiomas originales",
        "Materiales de escritura",
        "Rollos del Mar Muerto",
        "La Septuaginta",
      ],
      disponible: true,
      descripcion:
        "Historia de la transmisión del texto bíblico: idiomas originales, materiales, manuscritos y versiones antiguas.",
    },
    {
      numero: 3,
      nombre: "Clase 3 — Transmisión y Panorama del AT",
      fecha: "1 de abril",
      hora: "3:00 PM – 4:20 PM",
      url: "clases/introduccion-biblia/clase3.html",
      temas: ["Argumento del Antiguo Testamento", "Estructura del canon hebreo"],
      disponible: true,
      descripcion:
        "Panorama del Antiguo Testamento: su estructura, contenido y argumento central.",
    },
    {
      numero: 3,
      nombre: "Clase 3 — Ejemplos difíciles usados en clase",
      fecha: "15 de abril",
      hora: "3:00 PM – 4:20 PM",
      url: "clases/introduccion-biblia/ejemplos_clase3.html",
      temas: ["Pasajes difíciles del AT", "Análisis contextual"],
      disponible: true,
      descripcion:
        "Análisis de pasajes difíciles del Antiguo Testamento a la luz del contexto histórico y literario.",
    },
    {
      numero: 4,
      nombre: "Clase 4 — Período Intertestamentario y Panorama del NT",
      fecha: "15 de abril",
      hora: "3:00 PM – 4:20 PM",
      url: "#",
      temas: [
        "400 años de silencio",
        "Grupos políticos",
        "Argumento del Nuevo Testamento",
      ],
      disponible: false,
      descripcion:
        "Los 400 años entre Malaquías y Mateo, y un panorama general del Nuevo Testamento.",
    },
    {
      numero: 5,
      nombre: "Clase 5 — Principios, Herramientas y Obstáculos",
      fecha: "29 de abril",
      hora: "3:00 PM – 4:20 PM",
      url: "#",
      temas: [
        "Observación, Interpretación, Aplicación",
        "Herramientas básicas de estudio",
      ],
      disponible: false,
      descripcion:
        "Método OIA y herramientas prácticas para el estudio personal de la Biblia.",
    },
    {
      numero: 6,
      nombre: "Clase 6 — Conclusión y Evaluación Final",
      fecha: "13 de mayo",
      hora: "3:00 PM – 4:20 PM",
      url: "#",
      temas: ["Presentación de trabajos", "Evaluación final"],
      disponible: false,
      descripcion: "Cierre del curso y evaluación integradora.",
    },
  ],
  recursos: [
    {
      nombre: "Guía de estudio para la pregunta escrita No. 1",
      url: "https://rol123-m.github.io/repaso-del-IB-clase-uno/",
      tipo: "requerido",
      descripcion: "Repaso estructurado para la primera evaluación escrita.",
    },
    {
      nombre: "Notas de la pregunta escrita No. 1",
      url: "https://drive.google.com/file/d/1J45vAzG7Vn5eh02jyWDWehYlM0A9Dgr8/view?usp=sharing",
      tipo: "requerido",
      descripcion: "Apunte con las respuestas modelo y comentarios.",
    },
    {
      nombre: "Biblia NVI (obligatoria)",
      url: "https://play.google.com/store/apps/details?id=org.biblia.nueva.version.internacional.nvi",
      tipo: "requerido",
      descripcion: "Traducción de referencia para todo el programa.",
    },
    {
      nombre: "Manual de la asignatura",
      url: "https://drive.google.com/file/d/1L-2vlx2BWX6vJeptlgumUidZLzubSOFl/view?usp=drivesdk",
      tipo: "requerido",
      descripcion: "Material de estudio principal del curso.",
    },
    {
      nombre: "Fee & Stuart — La Lectura Eficaz de la Biblia",
      url: "https://drive.google.com/file/d/1L0FXCbw70xARXSczc-wNqvH0_gx60JdH/view?usp=drivesdk",
      tipo: "recomendado",
      descripcion: "Obra de referencia hermenéutica para todo el programa.",
    },
    {
      nombre: "Tabla de los Géneros Literarios",
      url: "recursos/tabla-generos.html",
      tipo: "consulta",
      descripcion: "Recurso visual de consulta permanente.",
    },
  ],
  silabo: {
    objetivoGeneral:
      "Establecer una base sólida y motivadora sobre la naturaleza, origen, transmisión y manejo general de la Biblia, que prepare al estudiante para el estudio riguroso de las Escrituras en los módulos subsiguientes del programa.",
    metodologia:
      "Clases presenciales interactivas con exposición dialogada, lectura dirigida del manual y trabajo práctico con herramientas bíblicas. Cada sesión combina instrucción, discusión y aplicación.",
    evaluacion:
      "Asistencia (20%) · Trabajo Práctico / Ensayo (40%) · Actividades en clase (20%) · Preguntas escritas (20%)",
    itemsEvaluacion: [
      {
        actividad: "Asistencia y Puntualidad",
        descripcion: "Mínimo 80% de asistencia. La puntualidad será valorada.",
        porcentaje: 20,
      },
      {
        actividad: "Trabajo Práctico / Ensayo",
        descripcion:
          "Trabajo final aplicando los principios del curso a un pasaje bíblico.",
        porcentaje: 40,
      },
      {
        actividad: "Actividades en Clase",
        descripcion:
          "Ejercicios prácticos, observación de textos y participación informada.",
        porcentaje: 20,
      },
      {
        actividad: "Preguntas Escritas",
        descripcion:
          "Evaluaciones breves sobre el contenido de las sesiones anteriores.",
        porcentaje: 20,
      },
    ],
    bibliografia: [
      {
        autor: "Concordancia",
        titulo: "Concordancia Strong (recomendada)",
      },
      { autor: "Fee, G. & Stuart, D.", titulo: "La Lectura Eficaz de la Biblia", editorial: "Editorial Vida" },
      { autor: "Instituto", titulo: "Manual de la asignatura (Vivos para Servir)" },
    ],
    normas: [
      "Asistencia mínima del 80% para aprobar.",
      "Entrega puntual de trabajos prácticos.",
      "Participación activa, informada y respetuosa.",
      "Uso responsable de la Biblia y los materiales asignados.",
    ],
  },
  valores: [
    "Fidelidad a la Escritura",
    "Piedad personal",
    "Estudio riguroso",
    "Comunidad de aprendizaje",
  ],
};

// ============================================
// ASIGNATURA 2 — LIDERAZGO DE SERVICIO
// (Módulo 1 — Marzo–Mayo 2026 — Completada)
// ============================================
const LIDERAZGO_SERVICIO: Asignatura = {
  id: "liderazgo-servicio",
  codigo: "IB-MT-702",
  nombre: "Liderazgo de Servicio",
  nombreCorto: "Liderazgo de Servicio",
  profesor: "Lic. Yordanka Álvarez Pérez (MMin y METh en proceso)",
  profesorCorreo: "alvarezyordanka1@gmail.com",
  profesorTelefono: "58171380",
  descripcion:
    "Desarrolla habilidades de liderazgo basadas en el ejemplo de Jesús, enfocándose en el servicio, la formación de discípulos y el liderazgo transformacional que renueva a la iglesia y la comunidad.",
  creditos: 2,
  horasTotales: "7 horas",
  modulo: 1,
  periodo: "Marzo – Mayo 2026",
  horario: "3er y 4to turno (alternado según calendario)",
  totalClases: 5,
  activa: false,
  estado: "completada",
  color: "#8B2635",
  icono: "Crown",
  proximasClases: [
    { fecha: "4 de marzo", tema: "Introducción al Liderazgo de Servicio", turno: "3er y 4to turno" },
    { fecha: "1 de abril", tema: "Estilos de liderazgo", turno: "3er turno" },
    { fecha: "15 de abril", tema: "Formando equipos de servicio", turno: "4to turno" },
    { fecha: "29 de abril", tema: "Motivar a otros / liderar el cambio", turno: "3er turno" },
    { fecha: "13 de mayo", tema: "Integridad y rendición de cuentas", turno: "4to turno" },
  ],
  clases: [
    {
      numero: 1,
      nombre: "Clase 1 — Introducción al Liderazgo de Servicio",
      fecha: "4 de marzo",
      hora: "4:30 PM – 6:00 PM (3er y 4to turno)",
      url: "clases/liderazgo-servicio/clase-1.html",
      temas: [
        "¿Qué es el liderazgo?",
        "Liderazgo de servicio",
        "Estudio de caso",
        "Niveles de liderazgo",
      ],
      disponible: true,
      descripcion:
        "Fundamentos bíblicos del liderazgo de servicio según el modelo de Jesucristo.",
    },
    {
      numero: 2,
      nombre: "Clase 2 — Introducción a los Estilos de Liderazgo",
      fecha: "15 de abril",
      hora: "4:30 PM – 5:15 PM (3er turno)",
      url: "clases/liderazgo-servicio/clase2.html",
      temas: ["Estilos de liderazgo", "Conócete a ti mismo"],
      disponible: true,
      descripcion:
        "Identificación de estilos personales y autoconocimiento del líder.",
    },
    {
      numero: 3,
      nombre: "Clase 3 — Formando Equipos de Servicio",
      fecha: "29 de abril",
      hora: "5:15 PM – 6:00 PM (4to turno)",
      url: "#",
      temas: ["El corazón del líder", "Humildad y servicio"],
      disponible: false,
      descripcion:
        "Cómo formar y conducir equipos ministeriales bajo el modelo del Siervo.",
    },
    {
      numero: 4,
      nombre: "Clase 4 — Motivando a Otros",
      fecha: "29 de abril",
      hora: "4:30 PM – 5:15 PM (3er turno)",
      url: "#",
      temas: ["Delegación", "Desarrollo de equipos"],
      disponible: false,
      descripcion:
        "Principios bíblicos para motivar, delegar y desarrollar a otros líderes.",
    },
    {
      numero: 5,
      nombre: "Clase 5 — Integridad y Rendición de Cuentas",
      fecha: "13 de mayo",
      hora: "5:15 PM – 6:00 PM (4to turno)",
      url: "#",
      temas: ["Integridad en el liderazgo", "Plan de desarrollo"],
      disponible: false,
      descripcion:
        "Carácter del líder y diseño de un plan personal de desarrollo ministerial.",
    },
  ],
  recursos: [
    {
      nombre: "Libro: Liderazgo de Servicio",
      url: "https://drive.google.com/file/d/1PK3Nao3Ay2mxnp_YeKDnx2NQODzN7bet/view?usp=sharing",
      tipo: "requerido",
      descripcion: "Texto base del curso.",
    },
    {
      nombre: "Diagnóstico de estilo de liderazgo",
      url: "https://drive.google.com/file/d/1DCz82Y4R_9mkVQhr1Uh_FH-xFnW1YHio/view?usp=sharing",
      tipo: "material",
      descripcion: "Instrumento de autoevaluación.",
    },
    {
      nombre: "Estudio de caso: ¿Líder o Jefe?",
      url: "recursos/estudio-caso-1.html",
      tipo: "material",
      descripcion: "Caso práctico para discusión en clase.",
    },
  ],
  silabo: {
    objetivoGeneral:
      "Desarrollar en el estudiante habilidades de liderazgo transformacional basado en el ejemplo de Jesucristo, capacitándolo para servir, formar discípulos y dirigir equipos ministeriales con integridad y eficacia.",
    metodologia:
      "Exposición dialogada, estudio de casos, ejercicios de autoevaluación y diseño de un plan personal de desarrollo ministerial.",
    evaluacion:
      "Asistencia (20%) · Diagnóstico y plan de desarrollo (40%) · Actividades en clase (20%) · Participación (20%)",
    itemsEvaluacion: [
      {
        actividad: "Asistencia y Puntualidad",
        descripcion: "Mínimo 80% de asistencia.",
        porcentaje: 20,
      },
      {
        actividad: "Diagnóstico y Plan de Desarrollo",
        descripcion:
          "Diagnóstico de estilo de liderazgo y diseño de un plan personal de desarrollo.",
        porcentaje: 40,
      },
      {
        actividad: "Actividades en Clase",
        descripcion: "Estudios de caso y ejercicios prácticos.",
        porcentaje: 20,
      },
      {
        actividad: "Participación",
        descripcion: "Intervenciones informadas y respetuosas.",
        porcentaje: 20,
      },
    ],
    bibliografia: [
      { autor: "Instituto", titulo: "Libro de Liderazgo de Servicio (texto base)" },
      { autor: "Sanders, J. O.", titulo: "Liderazgo Espiritual", editorial: "Portavoz" },
    ],
    normas: [
      "Lectura previa de los capítulos asignados.",
      "Entrega puntual del diagnóstico y plan personal.",
      "Disposición humilde para la autoevaluación.",
      "Confidencialidad en los ejercicios de introspección.",
    ],
  },
  valores: [
    "Servicio",
    "Humildad",
    "Integridad",
    "Formación de discípulos",
  ],
};

// ============================================
// ASIGNATURA 3 — TÉCNICA DE ESTUDIO
// (Módulo 1 — Marzo–Mayo 2026 — Completada)
// ============================================
const TECNICA_ESTUDIO: Asignatura = {
  id: "tecnica-estudio",
  codigo: "IB-IN-800",
  nombre: "Técnica de Estudio",
  nombreCorto: "Técnica de Estudio",
  profesor: "Raúl Isnel Viera de la Rosa",
  descripcion:
    "Desarrolla habilidades y métodos efectivos de estudio para optimizar el aprendizaje, la retención de contenidos teológicos y el rendimiento académico a lo largo del programa.",
  creditos: 2,
  horasTotales: "7 horas",
  modulo: 1,
  periodo: "Marzo – Mayo 2026",
  horario: "3er turno (alternado)",
  totalClases: 3,
  activa: false,
  estado: "completada",
  color: "#2D6A4F",
  icono: "GraduationCap",
  proximasClases: [
    { fecha: "18 de marzo", tema: "Fundamentos del estudio efectivo", turno: "3er turno" },
    { fecha: "1 de abril", tema: "Hábito de estudio y método EPLRR", turno: "3er turno" },
    { fecha: "15 de abril", tema: "Preparación para evaluaciones", turno: "3er turno" },
  ],
  clases: [
    {
      numero: 1,
      nombre: "Clase 1 — Fundamentos del Estudio Efectivo",
      fecha: "18 de marzo",
      hora: "4:30 PM – 5:15 PM",
      url: "clases/tecnica-estudio/clase-1.html",
      temas: ["Métodos de estudio", "Organización del tiempo", "Técnicas de memorización"],
      disponible: true,
      descripcion:
        "Principios generales del estudio efectivo: métodos, organización y memorización.",
    },
    {
      numero: 2,
      nombre: "Clase 2 — Hábito de Estudio y Método EPLRR",
      fecha: "1 de abril",
      hora: "4:30 PM – 5:15 PM",
      url: "clases/tecnica-estudio/clase-2.html",
      temas: ["Lectura activa", "Subrayado", "Mapas conceptuales"],
      disponible: true,
      descripcion:
        "Método EPLRR (Explorar, Preguntar, Leer, Recitar, Repasar) y técnicas de lectura activa.",
    },
    {
      numero: 3,
      nombre: "Clase 3 — Preparación para Evaluaciones",
      fecha: "15 de abril",
      hora: "4:30 PM – 5:15 PM",
      url: "#",
      temas: ["Métodos de repaso", "Preparación de exámenes", "Manejo de la ansiedad"],
      disponible: false,
      descripcion:
        "Estrategias de repaso, técnicas para exámenes y manejo de la ansiedad académica.",
    },
  ],
  recursos: [
    {
      nombre: "Manual de Técnicas de Estudio",
      url: "https://drive.google.com/file/d/1KzBbRLeDwoWrvuET2cSl1c5k6c232Xg-/view?usp=drivesdk",
      tipo: "requerido",
      descripcion: "Texto base del curso.",
    },
    {
      nombre: "Guía de estudio",
      url: "#",
      tipo: "material",
      descripcion: "Material complementario de práctica.",
    },
  ],
  silabo: {
    objetivoGeneral:
      "Desarrollar en el estudiante hábitos y métodos de estudio que optimicen su aprendizaje, retención y rendimiento académico a lo largo del programa de Bachillerato en Teología.",
    metodologia:
      "Clases teórico-prácticas con ejercicios guiados, diseño de calendarios personales y aplicación inmediata del método EPLRR a textos bíblicos y teológicos.",
    evaluacion:
      "Asistencia (20%) · Calendario semanal personal (40%) · Actividades en clase (20%) · Aplicación práctica (20%)",
    itemsEvaluacion: [
      {
        actividad: "Asistencia y Puntualidad",
        descripcion: "Mínimo 80% de asistencia.",
        porcentaje: 20,
      },
      {
        actividad: "Calendario Semanal Personal",
        descripcion:
          "Diseño de un calendario semanal con la rutina de estudio.",
        porcentaje: 40,
      },
      {
        actividad: "Actividades en Clase",
        descripcion: "Ejercicios de subrayado, mapas conceptuales y resúmenes.",
        porcentaje: 20,
      },
      {
        actividad: "Aplicación Práctica",
        descripcion: "Aplicación del método EPLRR a un texto asignado.",
        porcentaje: 20,
      },
    ],
    bibliografia: [
      { autor: "Instituto", titulo: "Manual de Técnicas de Estudio (texto base)" },
    ],
    normas: [
      "Asistencia mínima del 80%.",
      "Entrega puntual del calendario semanal.",
      "Aplicación honesta de los métodos aprendidos.",
      "Disposición para evaluar y mejorar los hábitos propios.",
    ],
  },
  valores: ["Disciplina", "Autogestión", "Constancia", "Excelencia académica"],
};

// ============================================
// ASIGNATURA 4 — ANTIGUO TESTAMENTO I
// (Módulo 2 — Septiembre–Diciembre 2026 — En curso)
// ============================================
const ANTIGUO_TESTAMENTO_I: Asignatura = {
  id: "antiguo-testamento-i",
  codigo: "IB-AT-101",
  nombre: "Antiguo Testamento I (Comienzos hasta Anarquía)",
  nombreCorto: "Antiguo Testamento I",
  profesor: "Lic. Yordanka Álvarez Pérez",
  profesorCorreo: "alvarezyordanka1@gmail.com",
  profesorTelefono: "58171380",
  descripcion:
    "Primer acercamiento formal al estudio del Antiguo Testamento. Recorre los eventos fundacionales de la historia de la redención, desde la creación del mundo hasta el establecimiento de Israel en la tierra prometida. Se estudian Génesis, Éxodo, Levítico, Números, Deuteronomio, Job, Josué, Jueces, Rut y 1 Samuel 1–7, comprendiendo su contenido, estructura, mensaje teológico y relevancia para la fe cristiana.",
  creditos: 3,
  horasTotales: "12 horas",
  horasPresenciales: "12 horas (6 sesiones de 2 horas)",
  modulo: 2,
  periodo: "Septiembre – Diciembre 2026",
  horario: "Sesiones presenciales de 2 horas (modalidad modular)",
  totalClases: 7,
  activa: true,
  estado: "en-curso",
  color: "#7C2D12",
  icono: "Scroll",
  proximasClases: [
    { fecha: "9 de septiembre", tema: "Introducción al Antiguo Testamento" },
    { fecha: "23 de septiembre", tema: "I. Los Comienzos (Génesis 1–11)" },
    { fecha: "7 de octubre", tema: "II. Los Patriarcas (Génesis 12–50; Job)" },
    { fecha: "21 de octubre", tema: "III. Éxodo y Desierto" },
    { fecha: "4 de noviembre", tema: "IV. La Conquista (Josué)" },
    { fecha: "18 de noviembre", tema: "V. Los Jueces y el Tránsito a la Monarquía" },
    { fecha: "2 de diciembre", tema: "Evaluación Final — Trabajo en equipos" },
  ],
  clases: [
    {
      numero: 1,
      nombre: "Sesión 1 — Introducción al Antiguo Testamento",
      fecha: "9 de septiembre",
      hora: "Sesión de 2 horas",
      url: "clases/antiguo-testamento-i/sesion-1.html",
      temas: ["Canon del AT", "Estructura", "Temas centrales", "Géneros literarios"],
      disponible: true,
      descripcion:
        "Panorama del canon del Antiguo Testamento: su formación, estructura (Ley, Profetas, Escritos), grandes temas teológicos y géneros literarios. Sentando las bases para el estudio de cada libro.",
    },
    {
      numero: 2,
      nombre: "Sesión 2 — I. Los Comienzos",
      fecha: "23 de septiembre",
      hora: "Sesión de 2 horas",
      url: "clases/antiguo-testamento-i/sesion-2.html",
      temas: ["Creación", "Caída", "Diluvio", "Torre de Babel"],
      disponible: true,
      descripcion:
        "Estudio de Génesis 1–11: los fundamentos de la cosmovisión bíblica — creación, caída, juicio y promesa de redención.",
    },
    {
      numero: 3,
      nombre: "Sesión 3 — II. Los Patriarcas",
      fecha: "7 de octubre",
      hora: "Sesión de 2 horas",
      url: "clases/antiguo-testamento-i/sesion-3.html",
      temas: ["Abraham", "Isaac", "Jacob", "José"],
      disponible: true,
      descripcion:
        "Génesis 12–50 y el libro de Job. El pacto abrahámico, la formación del pueblo de Israel y la sabiduría en el sufrimiento.",
    },
    {
      numero: 4,
      nombre: "Sesión 4 — III. Éxodo y Desierto",
      fecha: "21 de octubre",
      hora: "Sesión de 2 horas",
      url: "clases/antiguo-testamento-i/sesion-4.html",
      temas: ["Moisés", "Liberación de Egipto", "Ley", "Sacrificios", "Peregrinación"],
      disponible: true,
      descripcion:
        "Éxodo, Levítico, Números y Deuteronomio. La liberación, el pacto sinaítico, el sistema sacrificial y la peregrinación por el desierto.",
    },
    {
      numero: 5,
      nombre: "Sesión 5 — IV. La Conquista",
      fecha: "4 de noviembre",
      hora: "Sesión de 2 horas",
      url: "clases/antiguo-testamento-i/sesion-5.html",
      temas: ["Josué", "Entrada a Canaán", "División de la tierra"],
      disponible: true,
      descripcion:
        "Libro de Josué. La entrada a la tierra prometida, las campañas militares y la distribución territorial entre las tribus.",
    },
    {
      numero: 6,
      nombre: "Sesión 6 — V. Los Jueces y el Tránsito a la Monarquía",
      fecha: "18 de noviembre",
      hora: "Sesión de 2 horas",
      url: "clases/antiguo-testamento-i/sesion-6.html",
      temas: ["Ciclo de los jueces", "Rut", "Samuel", "Fin del período"],
      disponible: true,
      descripcion:
        "Jueces, Rut y 1 Samuel 1–7. El ciclo de apostasía y liberación, la fidelidad redentora en Rut, y la transición hacia la monarquía con Samuel.",
    },
    {
      numero: 7,
      nombre: "Sesión 7 — Evaluación Final",
      fecha: "2 de diciembre",
      hora: "Trabajo en equipos",
      url: "#",
      temas: ["Exposición de los equipos", "Evaluación integradora"],
      disponible: false,
      descripcion:
        "Presentación oral de los trabajos finales en equipo y evaluación integradora del curso.",
    },
  ],
  recursos: [
    {
      nombre: "Biblia NVI (obligatoria)",
      url: "https://play.google.com/store/apps/details?id=org.biblia.nueva.version.internacional.nvi",
      tipo: "requerido",
      descripcion: "Traducción de referencia para el curso.",
    },
    {
      nombre: "Manual: Introducción al Antiguo Testamento (Vivos para Servir)",
      url: "#",
      tipo: "requerido",
      descripcion: "Material de lectura obligatoria antes de cada sesión.",
    },
    {
      nombre: "Mock, Dennis — Introducción al Antiguo Testamento",
      url: "#",
      tipo: "recomendado",
      descripcion: "Editorial Mundo Hispano.",
    },
    {
      nombre: "Walton, J. & Hill, A. — Panorama del Antiguo Testamento",
      url: "#",
      tipo: "recomendado",
      descripcion: "Editorial Vida.",
    },
    {
      nombre: "Kaiser, Walter — Teología del Antiguo Testamento",
      url: "#",
      tipo: "consulta",
      descripcion: "Editorial Clie.",
    },
  ],
  silabo: {
    objetivoGeneral:
      "Capacitar al estudiante para comprender el mensaje central de los libros fundacionales del Antiguo Testamento (Génesis – 1 Samuel 7), identificando su estructura, contenido, teología y relevancia para la fe cristiana, a través del estudio de los períodos de los comienzos, los patriarcas, el éxodo y desierto, la conquista, y los jueces.",
    objetivosEspecificos: [
      "Identificar la estructura literaria y el contenido de los libros fundacionales del AT.",
      "Comprender el mensaje teológico de cada período y su contribución a la historia de la redención.",
      "Relacionar los eventos del AT con el cumplimiento en Cristo y la fe cristiana.",
      "Aplicar los principios del texto a la vida contemporánea del creyente y de la iglesia.",
    ],
    metodologia:
      "Clases presenciales interactivas con exposición dialogada, lectura dirigida del manual antes de cada sesión, trabajo en equipo (5 equipos, uno por período) y trabajos independientes de refuerzo.",
    evaluacion:
      "Asistencia y Puntualidad (15%) · Participación en Clases (15%) · Trabajos Independientes (30%) · Trabajo Final en Equipo (40%)",
    itemsEvaluacion: [
      {
        actividad: "Asistencia y Puntualidad",
        descripcion:
          "Mínimo 80% de asistencia. La puntualidad será valorada.",
        porcentaje: 15,
      },
      {
        actividad: "Participación en Clases",
        descripcion:
          "Participación activa, informada y respetuosa en las discusiones y actividades.",
        porcentaje: 15,
      },
      {
        actividad: "Trabajos Independientes",
        descripcion:
          "Actividades prácticas asignadas en clase: ejercicios de observación, resúmenes, mapas conceptuales.",
        porcentaje: 30,
      },
      {
        actividad: "Trabajo Final en Equipo",
        descripcion:
          "Investigación y presentación sobre un tema asignado. Exposición en clase.",
        porcentaje: 40,
      },
    ],
    sesiones: [
      {
        sesion: 1,
        fecha: "9 de septiembre",
        temaPrincipal: "Introducción al Antiguo Testamento",
        subtemas: ["Canon", "Estructura", "Temas", "Géneros"],
      },
      {
        sesion: 2,
        fecha: "23 de septiembre",
        temaPrincipal: "I. Los Comienzos",
        subtemas: ["Creación", "Caída", "Diluvio", "Torre de Babel"],
        capitulos: "Génesis 1–11",
      },
      {
        sesion: 3,
        fecha: "7 de octubre",
        temaPrincipal: "II. Los Patriarcas",
        subtemas: ["Abraham", "Isaac", "Jacob", "José"],
        capitulos: "Génesis 12–50; Job",
      },
      {
        sesion: 4,
        fecha: "21 de octubre",
        temaPrincipal: "III. Éxodo y Desierto",
        subtemas: [
          "Moisés",
          "Liberación de Egipto",
          "Ley",
          "Sacrificios",
          "Peregrinación",
        ],
        capitulos: "Éxodo, Levítico, Números, Deuteronomio",
      },
      {
        sesion: 5,
        fecha: "4 de noviembre",
        temaPrincipal: "IV. La Conquista",
        subtemas: ["Josué", "Entrada a Canaán", "División de la tierra"],
        capitulos: "Josué",
      },
      {
        sesion: 6,
        fecha: "18 de noviembre",
        temaPrincipal: "V. Los Jueces y el Tránsito a la Monarquía",
        subtemas: ["Ciclo de los jueces", "Rut", "Samuel", "Fin del período"],
        capitulos: "Jueces, Rut, 1 Samuel 1–7",
      },
      {
        sesion: 7,
        fecha: "2 de diciembre",
        temaPrincipal: "Evaluación Final",
        subtemas: ["Trabajo en equipos"],
      },
    ],
    equipos: [
      { numero: 1, periodo: "Los Comienzos", tema: "Por asignar" },
      { numero: 2, periodo: "Los Patriarcas", tema: "Por asignar" },
      { numero: 3, periodo: "Éxodo y Desierto", tema: "Por asignar" },
      { numero: 4, periodo: "La Conquista", tema: "Por asignar" },
      { numero: 5, periodo: "Los Jueces", tema: "Por asignar" },
    ],
    bibliografia: [
      { autor: "Biblia", titulo: "Nueva Versión Internacional (NVI) — obligatoria" },
      { autor: "Instituto", titulo: "Manual: Introducción al Antiguo Testamento (Vivos para Servir)" },
      { autor: "Mock, Dennis", titulo: "Introducción al Antiguo Testamento", editorial: "Editorial Mundo Hispano" },
      { autor: "Walton, John & Hill, Andrew", titulo: "Panorama del Antiguo Testamento", editorial: "Editorial Vida" },
      { autor: "Kaiser, Walter", titulo: "Teología del Antiguo Testamento", editorial: "Editorial Clie" },
    ],
    normas: [
      "Asistencia mínima del 80% para aprobar la asignatura.",
      "Los trabajos independientes deben entregarse en la fecha indicada.",
      "El trabajo final en equipo será evaluado en su contenido y exposición.",
      "Se valorará el respeto, la puntualidad y la participación activa.",
    ],
  },
  valores: [
    "Fidelidad al texto",
    "Cosmovisión bíblica",
    "Historia de la redención",
    "Aplicación pastoral",
  ],
};

// ============================================
// ASIGNATURA 5 — HERMENÉUTICA BÍBLICA
// (Módulo 2 — Septiembre–Diciembre 2026 — En curso)
// ============================================
const HERMENEUTICA: Asignatura = {
  id: "hermeneutica",
  codigo: "IB-HM-401",
  nombre: "Hermenéutica Bíblica",
  nombreCorto: "Hermenéutica Bíblica",
  profesor: "Rolando Y. Desdín García",
  profesorCorreo: "Rolandodesdin3@outlook.com",
  descripcion:
    "Disciplina que establece los principios y métodos para la interpretación correcta de las Sagradas Escrituras. Introduce al estudiante en las herramientas fundamentales para comprender el significado original de los textos bíblicos en su contexto histórico, literario y teológico, y para trasladar ese significado a la realidad contemporánea. El curso se organiza en torno a los géneros literarios de la Biblia: epístolas, narrativas, evangelios, parábolas, ley, profetas, salmos, sabiduría y apocalipsis.",
  creditos: 3,
  horasTotales: "12 horas",
  horasPresenciales: "12 horas (6 sesiones de 2 horas)",
  modulo: 2,
  periodo: "Septiembre – Diciembre 2026",
  horario: "De martes a Viernes · Online / Presencial (modalidad modular)",
  totalClases: 7,
  activa: true,
  estado: "en-curso",
  color: "#1E3A5F",
  icono: "Compass",
  proximasClases: [
    { fecha: "9 de septiembre", tema: "Fundamentos Hermenéuticos" },
    { fecha: "23 de septiembre", tema: "Epístolas y Hechos" },
    { fecha: "7 de octubre", tema: "Evangelios y Parábolas" },
    { fecha: "23 de octubre", tema: "Ley y Profetas" },
    { fecha: "4 de noviembre", tema: "Narraciones del AT y Sabiduría" },
    { fecha: "18 de noviembre", tema: "Salmos, Apocalipsis y Cierre" },
    { fecha: "16 de diciembre", tema: "Exposición de un problema exegético" },
  ],
  clases: [
    {
      numero: 1,
      nombre: "Sesión 1 — Fundamentos Hermenéuticos",
      fecha: "9 de septiembre",
      hora: "Sesión de 2 horas",
      url: "clases/hermeneutica/sesion-1.html",
      temas: [
        "La necesidad de la interpretación",
        "El instrumento básico: traducciones",
        "Contexto histórico y literario",
      ],
      disponible: true,
      descripcion:
        "Fundamentos del trabajo hermenéutico: por qué interpretar, qué traducciones usar y por qué el contexto (histórico y literario) es indispensable para una lectura fiel. Capítulos 1, 2 y 3 de Fee & Stuart.",
    },
    {
      numero: 2,
      nombre: "Sesión 2 — Epístolas y Hechos",
      fecha: "23 de septiembre",
      hora: "Sesión de 2 horas",
      url: "clases/hermeneutica/sesion-2.html",
      temas: [
        "Hermenéutica de las epístolas",
        "El problema del precedente histórico en Hechos",
      ],
      disponible: true,
      descripcion:
        "Análisis del género epistolar y del problema del precedente histórico en Hechos: ¿qué es descriptivo y qué es prescriptivo? Capítulos 4 y 6 de Fee & Stuart.",
    },
    {
      numero: 3,
      nombre: "Sesión 3 — Evangelios y Parábolas",
      fecha: "7 de octubre",
      hora: "Sesión de 2 horas",
      url: "clases/hermeneutica/sesion-3.html",
      temas: [
        "Los evangelios: historia con múltiples dimensiones",
        "Las parábolas: interpretación correcta",
      ],
      disponible: true,
      descripcion:
        "Los evangelios como memorias teológicas y las parábolas como narraciones con un punto principal. Lectura en paralelo. Capítulos 7 y 8 de Fee & Stuart.",
    },
    {
      numero: 4,
      nombre: "Sesión 4 — Ley y Profetas",
      fecha: "23 de octubre",
      hora: "Sesión de 2 horas",
      url: "clases/hermeneutica/sesion-4.html",
      temas: ["La ley: estipulaciones del pacto", "Los profetas: imposición del pacto"],
      disponible: true,
      descripcion:
        "La ley como estipulaciones del pacto y los profetas como enviados que reclaman el cumplimiento del pacto. Capítulos 9 y 10 de Fee & Stuart.",
    },
    {
      numero: 5,
      nombre: "Sesión 5 — Narraciones del AT y Sabiduría",
      fecha: "4 de noviembre",
      hora: "Sesión de 2 horas",
      url: "clases/hermeneutica/sesion-5.html",
      temas: ["Narraciones del AT: uso apropiado", "Sabiduría: proverbios y reflexión"],
      disponible: true,
      descripcion:
        "Principios para usar bien las narraciones del AT (teología en acción, no manual de ética) y la sabiduría como reflexión sobre el orden de la creación. Capítulos 5 y 12 de Fee & Stuart.",
    },
    {
      numero: 6,
      nombre: "Sesión 6 — Salmos, Apocalipsis y Cierre",
      fecha: "18 de noviembre",
      hora: "Sesión de 2 horas",
      url: "clases/hermeneutica/sesion-6.html",
      temas: [
        "Los salmos: oraciones de Israel",
        "El Apocalipsis: imágenes de juicio y esperanza",
        "Evaluación y uso de comentarios",
      ],
      disponible: true,
      descripcion:
        "Los salmos como oraciones y el Apocalipsis como literatura de imágenes. Cierre del curso y orientación sobre el uso de comentarios. Capítulos 11, 13 y Apéndice de Fee & Stuart.",
    },
    {
      numero: 7,
      nombre: "Sesión 7 — Exposición de un problema exegético",
      fecha: "16 de diciembre",
      hora: "Sesión de 2 horas",
      url: "#",
      temas: ["Exposición del trabajo final", "Orientación a los estudiantes"],
      disponible: false,
      descripcion:
        "Presentación oral del trabajo final en equipo: resolución de un problema exegético asignado. Debate y orientación final.",
    },
  ],
  recursos: [
    {
      nombre: "Fee, G. & Stuart, D. — La Lectura Eficaz de la Biblia (texto obligatorio)",
      url: "https://drive.google.com/file/d/1L0FXCbw70xARXSczc-wNqvH0_gx60JdH/view?usp=drivesdk",
      tipo: "requerido",
      descripcion: "Editorial Vida, 1985. Base de todo el curso.",
    },
    {
      nombre: "Biblia NVI (obligatoria)",
      url: "https://play.google.com/store/apps/details?id=org.biblia.nueva.version.internacional.nvi",
      tipo: "requerido",
      descripcion: "Traducción de referencia para los ejercicios exegéticos.",
    },
    {
      nombre: "Ramm, Bernard — La Interpretación Bíblica Protestante",
      url: "#",
      tipo: "recomendado",
      descripcion: "Editorial Doulos, 2020. Manual de hermenéutica clásico.",
    },
    {
      nombre: "Lund, E. & Luce, A. — Hermenéutica: Introducción Bíblica",
      url: "#",
      tipo: "recomendado",
      descripcion: "Editorial Vida, 1999.",
    },
    {
      nombre: "Plummer, Robert L. (ed.) — Hermenéutica: Prácticas Generales",
      url: "#",
      tipo: "recomendado",
      descripcion: "B&H Español, 2026.",
    },
    {
      nombre: "Martínez, José — Hermenéutica Bíblica",
      url: "#",
      tipo: "consulta",
      descripcion: "Editorial Clie, 1984.",
    },
  ],
  silabo: {
    objetivoGeneral:
      "Capacitar al estudiante para interpretar correctamente los diferentes géneros literarios de la Biblia, aplicando principios hermenéuticos sólidos que permitan extraer el significado original del texto y trasladarlo de manera fiel a la realidad contemporánea, fundamentando así su fe y práctica ministerial en la Palabra de Dios.",
    objetivosEspecificos: [
      "Definir los conceptos fundamentales de la hermenéutica: exégesis, eiségesis, contexto histórico, contexto literario, género literario.",
      "Identificar las características propias de cada género literario bíblico.",
      "Describir los principios interpretativos específicos para cada género literario.",
      "Aplicar los pasos básicos de la exégesis (observación, interpretación, aplicación) a pasajes de diferentes géneros.",
      "Utilizar herramientas de estudio bíblico (concordancias, diccionarios, mapas, traducciones) para la interpretación.",
      "Distinguir entre lo descriptivo y lo prescriptivo en los textos bíblicos.",
    ],
    metodologia:
      "Clases presenciales interactivas (40%) con exposición dialogada · Lectura dirigida del libro de Fee & Stuart (30%) · Trabajo en equipos para el trabajo final (20%) · Ejercicios prácticos de observación e identificación de contextos (10%).",
    evaluacion:
      "Asistencia (10%) · Participación (15%) · Resumen del Libro Parte 1 (15%) · Resumen del Libro Parte 2 (20%) · Trabajo Final en Equipo (40%)",
    itemsEvaluacion: [
      {
        actividad: "Asistencia y Puntualidad",
        descripcion:
          "Mínimo 80% (5 de 6 sesiones). Cada falta injustificada reduce 0.5 puntos sobre 10. Llegadas >10 min cuentan como falta.",
        porcentaje: 10,
      },
      {
        actividad: "Participación en Clases",
        descripcion:
          "Participación activa, informada y respetuosa. Calidad, no cantidad; preparación previa evidenciada.",
        porcentaje: 15,
      },
      {
        actividad: "Resumen del Libro (Parte 1)",
        descripcion:
          "Resumen analítico de los capítulos 1–6 de Fee & Stuart. Entrega: Sesión 3 (7 de octubre).",
        porcentaje: 15,
      },
      {
        actividad: "Resumen del Libro (Parte 2)",
        descripcion:
          "Resumen analítico de los capítulos 7–13 y Apéndice de Fee & Stuart. Entrega: Sesión 5 (4 de noviembre).",
        porcentaje: 20,
      },
      {
        actividad: "Trabajo Final en Equipo",
        descripcion:
          "Resolución de un problema exegético asignado por el profesor. Informe escrito (8–12 pp.) y presentación oral (15–20 min). Sesión 7 (16 de diciembre).",
        porcentaje: 40,
      },
    ],
    sesiones: [
      {
        sesion: 1,
        fecha: "9 de septiembre",
        temaPrincipal: "Fundamentos Hermenéuticos",
        subtemas: [
          "La necesidad de la interpretación",
          "El instrumento básico: traducciones",
          "Contexto histórico y literario",
        ],
        capitulos: "Caps. 1, 2 y 3",
        metodologia: "Exposición dialogada; ejercicios de observación contextual",
      },
      {
        sesion: 2,
        fecha: "23 de septiembre",
        temaPrincipal: "Epístolas y Hechos",
        subtemas: [
          "Hermenéutica de las epístolas",
          "El problema del precedente histórico en Hechos",
        ],
        capitulos: "Caps. 4 y 6",
        metodologia: "Análisis de casos; debate sobre precedentes históricos",
      },
      {
        sesion: 3,
        fecha: "7 de octubre",
        temaPrincipal: "Evangelios y Parábolas",
        subtemas: [
          "Los evangelios: historia con múltiples dimensiones",
          "Las parábolas: interpretación correcta",
        ],
        capitulos: "Caps. 7 y 8",
        metodologia: "Lectura en paralelo; ejercicios de parábolas",
      },
      {
        sesion: 4,
        fecha: "23 de octubre",
        temaPrincipal: "Ley y Profetas",
        subtemas: ["La ley: estipulaciones del pacto", "Los profetas: imposición del pacto"],
        capitulos: "Caps. 9 y 10",
        metodologia: "Análisis de leyes; estudio de oráculos proféticos",
      },
      {
        sesion: 5,
        fecha: "4 de noviembre",
        temaPrincipal: "Narraciones del AT y Sabiduría",
        subtemas: [
          "Narraciones del AT: uso apropiado",
          "Sabiduría: proverbios y reflexión",
        ],
        capitulos: "Caps. 5 y 12",
        metodologia: "Estudio de casos narrativos; análisis de proverbios",
      },
      {
        sesion: 6,
        fecha: "18 de noviembre",
        temaPrincipal: "Salmos, Apocalipsis y Cierre",
        subtemas: [
          "Los salmos: oraciones de Israel",
          "El Apocalipsis: imágenes de juicio y esperanza",
          "Evaluación y uso de comentarios",
        ],
        capitulos: "Caps. 11, 13 y Apéndice",
        metodologia: "Análisis de salmos; estudio de imágenes apocalípticas",
      },
      {
        sesion: 7,
        fecha: "16 de diciembre",
        temaPrincipal: "Exposición de un problema exegético",
        subtemas: ["Orientación a los estudiantes"],
        metodologia: "Debate",
      },
    ],
    bibliografia: [
      {
        autor: "Fee, Gordon D. y Stuart, Douglas",
        titulo: "La Lectura Eficaz de la Biblia",
        editorial: "Editorial Vida, 1985 (texto obligatorio)",
      },
      {
        autor: "Ramm, Bernard",
        titulo: "La Interpretación Bíblica Protestante: Un Manual de Hermenéutica",
        editorial: "Editorial Doulos, 2020",
      },
      {
        autor: "Lund, E. y Luce, Alicia C.",
        titulo: "Hermenéutica – Introducción Bíblica",
        editorial: "Editorial Vida, 1999",
      },
      {
        autor: "Plummer, Robert L. (Editor)",
        titulo: "Hermenéutica: Prácticas Generales y Temas de Actualidad",
        editorial: "B&H Español, 2026",
      },
      {
        autor: "Martínez M., José",
        titulo: "Hermenéutica Bíblica",
        editorial: "Editorial Clie, 1984",
      },
      {
        autor: "González Ríos, José C.",
        titulo: "Claves de la Hermenéutica Bíblica",
        editorial: "Editorial González Ríos, 2025",
      },
    ],
    normas: [
      "Asistencia mínima del 80% (5 de 6 sesiones) para aprobar.",
      "Cada falta injustificada reduce la nota final en 0.5 puntos sobre 10.",
      "Llegadas tardías mayores a 10 minutos cuentan como falta.",
      "Justificaciones solo por enfermedad (certificado médico) o emergencia familiar comprobable.",
      "Trabajos tardíos: 1 punto sobre 10 por cada día de retraso.",
      "Plagio: primera infracción = 0; segunda infracción = reprobación automática.",
      "Nota máxima en recuperación: 7 sobre 10.",
    ],
    frasesRecordar: [
      { sesion: "Sesión 1", frase: "Un texto fuera de contexto es un pretexto." },
      { sesion: "Sesión 2", frase: "Lo descriptivo no siempre es prescriptivo." },
      {
        sesion: "Sesión 3",
        frase: "Los evangelios son memorias teológicas, no biografías modernas.",
      },
      { sesion: "Sesión 4", frase: "La ley muestra el pecado; los profetas exigen el pacto." },
      {
        sesion: "Sesión 5",
        frase: "Las narraciones del AT no son manuales de ética; son teología en acción.",
      },
      {
        sesion: "Sesión 6",
        frase: "Los salmos son oraciones de Israel; el Apocalipsis es esperanza en imágenes.",
      },
    ],
  },
  valores: [
    "Fidelidad al texto original",
    "Contexto antes que aplicación",
    "Humildad interpretativa",
    "Caridad en la discusión",
  ],
};

// ============================================
// EXPORTAR ASIGNATURAS
// ============================================
export const ASIGNATURAS: Asignatura[] = [
  ANTIGUO_TESTAMENTO_I,
  HERMENEUTICA,
  INTRODUCCION_BIBLIA,
  LIDERAZGO_SERVICIO,
  TECNICA_ESTUDIO,
];

// ============================================
// CALENDARIO DEL MÓDULO 2 (en curso)
// ============================================
export const CALENDARIO_MODULO_2 = [
  {
    fecha: "9 de septiembre",
    clases: [
      { turno: "Sesión 1 (2 horas)", asignatura: "Antiguo Testamento I — Introducción al AT", disponible: false },
      { turno: "Sesión 1 (2 horas)", asignatura: "Hermenéutica — Fundamentos Hermenéuticos", disponible: false },
    ],
  },
  {
    fecha: "23 de septiembre",
    clases: [
      { turno: "Sesión 2 (2 horas)", asignatura: "Antiguo Testamento I — Los Comienzos", disponible: false },
      { turno: "Sesión 2 (2 horas)", asignatura: "Hermenéutica — Epístolas y Hechos", disponible: false },
    ],
  },
  {
    fecha: "7 de octubre",
    clases: [
      { turno: "Sesión 3 (2 horas)", asignatura: "Antiguo Testamento I — Los Patriarcas", disponible: false },
      { turno: "Sesión 3 (2 horas)", asignatura: "Hermenéutica — Evangelios y Parábolas", disponible: false },
      { turno: "Entrega", asignatura: "Hermenéutica — Resumen Parte 1 (caps. 1–6)", disponible: false },
    ],
  },
  {
    fecha: "21 de octubre",
    clases: [
      { turno: "Sesión 4 (2 horas)", asignatura: "Antiguo Testamento I — Éxodo y Desierto", disponible: false },
    ],
  },
  {
    fecha: "23 de octubre",
    clases: [
      { turno: "Sesión 4 (2 horas)", asignatura: "Hermenéutica — Ley y Profetas", disponible: false },
    ],
  },
  {
    fecha: "4 de noviembre",
    clases: [
      { turno: "Sesión 5 (2 horas)", asignatura: "Antiguo Testamento I — La Conquista", disponible: false },
      { turno: "Sesión 5 (2 horas)", asignatura: "Hermenéutica — Narraciones del AT y Sabiduría", disponible: false },
      { turno: "Entrega", asignatura: "Hermenéutica — Resumen Parte 2 (caps. 7–13 y Apéndice)", disponible: false },
    ],
  },
  {
    fecha: "18 de noviembre",
    clases: [
      { turno: "Sesión 6 (2 horas)", asignatura: "Antiguo Testamento I — Los Jueces y el Tránsito a la Monarquía", disponible: false },
      { turno: "Sesión 6 (2 horas)", asignatura: "Hermenéutica — Salmos, Apocalipsis y Cierre", disponible: false },
    ],
  },
  {
    fecha: "2 de diciembre",
    clases: [
      { turno: "Sesión 7", asignatura: "Antiguo Testamento I — Evaluación Final (trabajo en equipos)", disponible: false },
    ],
  },
  {
    fecha: "16 de diciembre",
    clases: [
      { turno: "Sesión 7", asignatura: "Hermenéutica — Exposición del problema exegético (trabajo final)", disponible: false },
    ],
  },
];

// ============================================
// MALLA CURRICULAR
// ============================================
export const MALLA_CURRICULAR = {
  troncales: [
    { codigo: "IB-BI-001", nombre: "Introducción al estudio de la Biblia", creditos: 2 },
    { codigo: "IB-AT-101", nombre: "Antiguo Testamento I (Génesis – Ester)", creditos: 3 },
    { codigo: "IB-AT-102", nombre: "Antiguo Testamento II (Job – Malaquías)", creditos: 3 },
    { codigo: "IB-NT-201", nombre: "Nuevo Testamento", creditos: 3 },
    { codigo: "IB-TE-301", nombre: "Teología Sistemática I: Doctrina de Dios y Soteriología", creditos: 3 },
    { codigo: "IB-TE-302", nombre: "Teología Sistemática II: Cristología y Espíritu Santo", creditos: 3 },
    { codigo: "IB-TE-303", nombre: "Teología Sistemática III: Ángeles, Hombre y Pecado", creditos: 3 },
    { codigo: "IB-TE-304", nombre: "Teología Sistemática IV: Iglesia y Escatología", creditos: 3 },
    { codigo: "IB-HM-401", nombre: "Hermenéutica Bíblica", creditos: 2 },
    { codigo: "IB-HI-601", nombre: "Historia de la Iglesia", creditos: 3 },
    { codigo: "IB-MT-702", nombre: "Liderazgo de Servicio", creditos: 2 },
    { codigo: "IB-IN-800", nombre: "Técnica de Estudio", creditos: 2 },
    { codigo: "IB-IN-801", nombre: "Metodología de la Investigación", creditos: 2 },
    { codigo: "IB-FP-901", nombre: "Vida Espiritual Personal (transversal)", creditos: 1 },
  ] as AsignaturaMalla[],
  especializaciones: {
    pastoral: [
      { codigo: "IB-MT-710", nombre: "Consejería Bíblica", creditos: 2 },
      { codigo: "IB-MT-711", nombre: "Ética Cristiana", creditos: 2 },
      { codigo: "IB-MT-712", nombre: "Teología Pastoral", creditos: 2 },
      { codigo: "IB-MT-705", nombre: "Introducción a Misiones", creditos: 2 },
      { codigo: "IB-MT-703", nombre: "Discipulado", creditos: 2 },
      { codigo: "IB-MT-704", nombre: "Evangelismo", creditos: 2 },
      { codigo: "IB-MT-701", nombre: "Homilética", creditos: 2 },
      { codigo: "IB-MT-713", nombre: "Plantación y Desarrollo de Iglesias", creditos: 2 },
    ],
    infantil: [
      { codigo: "IB-MT-720", nombre: "Psicología de las Edades", creditos: 2 },
      { codigo: "IB-MT-721", nombre: "Didáctica Cristiana", creditos: 2 },
      { codigo: "IB-MT-722", nombre: "Juego y Aprendizaje Bíblico", creditos: 2 },
      { codigo: "IB-MT-723", nombre: "Misiones en la Infancia", creditos: 2 },
      { codigo: "IB-MT-724", nombre: "Formación Espiritual del Niño", creditos: 2 },
    ],
    musica: [
      { codigo: "IB-MT-730", nombre: "El Corazón del Artista Cristiano", creditos: 2 },
      { codigo: "IB-MT-731", nombre: "Teología de la Adoración", creditos: 2 },
      { codigo: "IB-MT-732", nombre: "Santas Convocaciones", creditos: 2 },
      { codigo: "IB-MT-733", nombre: "Solfeo I", creditos: 2 },
      { codigo: "IB-MT-734", nombre: "Solfeo II", creditos: 2 },
    ],
    educacion: [
      { codigo: "IB-MT-740", nombre: "Pedagogía Bíblica", creditos: 2 },
      { codigo: "IB-ED-501", nombre: "Metodología de la Enseñanza", creditos: 2 },
      { codigo: "IB-MT-741", nombre: "Diseño Curricular Cristiano", creditos: 2 },
      { codigo: "IB-MT-742", nombre: "Evaluación en la Enseñanza Bíblica", creditos: 2 },
    ],
    juvenil: [
      { codigo: "IB-MT-750", nombre: "Ministerio Juvenil", creditos: 2 },
      { codigo: "IB-MT-751", nombre: "Acompañamiento Pastoral", creditos: 2 },
      { codigo: "IB-MT-752", nombre: "Familia y Juventud", creditos: 2 },
    ],
  },
  optativas: [
    { codigo: "IB-OP-001", nombre: "Español Básico", creditos: 2 },
    { codigo: "IB-OP-002", nombre: "Inglés Básico", creditos: 2 },
    { codigo: "IB-OP-003", nombre: "Inglés Bíblico", creditos: 2 },
    { codigo: "IB-OP-004", nombre: "Informática para el Ministerio", creditos: 2 },
    { codigo: "IB-OP-005", nombre: "Redacción de Sermones", creditos: 2 },
    { codigo: "IB-OP-006", nombre: "Introducción al Griego Bíblico", creditos: 2 },
    { codigo: "IB-OP-007", nombre: "Introducción al Hebreo Bíblico", creditos: 2 },
  ] as AsignaturaMalla[],
  organizacionModular: [
    { modulo: 1, asignaturas: ["IB-BI-001 — Introducción al estudio de la Biblia", "IB-IN-800 — Técnica de Estudio", "IB-MT-702 — Liderazgo de Servicio"], creditos: 6 },
    { modulo: 2, asignaturas: ["IB-AT-101 — Antiguo Testamento I", "IB-HM-401 — Hermenéutica Bíblica"], creditos: 6 },
    { modulo: 3, asignaturas: ["IB-NT-201 — Nuevo Testamento", "IB-IN-801 — Metodología de la Investigación"], creditos: 5 },
    { modulo: 4, asignaturas: ["IB-AT-102 — Antiguo Testamento II", "IB-ED-501 — Metodología de la Enseñanza"], creditos: 5 },
    { modulo: 5, asignaturas: ["IB-TE-301 — Teología Sistemática I", "IB-TE-302 — Teología Sistemática II"], creditos: 6 },
    { modulo: 6, asignaturas: ["IB-TE-303 — Teología Sistemática III", "IB-TE-304 — Teología Sistemática IV"], creditos: 6 },
    { modulo: 7, asignaturas: ["IB-HI-601 — Historia de la Iglesia", "IB-MT-701 — Homilética"], creditos: 5 },
    { modulo: 8, asignaturas: ["IB-MT-703 — Discipulado", "IB-MT-704 — Evangelismo"], creditos: 4 },
    { modulo: 9, asignaturas: ["IB-MT-705 — Introducción a Misiones", "Especialización I"], creditos: 4 },
    { modulo: 10, asignaturas: ["Especialización II–III", "Optativas"], creditos: "4-6" },
    { modulo: 11, asignaturas: ["Trabajo Final de Curso / Examen Integrador"], creditos: "2-4" },
  ] as ModuloOrganizacion[],
  requisitosGraduacion: [
    "14 asignaturas troncales completadas.",
    "1 trayectoria de especialización (mínimo 5 asignaturas).",
    "2 asignaturas de otra trayectoria de especialización.",
    "2 asignaturas optativas recomendadas.",
    "Metodología de la Investigación (IB-IN-801) aprobada.",
    "Trabajo Final de Curso (TFC) o Examen Integrador Final aprobado.",
    "Asistencia mínima del 80% en cada asignatura.",
    "Evaluación cualitativa satisfactoria en Vida Espiritual Personal.",
  ],
};

// ============================================
// MODULO ACTUAL
// ============================================
export const MODULO_ACTUAL = {
  numero: 2,
  periodo: "Septiembre – Diciembre 2026",
  asignaturas: ["IB-AT-101 — Antiguo Testamento I", "IB-HM-401 — Hermenéutica Bíblica"],
  proximoModulo: "Módulo 3 — Nuevo Testamento y Metodología de la Investigación",
};
