import Image from "next/image";

type AreaCard = {
  titleLine: string;
  titleAccent: string;
  description: string;
  href: string;
  linkLabel: string;
};

const AREAS: AreaCard[] = [
  {
    titleLine: "GESTIONALE",
    titleAccent: "ASSICURATIVO",
    description:
      "Area riservata per preventivi, polizze, rinnovi e gestione delle pratiche assicurative. Accedi in pochi clic ai servizi FIMASS Assicurativo e tieni sotto controllo documenti, richieste e comunicazioni con lo sportello.",
    href: "https://landing-page-fimass.vercel.app/",
    linkLabel: "Gestionale assicurativo",
  },
  {
    titleLine: "GESTIONALE",
    titleAccent: "FINANZIARIO",
    description:
      "Mutui, prestiti personali e finanziamenti in un ambiente dedicato e sicuro. Utilizza gli strumenti FIMASS Finanziario per inoltrare richieste, caricare documentazione e seguire l’evoluzione delle pratiche fino all’esito.",
    href: "https://www.sportelloamicoimpresa.info/area_finanziamenti/login.php",
    linkLabel: "Gestionale finanziario",
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
          {AREAS.map(
            ({
              href,
              description,
              titleLine,
              titleAccent,
              linkLabel,
            }) => (
            <article
              key={href}
              className="flex aspect-[4/3] min-h-0 w-full min-w-0 flex-col items-center overflow-hidden rounded-2xl border border-slate-200/90 bg-white/90 px-4 py-3 text-center shadow-[0_4px_24px_-4px_rgba(15,39,68,0.08),0_1px_3px_rgba(15,39,68,0.04)] md:px-5 md:py-4"
            >
              <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-3 px-0.5 md:gap-4">
                <h2 className="w-full max-w-none text-balance">
                  <span className="block text-xs font-bold uppercase leading-none tracking-[0.18em] text-[var(--fimass-navy)]/80 sm:text-sm md:text-base">
                    {titleLine}
                  </span>
                  <span className="mt-2 block bg-gradient-to-r from-[var(--fimass-navy)] via-[var(--fimass-accent)] to-[var(--fimass-gold)] bg-clip-text text-2xl font-extrabold uppercase tracking-tight text-transparent sm:mt-2.5 sm:text-3xl md:mt-3 md:text-4xl">
                    {titleAccent}
                  </span>
                </h2>
                <p className="w-full max-w-[22rem] text-sm leading-relaxed text-[var(--muted)] sm:max-w-md sm:text-[0.9375rem] md:text-base">
                  {description}
                </p>
              </div>
              <div className="flex shrink-0 justify-center pt-5 md:pt-6">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Accedi — ${linkLabel}`}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--fimass-navy)] px-6 py-2 text-sm font-medium text-white shadow-md outline-none ring-[var(--fimass-accent)] transition-all duration-300 ease-out hover:bg-[var(--fimass-navy-light)] hover:shadow-lg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                >
                  Accedi
                  <span
                    className="inline-block transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden
                  >
                    →
                  </span>
                </a>
              </div>
            </article>
          ),
          )}
        </section>
      </main>

      <footer className="relative z-10 shrink-0 border-t border-slate-200/80 bg-white/50 py-2 text-center text-xs text-[var(--muted)] backdrop-blur-sm md:py-2.5 md:text-sm">
        <p>© FIMASS - Tutti i diritti riservati</p>
      </footer>
    </div>
  );
}
