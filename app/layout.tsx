import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: 'Amit O P Sharma & Co | Chartered Accountant in Shillong',
  description:
    'Trusted Chartered Accountant firm in Shillong offering tax, GST, audit, accounting, and business advisory services for Meghalaya businesses and startups.',
  metadataBase: new URL('https://amitopsharma-co.example.com'),
  openGraph: {
    title: 'Amit O P Sharma & Co | Chartered Accountant in Shillong',
    description:
      'Trusted Chartered Accountant firm in Shillong offering tax, GST, audit, accounting, and business advisory services for Meghalaya businesses and startups.',
    type: 'website',
    url: 'https://amitopsharma-co.example.com',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
        alt: 'Chartered Accountant firm office'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amit O P Sharma & Co | Chartered Accountant in Shillong',
    description:
      'Trusted Chartered Accountant firm in Shillong offering tax, GST, audit, accounting, and business advisory services for Meghalaya businesses and startups.'
  }
};

import WhatsAppButton from '@/components/WhatsAppButton';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
