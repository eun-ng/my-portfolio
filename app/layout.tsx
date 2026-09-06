import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import GoogleAnalytics from './components/Analytics';
import Gnb from './components/Gnb';
import { LiquidBackground } from './components/LiquidBackground';
import ThemeProvider from './components/ThemeProvider';

const pretendard = localFont({
  src: [
    {
      path: '../public/fonts/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-pretendard',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: '남궁은 | 포트폴리오',
  description: '개발자 남궁은입니다.',
  keywords: ['남궁은', '개발자', '소프트웨어 엔지니어', '프론트엔드', '백엔드'],
  authors: [{ name: '남궁은', url: 'https://github.com/eun-ng' }],
  creator: '남궁은',
  publisher: '남궁은',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://eunng.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '남궁은 | 개발자 포트폴리오',
    description: '개발자 남궁은입니다.',
    url: 'https://eun-ng.github.io/my-portfolio',
    siteName: '남궁은 포트폴리오',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '남궁은 - Developer',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '남궁은 | 개발자 포트폴리오',
    description: '개발자 남궁은입니다.',
    images: ['/og-image.png'],
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
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head />
      <body
        className={`${pretendard.variable} antialiased font-sans text-foreground transition-colors duration-500`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <LiquidBackground />
          <Gnb />
          {children}
          <GoogleAnalytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
