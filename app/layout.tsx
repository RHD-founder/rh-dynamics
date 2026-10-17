import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter, Roboto } from 'next/font/google';
import Script from 'next/script';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { JsonLd } from '@/components/seo/json-ld';
import { GlitchListener } from '@/components/ui/glitch-listener';
import { VisitorTracker } from '@/components/telemetry/visitor-tracker';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#090d16',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://rhdynamics.in'),
  title: {
    default: 'RH Dynamics | Best Software & Web Development Company in Guwahati, Assam',
    template: '%s | RH Dynamics',
  },
  description:
    'RH Dynamics is Northeast India\'s premier software company based in Guwahati, Assam. We build high-performance web applications, HSMS (Hospital Management Systems), Custom ERP software, mobile apps, and execute data-driven digital marketing across Assam, India & globally.',
  keywords: [
    // Local SEO (Guwahati, Assam, Northeast)
    'web development company in guwahati',
    'software company in guwahati',
    'website design company in assam',
    'best web developers in northeast india',
    'software development company northeast india',
    'website design guwahati',
    'it company in assam',
    'software company near downtown hospital guwahati',
    // Products & Solutions
    'hospital management system software hsms',
    'hsms software guwahati assam',
    'custom erp development company',
    'enterprise software development india',
    'custom business software solutions',
    'mobile app development guwahati',
    'react nextjs web developers india',
    'clinic management software',
    'rh core lis pathology lab software',
    'digital marketing agency guwahati assam'
  ],
  authors: [{ name: 'RH Dynamics', url: 'https://rhdynamics.in' }],
  creator: 'RH Dynamics',
  publisher: 'RH Dynamics',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://rhdynamics.in',
  },
  openGraph: {
    title: 'RH Dynamics | Leading Software, Web Development & HSMS in Guwahati, Assam',
    description:
      'Premier software engineering company in Guwahati, Assam. Custom software, HSMS Hospital Software, ERP systems, and web apps built for regional leaders and global scale.',
    url: 'https://rhdynamics.in',
    siteName: 'RH Dynamics',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'RH Dynamics - Leading Software and Web Development Company in Guwahati, Assam',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RH Dynamics | Software & Web Development in Guwahati, Assam',
    description:
      'Transforming businesses across Northeast India & globally with custom software, HSMS hospital systems, high-speed web apps, and digital dominance.',
    images: ['/opengraph-image'],
    creator: '@rhdynamics',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icons/favicon.ico', sizes: '16x16 32x32 48x48' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  verification: {
    other: {
      'msvalidate.01': '6F69BB940F846B6AB1706CB47002D58B',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="msvalidate.01" content="6F69BB940F846B6AB1706CB47002D58B" />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-ZX1ZT17H70'}`}
        />
        <Script
          id="google-analytics-and-ads"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-ZX1ZT17H70'}');
              gtag('config', 'AW-11332621315');
            `,
          }}
        />
        <JsonLd />
      </head>
      <body className={`${inter.variable} ${roboto.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
          <GlitchListener />
          <VisitorTracker />
        </ThemeProvider>
      </body>
    </html>
  );
}
