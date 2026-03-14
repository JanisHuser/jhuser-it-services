import Image from "next/image";
import Nav from "./Nav";

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="top" className="pt-28 pb-20 px-6 bg-gradient-to-b from-[#f4f2ff] to-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block bg-[#6B5CE7]/10 text-[#6B5CE7] text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            IT-Hilfe aus der Region
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#1a1a2e] mb-5">
            Technik-Probleme?
            <br />
            <span className="text-[#6B5CE7]">Ich löse sie für Sie.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Ob der Computer streikt, das Internet hakelt oder ein neues Gerät einrichten – ich
            helfe Ihnen schnell, verständlich und ohne kompliziertes Fachchinesisch.
            Im Kanton Glarus und Umgebung komme ich direkt zu Ihnen.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="#kontakt"
              className="bg-[#6B5CE7] hover:bg-[#4A3DC7] text-white font-semibold px-7 py-3.5 rounded-full transition-colors text-center"
            >
              Kostenlos anfragen
            </a>
            <a
              href="#leistungen"
              className="border border-gray-300 hover:border-[#6B5CE7] text-gray-700 hover:text-[#6B5CE7] font-semibold px-7 py-3.5 rounded-full transition-colors text-center"
            >
              Was ich anbiete
            </a>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="w-56 h-56 rounded-3xl bg-[#6B5CE7]/10 flex items-center justify-center shadow-xl">
            <Image
              src="/logo.png"
              alt="J.Huser IT-Services"
              width={160}
              height={160}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Trust bar ────────────────────────────────────────────────────────────────
function TrustBar() {
  const points = [
    { icon: "✅", text: "Kein Fachchinesisch" },
    { icon: "🏔️", text: "Kanton Glarus & Umgebung" },
    { icon: "💬", text: "Verständliche Erklärungen" },
    { icon: "⚡", text: "Schnelle Hilfe" },
    { icon: "🔒", text: "Seriös & diskret" },
  ];
  return (
    <section className="bg-white border-y border-gray-100 py-6 px-6">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-3">
        {points.map((p) => (
          <div key={p.text} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
            <span>{p.icon}</span>
            <span>{p.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
const services = [
  {
    icon: "💻",
    title: "Computer langsam oder kaputt?",
    desc: "Ich schaue mir Ihren Computer an, finde das Problem und bringe ihn wieder zum Laufen – ganz egal ob Windows oder Mac.",
  },
  {
    icon: "🌐",
    title: "Internet & WLAN Probleme",
    desc: "Kein Internet, schlechtes WLAN oder Router-Probleme? Ich richte alles neu ein, damit Sie wieder sicher und stabil online sind.",
  },
  {
    icon: "📱",
    title: "Neues Handy oder Tablet einrichten",
    desc: "Ich richte Ihr neues Gerät komplett ein, übertrage Ihre Fotos und Kontakte und zeige Ihnen, wie alles funktioniert.",
  },
  {
    icon: "🛡️",
    title: "Schutz vor Viren & Betrug",
    desc: "Ich schütze Ihren Computer vor Viren, verdächtigen Programmen und Online-Betrug – damit Sie sicher surfen können.",
  },
  {
    icon: "🖨️",
    title: "Drucker & Zubehör anschliessen",
    desc: "Drucker druckt nicht mehr? Ich schliesse alle Geräte an, installiere die nötigen Programme und teste alles durch.",
  },
  {
    icon: "📧",
    title: "E-Mail & Programme einrichten",
    desc: "Ich richte Ihr E-Mail-Konto ein, installiere Programme und helfe Ihnen, alles richtig zu nutzen.",
  },
];

function Services() {
  return (
    <section id="leistungen" className="py-20 px-6 bg-[#f4f2ff]/40">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#1a1a2e] mb-3">Was ich für Sie tun kann</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Egal wie gross oder klein das Problem – ich helfe Ihnen gerne. Hier sind die häufigsten Dinge, bei denen ich unterstützen kann.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#6B5CE7]/30 transition-all"
            >
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="font-bold text-[#1a1a2e] mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-400 mt-8">
          Ihr Problem ist nicht dabei?{" "}
          <a href="#kontakt" className="text-[#6B5CE7] underline">
            Fragen Sie einfach an
          </a>{" "}
          – ich helfe auch bei anderen Anliegen.
        </p>
      </div>
    </section>
  );
}

// ─── How it works ─────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Kontakt aufnehmen",
      desc: "Schreiben Sie mir eine Nachricht oder rufen Sie an. Kein kompliziertes Formular.",
    },
    {
      num: "2",
      title: "Problem schildern",
      desc: "Einfach beschreiben, was nicht funktioniert. Kein technisches Wissen nötig.",
    },
    {
      num: "3",
      title: "Termin vereinbaren",
      desc: "Ich komme zu Ihnen nach Hause oder wir lösen es per Fernzugriff.",
    },
    {
      num: "4",
      title: "Alles läuft wieder",
      desc: "Ich erkläre Ihnen, was ich gemacht habe – verständlich und in Ruhe.",
    },
  ];
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#1a1a2e] mb-3">So einfach geht&apos;s</h2>
          <p className="text-gray-500">In vier Schritten zu Ihrem funktionierenden Gerät.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#6B5CE7] text-white text-lg font-extrabold flex items-center justify-center mx-auto mb-4">
                {s.num}
              </div>
              <h3 className="font-bold text-[#1a1a2e] mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="ueber-mich" className="py-20 px-6 bg-[#f4f2ff]/40">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0">
          <div className="w-48 h-48 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/me.png"
              alt="Janis Huser"
              width={192}
              height={192}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-extrabold text-[#1a1a2e] mb-4">Wer steckt dahinter?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Ich bin Janis Huser – ein leidenschaftlicher IT-Fachmann aus der Schweiz. Ich helfe
            Privatpersonen und kleinen Unternehmen dabei, ihre Technik-Probleme zu lösen. Mir ist
            wichtig, dass Sie wirklich verstehen, was ich tue – und nicht einfach ein Gerät
            abgeben und hoffen müssen.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Ich erkläre alles auf Augenhöhe, nehme mir Zeit für Ihre Fragen und bin auch
            nach dem Termin erreichbar, wenn etwas unklar ist.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "Kanton Glarus & Umgebung",
              "Faire Preise",
              "Erfahrung seit Jahren",
              "Datenschutz wird ernst genommen",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-[#6B5CE7]/10 text-[#6B5CE7] text-xs font-semibold px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="kontakt" className="py-20 px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-[#1a1a2e] mb-3">Nehmen Sie Kontakt auf</h2>
        <p className="text-gray-500 mb-10">
          Keine langen Formulare. Einfach schreiben oder anrufen – ich melde mich schnell zurück.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <a
            href="mailto:info@jhuser-it-services.ch"
            className="flex items-center gap-4 bg-[#f4f2ff] hover:bg-[#6B5CE7] hover:text-white text-[#1a1a2e] rounded-2xl p-5 transition-all group"
          >
            <span className="text-3xl">✉️</span>
            <div className="text-left">
              <p className="text-xs text-gray-400 group-hover:text-white/70 font-medium mb-0.5">E-Mail</p>
              <p className="font-semibold text-sm">info@jhuser-it-services.ch</p>
            </div>
          </a>
          <a
            href="tel:+41764500282"
            className="flex items-center gap-4 bg-[#f4f2ff] hover:bg-[#6B5CE7] hover:text-white text-[#1a1a2e] rounded-2xl p-5 transition-all group"
          >
            <span className="text-3xl">📞</span>
            <div className="text-left">
              <p className="text-xs text-gray-400 group-hover:text-white/70 font-medium mb-0.5">Telefon</p>
              <p className="font-semibold text-sm">+41 76 450 02 82</p>
            </div>
          </a>
        </div>
        <div className="bg-[#6B5CE7] rounded-3xl p-8 text-white">
          <h3 className="text-xl font-bold mb-2">Erstberatung kostenlos</h3>
          <p className="text-white/80 text-sm mb-5">
            Ich schaue mir Ihr Problem zuerst kostenlos an. Erst wenn ich weiss, was zu tun ist,
            besprechen wir gemeinsam das weitere Vorgehen.
          </p>
          <a
            href="mailto:info@jhuser-it-services.ch"
            className="inline-block bg-white text-[#6B5CE7] font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            Jetzt anfragen →
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Impressum ────────────────────────────────────────────────────────────────
function Impressum() {
  return (
    <section id="impressum" className="py-20 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#1a1a2e] mb-8">Impressum</h2>
        <div className="text-gray-600 leading-relaxed space-y-4">
          <div>
            <p className="font-semibold text-[#1a1a2e]">Anbieter</p>
            <p>J.Huser IT Services</p>
            <p>Abläschstrasse 66</p>
            <p>8750 Glarus</p>
            <p>Schweiz</p>
          </div>
          <div>
            <p className="font-semibold text-[#1a1a2e]">Kontakt</p>
            <p>
              E-Mail:{" "}
              <a href="mailto:info@jhuser-it-services.ch" className="text-[#6B5CE7] hover:underline">
                info@jhuser-it-services.ch
              </a>
            </p>
            <p>
              Telefon:{" "}
              <a href="tel:+41764500282" className="text-[#6B5CE7] hover:underline">
                +41 76 450 02 82
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-gray-400 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <a href="#top" className="flex items-center gap-2.5">
          <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="36" height="36" rx="9" fill="#6B5CE7" />
            <text x="18" y="24" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="16" fill="white" letterSpacing="-0.5">JH</text>
          </svg>
          <span className="font-bold text-white/80 text-sm leading-tight">
            J.Huser
            <br />
            <span className="font-normal text-gray-500 text-xs tracking-wide">IT-Services</span>
          </span>
        </a>
        <p>© {new Date().getFullYear()} J.Huser IT-Services · Schweiz</p>
        <div className="flex gap-6">
          <a href="#impressum" className="hover:text-white transition-colors">Impressum</a>
          <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <HowItWorks />
        <About />
        <Contact />
        <Impressum />
      </main>
      <Footer />
    </>
  );
}
