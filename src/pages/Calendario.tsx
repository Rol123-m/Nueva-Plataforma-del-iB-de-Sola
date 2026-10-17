import { Calendar as CalendarIcon, Clock, MapPin } from "lucide-react";
import { CALENDARIO_MODULO_2, MODULO_ACTUAL } from "../data/instituto";

export function Calendario() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: "48px" }}>
        <div className="container hero-inner">
          <div className="hero-eyebrow">
            <span className="dot" />
            <span className="eyebrow" style={{ color: "var(--navy)" }}>Módulo {MODULO_ACTUAL.numero} · {MODULO_ACTUAL.periodo}</span>
          </div>
          <h1>
            Calendario <em>académico</em>
          </h1>
          <p className="hero-lead">
            Planificación sesión por sesión del módulo actual. Incluye fechas de clases, turnos y entregas de trabajos. Planifica con anticipación para cumplir con las obligaciones académicas.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="container">
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            {/* Resumen rápido */}
            <div className="grid-3" style={{ marginBottom: 32 }}>
              <div className="card" style={{ textAlign: "center", padding: 24 }}>
                <Clock size={22} style={{ margin: "0 auto 10px", color: "var(--gold)" }} />
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 600, color: "var(--navy)" }}>9</div>
                <div className="text-sm text-ink-3">Días de clase</div>
              </div>
              <div className="card" style={{ textAlign: "center", padding: 24 }}>
                <CalendarIcon size={22} style={{ margin: "0 auto 10px", color: "var(--gold)" }} />
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 600, color: "var(--navy)" }}>14</div>
                <div className="text-sm text-ink-3">Sesiones totales</div>
              </div>
              <div className="card" style={{ textAlign: "center", padding: 24 }}>
                <MapPin size={22} style={{ margin: "0 auto 10px", color: "var(--gold)" }} />
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 600, color: "var(--navy)" }}>2</div>
                <div className="text-sm text-ink-3">Asignaturas en paralelo</div>
              </div>
            </div>

            {/* Listado calendario */}
            <div className="calendario-list">
              {CALENDARIO_MODULO_2.map((dia) => (
                <div key={dia.fecha} className="calendario-row">
                  <div className="calendario-fecha">{dia.fecha}</div>
                  <div className="calendario-clases">
                    {dia.clases.map((c, i) => (
                      <div key={i} className="calendario-clase">
                        <span className="turno">{c.turno}</span>
                        <span className="asig">{c.asignatura}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Notas */}
            <div className="card" style={{ marginTop: 32, background: "linear-gradient(135deg, var(--paper), var(--parchment))" }}>
              <h3 style={{ marginBottom: 12 }}>Notas importantes</h3>
              <div className="normas-list">
                <div className="norma-item">
                  <div className="check">!</div>
                  <div>Las fechas están sujetas a cambios por parte del Instituto; cualquier modificación será comunicada con anticipación.</div>
                </div>
                <div className="norma-item">
                  <div className="check">!</div>
                  <div>La puntualidad es valorada: llegadas tardías mayores a 10 minutos cuentan como falta.</div>
                </div>
                <div className="norma-item">
                  <div className="check">!</div>
                  <div>Las entregas de trabajos (resúmenes y trabajo final) deben realizarse en la fecha indicada; los trabajos tardíos se penalizan con 1 punto sobre 10 por cada día de retraso.</div>
                </div>
                <div className="norma-item">
                  <div className="check">!</div>
                  <div>Mínimo 80% de asistencia (5 de 6 sesiones) para aprobar cada asignatura.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
