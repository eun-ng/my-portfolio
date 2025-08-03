---
title: '휴스테이션(Hustation)'
projectType:
  - 'Company'
period: '2023-02-20 - 2025-02-28'
stacks:
  - 'AWS'
  - 'CSS3'
  - 'Docker'
  - 'ESLint'
  - 'HTML5'
  - 'JavaScript'
  - 'Material UI'
  - 'Next.js'
  - 'Prettier'
  - 'React'
  - 'React Hook Form'
  - 'SCSS'
  - 'Storybook'
  - 'TanStack Query'
  - 'TypeScript'
  - 'Yup'
  - 'Zod'
  - 'Zustand'
  - 'tailwindcss'
  - 'webpack'
process: 'Done'
---

# 휴스테이션(Hustation)

## 1. 채용 관리 솔루션(ATS) MVP 신규 개발 및 디자인 시스템 개발

### 개요

기존 채용 솔루션 RAVIS, FAIRY의 장점과 채용 관리 솔루션(ATS)의 기능을 통합한 MVP(Minimum Viable Product) 제품 신규 개발

### 기간

2024.11. ~ 2025.01.

### **프로젝트 내역**

- 디자인팀과 디자인 시스템 설계 및 개발
  - 사내 자체 디자인 시스템 설계 및 개발
  - 공용으로 사용하는 컴포넌트 설계 및 개발
  - Storybook 도입하여 디자인 시스템 문서화
- UX/UI 설계 참여
  - 디자인 팀과 UX/UI 설계 참여
- 채용 자동화 처리를 위한 ATS 기능 개발
  - 지원자의 상태값에 따른 채용 과정 진행 자동화 기능 개발
  - 지원자 리스트 칸반/리스트 뷰로 전환하는 기능 개발
    - 칸반 뷰 Drag and Drop으로 구현
    - 리스트 뷰 Table로 구현
- front-end 설계, 개발, 유지보수, 배포
  - 로그인, 회원가입, 초대, 설정 페이지 등 개발
  - 프로젝트 개요 대시보드 기능 개발

### **기술 스택**

> Next.js v15, TypeScript, Design System, TanStack Query, React Hook Form, Zustand, Zod

---

## 2. **채용 솔루션 FAIRY 기업용 채용 홈페이지 마이그레이션**

### 개요

채용 솔루션 FAIRY 기업용 채용 홈페이지 마이그레이션

### 기간

2024.09. ~ 2024.10.

### **프로젝트 내역**

- Next.js v13 Pages Router → Next.js v14 App Router 마이그레이션
  - 폴더 기반 라우팅으로 직관적인 구조 파악 가능
  - 컴포넌트 계층 구조 나누어 관심사 분리
  - 기존 Container-Presenter으로 복잡했던 구조 개선
- 로컬 개발 환경 속도 개선
  - Next.js v13 → Next.js v14 turbopack 사용으로 로컬 개발 속도 증가
- 이미지, 폰트 최적화 문제 개선
  - Next.js v14 이미지, 폰트 최적화
  - 번들 사이즈 최적화
- 프리 렌더링&SEO 개선
  - Next.js Partial Rendering 활용하여 기업별 이름, 로고, 소개 등 동적인 컨텐츠들과 정적인 콘텐츠를 혼합하여 사용하는 페이지 성능을 최적화
  - 정적인 부분은 빌드 시점에 미리 렌더링하고, 동적인 부분만 런타임에 렌더링하여 초기 로딩 속도를 개선 및 SEO 개선
- UI 개선
- 공통 레이아웃 개선
  - 중첩된 레이아웃과 중구난방이던 레이아웃 전부 수정
  - 공통 레이아웃으로 전부 분리하여 재사용성 개선
- 부하 테스트 진행(k6)
  - k6를 통해 부하테스트를 진행하여 장애 개선

### **기술 스택**

> Next.js v14 App Router, TypeScript, Material UI, TanStack Query, React Hook Form, Zustand, Yup

---

## **3. 인성검사 설정 어드민 페이지 개발**

### 개요

인성검사 설정 어드민 페이지 개발

### 기간

2024.05. ~ 2024.08.

### **프로젝트 내역**

- 폴더 구조 설계 및 개발
- 레이아웃 설계 및 개발
- 컴포넌트 설계 및 개발
- 인성검사 설정 개발
  - 인성검사에 인성검사 문항 CRUD 기능 개발
  - 인성검사에 기업 추가 및 삭제 기능 개발
  - 인성검사 시간 설정 기능 개발
  - 인성검사 url 생성 및 접근 관리 기능 개발
- 기업 관리
  - 기업 추가 및 삭제 기능 개발
  - 기업 설정 및 관리 기능 개발
  - 기업 접근 관리 기능 개발
- 문항 관리
  - 리커트형 문항 관리
    - 문항 CRUD 기능 개발
    - 척도 CRUD 기능 개발
  - 선택형 문항 관리
    - 문항 CRUD 기능 개발
    - 척도 CRUD 기능 개발

### **기술 스택**

> Next.js v14 App Router, TypeScript, Material UI, TanStack Query, React Hook Form, Zustand, Yup

---

## 4. **자사 홈페이지 2차 리뉴얼, 자사 제품 소개 페이지 리뉴얼**

### 개요

자사 홈페이지 2차 리뉴얼, 자사 제품 소개 페이지 리뉴얼

### 기간

2024.01. ~ 2024.03.

### **프로젝트 내역**

- 자사 홈페이지 2차 리뉴얼
  - UI 전면 리뉴얼
    - 레이아웃 설계, 개발
    - 컴포넌트 설계, 개발
  - 채널톡 도입하여 VOC 해결 개선
  - Google Analytics 연동하여 마케팅 데이터 수집 개선
  - 신규 페이지 및 기능 개발
- RAVIS 제품 소개 페이지 리뉴얼
  - UI 전면 리뉴얼
    - 레이아웃 설계, 개발
    - 컴포넌트 설계, 개발
  - 채널톡 도입하여 VOC 해결 개선
  - Google Analytics 연동하여 마케팅 데이터 수집 개선
- FAIRY 제품 소개 페이지 리뉴얼
  - JavaScript → TypeScript 마이그레이션으로 안정성 개선
  - UI 전면 리뉴얼
    - 레이아웃 설계, 개발
    - 컴포넌트 설계, 개발
  - 채널톡 도입하여 VOC 해결 개선
  - Google Analytics 연동하여 마케팅 데이터 수집 개선
  - 신규 페이지 및 기능 개발

### **기술 스택**

> Next.js, React.js, TypeScript, Tailwind CSS

---

## **5. 채용 솔루션 FAIRY 개발**

### 개요

기존 채용 솔루션 RAVIS에서 고도화된 채용 솔루션 FAIRY 기능 개발 및 유지보수 진행

### 기간

2023.06. ~ 2024.12.

### **프로젝트 내역**

- FAIRY 기능 고도화
- 유지보수 진행
- 고객사 추가 기능 요청사항 개발, 유지보수
- 사내 추가 기능 요청사항 개발, 유지보수
- front-end 설계, 개발, 유지보수, 배포
- Regression Test 진행

### **기술 스택**

> React.js, JavaScript+TypeScript, Material UI, TanStack Query, React Hook Form, Zustand, Yup

---

## **6. 채용 솔루션 RAVIS 개발**

### 개요

채용 솔루션 RAVIS 기능 개발 및 유지보수 진행

### 기간

2023.06. ~ 2024.12.

### **프로젝트 내역**

- 기존 기능 고도화
- 고객사 추가 기능 요청사항 개발, 유지보수
- 사내 추가 기능 요청사항 개발, 유지보수
- front-end 설계, 개발, 유지보수, 배포
- Regression Test 진행

### **기술 스택**

> React.js, Material UI, TanStack Query, React Hook Form, Yup

---

### **7. 자사 홈페이지 신규 개발**

### 개요

자사 홈페이지 신규 개발

### 기간

2023.05. ~ 2023.05.

### **프로젝트 내역**

- 자사 홈페이지 신규 개발
  - 기존 CRA(Create-React-App)로 구축되어있던 프로젝트 개선 필요성 → Next.js로 신규 개발
  - JavaScript → TypeScript 마이그레이션으로 안정성 개선
  - 기존 CRA에 적용된 React Helmet → Next.js로 SEO 설정하여 개선
  - 레이아웃, 컴포넌트 도입하여 재사용성 개선
  - 신규 페이지 및 기능 개발

### **기술 스택**

> Next.js v13 App Router, TypeScript, Tailwind CSS

---

## 8. **채용 솔루션 RAVIS 기업용 채용 홈페이지 반응형 전환 및 유지보수**

### 개요

채용 솔루션 RAVIS의 기업용 채용 홈페이지 내 모든 영역 반응형 디자인으로 전환 및 유지보수

### 기간

2023.03. ~ 2023.04.

### **프로젝트 내역**

- 기존에는 반응형 디자인이 적용되지 않아 태블릿 크기 이하의 디바이스에서 사용시 애로사항 존재 → UI 라이브러리인 MUI(Material UI)와 반응형 처리를 위한 Media Query 사용하여 모든 페이지 반응형 디자인으로 전환
- 마이페이지 내 모든 메뉴 UI 리뉴얼 및 기능 추가
- 채용 공고 리스트 UI 리뉴얼 및 기능 추가
- 지원자 입사지원서 form 수정, 유효성 검사 개선
- 응시자 채용 진행 시 상태값에 따른 조건부 렌더링 추가

### **기술 스택**

> React.js, Material UI, TanStack Query, React Hook Form, Zustand, Yup
