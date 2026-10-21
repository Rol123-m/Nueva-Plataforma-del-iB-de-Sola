// Convierte una ruta relativa de /public en una URL válida bajo el `base` de Vite
// (funciona en local y en GitHub Pages).
export function publicUrl(path: string): string {
  if (/^(https?:|mailto:|#)/.test(path)) return path;
  return import.meta.env.BASE_URL + path.replace(/^\/+/, "");
}
