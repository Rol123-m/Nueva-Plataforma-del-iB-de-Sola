import { useState } from "react";
import { Filter } from "lucide-react";
import { ASIGNATURAS } from "../data/instituto";
import { AsignaturaCard } from "../components/AsignaturaCard";

type Filtro = "todas" | "en-curso" | "completadas";

export function Asignaturas() {
  const [filtro, setFiltro] = useState<Filtro>("todas");

  const asignaturasFiltradas = ASIGNATURAS.filter((a) => {
    if (filtro === "todas") return true;
    if (filtro === "en-curso") return a.estado === "en-curso";
    if (filtro === "completadas") return a.estado === "completada";
    return true;
  });

  const enCurso = ASIGNATURAS.filter((a) => a.estado === "en-curso").length;
  const completadas = ASIGNATURAS.filter((a) => a.estado === "completada").length;

  return (
    <>
      <section className="hero" style={{ paddingBottom: "48px" }}>
        <div className="container hero-inner">
          <div className="hero-eyebrow">
            <span className="dot" />
            <span className="eyebrow" style={{ color: "var(--navy)" }}>{ASIGNATURAS.length} asignaturas en la plataforma</span>
          </div>
          <h1>
            Asignaturas del <em>Bachiller en Teología</em>
          </h1>
          <p className="hero-lead">
            Explora cada asignatura con su sílabo completo, sesiones de clase, bibliografía, criterios de evaluación y recursos descargables.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="container">
          {/* Filtros */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 36,
              padding: "16px 22px",
              background: "var(--paper)",
              border: "1px solid var(--line)",
              borderRadius: "var(--r-lg)",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: "0.85rem",
                color: "var(--ink-3)",
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              <Filter size={14} /> Filtrar
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              <button
                onClick={() => setFiltro("todas")}
                className={`malla-tab ${filtro === "todas" ? "active" : ""}`}
                style={{ background: filtro === "todas" ? "var(--navy)" : "transparent", color: filtro === "todas" ? "var(--cream)" : "var(--ink-2)" }}
              >
                Todas ({ASIGNATURAS.length})
              </button>
              <button
                onClick={() => setFiltro("en-curso")}
                className={`malla-tab ${filtro === "en-curso" ? "active" : ""}`}
                style={{ background: filtro === "en-curso" ? "var(--navy)" : "transparent", color: filtro === "en-curso" ? "var(--cream)" : "var(--ink-2)" }}
              >
                En curso ({enCurso})
              </button>
              <button
                onClick={() => setFiltro("completadas")}
                className={`malla-tab ${filtro === "completadas" ? "active" : ""}`}
                style={{ background: filtro === "completadas" ? "var(--navy)" : "transparent", color: filtro === "completadas" ? "var(--cream)" : "var(--ink-2)" }}
              >
                Completadas ({completadas})
              </button>
            </div>
          </div>

          <div className="asignaturas-grid">
            {asignaturasFiltradas.map((a) => (
              <AsignaturaCard key={a.id} asignatura={a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
