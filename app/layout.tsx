import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import GoogleAnalytics from './components/Analytics';

const pretendard = localFont({
  src: [
    {
      path: '../public/fonts/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-pretendard',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Eun-Ng',
  description:
    '사용자를 위한 UX와 동료 개발자들을 위한 DX 개선을 지향하는 프론트엔드 개발자 남궁은의 포트폴리오입니다.',
  keywords: ['남궁은', '프론트엔드', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS', '포트폴리오', '개발자'],
  authors: [{ name: '남궁은', url: 'https://github.com/Eun-Ng' }],
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
    title: '남궁은 | Front End Developer',
    description: '사용자를 위한 UX와 동료 개발자들을 위한 DX 개선을 지향하는 프론트엔드 개발자',
    url: 'https://eunng.com',
    siteName: '남궁은 포트폴리오',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '남궁은 - Front End Developer',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '남궁은 | Front End Developer',
    description: '사용자를 위한 UX와 동료 개발자들을 위한 DX 개선을 지향하는 프론트엔드 개발자',
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
    <html lang="ko">
      <body className={`${pretendard.variable} antialiased font-sans`}>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
