---
title: '파티모집(PartyMoZip)'
description: '팀 프로젝트로 만든 취미 공유 사이트'
projectType:
  - 'Team Project'
period: '2021-11-01 - 2021-12-03'
github: 'https://github.com/PartyMoZip/projectPM'
stacks:
  - 'AWS'
  - 'CSS3'
  - 'HTML5'
  - 'Java/Spring'
  - 'JavaScript'
  - 'Oracle'
  - 'Socket.IO'
process: 'Done'
---

# 파티모집(PartyMoZip)

## 프로젝트명

파티모집(PartyMoZip)

## 개발 기간

2021.11.01 ~ 2021.12.03

## 참여 인원

담당 - 프론트엔드

팀원 5명(프론트엔드 2명, 백엔드 3명)

## 개발 환경

- OS : Windows10
- Java 11, Spring MVC, JSP, Mybatis
- HTML5, CSS3, Bootstrap
- Javascript, jQuery, Ajax
- Tomcat 9, WebSocket
- Oracle Cloud, AWS Bucket S3, Oracle SQL Developer
- API - Sweet Alert, Full Calendar, Kakao Auth, Naver Auth
- Tools - Git, Github, Sourcetree, IntelliJ, Eclipse, sts, Notion

## GitHub

[GitHub - PartyMoZip/projectPM: 파티를 모집하는 웹 사이트 프로젝트](https://github.com/PartyMoZip/projectPM)

## 스토리보드

[스토리보드(partymozip).pdf](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/partymozip/%E1%84%89%E1%85%B3%E1%84%90%E1%85%A9%E1%84%85%E1%85%B5%E1%84%87%E1%85%A9%E1%84%83%E1%85%B3%28partymozip%29.pdf)

## 서비스 기획서

[서비스\_기획서(partymozip).pdf](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/partymozip/%E1%84%89%E1%85%A5%E1%84%87%E1%85%B5%E1%84%89%E1%85%B3_%E1%84%80%E1%85%B5%E1%84%92%E1%85%AC%E1%86%A8%E1%84%89%E1%85%A5%28partymozip%29.pdf)

## 개발 개요

취미 공유 사이트

## 담당 업무

- 아이디어 재고
- 관리자 페이지
- 파티 상세정보 모달 창
- 파티 메인 페이지
- 파티 생성 배너
- 파티 생성 페이지
- 발표 자료(ppt)

## 발표 자료

[발표\_자료(partymozip).pdf](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/partymozip/%E1%84%87%E1%85%A1%E1%86%AF%E1%84%91%E1%85%AD_%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD%28partymozip%29.pdf)

## 프로젝트 개요

![screenshot_1.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/partymozip/screenshot_1.png)

파티모집은 취미를 공유하는 파티 모집 웹 사이트 입니다.

제작하게 된 배경은 기존 취미 공유, 미팅 관련한 서비스를 하는 모바일 어플리케이션은 많지만 웹 서비스는 커뮤니티, 카페 등을 제외하면 서비스가 없다시피하여 개발하게 되었습니다.

기존에 존재하던 모바일 어플리케이션 환경을 웹으로도 구현해서 이용하게끔 구현하며 진행하였습니다.

## 프로젝트 시연 영상

[https://www.youtube.com/watch?v=q76cqnOS1zA](https://www.youtube.com/watch?v=q76cqnOS1zA)

## 프로젝트 상세 설명

프로젝트 시연 이후 더미데이터가 다 삭제된 상황에서 캡처한 것입니다. 양해 부탁드립니다.

### 메인 페이지

![screenshot_1.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/partymozip/screenshot_1.png)

![screenshot_2.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/partymozip/screenshot_2.png)

> **설명**

가장 기본이 되는 메인페이지입니다. 헤더에 네비게이션 바를 삽입하여 빠르게 메뉴에 접근할 수 있도록 하였고 관리자 계정이 아닐 시, 관리자 메뉴가 노출되지 않도록 했습니다.

팀 내에 디자이너가 없어서, 페이지 내 모든 디자인을 프론트 단에서 피그마로 초기 모델을 잡고 개발 진행했습니다.

메인 이미지는 Bootstrap Carousel 기능을 이용하여 구현하였고, 검색창은 헤더에 하나, 홈페이지 중앙에 하나 배치하여 접근성을 편하게 하였습니다.

메인페이지 중앙 검색창 밑에는 가장 활동 점수가 높은 파티 3개가 출력되게 설정하였고, 그 밑에는 취미별로 파티를 선택할 수 있게 옵션을 제공했습니다. Bootstrap을 이용하여 Swipe 기능이 탑재되어있습니다.

메인페이지 우측에는 파티 생성을 할 수 있는 배너를 만들었으며 css를 통해 hover 효과를 입혔고, `JavaScript`를 이용하여 사용자의 스크롤에 따라 같이 움직일 수 있게 설정하였습니다.

최대한 UI를 깔끔하게 배치하여 사용자가 직관적으로 사용할 수 있게 하는데 배치 신경을 썼으며, 빠른 신규 유입을 재고하기 위해 회원가입 배너를 따로 빼서 배치하여 유저 접근성을 고려했습니다.

---

### 로그인 페이지

![screenshot_3.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/partymozip/screenshot_3.png)

> **설명**

사용자가 편리하게 회원 가입할 수 있도록 카카오, 네이버 auth API를 이용하여 접근성을 높였습니다.

---

### 관리자 페이지

![screenshot_4.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/partymozip/screenshot_4.png)

> **설명**

관리자 페이지로 일반 회원들의 접근은 막았으며, 관리자 페이지에는 3가지의 탭이 존재합니다.

**파티관리 탭**: 현재 생성된 파티 목록과 파티 정보를 출력해주며 체크박스를 통해 관리자 권한으로 파티를 강제 해체 시킬 수 있는 기능을 추가하였습니다.

**파티해체 승인 요청 탭**: 파티해체를 하기 위해서는 관리자의 승인이 필요하며(무분별하게 파티 생성, 해체하는 것을 미연에 방지하기 위함) 파티장만이 파티해체 요청을 보낼 수 있습니다. 관리자가 파티해체 승인 요청 탭에 있는 요청들을 체크박스를 통해 직접 승인을 해야 비로소 파티가 해체됩니다.

**블랙파티리스트 관리**: 운영규정 위반을 통해 블랙파티리스트에 등재된 파티는 활동이 정지됩니다. 관리자의 권한으로 블랙리스트에서 해체하거나, 파티를 강제 해체시키는 기능을 수행할 수 있는 탭입니다.

> **아쉬운 점**

블랙회원 추가 등 조금 더 디테일한 기능들을 추가하고 싶었지만 시간적인 한계로 추가 못한 아쉬움이 있습니다.

---

### 파티 상세정보 모달 창

![screenshot_5.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/partymozip/screenshot_5.png)

> **설명**

파티 목록에서 view 버튼을 클릭하면 파티 상세정보 모달창을 출력해줍니다.

상세정보 모달창에는 파티 이름, 파티 카테고리, 파티 소개글, 파티 태그, 버튼들을 배치해놨습니다.

모달처리 되어있어, 모달 이외의 부분 클릭시 자동으로 모달이 닫힙니다.

파티 미신청 상태라면 초록색 배경의 ‘파티신청’ 버튼을 출력해주며 파티 신청 후 대기 상태라면 빨간색 배경의 ‘신청 취소’ 버튼을 출력해줍니다. 이는 `JavaScript`와 `css`로 처리하였습니다.

‘파티신청’, ‘신청취소’ 각각 기능을 수행하고나면 사용자도 조금 더 직관적으로 파악할 수 있도록 alert 창을 출력해줍니다. alert 창은 라이브러리인 sweet alert2를 사용했습니다.

---

### 파티생성 페이지

![screenshot_6.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/partymozip/screenshot_6.png)

> **설명**

메인페이지에서 파티생성 배너 클릭시 파티생성 페이지로 연결됩니다.

파티 생성 페이지에는 파티 메인 이미지, 파티 활동 지역 카테고리, 파티 이름, 파티 소개글, 취미 카테고리를 설정할 수 있습니다. 지역 카테고리는 Bootstrap의 Dropdown 기능을 이용하였고, 취미 카테고리는 Bootstrap 버튼을 커스텀하여 직접 만들었습니다.

> **고민했던 부분**

취미 카테고리 UI를 어떤 식으로 배치할지가 가장 고민이었습니다. 평소 자주 방문하는 사이트인 ‘인프런’의 카테고리들을 참고해서 UI 배치를 했습니다.

---

### 파티메인 페이지 - 메인 탭

![screenshot_7.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/partymozip/screenshot_7.png)

> **설명**

파티메인 페이지입니다.

파티메인 페이지에는 파티페이지 내의 탭과, 기본 파티 정보를 출력합니다.

파티메인 페이지는 파티장, 파티원, 관리자 외 비회원은 접근이 불가합니다.

> **고민했던 부분**

가장 많이 UI 배치 고민을 했던 부분입니다.

좀 더 깔끔하고 직관적인 UI 배치를 위해 다른 레퍼런스들을 많이 참고했습니다.

파티원들만 쓸 수 있는 페이지이기에 소속감을 위해 Header, Footer 이외에는 파티 정보만 담도록 UI 배치했습니다.

처음에는 파티 일정 기능을 메인 페이지 하단에 따로 배치했었습니다. 하지만 탭으로 따로 빼는 것이 더 직관적일 것 같아서 삭제한 후 따로 빼게 되었습니다.

---

### 파티메인 페이지 - 파티관리 탭

![screenshot_8.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/partymozip/screenshot_8.png)

![screenshot_9.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/partymozip/screenshot_9.png)

> **설명**

파티관리 탭은 파티장의 권한이 있는 사람만이 접근할 수 있으며 파티장(1), 파티원(2), 신청 대기 중인 회원(-1)은 DB에 각각 다른 Auth Code로 저장되며 이에 따라 접근 권한이 달라집니다.

파티장은 파티 당 1명만 존재할 수 있으며 파티장은 파티관리 탭에 접근하여 파티 정보를 수정할 수 있고, 파티승인 요청을 통해 파티에 가입되는 인원을 조절할 수 있습니다. 또한, 파티장만이 파티 해체하기 버튼을 클릭하여 관리자에게 파티해체 승인 요청을 보낼 수 있습니다.

파티 해체는 가장 하단에 Collapse 버튼으로 구현 했으며, 펼칠 시 기본적인 안내사항과 함께 해체하기 버튼을 배치했습니다.

> **고민했던 부분**

접근 권한 부여를 어떤 식으로 해야할지 고민이 많았는데 조장의 제안으로 Auth Code를 활용하여 비교적 어렵지 않게 권한 부여를 할 수 있었습니다.

파티승인 요청 UI를 어떻게 할지 고민했었는데, 체크박스를 통해 전체 선택 및 개별 선택을 할 수 있어서 파티장의 재량에 따라 승인 요청을 조절할 수 있도록 UI 배치에 신경썼습니다.

---

### 파티메인 페이지 - 일정 탭

![screenshot_10.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/partymozip/screenshot_10.png)

![screenshot_11.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/partymozip/screenshot_11.png)

> **설명**

가장 힘들었던 부분입니다. 캘린더를 따로 구현하기에는 시간이 너무 부족해서, 라이브러리를 통해 구현했습니다.

일정 탭은 라이브러리 full calendar API를 활용하여 구현하였습니다.

요일을 클릭, 또는 드래그하여 일정을 입력할 수 있으며 삭제 또한 가능합니다. 클릭하여 입력시 하루에만 일정 등록이 가능하며 드래그 시 이틀 이상의 일정 등록이 가능합니다.

등록된 일정에는 일정 내용을 삽입할 수 있습니다.

하단에 가려진 전체 저장 버튼을 클릭하여 현재 내용들을 저장할 수 있습니다.

파티원 모두가 똑같은 일정을 보며 등록/수정/삭제가 가능하여 파티 참여율을 증가시킬 수 있습니다.

> **고민했던 부분**

처음에는 구현하기 힘들어서 기능을 덜어내자는 의견이 많았지만, 사람들이 모이는 사이트인만큼 일정 관리의 유무가 가장 중요하다고 생각하여 구현을 꼭 하고 싶었던 기능이었습니다.

---

### 파티메인 페이지 - 파티원 탭

> **설명**

파티원 탭은 현재 파티에 가입되어있는 파티원 목록을 전부 출력해줍니다.

파티원 탭은 파티장, 파티원 모두가 볼 수 있지만, 파티원은 단순 목록 조회만 가능하고 파티장은 파티원 추방 기능을 수행할 수 있습니다.

---

## 기타

### 일정관리

Notion을 이용하여 프로젝트 일정관리 및 진행상황을 공유했습니다.

체크박스 리스트를 만들어 구현해야할 기능들과 담당자를 넣어놓고, 해결될 경우 체크박스에 체크를 하는 식으로 기능 구현을 관리하여서 구현이 남은 기능들을 팀원끼리 공유하기 용이했습니다.

일정관리는 구글문서의 엑셀 파일을 이용해 관리하다가 최종 일정을 노션으로 옮겨와 공유하였습니다.

![screenshot_12.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/partymozip/screenshot_12.png)
