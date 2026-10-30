import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-5xl items-center justify-start px-6 pt-7 sm:px-10">
        <Link
          href="/"
          className="font-serif text-xl tracking-[0.08em] text-bark transition-opacity duration-300 hover:opacity-70 motion-reduce:transition-none sm:text-2xl"
        >
          Студия Янтарь
        </Link>
      </div>
    </header>
  );
}
