import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, GraduationCap, Calendar, Layers, Compass } from "lucide-react";
import { ANUNCIOS, ASIGNATURAS, INSTITUTO, MODULO_ACTUAL } from "../data/instituto";
import { AnuncioCard } from "../components/AnuncioCard";
import { AsignaturaCard } from "../components/AsignaturaCard";

export function Home() {
  const asignaturasEnCurso = ASIGNATURAS.filter((a) => a.estado === "en-curso");
  const asignaturasCompletadas = ASIGNATURAS.filter((a) => a.estado === "completada");

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-eyebrow">
            <span className="dot" />
            <span className="eyebrow" style={{ color: "var(--navy)" }}>Módulo 2 en curso · Septiembre–Diciembre 2026</span>
          </div>
          <h1>
            Formación teológica fiel, <em>para la gloria de Dios</em> y el servicio de su iglesia.
          </h1>
          <p className="hero-lead">
            El {INSTITUTO.nombreCorto} ofrece el programa de {INSTITUTO.titulo} bajo los auspicios del Seminario Teológico Bautista de Cuba Oriental. Sistema modular, estudios centrados en la Escritura, piedad personal y servicio ministerial.
          </p>
          <div className="hero-actions">
            <Link to="/asignaturas" className="btn btn-primary">
              <BookOpen size={16} />
              Ver asignaturas
            </Link>
            <Link to="/malla" className="btn btn-ghost">
              <GraduationCap size={16} />
              Malla curricular
            </Link>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="num">5</div>
              <div className="lbl">Asignaturas en la plataforma</div>
            </div>
            <div className="hero-stat">
              <div className="num">2</div>
              <div className="lbl">Asignaturas en curso</div>
            </div>
            <div className="hero-stat">
              <div className="num"><em>50</em></div>
              <div className="lbl">Créditos mínimos para graduarse</div>
            </div>
            <div className="hero-stat">
              <div className="num">24–30</div>
              <div className="lbl">Meses de duración del programa</div>
            </div>
          </div>
        </div>
      </section>

      {/* MÓDULO ACTUAL */}
      <section className="section">
        <div className="container">
          <div
            className="module-banner"
          >
            <span className="tag">
              <Calendar size={12} /> Módulo Actual
            </span>
            <h3>Módulo {MODULO_ACTUAL.numero} — {MODULO_ACTUAL.periodo}</h3>
            <div className="body">
              <div className="item">
                <div className="lbl">Asignaturas activas</div>
                <div className="val">
                  {MODULO_ACTUAL.asignaturas.map((a) => (
                    <div key={a}>{a}</div>
                  ))}
                </div>
              </div>
              <div className="item">
                <div className="lbl">Modalidad</div>
                <div className="val">
                  Presencial · Sistema Modular
                  <br />
                  Sesiones de 2 horas · 6 sesiones por asignatura
                </div>
              </div>
            </div>
            <div className="next">
              <strong>Próximo módulo:</strong> {MODULO_ACTUAL.proximoModulo}
            </div>
          </div>
        </div>
      </section>

      {/* ANUNCIOS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div className="lhs">
              <span className="eyebrow">Tablón del Instituto</span>
              <h2>Anuncios importantes</h2>
              <p className="desc">
                Tareas, fechas de entrega, recordatorios y notas académicas para los estudiantes del módulo actual.
              </p>
            </div>
          </div>

          <div className="anuncios-grid">
            {ANUNCIOS.map((a) => (
              <AnuncioCard key={a.id} anuncio={a} />
            ))}
          </div>
        </div>
      </section>

      {/* ASIGNATURAS EN CURSO */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div className="lhs">
              <span className="eyebrow">Módulo 2 · Septiembre–Diciembre 2026</span>
              <h2>Asignaturas en curso</h2>
              <p className="desc">
                Las dos asignaturas troncales del módulo actual, con su sílabo completo, sesiones, bibliografía y criterios de evaluación.
              </p>
            </div>
            <div className="rhs">
              <Link to="/asignaturas" className="btn btn-ghost">
                Ver todas <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="asignaturas-grid">
            {asignaturasEnCurso.map((a) => (
              <AsignaturaCard key={a.id} asignatura={a} />
            ))}
          </div>
        </div>
      </section>

      {/* ASIGNATURAS COMPLETADAS */}
      {asignaturasCompletadas.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-head">
              <div className="lhs">
                <span className="eyebrow">Módulo 1 · Marzo–Mayo 2026</span>
                <h2>Asignaturas completadas</h2>
                <p className="desc">
                  Asignaturas del primer módulo del programa. Las clases están disponibles como material de repaso y referencia.
                </p>
              </div>
            </div>

            <div className="asignaturas-grid">
              {asignaturasCompletadas.map((a) => (
                <AsignaturaCard key={a.id} asignatura={a} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ACCESO RÁPIDO */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid-3">
            <Link to="/malla" className="card" style={{ textDecoration: "none", display: "block" }}>
              <div className="card-head">
                <div className="icon-disc"><Layers size={18} /></div>
                <div>
                  <span className="eyebrow">Programa completo</span>
                  <h3 style={{ marginBottom: 0 }}>Malla Curricular</h3>
                </div>
              </div>
              <p className="text-sm text-ink-3">
                14 asignaturas troncales, 5 trayectorias de especialización y 7 optativas. Organización modular cronológica de 11 módulos.
              </p>
            </Link>

            <Link to="/calendario" className="card" style={{ textDecoration: "none", display: "block" }}>
              <div className="card-head">
                <div className="icon-disc"><Calendar size={18} /></div>
                <div>
                  <span className="eyebrow">Módulo 2</span>
                  <h3 style={{ marginBottom: 0 }}>Calendario</h3>
                </div>
              </div>
              <p className="text-sm text-ink-3">
                Fechas de las 7 sesiones de cada asignatura, turnos y entregas de trabajos. Planifica tu semestre con claridad.
              </p>
            </Link>

            <Link to="/asignaturas" className="card" style={{ textDecoration: "none", display: "block" }}>
              <div className="card-head">
                <div className="icon-disc"><Compass size={18} /></div>
                <div>
                  <span className="eyebrow">Estudio</span>
                  <h3 style={{ marginBottom: 0 }}>Asignaturas</h3>
                </div>
              </div>
              <p className="text-sm text-ink-3">
                Accede al sílabo, las clases grabadas, los recursos y los criterios de evaluación de cada asignatura de la plataforma.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
