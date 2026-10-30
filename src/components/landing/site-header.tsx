export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center px-6 py-7 sm:px-10">
        <a
          href="#top"
          className="rounded-sm font-serif text-lg uppercase tracking-[0.3em] text-gold-light transition-colors duration-300 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          Студия&nbsp;Янтарь
        </a>
      </div>
    </header>
  );
}
