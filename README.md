# 포트폴리오

프론트엔드 개발자 남궁은의 개인 포트폴리오 사이트입니다.

## 🚀 기술 스택

- **프레임워크**: Next.js 15 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS, shadcn/ui
- **애니메이션**: Framer Motion
- **배포**: Vercel
- **폰트**: Pretendard

## ✨ 주요 기능

### 🎯 핵심 기능

- **마크다운 기반 컨텐츠**: 로컬 마크다운 파일을 통한 프로젝트 데이터 관리
- **Dynamic Route**: `/projects/[slug]` 경로로 프로젝트 상세 페이지 제공
- **Scroll Spy 네비게이션**: Scroll Spy 활용한 컨텐츠 네비게이션

### 🎨 디자인 & UX

- **다크/라이트 모드**: 사용자 선호에 따른 모드 전환
- **반응형 디자인**: 모바일 우선 설계로 모든 디바이스 완벽 대응
- **애니메이션**: Framer Motion 기반 인터랙션 효과
- **일관된 타이포그래피**: Pretendard 사용으로 통일화
- **shadcn/ui**: 일관된 디자인 시스템

### ⚡ 성능 최적화

- **정적 생성**: `generateStaticParams`를 통한 프로젝트 페이지 사전 빌드
- **이미지 최적화**: Next.js Image 컴포넌트 활용
- **폰트 최적화**: 로컬 폰트 파일 사용으로 빠른 로딩
- **번들 최적화**: Next.js code-splitting 및 Tree Shaking

### 🔧 개발 경험

- **TypeScript**: 타입 안정성 증가
- **Biome**: 빠른 린팅 및 포매팅
- **pnpm**: 효율적인 패키지 관리
- **App Router**: Next.js 15 App Router 활용한 폴더 구조 기반 라우팅
- **Server Components**: 서버 컴포넌트로 성능 최적화

### 📊 SEO & 분석

- **검색 엔진 최적화**: 메타데이터 및 사이트맵 최적화
- **Google Analytics**: 사용자 행동 분석 및 성과 측정
- **Core Web Vitals**: 웹 성능 지표 최적화

## 📱 주요 섹션

- **Intro**: 소개 및 핵심 역량
- **Career**: 업무 경험 및 주요 성과
- **Projects**: 개인/팀/회사 프로젝트 포트폴리오
  - 각 프로젝트는 마크다운 파일로 관리
  - `/projects/[slug]` 경로로 프로젝트 상세 페이지
  - 프로젝트 타입별 분류 (Company, Team Project, Toy Project)

## 🏗️ 프로젝트 구조

```
my-portfolio/
├── app/                      # Next.js App Router
│   ├── components/
│   │   ├── Analytics.tsx     # Google Analytics
│   │   ├── Gnb.tsx           # 글로벌 네비게이션 바
│   │   ├── ScrollSpyNav.tsx  # 스크롤 스파이 네비게이션
│   │   └── ThemeProvider.tsx # 다크/라이트 테마 프로바이더
│   ├── projects/[slug]/      # Dynamic Route 프로젝트 상세 페이지
│   ├── sections/             # 페이지 섹션 컴포넌트
│   │   ├── career/           # 경력 섹션
│   │   ├── intro.tsx         # 소개 섹션
│   │   └── project/          # 프로젝트 섹션
│   ├── globals.css           # 전역 스타일
│   ├── layout.tsx            # 루트 레이아웃
│   └── page.tsx              # 메인 페이지
├── components/               # 재사용 가능한 UI 컴포넌트
│   └── ui/                   # shadcn/ui + 커스텀 컴포넌트
├── constants/                # 상수 및 설정
│   ├── icons.tsx             # 소셜 아이콘
│   ├── navigation.ts         # 네비게이션 설정
│   └── project.ts            # 프로젝트 타입 설정
├── content/                  # 마크다운 컨텐츠
│   ├── company/              # 회사 프로젝트
│   ├── team-project/         # 팀 프로젝트
│   └── toy-project/          # 개인 프로젝트
├── hooks/                    # 커스텀 훅
│   ├── useHoverCard.ts       # 카드 호버 상태 훅
│   └── useScrollSpy.ts       # 스크롤 스파이 훅
├── lib/                      # 유틸리티 및 라이브러리
│   ├── projects.ts           # 마크다운 파일 로직
│   └── utils.ts              # 공통 유틸리티
└── public/                   # 정적 파일
    ├── fonts/                # 폰트 (Pretendard)
    ├── favicon.svg           # 파비콘
    ├── og-image.png          # OG 이미지
    └── sitemap.xml           # 사이트맵
```

## 🌐 배포 환경

- **Vercel**: 자동 배포 및 CDN 최적화
- **도메인**: 커스텀 도메인 연결
- **환경 변수**: Google Analytics 등 외부 서비스 연동
