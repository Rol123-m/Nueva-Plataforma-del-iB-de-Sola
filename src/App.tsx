import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Asignaturas } from "./pages/Asignaturas";
import { AsignaturaDetalle } from "./pages/AsignaturaDetalle";
import { MallaCurricular } from "./pages/MallaCurricular";
import { Calendario } from "./pages/Calendario";
import { NotFound } from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/asignaturas" element={<Asignaturas />} />
          <Route path="/asignatura/:id" element={<AsignaturaDetalle />} />
          <Route path="/malla" element={<MallaCurricular />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
