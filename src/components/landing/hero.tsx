import Image from "next/image";

import { deck } from "@/data/deck";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Ambient candlelight glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]"
      />
      <div
        aria-hidden
        className="grain pointer-events-none absolute inset-0 opacity-[0.05]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 pb-24 pt-32 sm:px-10 lg:grid-cols-[5fr_6fr] lg:gap-20 lg:pb-32 lg:pt-44">
        {/* Portrait in an arched frame */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden
            className="absolute -inset-3 rounded-b-3xl rounded-t-[11rem] border border-gold/25"
          />
          <div className="relative aspect-[3/4] overflow-hidden rounded-b-2xl rounded-t-[10rem] border border-gold/40 shadow-glow">
            <Image
              src="/images/tarot-reader-portrait.webp"
              alt="Таролог Студии «Янтарь» за столом при свечах"
              fill
              priority
              sizes="(min-width: 1024px) 440px, (min-width: 640px) 448px, calc(100vw - 48px)"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"
            />
          </div>
        </div>

        {/* Copy */}
        <div className="text-center lg:text-left">
          <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold">
            <span aria-hidden className="h-px w-9 bg-gold/60" />
            Таролог · Колода «{deck.name}»
          </p>

          <h1 className="mt-6 font-serif text-4xl font-medium leading-[1.12] text-cream sm:text-5xl lg:text-[3.35rem]">
            Там, где заканчиваются слова, начинают говорить{" "}
            <em className="italic text-gold-light">карты</em>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg lg:mx-0">
            Мои расклады — не гадание на удачу, а внимательный разговор с тем,
            что вы уже чувствуете, но пока не можете сформулировать. Карты
            показывают, где вы сейчас, что мешает двигаться дальше и куда на
            самом деле ведёт выбранная дорога.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#form"
              className="inline-flex items-center justify-center rounded-full bg-gold px-9 py-4 text-sm font-medium uppercase tracking-[0.18em] text-ink shadow-glow-sm transition-all duration-300 hover:bg-gold-light hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink active:scale-[0.98] motion-reduce:transition-none"
            >
              Задать вопрос
            </a>
            <a
              href="#rasklad"
              className="inline-flex items-center justify-center rounded-full border border-gold/40 px-9 py-4 text-sm uppercase tracking-[0.18em] text-gold-light transition-colors duration-300 hover:border-gold hover:bg-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink motion-reduce:transition-none"
            >
              Бесплатный расклад
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
