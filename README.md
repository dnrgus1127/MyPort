# 정욱현 포트폴리오

<img src="https://github.com/dnrgus1127/MyPort/assets/65962363/f6381cf7-acf4-4332-bfe0-3a869c688401" width="45%" alt="about"/>
<img src="https://github.com/dnrgus1127/MyPort/assets/65962363/7fdd67c0-dbfd-4ce7-934c-b66d5e371887" width="45%" alt="slide"/>

---

> 개발자로서의 정욱현을 소개하는 포트폴리오 사이트.<br/>
> 개발 기간 : 2023.11.18 ~ 2023.12.31

## 개발 목적

프론트엔드 개발자 정욱현에 대해서 소개하기 위해서 개발한 사이트.

---

## 스택

### Markup, Style

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=javascript&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=javascript&logoColor=white">
<img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=javascript&logoColor=white">

### Languages, Libraries, Frameworks

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=javascript&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=javascript&logoColor=white">
<img src="https://img.shields.io/badge/react router-CA4245?style=for-the-badge&logo=javascript&logoColor=white">
<img src="https://img.shields.io/badge/react query-FF4154?style=for-the-badge&logo=javascript&logoColor=white">
<img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=javascript&logoColor=white">
<img src="https://img.shields.io/badge/styled component-DB7093?style=for-the-badge&logo=javascript&logoColor=white">

### Environment

<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
<img src="https://img.shields.io/badge/visual studio code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

### Distribution

<img src="https://img.shields.io/badge/github pages-222222?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/amazon ec2-FF9900?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/amazon route53-8C4FFF?style=for-the-badge&logo=github&logoColor=white">

---

# 프로젝트 특징

## 개발

- 프로젝트에 Typescript를 적용하여 Typescript에 대한 학습을 진행하였고, 프로젝트의 안정성을 상승시켰습니다.
- React router (v6.4 이후) 라이브러리를 이용하여 React Router의 새로운 Data API에 대해서 경험을 쌓을 수 있었습니다.
- Tanstack Query 라이브러리를 이용한 쿼리 캐싱을 통해서 불필요한 통신 낭비를 줄이고 사용자의 페이지 접근 속도를 향상시켰습니다.
- 풀페이지 스크롤(원 페이지 스크롤)를 외부 라이브러리 도움 없이 구현해보며 스크롤, 터치, 휠 이벤트 및 각 이벤트들의 전파 등에 대해 학습할수 있었습니다.

## 배포

- 프로젝트 배포 과정에서 Github API 서버에 대한 CORS 및 API 요청 제한을 해결하기 위해서 프록시 서버를 구성하였습니다.
- https가 적용되지 않은 프록시 서버로 인해 발생하는 Mix-contents 에러를 해결하기 위해 AWS Route53과 CloudFront를 이용한 https 우회를 적용하였습니다.

## 사용 라이브러리

- react-router-dom
- lodash
- react-markdown (+ remark-gfm)
- react-syntax-highlighter

---

# 디렉터리 구조

```dir
├── public
├── src
|  ├─ assets // 이미지, svg 아이콘 등
|  ├─ components // 재사용 컴포넌트
|  ├─ constans //상수
|  ├─ pages // route page 컴포넌트
|  ├─ hooks //React hooks
|  ├─ utils //유틸 함수
|  ├─ types // 타입 관련 정의, 함수
|  ├─ stlyes // styled-component 관련 함수, 키프레임, 스타일드 컴포넌트
|  ─ index.tsx
|  ─ HomePage.tsx
|  ─ App.css
|  ─ index.css
└──
```

---

# 추가할 기능 혹은 수정 예정 사항

- github 정적 블로그를 개설하여 Blog를 연동시키는 기능
- blog/main, post 경로에서 로딩이 적용되지 않는 문제
- about Page 디자인 수정
