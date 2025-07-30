---
title: 'Slack Clone'
description: '슬랙 클론 프로젝트'
projectType:
  - 'Toy Project'
period: '2022-10-28 - 2022-12-04'
github: 'https://github.com/eun-ng/slack_clone.git'
stacks:
  - 'Babel'
  - 'ESLint'
  - 'HTML5'
  - 'MySQL'
  - 'Prettier'
  - 'React'
  - 'SWR'
  - 'Socket.IO'
  - 'TypeScript'
  - 'emotion'
  - 'webpack'
process: 'Done'
---

# Slack Clone

## 개발 기간

2022.10.28 ~ 2022.12.04

## 개발 환경

- OS : MacOS
- Stacks: HTML5, emotion, TypeScript, React.js, Prettier, ESLint, webpack, Babel, SWR, Socket.IO, MySQL
- Tools: Git, Github, GitKraken, WebStorm, Visual Studio Code

## 프로젝트 개요

`TypeScript`와 `React`를 사용해서 만든 슬랙 클론 프로젝트입니다.

## 프로젝트 상세 설명

- 프론트단은 `TypeScript`와 `React`를 사용했고, 백엔드는 실제 프론트 업무처럼 만들어져있는 백엔드 로직에 API 명세를 통해 데이터를 주고 받았습니다.
- `css`는 비교적 사용하기 쉬운 `emotion`을 사용했습니다.
- 상태 관리는 `Redux` 대신 사용하기 용이하고, 코드가 길어지지 않는 Vercel의 `SWR`을 사용했습니다.
- CRA(Create-React-App)를 사용하지 않고 `webpack`, `prettier`, `eslint`, tsconfig 설정 및 `webpack` 빌드를 직접 진행하여 BoilerPlate를 만들었습니다.

### 폴더 구조

![screenshot_1.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/slack_clone/screenshot_1.png)

- **components**: 재사용성을 위해 최대한 작은 단위로 쪼개 분리된 컴포넌트들이 모여있습니다.
- **hooks**: Custom Hooks가 모여있는 디렉토리입니다.
- **layouts**: 가장 큰 골자가 되는 App과 Workspace layout을 분리했습니다.
- **pages**: 라우팅 처리되는 LogIn, SignUp, Channel, DM 페이지로 분리했습니다.
- **typings**: db에서 불러오는 interface 타입들이 명시된 파일을 분리해놨습니다.
- **utils**: 부가적인 기능을 하는 함수들을 따로 분리해놨습니다.

### 시연 영상

[2022-12-13 03-05-43.mp4](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/slack_clone/2022-12-13_03-05-43.mp4)

### Login

> **설명**

![screenshot_2.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/slack_clone/screenshot_2.png)

![screenshot_3.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/slack_clone/screenshot_3.png)

로그인 페이지입니다. 로그인이 안되어 있을시 자동으로 로그인 페이지로 Redirect 됩니다.

로그인 완료 시 로그인 상태는 세션을 통해 유지합니다.

input 창에 유효성 검사를 적용했으며 잘못된 이메일 입력시, 이메일 주소와 비밀번호 둘 중 하나라도 다를 시 에러 메시지를 나타냅니다.

### Signup

> **설명**

![screenshot_4.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/slack_clone/screenshot_4.png)

![screenshot_5.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/slack_clone/screenshot_5.png)

인풋 창이 비어있을 시 에러 메시지를 출력 하며, 회원가입 되지 않습니다.

이미 가입되어 있는 이메일 일때도 역시 에러 메시지 출력해주며 회원가입 되지 않습니다.

회원가입에 성공하면, 성공 메시지 출력해주며 로그인 페이지로 안내합니다.

### Workspace

> **설명**

![screenshot_6.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/slack_clone/screenshot_6.png)

로그인 완료 시 default workspace 페이지의 일반 채널로 Redirect 됩니다.

프로필 이미지 클릭 시, 모달 창이 띄워집니다.

![screenshot_7.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/slack_clone/screenshot_7.png)

모달 창에는 현재 유저의 상태와 프로필 이미지, 로그아웃 버튼이 있습니다. 모달 외부를 클릭하면 숨김 처리 됩니다. 로그아웃 버튼 클릭 시 세션 반납 되며 로그아웃 처리된 후 로그인 페이지로 Redirect 됩니다.

다음은 워크스페이스 영역입니다.

![screenshot_8.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/slack_clone/screenshot_8.png)

제일 좌측부터 워크스페이스 영역입니다. 유저가 속해있는 워크스페이스들이 나열됩니다.

워크스페이스 버튼 클릭 시 해당 워크스페이스로 url이 변경되며 워크스페이스 전환됩니다.

워크스페이스 전환 시 워크스페이스 내의 Channels 목록, DM 유저 목록 또한 변경됩니다.

워크스페이스 전환시 SPA의 장점으로 화면 깜박임 없이 전환 됩니다.

- 버튼 클릭 시 워크스페이스를 생성할 수 있는 모달이 띄워집니다.

![screenshot_9.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/slack_clone/screenshot_9.png)

![screenshot_10.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/slack_clone/screenshot_10.png)

워크스페이스의 이름과, url을 입력하면 해당 워크스페이스가 생성됩니다.

만약, 이미 사용중인 이름 또는 url일 경우 예외 처리하여 화면 하단 정중앙에 toast 에러 메시지를 출력해줍니다.

toast 메시지는 toastify 라는 라이브러리를 사용하여 구현했습니다.

다음은 채널 영역입니다.

![screenshot_11.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/slack_clone/screenshot_11.png)

워크스페이스 버튼과 마찬가지로 채널 클릭시 해당 채널로 url이 변경 되며, 채널 전환됩니다.

워크스페이스와 마찬가지로 채널 또한 유저가 초대되어있는 채널 목록들만 보여줍니다. 해당 채널에 유저가 없을 시 그 채널은 숨김 처리합니다.

collapse 버튼을 적용하여 메뉴 토글 시 메뉴 숨김&보임 처리가 가능합니다.

다음은 다이렉트 메시지 영역입니다.

![screenshot_12.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/slack_clone/screenshot_12.png)

현재 워크스페이스에 존재하는 모든 유저 목록을 보여주며, 접속 중인 유저는 초록 불로 활동 중임을 알려줍니다.

해당 유저 클릭시 둘만 소통할 수 있는 다이렉트 메시지 목록으로 전환됩니다.

collapse 버튼을 적용하여 메뉴 토글 시 메뉴 숨김&보임 처리가 가능합니다.

### Chat

> **설명**

채널 채팅 화면입니다.

![screenshot_13.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/slack_clone/screenshot_13.png)

최상단 좌측에는 현재 채널의 이름이, 우측에는 현재 채널의 유저 수와 채널 초대 버튼이 있습니다.

채널 초대 버튼 클릭시 모달이 띄워지며, 초대하고자 하는 유저의 이메일을 입력하면 해당 채널로 초대됩니다.

![screenshot_14.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/slack_clone/screenshot_14.png)

만약, 이미 존재하는 유저를 초대하려는 경우 에러 처리하여 alert 창을 띄워줍니다.

alert 창은 라이브러리인 sweet-alert2를 사용했습니다.

![screenshot_15.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/slack_clone/screenshot_15.png)

채팅 목록입니다.

![screenshot_16.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/slack_clone/screenshot_16.png)

채팅 목록에는 채팅을 한 유저의 프로필 이미지, 닉네임, 채팅을 보낸 시각, 채팅 내역이 나타납니다.

react-mentions 라이브러리를 사용하여 멘션 기능을 구현하였습니다.

‘@’가 트리거가 되어 현재 워크스페이스에 있는 유저들의 목록을 출력해주고, 멘션된 채팅을 클릭하면 해당 유저와의 DM 채팅으로 바로 연결됩니다.

![screenshot_17.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/slack_clone/screenshot_17.png)

채팅은 날짜별로 그룹화 되어 표시됩니다.

날짜관련 라이브러리는 dayjs를 사용했습니다.

날짜 표시는 sticky 처리 되어 유저의 스크롤에 반응합니다.

채팅 목록 스크롤 바는 react-custom-scrollbars-2 라이브러리를 사용했습니다.

autoHide 옵션을 사용하여, 유저의 조작이 없으면 스크롤 바는 자동으로 숨김 처리 됩니다.

![screenshot_18.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/slack_clone/screenshot_18.png)

사용자가 지난 채팅 내역을 읽고 있던 도중 다른 유저에게 채팅이 올때마다 스크롤이 하단으로 내려가 렌더링 된다면 굉장히 불편할 것입니다.

이를 해결하기 위해, 총 스크롤의 길이를 구해서 현재 사용자의 스크롤 길이가 최하단이 아닐 시, 사용자가 지난 채팅 내역들을 읽고 있다고 판단하여 다른 유저들의 채팅이 전송될 시 스크롤이 강제로 아래로 움직이지 않도록 설정했습니다.

또한, 지난 채팅 내역들을 읽고 있다가 다른 유저에게 채팅이 온다면 하단에 toast 메시지를 띄워 사용자에게 채팅이 왔음을 알리는 동시에 사용자가 toast 메시지를 클릭 시 채팅 스크롤이 최하단으로 위치하도록 onClick 이벤트를 걸었습니다.

![screenshot_19.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/slack_clone/screenshot_19.png)

다음은 인피니티 스크롤링입니다.

지난 채팅 내역을 보기위해 인피니티 스크롤링을 아래가 아닌 위쪽 방향으로 적용했습니다.

스크롤 바를 위로 올리면 과거의 채팅 내역이 자동으로 렌더링 되어 나타납니다.

제일 상단에 도착시, 최상단임을 인지하고 스크롤링은 더 이상 위쪽으로 동작되지 않습니다.

인피니티 스크롤링은 swr에서 제공하는 메서드인 useSWRInfinite 메서드를 이용해 구현했습니다.

useSWRInfinite 메서드를 통해 받아온 이차원 배열 데이터를 flat 메서드와 reverse 메서드를 사용해 1차원 배열화 시킨 뒤, 뒤집어 위쪽 방향으로 인피니티 스크롤링을 적용했습니다.

isEmpty는 chatData가 0일때만 true가 됩니다.

isReachingEnd는 기본 값 false를 제외하고 둘 중 한 조건이라도 true여야 true를 반환합니다.

chatData는 채팅 메시지를 20개씩 카운트하여 배열에 담습니다. 채팅 메시지가 20개 미만이라면 모든 채팅 메시지를 불러왔기에 스크롤이 최상단에 도착했다는 것을 알 수있습니다.

isEmpty가 true거나, 스크롤이 최상단이라면 isReachingEnd는 true를 반환합니다.

![screenshot_20.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/slack_clone/screenshot_20.png)

ChatList 컴포넌트에서는 조건절에서 scrollTop === 0 즉, 스크롤의 끝 지점이고, !isReachingEnd가 true 값을 반환할때 이전 페이지의 prevSize에 +1 페이지 하는 식으로 무한 스크롤링 됩니다.

isReachingEnd에 true 값이 넘어와서, !isReachingEnd가 false 값이라면 더 이상 불러올 데이터가 없기에 무한 스크롤링은 중단됩니다.

![screenshot_21.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/slack_clone/screenshot_21.png)

다음은 다이렉트 메시지 화면입니다.

![screenshot_22.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/slack_clone/screenshot_22.png)

최상단에는 대화 중인 상대방의 프로필 이미지와 닉네임이 표시됩니다.

채널 채팅과는 달리 유저 일대일로 소통하는 공간이기에 초대 버튼과 유저 수는 렌더링 되지 않습니다.

이외의 기능은 채널 채팅과 동일합니다.

## **기타 설정**

### Custom Hook

> **설명**

![screenshot_23.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/slack_clone/screenshot_23.png)

state 이외에 handler까지 받는 hook이 필요해 Custom Hook을 만들어 사용했습니다.

```tsx
import useInput from '@hooks/useInput';

// EX
const [chat, onChangeChat, setChat] = useInput('');
```

### App 페이지 라우팅 부분

> **설명**

![screenshot_24.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/slack_clone/screenshot_24.png)

loadable 라이브러리를 통해 페이지 컴포넌트들을 스플리팅 해주었습니다.

처음부터 모든 페이지들을 import 하지않고, 필요할때만 동적으로 import하여 성능을 개선했습니다.

### webpack.config alias 설정

> **설명**

![screenshot_25.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/slack_clone/screenshot_25.png)

webpack.config에서 alias 옵션을 이용해 import 구문 path를 축약하여 사용성을 개선했습니다.

### webpack.config devServer proxy 설정

> **설명**

![screenshot_26.png](https://pbnorsjxdmnytmjr.public.blob.vercel-storage.com/slack_clone/screenshot_26.png)

프론트 서버의 경우 localhost:3090을 사용 중이고, 백 서버의 경우 localhost:3095 포트 번호를 사용 중입니다. 프론트에서 백단으로 요청을 보낼시 포트 번호가 달라 CORS 에러가 나타나겠지만, 프록시 설정을 통해 해결했습니다(localhost에서만 사용할 수 있는 방법임을 인지하고 있습니다).
