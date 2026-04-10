import Image from "next/image";

type AreaCard = {
  description: string;
  href: string;
  logoSrc: string;
  logoAlt: string;
};

const AREAS: AreaCard[] = [
  {
    description:
      "Accedi al gestionale per i servizi assicurativi per richiedere preventivi e polizze assicurative",
    href: "https://landing-page-fimass.vercel.app/",
    logoSrc: "/fimass-assicurativo.svg",
    logoAlt: "FIMASS Assicurativo",
  },
  {
    description:
      "Accedi al gestionale per richiedere mutui, prestiti personali e finanziamenti",
    href: "https://www.sportelloamicoimpresa.info/area_finanziamenti/login.php",
    logoSrc: "/fimass-finanziario.svg",
    logoAlt: "FIMASS Finanziario",
  },
];

export default function Home() {
  return (
    <div className="relative flex h-dvh flex-col overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(45,106,143,0.12),transparent),linear-gradient(180deg,#f4f6f9_0%,#eef1f6_100%)]"
        aria-hidden
      />

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center gap-4 px-5 py-4 md:gap-5 md:px-10 md:py-5">
        <header className="flex w-full flex-col items-center text-center">
          <Image
            src="/fimass-logo.svg"
            alt="FIMASS"
            width={1808}
            height={713}
            priority
            className="mb-1 h-auto w-full max-w-[28rem] object-contain md:mb-2 md:max-w-[36rem] lg:max-w-[42rem]"
            sizes="(max-width: 768px) 28rem, (max-width: 1024px) 36rem, 42rem"
          />
          <h1 className="text-xl font-semibold tracking-tight text-[var(--fimass-navy)] md:text-3xl lg:text-4xl">
            Benvenuto in FIMASS
          </h1>
          <p className="mt-1 max-w-xl text-sm leading-relaxed text-[var(--muted)] md:mt-2 md:text-base">
            Seleziona l&apos;area di accesso di tuo interesse
          </p>
        </header>

        <section
          className="grid w-full max-w-4xl gap-4 md:grid-cols-2 md:gap-6"
          aria-label="Aree di accesso"
        >
          {AREAS.map(({ href, description, logoSrc, logoAlt }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-2xl border border-slate-200/90 bg-white/90 px-6 py-5 text-center shadow-[0_4px_24px_-4px_rgba(15,39,68,0.08),0_1px_3px_rgba(15,39,68,0.04)] outline-none ring-[var(--fimass-accent)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-slate-200 hover:shadow-[0_12px_40px_-8px_rgba(15,39,68,0.14),0_4px_12px_-2px_rgba(15,39,68,0.06)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] md:px-7 md:py-6"
            >
              <div className="relative mb-3 h-20 w-full max-w-[18rem] md:mb-4 md:h-24 md:max-w-[22rem]">
                <Image
                  src={logoSrc}
                  alt={logoAlt}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 18rem, 22rem"
                />
              </div>
              <p className="flex-1 text-sm leading-relaxed text-[var(--muted)] md:text-[0.9375rem]">
                {description}
              </p>
              <span className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--fimass-navy)] px-6 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-300 ease-out group-hover:bg-[var(--fimass-navy-light)] group-hover:shadow-lg">
                Accedi
                <span
                  className="inline-block transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden
                >
                  →
                </span>
              </span>
            </a>
          ))}
        </section>
      </main>

      <footer className="relative z-10 border-t border-slate-200/80 bg-white/50 py-3 text-center text-xs text-[var(--muted)] backdrop-blur-sm md:py-4 md:text-sm">
        <p>© FIMASS - Tutti i diritti riservati</p>
      </footer>
    </div>
  );
}
