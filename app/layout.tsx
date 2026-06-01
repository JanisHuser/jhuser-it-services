import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://www.jhuser-it-services.ch";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "J.Huser IT-Services – IT-Hilfe im Kanton Glarus",
    template: "%s | J.Huser IT-Services",
  },
  description:
    "IT-Support & Computerhilfe im Kanton Glarus und Umgebung. Computer-Reparatur, WLAN-Einrichtung, Virenschutz und mehr – verständlich, fair und ohne Fachchinesisch.",
  keywords: [
    "IT-Support Glarus",
    "Computerhilfe Kanton Glarus",
    "PC Reparatur Glarus",
    "WLAN einrichten Glarus",
    "Computer Hilfe Schweiz",
    "IT-Service Glarus",
    "Virenschutz",
    "Laptop Reparatur",
    "Handy einrichten",
    "IT Hausbesuche Glarus",
    "J.Huser IT Services",
  ],
  authors: [{ name: "Janis Huser" }],
  creator: "Janis Huser",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: siteUrl,
    siteName: "J.Huser IT-Services",
    title: "J.Huser IT-Services – IT-Hilfe im Kanton Glarus",
    description:
      "IT-Support & Computerhilfe im Kanton Glarus und Umgebung. Schnell, verständlich und ohne Fachchinesisch.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "J.Huser IT-Services Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": siteUrl,
  name: "J.Huser IT-Services",
  description:
    "IT-Support & Computerhilfe im Kanton Glarus und Umgebung. Computer-Reparatur, WLAN-Einrichtung, Virenschutz und mehr.",
  url: siteUrl,
  telephone: "+41764500282",
  email: "info@jhuser-it-services.ch",
  image: `${siteUrl}/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Abläschstrasse 66",
    addressLocality: "Glarus",
    postalCode: "8750",
    addressCountry: "CH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.0406,
    longitude: 9.0677,
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Kanton Glarus",
  },
  priceRange: "CHF 75–160/h",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
