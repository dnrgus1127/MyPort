import { RepositoryConstant } from "types/Project";

export const PROJECT_INFOMATION: Array<RepositoryConstant> = [
  {
    name: "MyPort",
    alternateTitle: "Port Folio",
    stacks: ["React", "Javascript", "typescript"],
    library: ["react-query", "react-router-dom", "Redux", "styled-component"],
    description: "개발자로서의 정욱현을 소개하는 포트폴리오 사이트. 현재 보고 있는 사이트 입니다.",
    whyDeveloped:
      "첫 리액트 프로젝트보다 자바스크립트를 더 깊게 공부한 뒤 제작한 리액트 프로젝트로 이전보다 리액트를 이해하는데 도움이 많이 되었습니다. \n 리액트 내장 훅들을 언제 어떨 때에 써야 하는지 학습할 수 있었고, Typescript를 도입하여 미흡하지만 타입스크립트를 학습하는데 도움이 되었습니다. ",
    functions: ["About Me", "기술 스택", "기술 블로그", "프로젝트 슬라이드", "Contacts"],
  },
  {
    name: "colorProject",
    alternateTitle: "Color Project",
    stacks: ["javascript"],
    description:
      "개발 혹은 디자인 작업 시에 필요한 색상 코드를 찾기 쉽게 도와주는 프로젝트입니다.\n 토이 프로젝트를 진행하면서 색상 디자인에 어려움을 겪었던 경험이 많아서 색상을 다루는 것에 좀 더 친숙해지고자 개발한 사이트 입니다.",
    whyDeveloped:
      "프로젝트를 진행하면서 자바스크립트 MDN과, 서적을 통해 학습하여 바닐라 자바스크립트의 기초 지식을 쌓는데 많은 도움이 되었습니다.",
    functions: ["RGB,HEX,색상이름(red,white, etc..) 기반 색상 검색", "명암별 색상 제공", "두 색상을 합성"],
  },

  {
    name: "ringblog",
    alternateTitle: "Ring Blog",
    stacks: ["React", "Express.js", "MySQL"],
    library: ["redux", "react-query", "react-router-dom", "React-markdown"],
    description:
      " 벨로그의 구성에 몇가지 기능을 추가해보고 디자인과 기능들을 수정해보며 제작한 사이트입니다.\n 리액트로 제작한 첫 프로젝트로 부족한 점이 많고 react의 훅을 적절히 사용하지 못했지만, 리액트를 익히는데 많은 도움이 된 프로젝트 입니다.",
    whyDeveloped:
      "블로그 서비스를 개발해 보며 프론트엔드와 백엔드 사이의 통신, 풀스택으로 개발해 보며 프론트엔드가 처리해야 하는 일, 백엔드가 처리해야 하는 일에 대해서 익힐 수 있었고, 마크다운 파싱, 소셜 로그인을 구현하는 방법, 서버가 데이터를 받거나 주는 방식 등에 대해서 경험하였습니다.",
    review:
      "React로 진행했던 첫 프로젝트, 포트폴리오 제작 시점에 봤을 때는 JS, React 둘 다에 대한 이해도가 많이 부족했다고 느껴진다. 하지만 프로젝트를 진행하면서 React, Express.js, RestAPI, 소셜 로그인, 마크다운, MySQL, Redux 등 다양한 부분에 대해서 지식을 쌓을 수 있었다.",
    functions: [
      "로그인 기능(소셜, 일반)",
      "블로그 포스팅",
      "구독, 좋아요, 댓글, 즐겨찾기 기능",
      "무한 스크롤 및 데이터 캐시",
      "마크다운 파싱 및 디자인",
    ],
  },
];

const common = {
  utils: "유틸 함수",
  "README.md": "프로젝트 설명",
  "readme.md": "프로젝트 설명",
  constans: "상수",
  fonts: "프로젝트 폰트 관련",
};

const reactCommon = {
  hooks: "React hooks",
  page: "Router 경로 페이지",
  redux: "리덕스 상태 관리",
  store: "리덕스 상태 관리 저장소",
  assets: "이미지, svg 아이콘 등",
  components: "재사용 컴포넌트",
};

const typescriptCommon = {
  types: "타입 정의",
};

export const PROJECT_DIRECTORY_DESCRIPTION: any = {
  colorProject: {
    ...common,
    handler: "이벤트 핸들러 함수들",
    core: "주요 기반 JS 클래스 및 상수",
    component: "컴포넌트들",
    browser: "safari, Edge 및 브라우저 호환성",
    store: "옵저버 패턴 상태 저장소",
    "script.js": "프로젝트 진입점",
  },
  MyPort: {
    ...common,
    ...reactCommon,
    ...typescriptCommon,
    components: "재사용 컴포넌트",
  },
};
