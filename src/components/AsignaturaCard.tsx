import { Link } from "react-router-dom";
import { ArrowRight, User, Clock, Award, Layers } from "lucide-react";
import type { Asignatura } from "../types";
import { SubjectIcon } from "./SubjectIcon";

export function AsignaturaCard({ asignatura }: { asignatura: Asignatura }) {
  const clasesDisponibles = asignatura.clases.filter((c) => c.disponible).length;
  const totalClases = asignatura.clases.length;
  const progreso = Math.round((clasesDisponibles / totalClases) * 100);

  const estadoLabel =
    asignatura.estado === "en-curso"
      ? "En curso"
      : asignatura.estado === "completada"
        ? "Completada"
        : "Próximamente";

  return (
    <Link
      to={`/asignatura/${asignatura.id}`}
      className="asignatura-card"
      style={
        {
          "--card-color": asignatura.color,
        } as React.CSSProperties
      }
    >
      <div className="top">
        <div className="code-row">
          <span className="code">{asignatura.codigo}</span>
          <div className="icon-disc">
            <SubjectIcon name={asignatura.icono} size={20} />
          </div>
        </div>
        <h3>{asignatura.nombre}</h3>
        <div className="profesor">
          <User size={13} />
          <span>{asignatura.profesor}</span>
        </div>
        <p className="desc">{asignatura.descripcion}</p>
      </div>

      <div className="body">
        <div className="meta-row">
          <span className="chip">
            <Award size={12} /> <strong>{asignatura.creditos}</strong>&nbsp;créditos
          </span>
          <span className="chip">
            <Layers size={12} /> Módulo <strong>{asignatura.modulo}</strong>
          </span>
          <span className="chip">
            <Clock size={12} /> {asignatura.horasTotales}
          </span>
        </div>

        <div className="progress-wrap">
          <div className="progress-label">
            <span>Progreso del curso</span>
            <span>
              {clasesDisponibles}/{totalClases} clases
            </span>
          </div>
          <div className="progress">
            <div
              className="progress-bar"
              style={{ width: `${progreso}%` }}
            />
          </div>
        </div>
      </div>

      <div className="footer">
        <span className={`estado estado-${asignatura.estado}`}>
          <span className="dot" />
          {estadoLabel}
        </span>
        <div className="arrow">
          <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
}
