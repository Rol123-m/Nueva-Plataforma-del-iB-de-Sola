import { Link } from "react-router-dom";
import { Compass } from "lucide-react";

export function NotFound() {
  return (
    <section className="section" style={{ minHeight: "60vh", display: "grid", placeItems: "center" }}>
      <div className="container text-center">
        <div style={{ width: 80, height: 80, borderRadius: "50%", background: "var(--cream)", border: "1px solid var(--line-gold)", display: "grid", placeItems: "center", margin: "0 auto 24px" }}>
          <Compass size={32} style={{ color: "var(--gold)" }} />
        </div>
        <h1 style={{ fontSize: "3rem", marginBottom: 16 }}>404</h1>
        <p style={{ fontSize: "1.1rem", color: "var(--ink-3)", maxWidth: "50ch", margin: "0 auto 32px" }}>
          La página que buscas no existe o ha sido movida. Verifica el enlace o regresa al inicio.
        </p>
        <Link to="/" className="btn btn-primary">Volver al inicio</Link>
      </div>
    </section>
  );
}
