"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Loader2, Sparkles } from "lucide-react";

type Status = "idle" | "sending" | "sent";

type FieldErrors = {
  name?: string;
  question?: string;
  contact?: string;
};

const inputClass =
  "w-full rounded-xl border border-gold/30 bg-ink/70 px-4 py-3.5 text-[0.95rem] text-cream outline-none transition-colors duration-300 placeholder:text-cream/35 focus:border-gold/70 focus:ring-1 focus:ring-gold/40 motion-reduce:transition-none";

const labelClass =
  "mb-2 block text-xs uppercase tracking-[0.22em] text-gold";

const errorClass = "mt-1.5 text-xs text-red-300/90";

export function LeadFormSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const question = String(data.get("question") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();

    const next: FieldErrors = {};
    if (!name) next.name = "Подскажите, как к вам обращаться";
    if (!question) next.question = "Опишите хотя бы коротко, что вас волнует";
    if (!contact) next.contact = "Оставьте контакт, чтобы передать вам расклад";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // Пока заявки принимаются фронтендом: имитируем отправку и показываем
    // подтверждение. Точка интеграции с бэкендом — здесь.
    setStatus("sending");
    timerRef.current = setTimeout(() => setStatus("sent"), 1100);
  }

  function resetForm() {
    formRef.current?.reset();
    setErrors({});
    setStatus("idle");
  }

  return (
    <section id="form" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[26rem] w-[40rem] -translate-x-1/2 rounded-full bg-gold/[0.06] blur-[130px]"
      />

      <div className="relative mx-auto max-w-xl px-6 sm:px-10">
        <div className="rounded-3xl border border-gold/25 bg-ink-card/70 p-7 shadow-glow-sm backdrop-blur-sm sm:p-10">
          {status === "sent" ? (
            <div className="flex flex-col items-center py-8 text-center" role="status">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 bg-gold/10 text-gold shadow-glow-sm">
                <Check className="h-7 w-7" aria-hidden />
              </span>
              <h3 className="mt-6 font-serif text-2xl text-cream">
                Вопрос принят
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/70">
                Я отвечу там, где вам удобно, — в течение 24 часов. А пока
                загляните к «Карте дня» выше: возможно, она уже знает ваш
                вопрос.
              </p>
              <button
                type="button"
                onClick={resetForm}
                className="mt-8 rounded-full border border-gold/40 px-7 py-3 text-xs uppercase tracking-[0.2em] text-gold-light transition-colors duration-300 hover:border-gold hover:bg-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink motion-reduce:transition-none"
              >
                Задать ещё один вопрос
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-center font-serif text-3xl font-medium leading-tight text-cream sm:text-4xl">
                Получить бесплатный{" "}
                <em className="italic text-gold-light">расклад</em>
              </h2>
              <p className="mx-auto mt-4 max-w-sm text-center text-sm leading-relaxed text-cream/70">
                Опишите ситуацию своими словами — остальное я возьму на себя.
              </p>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                className="mt-9 space-y-6"
              >
                <div>
                  <label htmlFor="lead-name" className={labelClass}>
                    Имя
                  </label>
                  <input
                    id="lead-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Как к вам обращаться"
                    aria-invalid={Boolean(errors.name)}
                    className={inputClass}
                  />
                  {errors.name ? (
                    <p className={errorClass} role="alert">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="lead-question" className={labelClass}>
                    Вопрос
                  </label>
                  <textarea
                    id="lead-question"
                    name="question"
                    rows={4}
                    placeholder="Что вас беспокоит или о чём хотите спросить"
                    aria-invalid={Boolean(errors.question)}
                    className={`${inputClass} resize-none`}
                  />
                  {errors.question ? (
                    <p className={errorClass} role="alert">
                      {errors.question}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="lead-contact" className={labelClass}>
                    Контакты
                  </label>
                  <input
                    id="lead-contact"
                    name="contact"
                    type="text"
                    autoComplete="email"
                    placeholder="Ник, номер телефона или e-mail"
                    aria-invalid={Boolean(errors.contact)}
                    className={inputClass}
                  />
                  <p className="mt-2 text-xs leading-relaxed text-cream/45">
                    где удобно получить расклад — Telegram, WhatsApp или e-mail
                  </p>
                  {errors.contact ? (
                    <p className={errorClass} role="alert">
                      {errors.contact}
                    </p>
                  ) : null}
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-ink shadow-glow-sm transition-all duration-300 hover:bg-gold-light hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink active:scale-[0.99] disabled:cursor-wait disabled:opacity-70 motion-reduce:transition-none"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2
                        className="h-4 w-4 animate-spin"
                        aria-hidden
                      />
                      Карты перемешиваются…
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" aria-hidden />
                      Получить бесплатный расклад
                    </>
                  )}
                </button>

                <p className="text-center text-xs leading-relaxed text-cream/45">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных
                  данных. Всё, что вы напишете, останется между нами.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
