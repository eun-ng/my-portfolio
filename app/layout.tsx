import type { Metadata } from 'next';
import './globals.css';

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
  metadataBase: new URL('https://my-domain.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '남궁은 | Front End Developer',
    description: '사용자를 위한 UX와 동료 개발자들을 위한 DX 개선을 지향하는 프론트엔드 개발자',
    url: 'https://my-domain.com',
    siteName: '남궁은 포트폴리오',
    images: [
      {
        url: '/og-image.svg',
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
    images: ['/og-image.svg'],
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
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
