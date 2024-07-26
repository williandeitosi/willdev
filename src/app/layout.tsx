import Footer from '@/components/footer/footer';
import ToggleColorMode, {
  ThemeToggle,
} from '@/components/header/toggleColorMode';
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
        <ToggleColorMode>
          <ThemeToggle />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </ToggleColorMode>
      </body>
    </html>
  );
}
