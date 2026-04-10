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
    <div className="relative flex h-dvh min-h-0 flex-col overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(45,106,143,0.12),transparent),linear-gradient(180deg,#f4f6f9_0%,#eef1f6_100%)]"
        aria-hidden
      />

      <main className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center gap-2 px-5 py-2 md:gap-3 md:px-10 md:py-3">
        <header className="flex w-full shrink-0 flex-col items-center text-center">
          <div className="flex w-full justify-center leading-none">
            <Image
              src="/fimass-logo.svg"
              alt="FIMASS"
              width={1808}
              height={713}
              priority
              className="block h-auto w-full max-w-[22rem] object-contain md:max-w-[30rem] lg:max-w-[34rem]"
              sizes="(max-width: 768px) 22rem, (max-width: 1024px) 30rem, 34rem"
            />
          </div>
          <h1 className="mt-1.5 text-lg font-semibold tracking-tight text-[var(--fimass-navy)] md:mt-2 md:text-2xl lg:text-3xl">
            Benvenuto in FIMASS
          </h1>
          <p className="mt-0.5 max-w-xl text-sm leading-snug text-[var(--muted)] md:mt-1 md:text-[0.9375rem]">
            Seleziona l&apos;area di accesso di tuo interesse
          </p>
        </header>

        <section
          className="grid w-full max-w-4xl shrink-0 gap-3 md:grid-cols-2 md:gap-4"
          aria-label="Aree di accesso"
        >
          {AREAS.map(({ href, description, logoSrc, logoAlt }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-2xl border border-slate-200/90 bg-white/90 px-5 py-4 text-center shadow-[0_4px_24px_-4px_rgba(15,39,68,0.08),0_1px_3px_rgba(15,39,68,0.04)] outline-none ring-[var(--fimass-accent)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-slate-200 hover:shadow-[0_12px_40px_-8px_rgba(15,39,68,0.14),0_4px_12px_-2px_rgba(15,39,68,0.06)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] md:px-6 md:py-5"
            >
              <div className="mb-2 flex w-full justify-center bg-transparent md:mb-3">
                <Image
                  src={logoSrc}
                  alt={logoAlt}
                  width={2000}
                  height={604}
                  className="h-auto max-h-[4.75rem] w-full max-w-[20rem] object-contain object-center md:max-h-[5.25rem] md:max-w-[22rem]"
                  sizes="(max-width: 768px) 20rem, 22rem"
                />
              </div>
              <p className="flex-1 text-sm leading-relaxed text-[var(--muted)] md:text-[0.9375rem]">
                {description}
              </p>
              <span className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--fimass-navy)] px-6 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-300 ease-out group-hover:bg-[var(--fimass-navy-light)] group-hover:shadow-lg md:mt-4">
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

      <footer className="relative z-10 shrink-0 border-t border-slate-200/80 bg-white/50 py-2 text-center text-xs text-[var(--muted)] backdrop-blur-sm md:py-2.5 md:text-sm">
        <p>© FIMASS - Tutti i diritti riservati</p>
      </footer>
    </div>
  );
}
