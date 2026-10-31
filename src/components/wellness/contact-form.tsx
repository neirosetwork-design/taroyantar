import { vkMessages } from "@/data/deck";

const questions = [
  "Как вас зовут?",
  "Что вас беспокоит или о чем хотите спросить?",
  "Ваши контакты (где удобно получить разбор)",
];

export function ContactForm() {
  return (
    <section id="rasclad-form" className="scroll-mt-16 py-16 sm:py-24">
      <div className="mx-auto max-w-xl px-6 sm:px-10">
        <div className="rounded-3xl border border-sage-200 bg-milk-deep/70 p-7 sm:p-10">
          <h2 className="text-center font-serif text-3xl font-medium leading-tight text-bark sm:text-4xl">
            Поделиться с Натальей
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-center text-sm leading-relaxed text-bark-soft">
            Напишите пару строк о себе — я вернусь с разбором ситуации в течение
            24 часов.
          </p>

          <ol className="mx-auto mt-8 max-w-sm space-y-3.5">
            {questions.map((question, index) => (
              <li key={question} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-sage-300 bg-milk text-[0.7rem] font-medium text-sage-700">
                  {index + 1}
                </span>
                <span className="text-[0.95rem] leading-relaxed text-bark">
                  {question}
                </span>
              </li>
            ))}
          </ol>

          <a
            href={vkMessages}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex w-full items-center justify-center rounded-full bg-sage-600 px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-milk shadow-card transition-all duration-300 hover:bg-sage-700 hover:shadow-card-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-600/70 focus-visible:ring-offset-2 focus-visible:ring-offset-milk active:scale-[0.99] motion-reduce:transition-none"
          >
            Напишите мне
          </a>

          <p className="mt-4 text-center text-xs leading-relaxed text-bark-soft/80">
            Бесплатный расклад доступен для новых клиентов при первом обращении.
          </p>
        </div>
      </div>
    </section>
  );
}
