import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'willdev',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={inter.className}
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          padding: 0,
          margin: 0,
        }}
      >
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
