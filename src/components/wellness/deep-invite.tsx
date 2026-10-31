import { asset } from "@/lib/asset";
import { vkMessages } from "@/data/deck";
import Image from "next/image";

export function DeepInvite() {
  return (
    <section className="relative overflow-hidden bg-sage-900 py-24 text-cream sm:py-32">
      {/* Линейный фон: переплетённые руки и нежный цветок */}
      <div aria-hidden className="absolute inset-0">
        <Image
          src={asset("/images/hands-flower-line.webp")}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(49,59,44,0.92)_35%,rgba(49,59,44,0.35)_75%,rgba(59,51,39,0.55))]" />
      </div>

      <div className="relative mx-auto max-w-2xl px-6 sm:px-10">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] text-sage-300">
          Личная встреча
        </p>
        <h2 className="mt-6 font-serif text-3xl font-medium leading-snug sm:text-5xl sm:leading-tight">
          Приглашаю вас на личную бережную диагностику вашей жизни и состояния
        </h2>
        <div className="mt-7 space-y-4 text-base leading-relaxed text-cream/85 sm:text-lg">
          <p>
            Расклады отлично подсвечивают текущее настроение и помогают
            замедлиться. Но они не знают контекста вашей жизни, ваших скрытых
            страхов, надежд и истинных масштабов вашей ситуации.
          </p>
          <p>
            На персональной сессии мы бережно разберем именно ваш запрос. Без
            мистики и готовых шаблонов — только глубокий психологический анализ,
            поиск внутренних ресурсов и составление пошаговой карты ваших
            действий. Это безопасное, поддерживающее пространство, созданное
            специально для вас.
          </p>
          <p className="text-cream">
            • Формат: Онлайн-сессия (60 минут) + индивидуальный PDF-гайд по
            итогам встречи с самыми важными ответами.
          </p>
        </div>
        <a
          href={vkMessages}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center rounded-full border border-cream/40 px-9 py-4 text-sm font-medium uppercase tracking-[0.18em] text-cream transition-all duration-300 hover:border-cream hover:bg-cream/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/60 focus-visible:ring-offset-2 focus-visible:ring-offset-sage-900 motion-reduce:transition-none"
        >
          Написать Наталье
        </a>
      </div>
    </section>
  );
}
