import type { Metadata } from 'next';
import { instrumentSans, dmSans } from '@/lib/fonts';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Saytup.az — Veb İnkişaf Studiyası',
    default: 'Saytup.az — Bakıda Veb İnkişaf Studiyası',
  },
  description: 'Saytup.az kiçik bizneslərin gözəl, sürətli və effektiv veb tətbiqlər işə salmasına kömək edən Bakıda veb inkişaf studiyasıdır.',
  keywords: ['veb inkişaf', 'Bakı', 'Azərbaycan', 'Next.js', 'veb dizayn', 'e-ticarət'],
  openGraph: {
    type: 'website',
    locale: 'az_AZ',
    url: 'https://saytup.az',
    siteName: 'Saytup.az',
    title: 'Saytup.az — Bakıda Veb İnkişaf Studiyası',
    description: 'Azərbaycanda və onun hüdudlarından kənarda kiçik bizneslər üçün gözəl, sürətli veb tətbiqlər qururuq.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saytup.az — Bakıda Veb İnkişaf Studiyası',
    description: 'Azərbaycanda və onun hüdudlarından kənarda kiçik bizneslər üçün gözəl, sürətli veb tətbiqlər qururuq.',
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
    <html lang="az" className={`${instrumentSans.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
