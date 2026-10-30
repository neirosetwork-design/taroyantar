"use client";

import { deck, pickCard } from "@/data/deck";
import Image from "next/image";
import { useState, useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

// Индекс дня: при гидратации React берёт серверное значение (0), после
// монтирования — реальное, поэтому статичный HTML совпадает с первым рендером.
function useDayIndex() {
  return useSyncExternalStore(
    emptySubscribe,
    () => Math.floor(Date.now() / 86_400_000),
    () => 0
  );
}

export function CardOfDay() {
  const [open, setOpen] = useState(false);
  const card = pickCard(deck.cards, useDayIndex());

  return (
    <section id="karta-dnya" className="relative overflow-hidden py-24 sm:py-32">
      {/* Glow behind the card */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.07] blur-[120px]"
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-10">
        <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold">
          <span aria-hidden className="h-px w-9 bg-gold/60" />
          Ежедневное послание
          <span aria-hidden className="h-px w-9 bg-gold/60" />
        </p>

        <h2 className="mt-6 font-serif text-3xl font-medium leading-tight text-cream sm:text-5xl">
          Карта дня: Таро{" "}
          <span className="italic text-gold-light">«{deck.name}»</span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/70">
          Задумайте вопрос — и переверните карту. Янтарная вязь на рубашке
          хранит ответ для того, кто не боится его услышать.
        </p>

        {/* Flip widget */}
        <div className="group relative mx-auto mt-14 w-56 [perspective:1400px] sm:w-72">
          <div className="transition-transform duration-500 ease-out group-hover:-translate-y-2 motion-reduce:transition-none">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-pressed={open}
              aria-label={open ? "Скрыть карту дня" : "Открыть карту дня"}
              className={`relative block aspect-[5/8.5] w-full cursor-pointer [transform-style:preserve-3d] transition-transform duration-700 ease-out focus-visible:outline-none motion-reduce:transition-none ${
                open ? "[transform:rotateY(180deg)]" : ""
              }`}
            >
              {/* Card back with amber filigree */}
              <span className="absolute inset-0 overflow-hidden rounded-2xl border border-gold/40 shadow-glow-sm [backface-visibility:hidden]">
                <Image
                  src={deck.back}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 288px, 224px"
                  className="object-cover"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-2xl transition-shadow duration-500 group-hover:shadow-glow"
                />
              </span>

              {/* Card face */}
              <span className="absolute inset-0 overflow-hidden rounded-2xl border border-gold/50 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                {card ? (
                  <>
                    <Image
                      src={card.image}
                      alt={`Карта дня — ${card.name}`}
                      fill
                      sizes="(min-width: 640px) 288px, 224px"
                      className="object-cover"
                    />
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/35 to-transparent"
                    />
                    <span className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-5">
                      <span className="font-serif text-2xl text-gold-light">
                        {card.name}
                      </span>
                      <span className="text-[0.65rem] uppercase tracking-[0.28em] text-cream/80">
                        {card.keywords.join(" · ")}
                      </span>
                      <span className="mt-1 text-xs leading-relaxed text-cream/70">
                        {card.meaning}
                      </span>
                    </span>
                  </>
                ) : null}
              </span>
            </button>
          </div>
        </div>

        <p
          aria-live="polite"
          className="mt-9 text-xs uppercase tracking-[0.25em] text-cream-dim"
        >
          {open && card
            ? `Карта «${card.name}» открыта — пусть день сложится в вашу пользу`
            : "Нажмите, чтобы открыть карту"}
        </p>
      </div>
    </section>
  );
}
