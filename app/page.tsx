import Image from "next/image";
import type { ComponentType } from "react";

type AreaCard = {
  title: string;
  description: string;
  href: string;
  Icon: ComponentType<{ className?: string }>;
};

const AREAS: AreaCard[] = [
  {
    title: "FIMASS Assicurativo",
    description: "Accedi all’area dedicata ai servizi assicurativi",
    href: "https://landing-page-fimass.vercel.app/",
    Icon: IconShield,
  },
  {
    title: "FIMASS Finanziario",
    description: "Accedi all’area dedicata ai servizi finanziari",
    href: "https://www.sportelloamicoimpresa.info/area_finanziamenti/login.php",
    Icon: IconFinance,
  },
];

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(45,106,143,0.12),transparent),linear-gradient(180deg,#f4f6f9_0%,#eef1f6_100%)]"
        aria-hidden
      />

      <main className="relative z-10 flex flex-1 flex-col px-5 pb-10 pt-12 md:px-10 md:pt-16">
        <header className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <div className="relative mb-10 h-[4.5rem] w-full max-w-[min(100%,28rem)] md:mb-12 md:h-[6.5rem] md:max-w-[34rem]">
            <Image
              src="/fimass-logo.svg"
              alt="FIMASS"
              fill
              className="object-contain object-center"
              priority
              sizes="(max-width: 768px) 448px, 544px"
            />
          </div>
          <h1 className="text-[1.65rem] font-semibold tracking-tight text-[var(--fimass-navy)] md:text-4xl md:tracking-tight">
            Benvenuto in FIMASS
          </h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-[var(--muted)] md:mt-4 md:text-lg">
            Seleziona l’area di accesso di tuo interesse
          </p>
        </header>

        <section
          className="mx-auto mt-12 grid w-full max-w-4xl flex-1 gap-6 md:mt-16 md:grid-cols-2 md:gap-8 md:items-stretch"
          aria-label="Aree di accesso"
        >
          {AREAS.map(({ href, title, description, Icon }) => (
            <article
              key={href}
              className="flex flex-col items-center rounded-2xl border border-slate-200/90 bg-white/90 p-7 text-center shadow-[0_4px_24px_-4px_rgba(15,39,68,0.08),0_1px_3px_rgba(15,39,68,0.04)] md:p-8"
            >
              <span
                className="mb-5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-[var(--fimass-accent)] md:mb-6"
                aria-hidden
              >
                <Icon className="h-5 w-5" />
              </span>
              <h2 className="text-lg font-semibold tracking-tight text-[var(--fimass-navy)] md:text-xl">
                {title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)] md:text-[0.9375rem]">
                {description}
              </p>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--fimass-navy)] px-6 py-3 text-sm font-medium text-white shadow-md outline-none ring-[var(--fimass-accent)] transition-all duration-300 ease-out hover:bg-[var(--fimass-navy-light)] hover:shadow-lg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
              >
                Accedi
                <span
                  className="inline-block transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden
                >
                  →
                </span>
              </a>
            </article>
          ))}
        </section>
      </main>

      <footer className="relative z-10 mt-auto border-t border-slate-200/80 bg-white/50 py-6 text-center text-xs text-[var(--muted)] backdrop-blur-sm md:text-sm">
        <p>© FIMASS - Tutti i diritti riservati</p>
      </footer>
    </div>
  );
}

function IconShield({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    </svg>
  );
}

function IconFinance({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
      />
    </svg>
  );
}
