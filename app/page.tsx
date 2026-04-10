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
    <div className="relative flex min-h-full flex-1 flex-col">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(45,106,143,0.12),transparent),linear-gradient(180deg,#f4f6f9_0%,#eef1f6_100%)]"
        aria-hidden
      />

      <main className="relative z-10 flex flex-1 flex-col px-5 pb-10 pt-6 md:px-10 md:pt-10">
        <header className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
          <div className="relative mb-1 h-[16rem] w-full max-w-[min(100%,64rem)] md:mb-2 md:h-[28rem] md:max-w-[min(100%,76rem)]">
            <Image
              src="/fimass-logo.svg"
              alt="FIMASS"
              fill
              className="object-contain object-center"
              priority
              sizes="(max-width: 768px) min(100vw, 1024px), 1216px"
            />
          </div>
          <h1 className="text-[1.65rem] font-semibold tracking-tight text-[var(--fimass-navy)] md:text-4xl md:tracking-tight">
            Benvenuto in FIMASS
          </h1>
          <p className="mt-2 max-w-xl text-base leading-relaxed text-[var(--muted)] md:mt-3 md:text-lg">
            Seleziona l’area di accesso di tuo interesse
          </p>
        </header>

        <section
          className="mx-auto mt-8 grid w-full max-w-4xl flex-1 gap-6 md:mt-10 md:grid-cols-2 md:gap-8 md:items-stretch"
          aria-label="Aree di accesso"
        >
          {AREAS.map(({ href, description, logoSrc, logoAlt }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-2xl border border-slate-200/90 bg-white/90 p-7 text-center shadow-[0_4px_24px_-4px_rgba(15,39,68,0.08),0_1px_3px_rgba(15,39,68,0.04)] outline-none ring-[var(--fimass-accent)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-slate-200 hover:shadow-[0_12px_40px_-8px_rgba(15,39,68,0.14),0_4px_12px_-2px_rgba(15,39,68,0.06)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] md:p-8"
            >
              <div className="mb-6 flex w-full justify-center md:mb-7">
                <div className="h-36 w-full max-w-[min(100%,24rem)] rounded-xl p-4 md:h-44 md:max-w-[28rem] md:p-5">
                  <div className="relative h-full w-full">
                    <Image
                      src={logoSrc}
                      alt={logoAlt}
                      fill
                      className="object-contain object-center"
                      sizes="(max-width: 768px) 352px, 416px"
                    />
                  </div>
                </div>
              </div>
              <p className="flex-1 text-sm leading-relaxed text-[var(--muted)] md:text-[0.9375rem]">
                {description}
              </p>
              <span className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--fimass-navy)] px-6 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 ease-out group-hover:bg-[var(--fimass-navy-light)] group-hover:shadow-lg">
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

      <footer className="relative z-10 mt-auto border-t border-slate-200/80 bg-white/50 py-6 text-center text-xs text-[var(--muted)] backdrop-blur-sm md:text-sm">
        <p>© FIMASS - Tutti i diritti riservati</p>
      </footer>
    </div>
  );
}
