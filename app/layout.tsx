import './globals.css';
import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import Script from 'next/script';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { ThemeProvider } from '@/components/theme/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'RH Dynamics - Leading Software Development Company in Northeast India',
  description:
    'RH Dynamics is a premier software development company based in Guwahati, Assam, specializing in web development, mobile apps, and IT consulting services.',
  icons: {
    icon: [
      { url: '/icons/favicon.ico', sizes: '16x16 32x32 48x48' }
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ]
  },
  themeColor: '#ffffff',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-ZX1ZT17H70"
        />
        <Script
          id="google-analytics-and-ads"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZX1ZT17H70');
              gtag('config', 'AW-11332621315');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${roboto.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
