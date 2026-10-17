import { useState } from "react";
import { CheckCircle2, Clock, Award, Layers, GraduationCap, Sparkles } from "lucide-react";
import { MALLA_CURRICULAR, ASIGNATURAS } from "../data/instituto";

type Tab = "troncales" | "especializaciones" | "optativas" | "modulos";

const especializacionInfo = [
  { key: "pastoral", label: "Ministerio Pastoral, Misionero y Liderazgo", color: "var(--wine)", icon: "✝" },
  { key: "infantil", label: "Enseñanza y Ministerio Infantil", color: "#2D6A4F", icon: "🧸" },
  { key: "musica", label: "Música y Adoración", color: "#7C2D12", icon: "♪" },
  { key: "educacion", label: "Educación Cristiana (Maestros)", color: "var(--navy)", icon: "📖" },
  { key: "juvenil", label: "Liderazgo y Ministerio Juvenil", color: "#6B21A8", icon: "★" },
] as const;

export function MallaCurricular() {
  const [tab, setTab] = useState<Tab>("troncales");

  const totalTroncales = MALLA_CURRICULAR.troncales.reduce((a, b) => a + b.creditos, 0);
  const totalOptativas = MALLA_CURRICULAR.optativas.reduce((a, b) => a + b.creditos, 0);

  // Codigos activos/completados
  const codigosCompletados = new Set(
    ASIGNATURAS.filter((a) => a.estado === "completada").map((a) => a.codigo),
  );
  const codigosEnCurso = new Set(
    ASIGNATURAS.filter((a) => a.estado === "en-curso").map((a) => a.codigo),
  );

  return (
    <>
      <section className="hero" style={{ paddingBottom: "48px" }}>
        <div className="container hero-inner">
          <div className="hero-eyebrow">
            <span className="dot" />
            <span className="eyebrow" style={{ color: "var(--navy)" }}>Bachiller en Teología · Sistema Modular</span>
          </div>
          <h1>
            Malla <em>Curricular</em>
          </h1>
          <p className="hero-lead">
            El plan de estudios completo del {`Bachiller en Teología`}: 14 asignaturas troncales, 5 trayectorias de especialización, 7 optativas y una organización modular que se desarrolla en 24–30 meses.
          </p>

          <div className="hero-stats" style={{ marginTop: 40 }}>
            <div className="hero-stat">
              <div className="num">14</div>
              <div className="lbl">Asignaturas troncales ({totalTroncales} créditos)</div>
            </div>
            <div className="hero-stat">
              <div className="num">5</div>
              <div className="lbl">Trayectorias de especialización</div>
            </div>
            <div className="hero-stat">
              <div className="num">7</div>
              <div className="lbl">Asignaturas optativas ({totalOptativas} créditos)</div>
            </div>
            <div className="hero-stat">
              <div className="num"><em>50</em></div>
              <div className="lbl">Créditos mínimos para graduarse</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="container">
          {/* Tabs */}
          <div className="malla-tabs">
            <button
              className={`malla-tab ${tab === "troncales" ? "active" : ""}`}
              onClick={() => setTab("troncales")}
            >
              Troncales
            </button>
            <button
              className={`malla-tab ${tab === "especializaciones" ? "active" : ""}`}
              onClick={() => setTab("especializaciones")}
            >
              Especializaciones
            </button>
            <button
              className={`malla-tab ${tab === "optativas" ? "active" : ""}`}
              onClick={() => setTab("optativas")}
            >
              Optativas
            </button>
            <button
              className={`malla-tab ${tab === "modulos" ? "active" : ""}`}
              onClick={() => setTab("modulos")}
            >
              Organización modular
            </button>
          </div>

          {/* TRONCALES */}
          {tab === "troncales" && (
            <div className="malla-section">
              <h3>
                <GraduationCap size={22} /> Asignaturas Troncales
                <span className="count">{MALLA_CURRICULAR.troncales.length} asignaturas · {totalTroncales} créditos</span>
              </h3>
              <p className="desc">
                Obligatorias para todos los estudiantes del programa. Cubren los fundamentos bíblicos, teológicos, históricos y ministeriales del Bachillerato en Teología.
              </p>

              {/* Leyenda */}
              <div style={{ display: "flex", gap: 18, marginBottom: 18, flexWrap: "wrap", fontSize: "0.82rem", color: "var(--ink-3)" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 10, height: 10, borderRadius: 2, background: "rgba(45, 106, 79, 0.20)", border: "1px solid rgba(45, 106, 79, 0.4)" }} />
                  <span style={{ color: "var(--success)", fontWeight: 600 }}>✓</span> Completada
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 10, height: 10, borderRadius: 2, background: "rgba(184, 147, 67, 0.20)", border: "1px solid var(--line-gold)" }} />
                  <span style={{ color: "var(--gold)", fontWeight: 600 }}>●</span> En curso
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 10, height: 10, borderRadius: 2, background: "var(--paper)", border: "1px solid var(--line)" }} />
                  Pendiente
                </span>
              </div>

              <table className="malla-table">
                <thead>
                  <tr>
                    <th style={{ width: 130 }}>Código</th>
                    <th>Asignatura</th>
                    <th style={{ width: 110, textAlign: "right" }}>Créditos</th>
                    <th style={{ width: 130, textAlign: "center" }}>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {MALLA_CURRICULAR.troncales.map((a) => {
                    const completed = codigosCompletados.has(a.codigo);
                    const active = codigosEnCurso.has(a.codigo);
                    return (
                      <tr key={a.codigo} className={completed ? "row-completed" : active ? "row-active" : ""}>
                        <td><span className="code">{a.codigo}</span></td>
                        <td>{a.nombre}</td>
                        <td className="credits">{a.creditos}</td>
                        <td style={{ textAlign: "center" }}>
                          {completed ? (
                            <span style={{ color: "var(--success)", fontSize: "0.78rem", fontWeight: 600 }}>Completada</span>
                          ) : active ? (
                            <span style={{ color: "var(--gold)", fontSize: "0.78rem", fontWeight: 600 }}>En curso</span>
                          ) : (
                            <span style={{ color: "var(--ink-4)", fontSize: "0.78rem" }}>Pendiente</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {/* ESPECIALIZACIONES */}
          {tab === "especializaciones" && (
            <div className="malla-section">
              <h3>
                <Sparkles size={22} /> Trayectorias de Especialización Ministerial
                <span className="count">5 trayectorias</span>
              </h3>
              <p className="desc">
                El estudiante debe cursar al menos <strong>una trayectoria completa</strong> (mínimo 5 asignaturas) y <strong>2 asignaturas de otra trayectoria</strong>. Cada trayectoria responde a un llamado ministerial específico.
              </p>

              <div className="especializaciones-grid">
                {especializacionInfo.map((esp) => {
                  const lista = MALLA_CURRICULAR.especializaciones[esp.key as keyof typeof MALLA_CURRICULAR.especializaciones];
                  const total = lista.reduce((a, b) => a + b.creditos, 0);
                  return (
                    <div
                      key={esp.key}
                      className="esp-card"
                      style={{ "--card-color": esp.color } as React.CSSProperties}
                    >
                      <div className="head">
                        <div className="icon-disc" style={{ background: `${esp.color}15`, color: esp.color, fontFamily: "var(--font-serif)", fontWeight: 700 }}>
                          {esp.icon}
                        </div>
                        <h4>{esp.label}</h4>
                      </div>
                      <div className="desc">
                        {lista.length} asignaturas · {total} créditos
                      </div>
                      <div className="asig-list">
                        {lista.map((a) => (
                          <div key={a.codigo} className="asig-row">
                            <span className="name">{a.nombre}</span>
                            <span className="code">{a.codigo}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* OPTATIVAS */}
          {tab === "optativas" && (
            <div className="malla-section">
              <h3>
                <Layers size={22} /> Asignaturas Optativas
                <span className="count">{MALLA_CURRICULAR.optativas.length} asignaturas · {totalOptativas} créditos</span>
              </h3>
              <p className="desc">
                Complementarias al plan principal. El estudiante debe cursar al menos 2 optativas recomendadas para completar los requisitos de graduación.
              </p>

              <table className="malla-table">
                <thead>
                  <tr>
                    <th style={{ width: 130 }}>Código</th>
                    <th>Asignatura</th>
                    <th style={{ width: 110, textAlign: "center" }}>Créditos</th>
                  </tr>
                </thead>
                <tbody>
                  {MALLA_CURRICULAR.optativas.map((a) => (
                    <tr key={a.codigo}>
                      <td><span className="code">{a.codigo}</span></td>
                      <td>{a.nombre}</td>
                      <td className="credits">{a.creditos}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* MODULOS */}
          {tab === "modulos" && (
            <div className="malla-section">
              <h3>
                <Clock size={22} /> Organización Modular
                <span className="count">11 módulos · 24–30 meses</span>
              </h3>
              <p className="desc">
                Propuesta cronológica del programa. El sistema modular permite concentrar el estudio en pocas asignaturas a la vez, favoreciendo la profundidad y la integración.
              </p>

              <div className="modulos-grid">
                {MALLA_CURRICULAR.organizacionModular.map((m) => {
                  let estado: "completed" | "active" | "upcoming" = "upcoming";
                  if (m.modulo < 2) estado = "completed";
                  else if (m.modulo === 2) estado = "active";

                  return (
                    <div key={m.modulo} className={`modulo-card ${estado}`}>
                      <div className="head">
                        <div className="num">
                          <span className="lbl">Módulo</span>
                          {m.modulo}
                        </div>
                        <span className={`badge ${estado}`}>
                          {estado === "completed" ? "Completado" : estado === "active" ? "En curso" : "Próximo"}
                        </span>
                      </div>
                      <div className="asigs">
                        {m.asignaturas.map((a, i) => (
                          <div key={i} className="asig">{a}</div>
                        ))}
                      </div>
                      <div className="credits-tag">
                        <Award size={12} /> <strong>{m.creditos}</strong>&nbsp;créditos
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* REQUISITOS DE GRADUACIÓN */}
          <div style={{ marginTop: 56 }}>
            <div className="requisitos-card">
              <h3>Requisitos de Graduación</h3>
              <p className="lead">
                Para obtener el título de {`Bachiller en Teología`}, el estudiante debe cumplir todos los siguientes requisitos académicos.
              </p>
              <div className="requisitos-list">
                {MALLA_CURRICULAR.requisitosGraduacion.map((r, i) => (
                  <div key={i} className="requisito-item">
                    <CheckCircle2 size={16} className="check" />
                    <span>{r}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(212, 178, 90, 0.18)", fontFamily: "var(--font-serif)", fontSize: "1.3rem", color: "var(--gold-3)", fontWeight: 600 }}>
                Total mínimo: 50 créditos
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
