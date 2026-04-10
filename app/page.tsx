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
    titleLine: "PORTALE FIMASS",
    titleAccent: "Assicurativo",
    description:
      "Preventivi, polizze e pratiche assicurative in un’unica area riservata.",
    href: "https://landing-page-fimass.vercel.app/",
    linkLabel: "PORTALE FIMASS Assicurativo",
  },
  {
    titleLine: "PORTALE FIMASS",
    titleAccent: "Finanziario",
    description:
      "Mutui, prestiti e finanziamenti con strumenti dedicati e supporto operativo.",
    href: "https://www.sportelloamicoimpresa.info/area_finanziamenti/login.php",
    linkLabel: "PORTALE FIMASS Finanziario",
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
              <div className="flex min-h-0 flex-1 flex-col items-center justify-center px-1">
                <h2 className="max-w-[16rem] text-balance sm:max-w-none">
                  <span className="block text-[0.6875rem] font-semibold uppercase leading-tight tracking-[0.14em] text-[var(--muted)] sm:text-xs md:text-[0.8125rem]">
                    {titleLine}
                  </span>
                  <span className="mt-1 block bg-gradient-to-r from-[var(--fimass-navy)] via-[var(--fimass-accent)] to-[var(--fimass-gold)] bg-clip-text text-lg font-bold uppercase tracking-tight text-transparent sm:text-xl md:text-2xl">
                    {titleAccent}
                  </span>
                </h2>
              </div>
              <div className="flex shrink-0 flex-col items-center gap-1.5">
                <p className="w-full max-w-sm px-0.5 text-sm leading-relaxed text-[var(--muted)] md:text-[0.9375rem]">
                  {description}
                </p>
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
