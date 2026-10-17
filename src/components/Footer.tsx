import { Link } from "react-router-dom";
import { BookOpen, MapPin } from "lucide-react";
import { INSTITUTO } from "../data/instituto";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand brand-mark" style={{ background: "rgba(212, 178, 90, 0.15)", border: "1px solid rgba(212, 178, 90, 0.3)" }}>
              IB
            </div>
            <h4>{INSTITUTO.nombre}</h4>
            <p>{INSTITUTO.subtitulo}. Formación teológica fiel a la Escritura, para el servicio de la iglesia y la gloria de Dios.</p>
          </div>

          <div className="footer-col">
            <h5>Plataforma</h5>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/asignaturas">Asignaturas</Link></li>
              <li><Link to="/malla">Malla Curricular</Link></li>
              <li><Link to="/calendario">Calendario</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Programa</h5>
            <ul>
              <li><span>{INSTITUTO.titulo}</span></li>
              <li><span>{INSTITUTO.sistema}</span></li>
              <li><span>Duración: {INSTITUTO.duracion}</span></li>
              <li><span>{INSTITUTO.creditosMinimos} créditos mínimos</span></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Contacto</h5>
            <ul>
              <li><a href="#"><MapPin size={13} style={{ display: "inline", marginRight: 6 }} />Iglesia Bautista de Sola</a></li>
              <li><a href="#"><BookOpen size={13} style={{ display: "inline", marginRight: 6 }} />STBCOr</a></li>
              <li><span style={{ opacity: 0.7, fontSize: "0.85rem" }}>Auspiciado por el Seminario Teológico Bautista de Cuba Oriental</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} {INSTITUTO.nombre}. Todos los derechos reservados.
          </div>
          <div className="footer-quote">"Sola Scriptura · Soli Deo Gloria"</div>
        </div>
      </div>
    </footer>
  );
}
