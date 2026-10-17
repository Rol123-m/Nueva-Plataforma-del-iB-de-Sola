import { Calendar } from "lucide-react";
import type { Anuncio } from "../types";

const tagLabels: Record<Anuncio["categoria"], string> = {
  tarea: "Tarea",
  clase: "Clase",
  nota: "Nota",
  recurso: "Recurso",
  general: "General",
};

export function AnuncioCard({ anuncio }: { anuncio: Anuncio }) {
  return (
    <article className={`anuncio-card ${anuncio.destacado ? "destacado" : ""}`}>
      <div className="anuncio-meta">
        <span className={`anuncio-tag ${anuncio.categoria}`}>
          {tagLabels[anuncio.categoria]}
        </span>
      </div>
      <h4>{anuncio.titulo}</h4>
      <p>{anuncio.contenido}</p>
      <div className="fecha" style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <Calendar size={12} />
        {anuncio.fecha}
      </div>
    </article>
  );
}
