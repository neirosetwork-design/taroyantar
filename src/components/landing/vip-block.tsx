import { Check } from "lucide-react";

const included = [
  "Диагностика ситуации и её подлинных причин",
  "Полный расклад по всем значимым сферам",
  "Разбор препятствий и скрытых ресурсов",
  "Понятный план действий и поддержка после сессии",
];

export function VipBlock() {
  return (
    <section
      id="vip"
      className="relative overflow-hidden border-y border-gold/15 bg-ink-soft py-24 sm:py-32"
    >
      {/* Textured dark substrate */}
      <div
        aria-hidden
        className="grain pointer-events-none absolute inset-0 opacity-[0.07]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-gold/[0.08] blur-[130px]"
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-10">
        <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold">
          <span aria-hidden className="h-px w-9 bg-gold/60" />
          VIP-формат · По записи
          <span aria-hidden className="h-px w-9 bg-gold/60" />
        </p>

        <h2 className="mt-6 font-serif text-3xl font-medium leading-tight text-cream sm:text-5xl">
          Полная личная диагностика{" "}
          <em className="italic text-gold-light">и полный расклад</em>
        </h2>

        <div className="mx-auto mt-7 max-w-2xl space-y-5 text-base leading-relaxed text-cream/75 sm:text-lg">
          <p>
            Иногда вопрос слишком важен, чтобы доверить его трём картам. Мы
            встретимся на личной сессии — онлайн или в студии — и неспешно
            разберём вашу историю по слоям: от корня ситуации до скрытых
            ресурсов, о которых вы могли не догадываться.
          </p>
          <p>
            Полный расклад затронет все значимые сферы — любовь, дело, деньги и
            предстоящий выбор, — а завершится не туманным предсказанием, а ясной
            картой маршрута: с окнами возможностей, осторожностями и первым
            шагом, который нужно сделать уже завтра.
          </p>
        </div>

        <ul className="mx-auto mt-11 grid max-w-2xl gap-x-10 gap-y-4 text-left sm:grid-cols-2">
          {included.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                <Check className="h-3.5 w-3.5" aria-hidden />
              </span>
              <span className="text-sm leading-relaxed text-cream/80">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <a
          href="#form"
          className="mt-12 inline-flex items-center justify-center rounded-full bg-gold px-12 py-4 text-sm font-medium uppercase tracking-[0.2em] text-ink shadow-glow transition-all duration-300 hover:bg-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink active:scale-[0.98] motion-reduce:transition-none"
        >
          Записаться
        </a>

        <p className="mt-6 text-xs uppercase tracking-[0.22em] text-cream-dim">
          Мест в неделе немного — я веду небольшую личную практику
        </p>
      </div>
    </section>
  );
}
