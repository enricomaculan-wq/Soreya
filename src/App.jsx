export default function SoreyaInvestorSite() {
  const navItems = [
    { label: 'Platform', href: '#platform' },
    { label: 'Why it matters', href: '#why' },
    { label: 'Use cases', href: '#use-cases' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/AppIcon-ios-marketing-1024x1024@1x.png"
              alt="Soreya logo"
              className="h-11 w-11 rounded-2xl border border-white/10 shadow-lg shadow-cyan-500/10"
            />
            <div>
              <p className="text-lg font-semibold text-white">Soreya</p>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Privacy-first communication</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/15"
            >
              Get in touch
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(45,212,191,0.16),transparent_28%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.12),transparent_35%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200 backdrop-blur">
                Privacy-first communication platform
              </div>
              <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white md:text-7xl">
                Soreya
              </h1>
              <div className="mt-3 space-y-2">
                <p className="text-2xl font-medium text-cyan-200 md:text-3xl">Rethinking communication</p>
                <p className="text-lg font-medium text-slate-300 md:text-xl">Ripensare la comunicazione</p>
              </div>
              <div className="mt-8 max-w-3xl space-y-4 text-lg leading-8 md:text-xl">
                <p className="text-slate-200">
                  Soreya is a privacy-first communication platform for high-trust environments, combining
                  closed-access messaging, cryptographic trust events and low-metadata architecture goals.
                </p>
                <p className="text-slate-400">
                  Soreya è una piattaforma di comunicazione privacy-first per ambienti ad alta fiducia,
                  costruita attorno a messaggistica ad accesso chiuso, eventi di trust crittografico e
                  un’architettura orientata alla riduzione dei metadati.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-cyan-400 px-6 py-3 font-medium text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]"
                >
                  Contact / Contatti
                </a>
                <a
                  href="#platform"
                  className="rounded-2xl border border-white/15 px-6 py-3 font-medium text-slate-100 transition hover:bg-white/5"
                >
                  Explore / Scopri
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-cyan-400/10 blur-3xl" />
              <div className="relative rounded-[2.5rem] border border-white/10 bg-slate-900/80 p-4 shadow-2xl shadow-black/40">
                <div className="mx-auto max-w-[320px] rounded-[2.25rem] border border-white/10 bg-slate-950 p-3 shadow-inner shadow-white/5">
                  <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.22),transparent_28%),#020617] p-5">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>Private conversation</span>
                      <span>Trusted</span>
                    </div>
                    <div className="mt-6 flex justify-center">
                      <img
                        src="/AppIcon-ios-marketing-1024x1024@1x.png"
                        alt="Soreya app icon"
                        className="h-24 w-24 rounded-[1.5rem] shadow-lg shadow-cyan-500/20"
                      />
                    </div>
                    <div className="mt-6 space-y-3">
                      <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/10 p-4">
                        <p className="text-sm font-medium text-cyan-100">Closed-access messaging</p>
                        <p className="mt-1 text-xs leading-6 text-slate-300">Only trusted or invited participants can initiate communication.</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-sm font-medium text-white">High-trust design</p>
                        <p className="mt-1 text-xs leading-6 text-slate-300">Built around privacy, trust handling and metadata resilience.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">What it is / Cos’è</p>
            <div className="mt-3 space-y-3">
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                A communication layer built for trust, control and privacy resilience.
              </h2>
              <p className="text-xl font-medium text-slate-300 md:text-2xl">
                Un nuovo livello di comunicazione pensato per fiducia, controllo e resilienza della privacy.
              </p>
            </div>
            <div className="mt-6 space-y-4 text-lg leading-8">
              <p className="text-slate-300">
                Soreya is not designed as a mass-market messenger. It is built for environments where
                communication privacy depends not only on message confidentiality, but also on who can
                interact, how trust is handled and how much metadata is exposed around the interaction.
              </p>
              <p className="text-slate-400">
                Soreya non nasce come messenger di massa, ma per contesti in cui la privacy della
                comunicazione dipende non solo dalla riservatezza del contenuto, ma anche da chi può
                interagire, da come viene gestita la fiducia e da quante informazioni restano esposte
                attorno all’interazione.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              {
                title: 'Closed-access messaging / Accesso chiuso',
                body: 'Only invited or authorized participants can initiate communication, reducing unwanted contact and preserving controlled interaction. Solo utenti invitati o autorizzati possono avviare la comunicazione, riducendo i contatti indesiderati e preservando un’interazione più controllata.',
              },
              {
                title: 'Cryptographic trust events / Trust crittografico',
                body: 'Identity verification and trust-sensitive flows help participants better understand and manage the integrity of each conversation. La verifica dell’identità e i flussi legati alla fiducia aiutano i partecipanti a comprendere e gestire meglio l’integrità di ogni conversazione.',
              },
              {
                title: 'Low-metadata goals / Metadati ridotti',
                body: 'Soreya is designed to reduce exposure around the communication itself, not just protect the content of messages. Soreya è progettata per ridurre l’esposizione attorno alla comunicazione stessa, non solo per proteggere il contenuto dei messaggi.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/10 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="border-y border-white/10 bg-slate-900/70">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Why it matters / Perché conta</p>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              ['More control / Più controllo', 'Reduce unwanted contact and move away from open, convenience-first communication models. Riduci i contatti indesiderati e supera i modelli aperti orientati solo alla comodità.'],
              ['More trust / Più fiducia', 'Give participants stronger cues around who they are communicating with and how trust changes are handled. Offri segnali più chiari su con chi si sta comunicando e su come viene gestita la fiducia.'],
              ['Less exposed context / Meno esposizione', 'Protect more than message content by reducing exposure around communication patterns and metadata. Proteggi più del solo contenuto riducendo l’esposizione di pattern comunicativi e metadati.'],
              ['Better fit for sensitive environments / Più adatto a contesti sensibili', 'Support high-trust teams, privacy-sensitive professionals and closed communities. Supporta team ad alta fiducia, professionisti sensibili alla privacy e community chiuse.'],
            ].map(([title, body]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="use-cases" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Initial use cases / Casi d’uso iniziali</p>
            <div className="mt-3 space-y-2">
              <h2 className="text-3xl font-semibold text-white">Where Soreya starts</h2>
              <p className="text-xl font-medium text-slate-300">Dove inizia Soreya</p>
            </div>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>• High-trust teams and privacy-sensitive professional environments / Team ad alta fiducia e contesti professionali sensibili alla privacy</li>
              <li>• Closed communities where controlled access matters / Community chiuse in cui l’accesso controllato è essenziale</li>
              <li>• Selected secure communication and validation scenarios with strategic partners / Scenari selezionati di validazione e comunicazione sicura con partner strategici</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Long-term direction / Visione di lungo periodo</p>
            <div className="mt-3 space-y-2">
              <h2 className="text-3xl font-semibold text-white">Beyond messaging</h2>
              <p className="text-xl font-medium text-slate-300">Oltre la messaggistica</p>
            </div>
            <div className="mt-6 space-y-4 leading-8">
              <p className="text-slate-300">
                Over time, Soreya can evolve into a broader private communication ecosystem, including
                customer-controlled or on-premise deployment models for organizations that require stronger
                control over infrastructure, trust and data boundaries.
              </p>
              <p className="text-slate-400">
                Nel tempo, Soreya può evolvere in un ecosistema di comunicazione privata più ampio,
                includendo modelli di deployment on-premise o controllati dal cliente per organizzazioni
                che richiedono maggiore controllo su infrastruttura, fiducia e confini dei dati.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-6">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Private by design',
              body: 'Built for people and organizations who need more deliberate, more trusted and more resilient communication.',
            },
            {
              title: 'Bilingual and international',
              body: 'Designed to present Soreya credibly to users, partners and investors in both Italian and English.',
            },
            {
              title: 'Ready for launch',
              body: 'A clean first version of the site that can go live quickly and evolve alongside the product and fundraising process.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-slate-900/80">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Contact / Contatti</p>
            <div className="mt-3 space-y-2">
              <h2 className="text-3xl font-semibold text-white md:text-4xl">Investor and partnership enquiries</h2>
              <p className="text-xl font-medium text-slate-300">Contatti per investitori e partner</p>
            </div>
            <div className="mt-5 max-w-3xl space-y-4 leading-8">
              <p className="text-slate-300">
                Soreya is currently at MVP stage and exploring pilot validation, strategic partnerships and a
                €400k pre-seed round to support product hardening, broader testing and market readiness.
              </p>
              <p className="text-slate-400">
                Soreya è attualmente in fase MVP e sta esplorando pilot, partnership strategiche e un round
                pre-seed da €400k per supportare hardening del prodotto, test più ampi e preparazione al mercato.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-200">
              <a href="mailto:support@soreya.app" className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 transition hover:bg-slate-950/70">Email: support@soreya.app</a>
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3">Domains: soreya.app / soreya.it</div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3">Deck and further materials available on request</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img src="/AppIcon-ios-marketing-1024x1024@1x.png" alt="Soreya icon" className="h-8 w-8 rounded-xl" />
            <div>
              <p className="font-medium text-slate-200">Soreya</p>
              <p>Rethinking communication / Ripensare la comunicazione</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:support@soreya.app" className="transition hover:text-white">support@soreya.app</a>
            <span>soreya.app</span>
            <span>soreya.it</span>
          </div>
        </div>
      </footer>
    </div>
  );
}