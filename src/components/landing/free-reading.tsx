import Image from "next/image";
import { Clock3, Mic, ShieldCheck } from "lucide-react";

const positions = [
  {
    numeral: "I",
    title: "Что происходит",
    text: "истинное положение дел — без иллюзий и самообмана",
  },
  {
    numeral: "II",
    title: "Что мешает",
    text: "скрытое препятствие, которое держит ситуацию на месте",
  },
  {
    numeral: "III",
    title: "Куда ведёт",
    text: "куда движется история, если оставить всё как есть",
  },
];

const benefits = [
  { icon: Mic, title: "Голосовой разбор", text: "живым голосом, а не сухим текстом" },
  { icon: Clock3, title: "Ответ за 24 часа", text: "даже если вопрос придёт ночью" },
  { icon: ShieldCheck, title: "Конфиденциально", text: "вопросы не покидают переписку" },
];

export function FreeReading() {
  return (
    <section id="rasklad" className="relative overflow-hidden py-24 sm:py-32">
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 sm:px-10 lg:grid-cols-[6fr_5fr] lg:gap-20">
        {/* Close-up photo */}
        <div className="relative order-2 mx-auto w-full max-w-md lg:order-1 lg:max-w-none">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-gold/30 shadow-glow-sm">
            <Image
              src="/images/tarot-reader-closeup.webp"
              alt="Таролог за столом с разложенными картами, тёплый свет свечей"
              fill
              sizes="(min-width: 1024px) 520px, (min-width: 640px) 448px, calc(100vw - 48px)"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"
            />
          </div>
          <div
            aria-hidden
            className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl border border-gold/20"
          />
        </div>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold">
            <span aria-hidden className="h-px w-9 bg-gold/60" />
            Бесплатно · Без обязательств
          </p>

          <h2 className="mt-6 font-serif text-3xl font-medium leading-tight text-cream sm:text-4xl">
            Конфиденциальный разбор{" "}
            <em className="italic text-gold-light">на три карты</em>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/75">
            Опишите свою ситуацию — я разложу её на три карты и запишу голосовой
            ответ. Никакой мистификации и давления: только честная картина того,
            что происходит, и тихий ориентир, как из неё выйти.
          </p>

          {/* Three positions */}
          <ul className="mt-9 space-y-5">
            {positions.map((p) => (
              <li key={p.numeral} className="flex items-start gap-5">
                <span
                  aria-hidden
                  className="w-10 shrink-0 border-r border-gold/30 pr-4 text-right font-serif text-xl italic leading-7 text-gold"
                >
                  {p.numeral}
                </span>
                <span>
                  <span className="font-serif text-lg text-cream">
                    {p.title}
                  </span>
                  <span className="mt-0.5 block text-sm leading-relaxed text-cream/65">
                    {p.text}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          {/* Benefits */}
          <ul className="mt-10 grid gap-3 sm:grid-cols-3">
            {benefits.map((b) => (
              <li
                key={b.title}
                className="rounded-2xl border border-gold/20 bg-ink-card/60 px-4 py-5 text-center backdrop-blur-sm"
              >
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                  <b.icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="mt-3 block text-sm font-medium text-cream">
                  {b.title}
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-cream/60">
                  {b.text}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="#form"
            className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-gold-light underline decoration-gold/40 underline-offset-8 transition-colors duration-300 hover:text-gold hover:decoration-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded-sm"
          >
            Задать вопрос
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
