# Plataforma Instituto Bíblico "Iglesia Bautista de Sola"

Plataforma académica rediseñada del Instituto Bíblico, construida con **React + Vite + TypeScript** (sin Next.js, sin backend, todo en frontend).

## Stack

- **React 19** + **TypeScript** + **Vite 8**
- **React Router DOM** para navegación
- **Lucide React** para iconografía
- CSS vanilla con sistema de diseño propio (paleta cálida académica, tipografía Cormorant Garamond + Inter)
- Datos centralizados en `src/data/instituto.ts`

## Cómo ejecutar

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo (http://localhost:5173)
npm run dev

# 3. Build de producción (genera carpeta dist/)
npm run build

# 4. Previsualizar build de producción
npm run preview
```

## Estructura del proyecto

```
plataforma-ib/
├── public/
│   ├── clases/                  # Material HTML de clases existentes
│   │   ├── introduccion-biblia/
│   │   ├── liderazgo-servicio/
│   │   └── tecnica-estudio/
│   ├── recursos/                # Recursos HTML (tabla géneros, estudios de caso)
│   └── viewer.html              # Visor para embeber clases HTML
├── src/
│   ├── components/              # Componentes reutilizables
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   ├── AsignaturaCard.tsx
│   │   ├── AnuncioCard.tsx
│   │   └── SubjectIcon.tsx
│   ├── data/
│   │   └── instituto.ts         # Toda la data del instituto y asignaturas
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Asignaturas.tsx
│   │   ├── AsignaturaDetalle.tsx
│   │   ├── MallaCurricular.tsx
│   │   ├── Calendario.tsx
│   │   └── NotFound.tsx
│   ├── types/
│   │   └── index.ts             # Tipos TypeScript
│   ├── App.tsx                  # Router
│   ├── main.tsx                 # Entry point
│   └── index.css                # Sistema de diseño completo
└── index.html
```

## Asignaturas incluidas

### Módulo 2 — Septiembre–Diciembre 2026 (en curso)
- **IB-AT-101 — Antiguo Testamento I** (Comienzos hasta Anarquía) — Lic. Yordanka Álvarez Pérez
- **IB-HM-401 — Hermenéutica Bíblica** — Prof. Rolando Y. Desdín García

### Módulo 1 — Marzo–Mayo 2026 (completado)
- **IB-BI-001 — Introducción al Estudio de la Biblia** — Lic. Rolando Y. Desdín García
- **IB-MT-702 — Liderazgo de Servicio** — Lic. Yordanka Álvarez Pérez
- **IB-IN-800 — Técnica de Estudio** — Raúl Isnel Viera de la Rosa

## Personalización

Toda la información está centralizada en `src/data/instituto.ts`. Para añadir o modificar:

- **Anuncios**: edita el array `ANUNCIOS`
- **Asignaturas**: edita el array `ASIGNATURAS` (cada asignatura incluye clases, recursos, sílabo completo, equipos, bibliografía, normas, frases)
- **Calendario**: edita `CALENDARIO_MODULO_2`
- **Malla curricular**: edita `MALLA_CURRICULAR`
- **Datos del instituto**: edita `INSTITUTO` y `MODULO_ACTUAL`

## Páginas principales

| Ruta                          | Descripción                                              |
|-------------------------------|----------------------------------------------------------|
| `/`                           | Inicio con hero, módulo actual, anuncios, asignaturas    |
| `/asignaturas`                | Listado filtrable de asignaturas                         |
| `/asignatura/:id`             | Detalle con tabs: info, clases, sílabo, evaluación, recursos |
| `/malla`                      | Malla curricular con tabs: troncales, especializaciones, optativas, módulos |
| `/calendario`                 | Calendario del módulo actual                             |

## Sistema de diseño

- **Paleta**: navy `#0F1E3D`, gold `#B89343`, wine `#8B2635`, cream `#FAF6EE`
- **Tipografía**: Cormorant Garamond (titulares serif), Inter (cuerpo), JetBrains Mono (códigos)
- **Estética**: editorial académico cálido, papel + tinta + acentos dorados
