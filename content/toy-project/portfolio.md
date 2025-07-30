---
title: '포트폴리오 사이트'
description: 'Next.js 15와 TypeScript로 구축한 마크다운 기반 포트폴리오 사이트'
projectType:
  - 'Toy Project'
period: '2025-07-12 - 2025-07-30'
github: 'https://github.com/eun-ng/my-portfolio'
stacks:
  - 'Next.js'
  - 'TypeScript'
  - 'Tailwind CSS'
  - 'shadcn/ui'
  - 'Framer Motion'
  - 'Vercel'
  - 'ESLint'
  - 'Prettier'
process: 'Done'
---

# 개인 포트폴리오 사이트

## 프로젝트 개요

Next.js 15와 TypeScript를 활용하여 구축한 개인 포트폴리오 사이트입니다. 정적 컨텐츠가 많은 포트폴리오 사이트 특성상 마크다운을 활용해 컨텐츠를 관리했고, Next.js를 활용해 최적화와 SEO 성능을 개선했습니다.

## 개발 기간

2025.07.12 ~ 2025.07.30

## 🚀 기술 스택

- **프레임워크**: Next.js 15 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS, shadcn/ui
- **애니메이션**: Framer Motion
- **배포**: Vercel
- **폰트**: Pretendard
- **품질 관리**: ESLint, Prettier

## ✨ 주요 기능

### 🎯 핵심 기능

- **마크다운 기반 컨텐츠**: 로컬 마크다운 파일을 통한 프로젝트 데이터 관리
- **Dynamic Route**: `/projects/[slug]` 경로로 프로젝트 상세 페이지 제공
- **Scroll Spy 네비게이션**: Scroll Spy 활용한 컨텐츠 네비게이션

### 🎨 디자인 & UX

- **반응형 디자인**: 모바일 우선 설계로 모든 디바이스 완벽 대응
- **애니메이션**: Framer Motion 기반 인터랙션 효과
- **일관된 타이포그래피**: Pretendard 폰트 사용으로 통일화
- **shadcn/ui**: 일관된 디자인 시스템

### ⚡ 성능 최적화

- **정적 생성**: `generateStaticParams`를 통한 프로젝트 페이지 사전 빌드
- **이미지 최적화**: Next.js Image 컴포넌트 활용
- **폰트 최적화**: 로컬 폰트 파일 사용으로 빠른 로딩
- **번들 최적화**: Next.js code-splitting 및 Tree Shaking

### 🔧 개발 경험

- **TypeScript**: 타입 안정성 증가
- **ESLint**: 코드 품질 및 일관성 유지
- **App Router**: Next.js 15 App Router 활용한 폴더 구조 기반 라우팅
- **Server Components**: 서버 컴포넌트로 성능 최적화

### 📊 SEO & 분석

- **검색 엔진 최적화**: 메타데이터 및 사이트맵 최적화
- **Google Analytics**: 사용자 행동 분석 및 성과 측정
- **Core Web Vitals**: 웹 성능 지표 최적화

## 프로젝트 구조

```
my-portfolio/
├── app/                      # Next.js App Router
│   ├── components/
│   │   ├── Analytics.tsx     # Google Analytics
│   │   └── ScrollSpyNav.tsx  # 스크롤 스파이 네비게이션
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

## 마크다운 파일 구조

마크다운 컨텐츠는 다음과 같은 `front matter`를 가진 구조입니다.

```markdown
---
title: '프로젝트 제목'
description: '프로젝트 설명'
projectType: ['Company', 'Team Project', 'Toy Project']
period: '2025.06 - 2025.07'
stacks: ['React', 'Next.js', 'TypeScript']
url: 'https://my-url.com'
github: 'https://github.com/my/repo'
process: 'Done'
---

# 프로젝트 내용 (마크다운)

- nested list 지원
- 코드 블록 하이라이팅
- 이미지 및 링크 최적화
```

## 🎯 주요 개발 이슈 & 해결

### Notion API → 마크다운 시스템 전환

초기 Notion API 기반 시스템의 한계점 발견 후 마크다운 구조로 전환한 과정

#### 기존 문제점

- **성능 이슈**: Notion API 호출 지연 (평균 500-1000ms)
- **안정성 이슈**: 외부 API 의존성으로 인한 서비스 불안정성
- **복잡성**: 데이터 파싱 및 변환 로직의 복잡도 증가

#### 마크다운 전환 결과

- **성능 개선**: API 호출 제거로 응답 속도 50ms 이하로 개선
- **안정성 향상**: 외부 의존성 제거로 서비스 안정성 확보
- **유지보수성 향상**: 마크다운 기반 단순한 파일 구조로 관리 복잡도 감소

### Next.js 정적 생성 최적화

SEO 최적화와 성능 향상을 위한 정적 생성과 동적 라우팅 구현

#### 주요 구현사항

- `generateStaticParams`를 통한 빌드 타임 페이지 생성
- `generateMetadata`를 통한 동적 메타데이터 생성
- 마크다운 파일 기반 자동 경로 생성
- React `cache()` 함수를 활용한 파일 읽기 최적화

## 성과 지표

### 성능 지표 개선

- 응답 속도: Notion API 제거로 500-1000ms → **50ms 이하로 개선**
- 초기 로딩: Next.js 정적 생성으로 **평균 1초 이내 로딩**
- 번들 크기: Notion SDK 제거로 JavaScript 번들 크기 **약 100KB 감소**
- SEO 최적화: Google PageSpeed Insights **90점 이상**
