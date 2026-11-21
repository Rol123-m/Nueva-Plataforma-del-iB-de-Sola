// Construye rutas para archivos publicados desde /public.
// Vite define BASE_URL como "/" en local y como la subruta del repositorio
// en GitHub Pages. Se evita duplicar esa base y se codifica cada segmento.
export function publicUrl(path: string): string {
  if (/^(https?:|mailto:|tel:|#)/i.test(path)) return path;

  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const cleanPath = path.replace(/\\/g, "/").replace(/^\/+/, "");

  if (!cleanPath) return normalizedBase;
  if (cleanPath.startsWith(normalizedBase.replace(/^\/+/, ""))) {
    return `/${cleanPath}`;
  }

  const encodedPath = cleanPath
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");

  return `${normalizedBase}${encodedPath}`;
}
