# 정욱현 포트폴리오

> 개발자로서의 정욱현을 소개하는 포트폴리오 사이트. <br/>
> 개발 기간 : 2023.11.18 ~ 2023.12.31

## 개발 목적

프론트엔드 개발자 정욱현에 대해서 소개하기 위해서 개발한 사이트.

# 프로젝트 특징

## 개발

- 프로젝트에 Typescript를 적용하여 Typescript에 대한 학습을 진행하였고, 프로젝트의 안정성을 상승시켰습니다.
- React router (v6.4 이후) 라이브러리를 이용하여 React Router의 새로운 Data API에 대해서 경험을 쌓을 수 있었습니다.
- Tanstack Query 라이브러리를 이용한 쿼리 캐싱을 통해서 불필요한 통신 낭비를 줄이고 사용자의 페이지 접근 속도를 향상시켰습니다.
- 풀페이지 스크롤(원 페이지 스크롤)를 외부 라이브러리 도움 없이 구현해보며 스크롤, 터치, 휠 이벤트 및 각 이벤트들의 전파 등에 대해 학습할수 있었습니다.

## 배포

- 프로젝트 배포 과정에서 Github API 서버에 대한 CORS 및 API 요청 제한을 해결하기 위해서 프록시 서버를 구성하였습니다.
- https가 적용되지 않은 프록시 서버로 인해 발생하는 Mix-contents 에러를 해결하기 위해 AWS Route53과 CloudFront를 이용한 https 우회를 적용하였습니다.

# 사용 라이브러리

- react-router-dom
- lodash
- react-markdown (+ remark-gfm)
- react-syntax-highlighter

# 디렉터리 구조

```dir

```

# 추가할 기능 혹은 수정 예정 사항

- github 정적 블로그를 개설하여 Blog를 연동시키는 기능
- blog/main, post 경로에서 로딩이 적용되지 않는 문제
- about Page 디자인 수정
