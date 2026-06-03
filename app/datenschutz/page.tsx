import type { Metadata } from "next";
import Nav from "../Nav";
import Footer from "../Footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von J.Huser IT-Services gemäss Schweizer Datenschutzgesetz (DSG).",
  robots: { index: false, follow: false },
};

export default function Datenschutz() {
  return (
    <>
      <Nav />
      <main className="pt-28 pb-20 px-6 bg-white min-h-screen">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-bold text-[#6B5CE7] uppercase tracking-widest mb-3">
            Rechtliches
          </p>
          <h1 className="text-4xl font-black text-[#1a1a2e] mb-2">Datenschutzerklärung</h1>
          <p className="text-sm text-gray-400 mb-10">Gemäss Schweizer Datenschutzgesetz (DSG)</p>

          <div className="space-y-8 text-sm text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-base font-bold text-[#1a1a2e] mb-2">1. Verantwortliche Stelle</h2>
              <p>
                Verantwortlich für die Datenbearbeitung auf dieser Website ist:
              </p>
              <p className="mt-2">
                Janis Huser · J.Huser IT Services<br />
                Abläschstrasse 66, 8750 Glarus, Schweiz<br />
                <a href="mailto:info@jhuser-it-services.ch" className="text-[#6B5CE7] hover:underline">info@jhuser-it-services.ch</a>
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#1a1a2e] mb-2">2. Erhebung und Bearbeitung von Personendaten</h2>
              <p>
                Personendaten werden nur erhoben, soweit dies für die Erbringung der Dienstleistungen
                notwendig ist oder Sie uns diese freiwillig mitteilen (z. B. per E-Mail, Telefon oder
                WhatsApp). Dazu gehören insbesondere Name, Telefonnummer und E-Mail-Adresse.
              </p>
              <p className="mt-2">
                Beim Besuch der Website werden durch den Hosting-Anbieter (Vercel) technische Daten
                wie IP-Adresse, Browsertyp, Betriebssystem und Zugriffszeit automatisch erfasst.
                Diese Daten dienen ausschliesslich dem Betrieb und der Sicherheit der Website.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#1a1a2e] mb-2">3. Zweck der Datenbearbeitung</h2>
              <p>Ihre Daten werden ausschliesslich für folgende Zwecke verwendet:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Beantwortung von Anfragen und Kontaktaufnahme</li>
                <li>Erbringung und Abrechnung von IT-Dienstleistungen</li>
                <li>Technischer Betrieb der Website</li>
              </ul>
              <p className="mt-2">
                Es findet keine Weitergabe Ihrer Daten an Dritte zu Werbezwecken statt.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#1a1a2e] mb-2">4. Dauer der Aufbewahrung</h2>
              <p>
                Personendaten werden nur so lange aufbewahrt, wie es für den jeweiligen Zweck
                notwendig ist oder gesetzliche Aufbewahrungspflichten bestehen. Sobald die Daten
                nicht mehr benötigt werden, werden sie gelöscht.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#1a1a2e] mb-2">5. Weitergabe an Dritte</h2>
              <p>
                Personendaten werden grundsätzlich nicht an Dritte weitergegeben, es sei denn, dies
                ist zur Vertragserfüllung notwendig oder gesetzlich vorgeschrieben. Folgende
                Drittdienste können im Rahmen des Website-Betriebs eingesetzt werden:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  <span className="font-semibold text-[#1a1a2e]">GitHub Pages (GitHub Inc.)</span> – Hosting der
                  Website (USA; angemessenes Datenschutzniveau gemäss DSG)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#1a1a2e] mb-2">6. Cookies und Tracking</h2>
              <p>
                Diese Website verwendet keine Tracking-Cookies und kein Analytics. Es werden keine
                Nutzungsprofile erstellt und keine Daten zu Werbezwecken erfasst.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#1a1a2e] mb-2">7. Ihre Rechte</h2>
              <p>Sie haben gemäss DSG das Recht auf:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Auskunft über die gespeicherten Daten</li>
                <li>Berichtigung unrichtiger Daten</li>
                <li>Löschung Ihrer Daten (soweit keine gesetzliche Pflicht entgegensteht)</li>
                <li>Einschränkung der Bearbeitung</li>
                <li>Datenübertragbarkeit</li>
              </ul>
              <p className="mt-2">
                Für die Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
                <a href="mailto:info@jhuser-it-services.ch" className="text-[#6B5CE7] hover:underline">
                  info@jhuser-it-services.ch
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#1a1a2e] mb-2">8. Sicherheit</h2>
              <p>
                Die Website wird über HTTPS ausgeliefert. Technische und organisatorische Massnahmen
                schützen Ihre Daten vor unbefugtem Zugriff, Verlust oder Missbrauch.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#1a1a2e] mb-2">9. Änderungen</h2>
              <p>
                Diese Datenschutzerklärung kann bei Bedarf angepasst werden. Die jeweils aktuelle
                Version ist auf dieser Seite abrufbar.
              </p>
            </section>

            <section className="border-t border-gray-100 pt-6">
              <p className="text-gray-400">Stand: Juni 2026</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
