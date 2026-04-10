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

      <main className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center gap-6 px-5 py-1 md:gap-8 md:px-10 md:py-2">
        <header className="flex w-full shrink-0 flex-col items-center text-center">
          <Image
            src="/fimass-hero.svg"
            alt="FIMASS — by Sportello Amico, servizi per la famiglia e l'azienda"
            width={1024}
            height={365}
            priority
            className="block h-auto w-full max-w-[min(100%,22rem)] object-contain object-center sm:max-w-[26rem] md:max-w-[32rem] lg:max-w-[36rem]"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 26rem, (max-width: 1024px) 32rem, 36rem"
          />
          <h1 className="mt-1 text-lg font-semibold tracking-tight text-[var(--fimass-navy)] md:mt-1.5 md:text-2xl lg:text-3xl">
            Benvenuto in FIMASS
          </h1>
          <p className="mt-0.5 max-w-xl text-sm leading-snug text-[var(--muted)] md:text-[0.9375rem]">
            Seleziona l&apos;area di accesso di tuo interesse
          </p>
        </header>

        <section
          className="mx-auto grid w-full max-w-[min(100%,38rem)] shrink-0 gap-3 sm:max-w-4xl md:grid-cols-2 md:gap-4"
          aria-label="Aree di accesso"
        >
          {AREAS.map(({ href, description, logoSrc, logoAlt }) => (
            <article
              key={href}
              className="flex aspect-[4/3] min-h-0 w-full min-w-0 flex-col items-center overflow-hidden rounded-2xl border border-slate-200/90 bg-white/90 px-4 py-3 text-center shadow-[0_4px_24px_-4px_rgba(15,39,68,0.08),0_1px_3px_rgba(15,39,68,0.04)] md:px-5 md:py-4"
            >
              <div className="flex w-full shrink-0 justify-center bg-transparent">
                <Image
                  src={logoSrc}
                  alt={logoAlt}
                  width={2000}
                  height={604}
                  className="h-auto max-h-[4.75rem] w-full max-w-[min(100%,19rem)] object-contain object-center md:max-h-[5.75rem] md:max-w-[22rem]"
                  sizes="(max-width: 768px) 19rem, 22rem"
                />
              </div>
              <p className="flex min-h-0 w-full flex-1 items-center justify-center px-0.5 text-sm leading-relaxed text-[var(--muted)] md:text-[0.9375rem]">
                {description}
              </p>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Accedi — ${logoAlt}`}
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[var(--fimass-navy)] px-6 py-2 text-sm font-medium text-white shadow-md outline-none ring-[var(--fimass-accent)] transition-all duration-300 ease-out hover:bg-[var(--fimass-navy-light)] hover:shadow-lg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
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

      <footer className="relative z-10 shrink-0 border-t border-slate-200/80 bg-white/50 py-2 text-center text-xs text-[var(--muted)] backdrop-blur-sm md:py-2.5 md:text-sm">
        <p>© FIMASS - Tutti i diritti riservati</p>
      </footer>
    </div>
  );
}
