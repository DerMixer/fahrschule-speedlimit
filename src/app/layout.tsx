import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  display: 'swap',
});

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Fahrschule Speedlimit – Führerschein & Intensivkurse in Kiel',
    template: '%s | Fahrschule Speedlimit Kiel',
  },
  description:
    'Fahrschule Speedlimit Kiel: Führerschein Klasse B, B96 & BE. Intensivkurse, moderner AUDI-Fuhrpark & flexible Theorie. Jetzt anmelden!',
  keywords: [
    'Fahrschule Kiel',
    'Führerschein Kiel',
    'Intensivkurs Kiel',
    'Fahrschule Speedlimit',
    'Führerschein B Kiel',
    'Führerschein BF17',
    'Anhänger B96 BE Kiel',
  ],
  authors: [{ name: 'Fahrschule Speedlimit' }],
  creator: 'Fahrschule Speedlimit',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://fahrschule-speedlimit.de',
    siteName: 'Fahrschule Speedlimit',
    title: 'Fahrschule Speedlimit – Führerschein & Intensivkurse in Kiel',
    description:
      'Fahrschule Speedlimit Kiel: Führerschein Klasse B, B96 & BE. Intensivkurse, moderner AUDI-Fuhrpark & flexible Theorie. Jetzt anmelden!',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Fahrschule Speedlimit',
  telephone: '+4943138673777',
  email: 'info@fahrschule-speedlimit.de',
  url: 'https://fahrschule-speedlimit.de',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sophienblatt 46',
    postalCode: '24114',
    addressLocality: 'Kiel',
    addressCountry: 'DE',
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '13:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '13:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '13:00', closes: '19:00' },
  ],
  priceRange: '$$',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${montserrat.variable} ${openSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
