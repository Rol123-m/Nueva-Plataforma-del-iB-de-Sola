import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, BookOpen } from "lucide-react";
import { INSTITUTO } from "../data/instituto";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
            <div className="brand-mark">IB</div>
            <div className="brand-text">
              <span className="name">Iglesia Bautista de Sola</span>
              <span className="sub">Instituto Bíblico · STBCOr</span>
            </div>
          </Link>

          <nav className="nav">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              end
            >
              Inicio
            </NavLink>
            <NavLink
              to="/asignaturas"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              Asignaturas
            </NavLink>
            <NavLink
              to="/malla"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              Malla Curricular
            </NavLink>
            <NavLink
              to="/calendario"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              Calendario
            </NavLink>
          </nav>

          <Link to="/asignaturas" className="nav-cta">
            <BookOpen size={15} />
            <span>Ir al estudio</span>
          </Link>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <div
        className={`overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
      <aside className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button
          className="close"
          onClick={() => setMenuOpen(false)}
          aria-label="Cerrar menú"
        >
          <X size={22} />
        </button>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setMenuOpen(false)}
        >
          Inicio
        </NavLink>
        <NavLink
          to="/asignaturas"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setMenuOpen(false)}
        >
          Asignaturas
        </NavLink>
        <NavLink
          to="/malla"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setMenuOpen(false)}
        >
          Malla Curricular
        </NavLink>
        <NavLink
          to="/calendario"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setMenuOpen(false)}
        >
          Calendario
        </NavLink>
        <div
          style={{
            marginTop: "auto",
            paddingTop: 24,
            borderTop: "1px solid var(--line)",
            fontSize: "0.78rem",
            color: "var(--ink-3)",
          }}
        >
          {INSTITUTO.siglas} · {INSTITUTO.titulo}
        </div>
      </aside>
    </>
  );
}
