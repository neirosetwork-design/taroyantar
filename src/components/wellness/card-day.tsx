"use client";

import { deck, dayIndex, pickCard, type TarotCard } from "@/data/deck";
import Image from "next/image";
import { useState } from "react";

// Карта выбирается только по клику на клиенте, поэтому серверный HTML
// всегда показывает рубашку — рассинхрона гидратации нет.
export function CardDay() {
  const [card, setCard] = useState<TarotCard | null>(null);

  function draw() {
    setCard(pickCard(deck.cards, dayIndex()));
  }

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Тонкие шалфейные линии по бокам экрана */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-full max-w-5xl -translate-x-1/2 border-x border-sage-200/70 sm:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-24 h-px bg-sage-200/70"
      />

      <div className="relative mx-auto flex max-w-2xl flex-col items-center px-6 text-center sm:px-10">
        <h1 className="font-serif text-5xl font-medium leading-[1.05] text-bark sm:text-7xl">
          Карта Дня
        </h1>

        <p className="mt-6 max-w-md text-base leading-relaxed text-bark-soft sm:text-lg">
          Замедлитесь, мысленно задайте свой вопрос, сделайте глубокий вдох
          и вытяните метафорическую карту…
        </p>

        {/* Карта: плавный переворот, мягкая рассеянная тень */}
        <div className="relative mt-12 w-52 [perspective:1500px] sm:w-64">
          <div
            className={`relative aspect-[5/8.5] w-full [transform-style:preserve-3d] transition-transform duration-700 ease-out motion-reduce:transition-none ${
              card ? "[transform:rotateY(180deg)]" : ""
            }`}
          >
            {/* Рубашка: лён с растительным узором */}
            <button
              type="button"
              onClick={draw}
              aria-label="Вытянуть карту дня"
              className="absolute inset-0 block w-full cursor-pointer overflow-hidden rounded-2xl border border-sage-300 bg-sand shadow-card outline-none transition-shadow duration-500 hover:shadow-card-lg focus-visible:ring-2 focus-visible:ring-sage-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-milk [backface-visibility:hidden] motion-reduce:transition-none"
            >
              <Image
                src={deck.back}
                alt=""
                fill
                sizes="(min-width: 640px) 256px, 208px"
                className="object-cover"
              />
            </button>

            {/* Лицо карты */}
            {card ? (
              <div className="absolute inset-0 overflow-hidden rounded-2xl border border-sage-300 bg-milk-deep shadow-card-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <Image
                  src={card.image}
                  alt={`Карта дня — ${card.name}`}
                  fill
                  sizes="(min-width: 640px) 256px, 208px"
                  className="object-cover"
                />
              </div>
            ) : null}
          </div>
        </div>

        {/* Экран 2: название и описание под картой */}
        <div aria-live="polite" className="mt-10 min-h-[7rem]">
          {card ? (
            <div className="flex flex-col items-center">
              <h2 className="font-serif text-3xl font-medium text-bark sm:text-4xl">
                {card.name}
              </h2>
              <p className="mt-2 text-[0.7rem] uppercase tracking-[0.28em] text-sage-600">
                {card.keywords.join(" · ")}
              </p>
              <p className="mt-4 max-w-md text-base leading-relaxed text-bark-soft">
                {card.meaning}
              </p>
              <p className="mt-3 max-w-md font-serif text-lg italic leading-relaxed text-sage-700">
                Совет дня: {card.advice}
              </p>
            </div>
          ) : (
            <button
              type="button"
              onClick={draw}
              className="cursor-pointer rounded-full bg-sage-500 px-10 py-4 text-sm font-medium uppercase tracking-[0.18em] text-milk shadow-card transition-all duration-300 hover:bg-sage-600 hover:shadow-card-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-600/70 focus-visible:ring-offset-2 focus-visible:ring-offset-milk active:scale-[0.99] motion-reduce:transition-none"
            >
              Вытянуть карту
            </button>
          )}
        </div>

        {!card ? (
          <p className="mt-2 text-xs leading-relaxed text-bark-soft/70">
            Одна карта на день — она уже знает ваш вопрос
          </p>
        ) : null}
      </div>
    </section>
  );
}
