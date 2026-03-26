import type { Metadata } from 'next';
import { plusJakartaSans } from '@/lib/fonts';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/shared/WhatsAppButton';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Saytup.digital',
    default: 'Saytup.digital — Bakıda Peşəkar Sayt Hazırlanması',
  },
  description: 'Saytup.digital Bakıda kiçik və orta bizneslər üçün peşəkar veb sayt hazırlayan studiya. Korporativ saytlar, e-ticarət, landing page və daha çox. Pulsuz konsultasiya üçün müraciət edin.',
  keywords: ['sayt', 'sayt hazırlamaq', 'veb sayt', 'sayt sifarişi', 'Bakıda sayt hazırlayan şirkət', 'veb inkişaf', 'Azərbaycan'],
  openGraph: {
    type: 'website',
    locale: 'az_AZ',
    url: 'https://saytup.digital',
    siteName: 'Saytup.digital',
    title: 'Saytup.digital — Bakıda Peşəkar Sayt Hazırlanması',
    description: 'Bakıda kiçik və orta bizneslər üçün peşəkar veb sayt hazırlayan studiya.',
    images: [{ url: 'https://saytup.digital/og-image.jpg', width: 1200, height: 630, alt: 'Saytup.digital — Bakıda Peşəkar Sayt Hazırlanması' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saytup.digital — Bakıda Peşəkar Sayt Hazırlanması',
    description: 'Bakıda kiçik və orta bizneslər üçün peşəkar veb sayt hazırlayan studiya.',
    images: ['https://saytup.digital/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://saytup.digital',
    languages: {
      az: 'https://saytup.digital',
      'x-default': 'https://saytup.digital',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="az" className={plusJakartaSans.variable}>
      <body className="font-body antialiased" suppressHydrationWarning>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
