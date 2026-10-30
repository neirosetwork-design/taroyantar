import { vkCommunity } from "@/data/deck";

export function SiteFooter() {
  return (
    <footer className="border-t border-sage-200 bg-milk">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-bark-soft sm:flex-row sm:px-10">
        <p>Студия Янтарь</p>
        <a
          href={vkCommunity}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-300 hover:text-bark motion-reduce:transition-none"
        >
          Сообщество ВКонтакте
        </a>
      </div>
    </footer>
  );
}
