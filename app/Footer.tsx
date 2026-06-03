import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] border-t border-white/10 text-gray-400 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <a href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo-whatsapp.png"
            alt="J.Huser IT-Services"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="font-bold text-white/80 text-sm leading-tight">
            J.Huser
            <br />
            <span className="font-normal text-gray-500 text-xs tracking-wide">IT-Services</span>
          </span>
        </a>
        <p>© {new Date().getFullYear()} J.Huser IT-Services · Schweiz</p>
        <div className="flex gap-6">
          <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
          <a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}
