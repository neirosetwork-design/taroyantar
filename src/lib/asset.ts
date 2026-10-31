// Префикс нужен только для GitHub Pages: проект публикуется по адресу
// https://<user>.github.io/taroyantar/, поэтому пути к файлам из public/
// должны начинаться с /taroyantar. При обычном запуске префикс пустой.

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${basePath}${path}`;
}
