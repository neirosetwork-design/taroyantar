export function SpreadBanner() {
  return (
    <section className="relative pb-6 pt-10 sm:pb-10">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <div className="rounded-3xl border border-sage-300 bg-sand px-7 py-12 text-center sm:px-14 sm:py-16">
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-sage-600">
            Расклад
          </p>
          <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-bark sm:text-5xl">
            Разум • Тело • Душа
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-bark-soft sm:text-lg">
            Хотите увидеть картину шире?
            <br />
            Исследуйте свое состояние чуть глубже
          </p>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-bark-soft/80">
            Одной карты бывает достаточно для короткого фокуса, но расклад на
            три карты поможет синхронизировать мысли, чувства и действия.
            <br />
            <span className="font-medium text-sage-700">
              Это бесплатно и конфиденциально.
            </span>
          </p>
          <a
            href="#rasclad-form"
            className="mt-9 inline-flex items-center justify-center rounded-full bg-sage-600 px-9 py-4 text-sm font-medium uppercase tracking-[0.18em] text-milk shadow-card transition-all duration-300 hover:bg-sage-700 hover:shadow-card-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-600/70 focus-visible:ring-offset-2 focus-visible:ring-offset-sand active:scale-[0.99] motion-reduce:transition-none"
          >
            Получить расклад
          </a>
        </div>
      </div>
    </section>
  );
}
