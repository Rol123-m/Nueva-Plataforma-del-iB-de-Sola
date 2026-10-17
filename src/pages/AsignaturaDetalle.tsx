import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  Mail,
  Phone,
  Clock,
  Calendar,
  BookOpen,
  Target,
  Compass,
  ListChecks,
  Library,
  Scale,
  Quote,
  Users,
  FileText,
  Lock,
  PlayCircle,
  Settings2,
  Star,
} from "lucide-react";
import { ASIGNATURAS } from "../data/instituto";
import { SubjectIcon } from "../components/SubjectIcon";
import type { Recurso } from "../types";

type Tab = "info" | "clases" | "silabo" | "evaluacion" | "recursos";

const recursoIconMap: Record<Recurso["tipo"], string> = {
  requerido: "Obligatoria",
  recomendado: "Recomendada",
  consulta: "Consulta",
  material: "Material",
};

export function AsignaturaDetalle() {
  const { id } = useParams();
  const [tab, setTab] = useState<Tab>("info");

  const asignatura = ASIGNATURAS.find((a) => a.id === id);

  if (!asignatura) return <Navigate to="/asignaturas" replace />;

  const clasesDisponibles = asignatura.clases.filter((c) => c.disponible).length;
  const totalClases = asignatura.clases.length;

  const cardStyle = {
    "--card-color": asignatura.color,
    "--card-glow": `${asignatura.color}20`,
  } as React.CSSProperties;

  const tabs: { id: Tab; label: string; icon: typeof BookOpen }[] = [
    { id: "info", label: "Información", icon: BookOpen },
    { id: "clases", label: `Clases (${clasesDisponibles}/${totalClases})`, icon: PlayCircle },
    { id: "silabo", label: "Sílabo", icon: Compass },
    { id: "evaluacion", label: "Evaluación", icon: ListChecks },
    { id: "recursos", label: `Recursos (${asignatura.recursos.length})`, icon: Library },
  ];

  return (
    <div style={cardStyle}>
      {/* HERO */}
      <section className="subject-hero">
        <div className="container">
          <Link to="/asignaturas" className="subject-back">
            <ArrowLeft size={15} /> Volver a asignaturas
          </Link>

          <div className="code-row">
            <span className="code">{asignatura.codigo}</span>
            <span
              className={`estado estado-${asignatura.estado}`}
              style={{ display: "inline-flex", alignItems: "center", gap: 6, fontWeight: 600, fontSize: "0.82rem" }}
            >
              <span className="dot" />
              {asignatura.estado === "en-curso" ? "En curso" : asignatura.estado === "completada" ? "Completada" : "Próximamente"}
            </span>
            <div className="icon-disc" style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(15,30,61,0.06)", color: asignatura.color, display: "grid", placeItems: "center" }}>
              <SubjectIcon name={asignatura.icono} size={16} />
            </div>
          </div>

          <h1>{asignatura.nombre}</h1>
          <p className="lead">{asignatura.descripcion}</p>

          <div className="meta-grid">
            <div className="meta-item">
              <div className="lbl">Profesor</div>
              <div className="val">{asignatura.profesor}</div>
            </div>
            <div className="meta-item">
              <div className="lbl">Módulo</div>
              <div className="val">Módulo {asignatura.modulo}</div>
            </div>
            <div className="meta-item">
              <div className="lbl">Créditos</div>
              <div className="val">{asignatura.creditos} créditos</div>
            </div>
            <div className="meta-item">
              <div className="lbl">Período</div>
              <div className="val">{asignatura.periodo}</div>
            </div>
            <div className="meta-item">
              <div className="lbl">Horas</div>
              <div className="val">{asignatura.horasTotales}</div>
            </div>
            <div className="meta-item">
              <div className="lbl">Total sesiones</div>
              <div className="val">{asignatura.totalClases}</div>
            </div>
          </div>

          {(asignatura.profesorCorreo || asignatura.profesorTelefono) && (
            <div style={{ display: "flex", gap: 20, marginTop: 18, flexWrap: "wrap", fontSize: "0.88rem", color: "var(--ink-3)" }}>
              {asignatura.profesorCorreo && (
                <a href={`mailto:${asignatura.profesorCorreo}`} style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--ink-3)" }}>
                  <Mail size={14} /> {asignatura.profesorCorreo}
                </a>
              )}
              {asignatura.profesorTelefono && (
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <Phone size={14} /> {asignatura.profesorTelefono}
                </span>
              )}
            </div>
          )}
        </div>
      </section>

      {/* TABS */}
      <div className="tabs-bar">
        <div className="container">
          <div className="tabs">
            {tabs.map((t) => {
              const Icon = t.icon;
              return (
                <button
                  key={t.id}
                  className={`tab ${tab === t.id ? "active" : ""}`}
                  onClick={() => setTab(t.id)}
                >
                  <Icon size={15} />
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* PANELS */}
      <div className="tab-panel">
        <div className="container">
          {tab === "info" && (
            <div className="grid-2" style={{ gap: 28 }}>
              <div className="card">
                <div className="card-head">
                  <div className="icon-disc"><Target size={18} /></div>
                  <div>
                    <span className="eyebrow">Propósito del curso</span>
                    <h3 style={{ marginBottom: 0 }}>Objetivo General</h3>
                  </div>
                </div>
                <p style={{ fontSize: "1.02rem", lineHeight: 1.7 }}>{asignatura.silabo.objetivoGeneral}</p>

                {asignatura.silabo.objetivosEspecificos && asignatura.silabo.objetivosEspecificos.length > 0 && (
                  <>
                    <h4 style={{ marginTop: 28, marginBottom: 14 }}>Objetivos específicos</h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {asignatura.silabo.objetivosEspecificos.map((obj, i) => (
                        <div key={i} style={{ display: "grid", gridTemplateColumns: "24px 1fr", gap: 12, alignItems: "start" }}>
                          <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(184, 147, 67, 0.15)", color: "var(--gold)", display: "grid", placeItems: "center", fontSize: "0.75rem", fontWeight: 700 }}>{i + 1}</div>
                          <div style={{ fontSize: "0.95rem", color: "var(--ink-2)", lineHeight: 1.55 }}>{obj}</div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div className="card">
                  <div className="card-head">
                    <div className="icon-disc"><Settings2 size={18} /></div>
                    <div>
                      <span className="eyebrow">Cómo trabajaremos</span>
                      <h3 style={{ marginBottom: 0 }}>Metodología</h3>
                    </div>
                  </div>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>{asignatura.silabo.metodologia}</p>
                </div>

                {asignatura.valores && asignatura.valores.length > 0 && (
                  <div className="card">
                    <div className="card-head">
                      <div className="icon-disc"><Scale size={18} /></div>
                      <div>
                        <span className="eyebrow">Lo que cultivamos</span>
                        <h3 style={{ marginBottom: 0 }}>Valores del curso</h3>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {asignatura.valores.map((v) => (
                        <span key={v} style={{ padding: "7px 14px", background: "var(--cream)", border: "1px solid var(--line-gold)", borderRadius: 999, fontSize: "0.85rem", color: "var(--ink)", fontWeight: 500 }}>{v}</span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="card">
                  <div className="card-head">
                    <div className="icon-disc"><Clock size={18} /></div>
                    <div>
                      <span className="eyebrow">Datos clave</span>
                      <h3 style={{ marginBottom: 0 }}>Información académica</h3>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.92rem", padding: "8px 0", borderBottom: "1px solid var(--line)" }}>
                      <span style={{ color: "var(--ink-3)" }}>Período</span>
                      <strong>{asignatura.periodo}</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.92rem", padding: "8px 0", borderBottom: "1px solid var(--line)" }}>
                      <span style={{ color: "var(--ink-3)" }}>Horario</span>
                      <strong>{asignatura.horario || "Por confirmar"}</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.92rem", padding: "8px 0", borderBottom: "1px solid var(--line)" }}>
                      <span style={{ color: "var(--ink-3)" }}>Horas presenciales</span>
                      <strong>{asignatura.horasPresenciales || asignatura.horasTotales}</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.92rem", padding: "8px 0" }}>
                      <span style={{ color: "var(--ink-3)" }}>Sesiones totales</span>
                      <strong>{asignatura.totalClases} sesiones</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === "clases" && (
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
              <div className="card">
                <div className="card-head">
                  <div className="icon-disc"><PlayCircle size={18} /></div>
                  <div>
                    <span className="eyebrow">{clasesDisponibles} de {totalClases} disponibles</span>
                    <h3 style={{ marginBottom: 0 }}>Sesiones del curso</h3>
                  </div>
                </div>
                <p className="text-sm text-ink-3" style={{ marginBottom: 24 }}>
                  Haz clic en una sesión disponible para ver el material de clase completo. Las sesiones marcadas como "Próximamente" aún no han sido publicadas.
                </p>

                <div className="clases-list">
                  {asignatura.clases.map((clase, i) => {
                    if (clase.disponible && clase.url !== "#") {
                      return (
                        <a
                          key={i}
                          href={clase.url.startsWith("http") ? clase.url : `/viewer.html?url=${encodeURIComponent(clase.url)}`}
                          target={clase.url.startsWith("http") ? "_blank" : "_self"}
                          rel="noreferrer"
                          className="clase-item"
                        >
                          <div className="clase-num">{clase.numero}</div>
                          <div className="clase-body">
                            <h4>{clase.nombre}</h4>
                            <div className="meta">
                              <span><Calendar size={12} /> {clase.fecha}</span>
                              {clase.hora && <><span className="sep">·</span><span><Clock size={12} /> {clase.hora}</span></>}
                            </div>
                            {clase.descripcion && <p className="text-sm text-ink-3" style={{ marginTop: 6 }}>{clase.descripcion}</p>}
                            {clase.temas.length > 0 && (
                              <div className="temas">
                                {clase.temas.map((t) => <span key={t} className="tema">{t}</span>)}
                              </div>
                            )}
                          </div>
                          <div className="clase-cta">
                            <PlayCircle size={14} /> Ver clase
                          </div>
                        </a>
                      );
                    }
                    return (
                      <div key={i} className="clase-item disabled">
                        <div className="clase-num">{clase.numero}</div>
                        <div className="clase-body">
                          <h4>{clase.nombre}</h4>
                          <div className="meta">
                            <span><Calendar size={12} /> {clase.fecha}</span>
                            {clase.hora && <><span className="sep">·</span><span><Clock size={12} /> {clase.hora}</span></>}
                          </div>
                          {clase.descripcion && <p className="text-sm text-ink-3" style={{ marginTop: 6 }}>{clase.descripcion}</p>}
                          {clase.temas.length > 0 && (
                            <div className="temas">
                              {clase.temas.map((t) => <span key={t} className="tema">{t}</span>)}
                            </div>
                          )}
                        </div>
                        <div className="clase-cta">
                          <Lock size={14} /> Próximamente
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {tab === "silabo" && (
            <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", gap: 28 }}>
              {/* Sesiones / Contenido Temático */}
              {asignatura.silabo.sesiones && asignatura.silabo.sesiones.length > 0 && (
                <div className="card">
                  <div className="card-head">
                    <div className="icon-disc"><Compass size={18} /></div>
                    <div>
                      <span className="eyebrow">Plan de clases</span>
                      <h3 style={{ marginBottom: 0 }}>Contenido temático por sesiones</h3>
                    </div>
                  </div>
                  <div className="timeline">
                    {asignatura.silabo.sesiones.map((s) => (
                      <div key={s.sesion} className="timeline-item">
                        <div className="head">
                          <span className="num">Sesión {s.sesion}</span>
                          <span className="date">{s.fecha}</span>
                        </div>
                        <h4>{s.temaPrincipal}</h4>
                        <div className="subtemas">
                          {s.subtemas.map((st) => <span key={st} className="subtema">{st}</span>)}
                        </div>
                        <div className="chips-row">
                          {s.capitulos && (
                            <span className="chip"><BookOpen size={12} /> {s.capitulos}</span>
                          )}
                          {s.metodologia && (
                            <span className="chip"><Settings2 size={12} /> {s.metodologia}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Equipos de trabajo */}
              {asignatura.silabo.equipos && asignatura.silabo.equipos.length > 0 && (
                <div className="card">
                  <div className="card-head">
                    <div className="icon-disc"><Users size={18} /></div>
                    <div>
                      <span className="eyebrow">Trabajo colaborativo</span>
                      <h3 style={{ marginBottom: 0 }}>Equipos de trabajo</h3>
                    </div>
                  </div>
                  <p className="text-sm text-ink-3" style={{ marginBottom: 18 }}>
                    Los estudiantes se organizan en 5 equipos, uno por cada período histórico. Los temas de investigación serán asignados por la profesora con un mes de antelación.
                  </p>
                  <div className="equipos-grid">
                    {asignatura.silabo.equipos.map((eq) => (
                      <div key={eq.numero} className="equipo-card">
                        <div className="num">Equipo {eq.numero}</div>
                        <h4>{eq.periodo}</h4>
                        <div className="tema">{eq.tema}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bibliografía */}
              {asignatura.silabo.bibliografia && asignatura.silabo.bibliografia.length > 0 && (
                <div className="card">
                  <div className="card-head">
                    <div className="icon-disc"><Library size={18} /></div>
                    <div>
                      <span className="eyebrow">Para profundizar</span>
                      <h3 style={{ marginBottom: 0 }}>Bibliografía</h3>
                    </div>
                  </div>
                  <div className="biblio-list">
                    {asignatura.silabo.bibliografia.map((b, i) => (
                      <div key={i} className="biblio-item">
                        <div className="num">{i + 1}</div>
                        <div>
                          <div className="autor">{b.autor}</div>
                          <div className="titulo">{b.titulo}</div>
                          {b.editorial && <div className="editorial">{b.editorial}</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Frases para recordar */}
              {asignatura.silabo.frasesRecordar && asignatura.silabo.frasesRecordar.length > 0 && (
                <div className="card" style={{ background: "linear-gradient(135deg, var(--paper), var(--parchment))" }}>
                  <div className="card-head">
                    <div className="icon-disc" style={{ background: "rgba(184, 147, 67, 0.15)", color: "var(--gold)" }}><Quote size={18} /></div>
                    <div>
                      <span className="eyebrow">Para llevar contigo</span>
                      <h3 style={{ marginBottom: 0 }}>Frases para recordar por sesión</h3>
                    </div>
                  </div>
                  <div className="frases-grid">
                    {asignatura.silabo.frasesRecordar.map((f, i) => (
                      <div key={i} className="frase-card">
                        <div className="texto">{f.frase}</div>
                        <div className="sesion">{f.sesion}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Normas del curso */}
              {asignatura.silabo.normas && asignatura.silabo.normas.length > 0 && (
                <div className="card">
                  <div className="card-head">
                    <div className="icon-disc"><Scale size={18} /></div>
                    <div>
                      <span className="eyebrow">Acuerdos de convivencia</span>
                      <h3 style={{ marginBottom: 0 }}>Normas del curso</h3>
                    </div>
                  </div>
                  <div className="normas-list">
                    {asignatura.silabo.normas.map((n, i) => (
                      <div key={i} className="norma-item">
                        <div className="check">✓</div>
                        <div>{n}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {tab === "evaluacion" && (
            <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", gap: 28 }}>
              <div className="card">
                <div className="card-head">
                  <div className="icon-disc"><ListChecks size={18} /></div>
                  <div>
                    <span className="eyebrow">Cómo se evalúa</span>
                    <h3 style={{ marginBottom: 0 }}>Sistema de evaluación</h3>
                  </div>
                </div>
                <p style={{ fontSize: "1rem", marginBottom: 24, padding: "16px 20px", background: "var(--cream)", borderLeft: "3px solid var(--gold)", borderRadius: "var(--r-md)" }}>
                  {asignatura.silabo.evaluacion}
                </p>

                {asignatura.silabo.itemsEvaluacion && (
                  <>
                    <div className="eval-table">
                      {asignatura.silabo.itemsEvaluacion.map((it, i) => (
                        <div key={i} className="eval-row">
                          <div className="body">
                            <div className="name">{it.actividad}</div>
                            <div className="desc">{it.descripcion}</div>
                          </div>
                          <div className="pct">{it.porcentaje}%</div>
                        </div>
                      ))}
                    </div>

                    {/* Barra de proporciones */}
                    <div className="eval-bar-wrap">
                      <div className="eval-bar">
                        {asignatura.silabo.itemsEvaluacion.map((it, i) => {
                          const colors = ["s1", "s2", "s3", "s4", "s5"];
                          return (
                            <div
                              key={i}
                              className={`eval-bar-segment ${colors[i % colors.length]}`}
                              style={{ width: `${it.porcentaje}%` }}
                              title={`${it.actividad}: ${it.porcentaje}%`}
                            />
                          );
                        })}
                      </div>
                      <div className="eval-legend">
                        {asignatura.silabo.itemsEvaluacion.map((it, i) => {
                          const colors = ["var(--navy)", "var(--wine)", "var(--gold)", "var(--success)", "var(--ink-3)"];
                          return (
                            <span key={i} className="item">
                              <span className="swatch" style={{ background: colors[i % colors.length] }} />
                              {it.actividad} ({it.porcentaje}%)
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Notas específicas para Hermenéutica */}
              {asignatura.id === "hermeneutica" && (
                <>
                  <div className="card">
                    <div className="card-head">
                      <div className="icon-disc"><FileText size={18} /></div>
                      <div>
                        <span className="eyebrow">Trabajo escrito</span>
                        <h3 style={{ marginBottom: 0 }}>Detalle de los resúmenes del libro</h3>
                      </div>
                    </div>
                    <p style={{ marginBottom: 16 }}>
                      Los resúmenes tienen como objetivo demostrar la comprensión de los principios hermenéuticos presentados en el libro de Fee & Stuart. No es una paráfrasis, sino una síntesis analítica que identifique las ideas principales de cada capítulo y las relacione con la práctica interpretativa.
                    </p>
                    <h4 style={{ marginBottom: 10, fontFamily: "var(--font-sans)", fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--ink-3)" }}>Estructura sugerida por capítulo</h4>
                    <div className="normas-list" style={{ marginBottom: 20 }}>
                      <div className="norma-item"><div className="check">1</div><div>Idea central del capítulo (1–2 oraciones, no más).</div></div>
                      <div className="norma-item"><div className="check">2</div><div>Principios clave de interpretación (3–5 puntos).</div></div>
                      <div className="norma-item"><div className="check">3</div><div>Un ejemplo práctico que te haya impactado.</div></div>
                      <div className="norma-item"><div className="check">4</div><div>Aplicación personal: ¿cómo afecta este principio mi lectura de la Biblia?</div></div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 16 }}>
                      <div style={{ padding: 18, background: "var(--cream)", borderRadius: "var(--r-md)", borderLeft: "3px solid var(--navy)" }}>
                        <div className="eyebrow" style={{ color: "var(--navy)", marginBottom: 6 }}>Parte 1</div>
                        <div style={{ fontWeight: 600, marginBottom: 4 }}>Capítulos 1–6</div>
                        <div className="text-sm text-ink-3">Entrega: Sesión 3 — 7 de octubre</div>
                        <div style={{ marginTop: 8, fontFamily: "var(--font-serif)", fontSize: "1.6rem", fontWeight: 600, color: "var(--navy)" }}>15%</div>
                      </div>
                      <div style={{ padding: 18, background: "var(--cream)", borderRadius: "var(--r-md)", borderLeft: "3px solid var(--wine)" }}>
                        <div className="eyebrow" style={{ color: "var(--wine)", marginBottom: 6 }}>Parte 2</div>
                        <div style={{ fontWeight: 600, marginBottom: 4 }}>Capítulos 7–13 y Apéndice</div>
                        <div className="text-sm text-ink-3">Entrega: Sesión 5 — 4 de noviembre</div>
                        <div style={{ marginTop: 8, fontFamily: "var(--font-serif)", fontSize: "1.6rem", fontWeight: 600, color: "var(--wine)" }}>20%</div>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-head">
                      <div className="icon-disc"><Users size={18} /></div>
                      <div>
                        <span className="eyebrow">40% de la nota final</span>
                        <h3 style={{ marginBottom: 0 }}>Trabajo Final en Equipo</h3>
                      </div>
                    </div>
                    <p style={{ marginBottom: 16 }}>
                      Resolución de un problema exegético en un pasaje bíblico asignado por el profesor. Los equipos deberán investigar, analizar y presentar una solución fundamentada, aplicando los principios hermenéuticos aprendidos durante el curso.
                    </p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                      <div style={{ padding: 16, background: "var(--cream)", borderRadius: "var(--r-md)" }}>
                        <div className="eyebrow" style={{ marginBottom: 6 }}>Informe escrito</div>
                        <div className="text-sm">8–12 páginas · Times New Roman 12 · interlineado 1.5 · márgenes 2.5 cm</div>
                      </div>
                      <div style={{ padding: 16, background: "var(--cream)", borderRadius: "var(--r-md)" }}>
                        <div className="eyebrow" style={{ marginBottom: 6 }}>Presentación oral</div>
                        <div className="text-sm">15–20 minutos por equipo · apoyo visual · 5 min de preguntas</div>
                      </div>
                    </div>
                    <div style={{ marginTop: 16, padding: 14, background: "rgba(184, 147, 67, 0.10)", borderRadius: "var(--r-md)", fontSize: "0.9rem", color: "var(--ink-2)" }}>
                      <strong style={{ color: "var(--gold)" }}>Fecha de presentación:</strong> Sesión 7 — 16 de diciembre
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {tab === "recursos" && (
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
              <div className="card">
                <div className="card-head">
                  <div className="icon-disc"><Library size={18} /></div>
                  <div>
                    <span className="eyebrow">{asignatura.recursos.length} materiales</span>
                    <h3 style={{ marginBottom: 0 }}>Recursos y bibliografía del curso</h3>
                  </div>
                </div>
                <p className="text-sm text-ink-3" style={{ marginBottom: 22 }}>
                  Materiales obligatorios, recomendados, de consulta y material complementario. Haz clic en cada uno para acceder.
                </p>

                <div className="recursos-list">
                  {asignatura.recursos.map((r, i) => {
                    const isExternal = r.url.startsWith("http") || r.url === "#";
                    return (
                      <a
                        key={i}
                        href={r.url === "#" ? undefined : r.url}
                        target={isExternal ? "_blank" : undefined}
                        rel="noreferrer"
                        className="recurso-item"
                        style={{ opacity: r.url === "#" ? 0.6 : 1, pointerEvents: r.url === "#" ? "none" : "auto" }}
                      >
                        <div className={`recurso-icon ${r.tipo}`}>
                          {r.tipo === "requerido" && <BookOpen size={16} />}
                          {r.tipo === "recomendado" && <Star size={16} />}
                          {r.tipo === "consulta" && <Library size={16} />}
                          {r.tipo === "material" && <FileText size={16} />}
                        </div>
                        <div className="recurso-body">
                          <div className="name">{r.nombre}</div>
                          {r.descripcion && <div className="desc">{r.descripcion}</div>}
                        </div>
                        <span className={`recurso-tag ${r.tipo}`}>{recursoIconMap[r.tipo]}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
