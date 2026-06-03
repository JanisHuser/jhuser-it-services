import type { Metadata } from "next";
import Nav from "../Nav";
import Footer from "../Footer";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von J.Huser IT-Services, Abläschstrasse 66, 8750 Glarus, Schweiz.",
  robots: { index: false, follow: false },
};

export default function Impressum() {
  return (
    <>
      <Nav />
      <main className="pt-28 pb-20 px-6 bg-white min-h-screen">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-bold text-[#6B5CE7] uppercase tracking-widest mb-3">
            Rechtliches
          </p>
          <h1 className="text-4xl font-black text-[#1a1a2e] mb-10">Impressum</h1>

          <div className="space-y-8 text-sm text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-base font-bold text-[#1a1a2e] mb-2">Anbieter</h2>
              <p>J.Huser IT Services</p>
              <p>Abläschstrasse 66</p>
              <p>8750 Glarus</p>
              <p>Schweiz</p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#1a1a2e] mb-2">UID</h2>
              <p>CHE-299.352.957</p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#1a1a2e] mb-2">Kontakt</h2>
              <p>
                Telefon:{" "}
                <a href="tel:+41775248685" className="text-[#6B5CE7] hover:underline">
                  +41 77 524 86 85
                </a>
              </p>
              <p>
                E-Mail:{" "}
                <a href="mailto:info@jhuser-it-services.ch" className="text-[#6B5CE7] hover:underline">
                  info@jhuser-it-services.ch
                </a>
              </p>
              <p>
                Website:{" "}
                <a href="https://www.jhuser-it-services.ch" className="text-[#6B5CE7] hover:underline">
                  www.jhuser-it-services.ch
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#1a1a2e] mb-2">Verantwortlich für den Inhalt</h2>
              <p>Janis Huser</p>
              <p>Abläschstrasse 66</p>
              <p>8750 Glarus</p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#1a1a2e] mb-2">Haftungsausschluss</h2>
              <p>
                Die Inhalte dieser Website wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit,
                Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
                Als Diensteanbieter bin ich für eigene Inhalte auf diesen Seiten verantwortlich.
                Eine Pflicht zur Überwachung übermittelter oder gespeicherter fremder Informationen
                besteht nicht.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#1a1a2e] mb-2">Urheberrecht</h2>
              <p>
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem Schweizer Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung
                und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechts bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
