import Image from "next/image";
import Nav from "./Nav";
import Footer from "./Footer";

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="top" className="pt-28 pb-10 px-6 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-10">
        <div className="flex-1">
          <h1 className="text-6xl md:text-7xl font-black leading-[1.0] text-[#1a1a2e] mb-0">
            WLAN weg?
          </h1>
          <h2 className="text-6xl md:text-7xl font-black leading-[1.0] text-[#6B5CE7] mb-6">
            Ich bin da.
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md leading-relaxed">
            Kein Einschicken, kein Telefon-Support –<br />
            ich löse das Problem direkt bei Ihnen zu Hause.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#kontakt"
              className="bg-[#6B5CE7] hover:bg-[#4A3DC7] text-white font-bold px-7 py-3.5 rounded-full transition-colors text-center text-sm"
            >
              Kostenlos anfragen
            </a>
            <a
              href="#leistungen"
              className="border border-gray-300 hover:border-[#6B5CE7] text-gray-700 hover:text-[#6B5CE7] font-bold px-7 py-3.5 rounded-full transition-colors text-center text-sm"
            >
              Was ich anbiete
            </a>
          </div>
        </div>
        <div className="flex-shrink-0 self-start mt-2">
          <div className="w-44 h-44 md:w-52 md:h-52 rounded-2xl overflow-hidden border-2 border-[#6B5CE7] shadow-lg">
            <Image
              src="/me.png"
              alt="Janis Huser"
              width={208}
              height={208}
              className="object-cover w-full h-full"
              style={{ objectPosition: 'center 35%' }}
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
    { icon: "⚡", text: "Direkt bei Ihnen zu Hause" },
    { icon: "🔒", text: "Keine versteckten Kosten" },
    { icon: "💬", text: "Kein Fachchinesisch" },
  ];
  return (
    <section className="bg-gray-50 border-y border-gray-200 py-4 px-6">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-2">
        {points.map((p) => (
          <div key={p.text} className="flex items-center gap-2 text-sm text-gray-600 font-semibold">
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
  { icon: "💻", text: "«Mein PC ist so langsam!»" },
  { icon: "🌐", text: "«Das Internet geht nicht mehr!»" },
  { icon: "📱", text: "«Wie richte ich mein neues Handy ein?»" },
  { icon: "🛡️", text: "«Ich glaube, ich habe einen Virus!»" },
  { icon: "🖨️", text: "«Der Drucker macht nichts mehr!»" },
  { icon: "📧", text: "«Meine E-Mails sind weg!»" },
];

function Services() {
  return (
    <section id="leistungen" className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold text-[#6B5CE7] uppercase tracking-widest mb-5">
          Häufige Fragen, die ich beantworte
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {services.map((s) => (
            <div
              key={s.text}
              className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3"
            >
              <span className="text-xl flex-shrink-0">{s.icon}</span>
              <span className="text-sm font-semibold text-[#1a1a2e]">{s.text}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-6">
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

// ─── Pricing ──────────────────────────────────────────────────────────────────
function Pricing() {
  const items = [
    { icon: "🖥️", label: "IT-Support", value: "75 CHF / Std." },
    { icon: "🚗", label: "Anreise", value: "0.50 CHF / km" },
    { icon: "🎁", label: "Erstberatung", value: "Kostenlos" },
  ];
  return (
    <section id="preise" className="py-16 px-6 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold text-[#6B5CE7] uppercase tracking-widest mb-5">
          Preise
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 bg-gray-100 rounded-xl px-5 py-4"
            >
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-0.5">
                  {item.label}
                </p>
                <p className="text-base font-extrabold text-[#6B5CE7]">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── KMU / B2B ────────────────────────────────────────────────────────────────
const kmuServices = [
  { icon: "🗂️", text: "Papierloses Büro einführen" },
  { icon: "☁️", text: "Cloud-Migration & -Betrieb" },
  { icon: "🔧", text: "Softwareauswahl & Einführung" },
  { icon: "📊", text: "Prozesse & Abläufe optimieren" },
  { icon: "🛡️", text: "IT-Sicherheit & Datenschutz" },
  { icon: "🖥️", text: "IT-Infrastruktur & Support" },
];

function KMU() {
  return (
    <section id="kmu" className="py-16 px-6 bg-[#1a1a2e]">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold text-[#6B5CE7] uppercase tracking-widest mb-4">
          IT-Beratung für KMU &amp; Gewerbe
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-2">
          Ihr Betrieb,
        </h2>
        <h2 className="text-4xl md:text-5xl font-black text-[#6B5CE7] leading-tight mb-6">
          digital &amp; effizient.
        </h2>
        <p className="text-gray-400 max-w-lg mb-10 leading-relaxed">
          Prozesse optimieren, Kosten senken, sicher in die Cloud – ich begleite Sie vom ersten Schritt bis zur Umsetzung.
        </p>
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { label: "Ausbildung", value: "BSc Informatik" },
            { label: "Erfahrung", value: "5+ Jahre IT" },
            { label: "Branchen", value: "KMU, Handel, Gastronomie & mehr" },
          ].map((c) => (
            <div key={c.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-xs font-bold text-[#6B5CE7] uppercase tracking-widest mb-1">{c.label}</p>
              <p className="text-sm font-bold text-white leading-snug">{c.value}</p>
            </div>
          ))}
        </div>
        <p className="text-xs font-bold text-[#6B5CE7] uppercase tracking-widest mb-4">
          Leistungen
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
          {kmuServices.map((s) => (
            <div key={s.text} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3">
              <span className="text-xl flex-shrink-0">{s.icon}</span>
              <span className="text-sm font-semibold text-gray-200">{s.text}</span>
            </div>
          ))}
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-bold text-white mb-1">Transparente Konditionen.</p>
            <p className="text-sm text-gray-400">
              Erstgespräch kostenlos – danach individuelle Offerte, keine Überraschungen.
            </p>
          </div>
          <div className="flex-shrink-0">
            <p className="text-4xl font-black text-[#6B5CE7]">160 CHF</p>
            <p className="text-sm text-gray-400">/ Std.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── How it works ─────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    { num: "1", title: "Kontakt aufnehmen", desc: "Schreiben Sie mir eine Nachricht oder rufen Sie an." },
    { num: "2", title: "Problem schildern", desc: "Einfach beschreiben, was nicht funktioniert. Kein technisches Wissen nötig." },
    { num: "3", title: "Termin vereinbaren", desc: "Ich komme zu Ihnen nach Hause oder wir lösen es per Fernzugriff." },
    { num: "4", title: "Alles läuft wieder", desc: "Ich erkläre Ihnen, was ich gemacht habe – verständlich und in Ruhe." },
  ];
  return (
    <section className="py-16 px-6 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold text-[#6B5CE7] uppercase tracking-widest mb-5">
          So einfach geht&apos;s
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.num}>
              <div className="w-10 h-10 rounded-full bg-[#6B5CE7] text-white text-sm font-black flex items-center justify-center mb-4">
                {s.num}
              </div>
              <h3 className="font-bold text-[#1a1a2e] mb-1 text-sm">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
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
    <section id="ueber-mich" className="py-16 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-10">
        <div className="flex-shrink-0">
          <div className="w-40 h-40 rounded-2xl overflow-hidden border-2 border-[#6B5CE7] shadow-md">
            <Image
              src="/me.png"
              alt="Janis Huser"
              width={160}
              height={160}
              className="object-cover w-full h-full"
              style={{ objectPosition: 'center 35%' }}
            />
          </div>
        </div>
        <div>
          <p className="text-xs font-bold text-[#6B5CE7] uppercase tracking-widest mb-3">Über mich</p>
          <h2 className="text-3xl font-black text-[#1a1a2e] mb-4">Wer steckt dahinter?</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Ich bin Janis Huser – ein leidenschaftlicher IT-Fachmann aus der Schweiz mit einem BSc
            in Informatik und über 5 Jahren Erfahrung. Ich helfe Privatpersonen und kleinen Unternehmen
            dabei, ihre Technik-Probleme zu lösen.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Mir ist wichtig, dass Sie wirklich verstehen, was ich tue. Ich erkläre alles auf Augenhöhe,
            nehme mir Zeit für Ihre Fragen und bin auch nach dem Termin erreichbar.
          </p>
          <div className="flex flex-wrap gap-2">
            {["BSc Informatik", "5+ Jahre IT-Erfahrung", "Kanton Glarus & Umgebung", "Datenschutz ernst genommen"].map((tag) => (
              <span key={tag} className="bg-[#6B5CE7]/10 text-[#6B5CE7] text-xs font-bold px-3 py-1 rounded-full">
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
    <section id="kontakt" className="py-16 px-6 bg-[#1a1a2e]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-black text-white mb-2">
          Einfach fragen – kein Problem!
        </h2>
        <p className="text-gray-400 mb-10 text-sm">
          Erstberatung kostenlos &amp; unverbindlich
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a
            href="tel:+41775248685"
            className="flex items-center gap-4 bg-white/5 hover:bg-[#6B5CE7] border border-white/10 text-white rounded-xl p-5 transition-all group"
          >
            <span className="text-2xl">📞</span>
            <div>
              <p className="text-xs text-gray-400 group-hover:text-white/70 font-semibold mb-0.5 uppercase tracking-wide">Telefon</p>
              <p className="font-bold text-sm">077 524 86 85</p>
            </div>
          </a>
          <a
            href="https://wa.me/41775248685"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white/5 hover:bg-[#25D366] border border-white/10 text-white rounded-xl p-5 transition-all group"
          >
            <span className="text-2xl">💬</span>
            <div>
              <p className="text-xs text-gray-400 group-hover:text-white/70 font-semibold mb-0.5 uppercase tracking-wide">WhatsApp</p>
              <p className="font-bold text-sm">077 524 86 85</p>
            </div>
          </a>
          <a
            href="mailto:info@jhuser-it-services.ch"
            className="flex items-center gap-4 bg-white/5 hover:bg-[#6B5CE7] border border-white/10 text-white rounded-xl p-5 transition-all group"
          >
            <span className="text-2xl">✉️</span>
            <div>
              <p className="text-xs text-gray-400 group-hover:text-white/70 font-semibold mb-0.5 uppercase tracking-wide">E-Mail</p>
              <p className="font-bold text-sm">info@jhuser-it-services.ch</p>
            </div>
          </a>
        </div>
      </div>
    </section>
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
        <Pricing />
        <KMU />
        <HowItWorks />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
