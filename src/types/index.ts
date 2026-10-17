// ============================================
// TIPOS - Instituto Bíblico "Iglesia Bautista de Sola"
// ============================================

export interface Anuncio {
  id: string;
  titulo: string;
  fecha: string;
  contenido: string;
  categoria: "tarea" | "clase" | "nota" | "recurso" | "general";
  destacado?: boolean;
}

export interface Clase {
  numero: number;
  nombre: string;
  fecha: string;
  hora?: string;
  url: string;
  temas: string[];
  disponible: boolean;
  descripcion?: string;
}

export interface Recurso {
  nombre: string;
  url: string;
  tipo: "requerido" | "recomendado" | "consulta" | "material";
  descripcion?: string;
}

export interface ProximaClase {
  fecha: string;
  tema: string;
  turno?: string;
}

export interface EquipoTrabajo {
  numero: number;
  periodo: string;
  tema: string;
}

export interface ItemEvaluacion {
  actividad: string;
  descripcion: string;
  porcentaje: number;
}

export interface SesionSilabo {
  sesion: number;
  fecha: string;
  temaPrincipal: string;
  subtemas: string[];
  capitulos?: string;
  metodologia?: string;
}

export interface Silabo {
  objetivoGeneral: string;
  objetivosEspecificos?: string[];
  metodologia: string;
  evaluacion: string;
  itemsEvaluacion?: ItemEvaluacion[];
  sesiones?: SesionSilabo[];
  equipos?: EquipoTrabajo[];
  bibliografia?: { autor: string; titulo: string; editorial?: string }[];
  normas?: string[];
  frasesRecordar?: { sesion: string; frase: string }[];
}

export interface Asignatura {
  id: string;
  codigo: string;
  nombre: string;
  nombreCorto: string;
  profesor: string;
  profesorCorreo?: string;
  profesorTelefono?: string;
  descripcion: string;
  creditos: number;
  horasTotales: string;
  horasPresenciales?: string;
  modulo: number;
  periodo: string;
  horario?: string;
  totalClases: number;
  activa: boolean;
  estado: "en-curso" | "proximamente" | "completada";
  color: string;
  icono: string;
  proximasClases: ProximaClase[];
  clases: Clase[];
  recursos: Recurso[];
  silabo: Silabo;
  valores?: string[];
}

export interface AsignaturaMalla {
  codigo: string;
  nombre: string;
  creditos: number;
}

export interface ModuloOrganizacion {
  modulo: number;
  asignaturas: string[];
  creditos: number | string;
}
