import { RepositoryConstant } from "types/Project";

export const PROJECT_INFOMATION: Array<RepositoryConstant> = [
  {
    name: "MyPort",
    alternateTitle: "Port Folio",
    stacks: ["React", "Javascript", "typescript"],
    library: ["react-query", "react-router-dom", "Redux", "styled-component"],
    description:
      "개발자로서의 정욱현을 소개하는 포트폴리오 사이트. Github API를 이용하여 프로젝트 README와 TIL 블로그를 구성하였습니다. ",
    whyDeveloped:
      "이전의 첫 리액트 프로젝트의 부족한 부분을 보완하고자 바닐라 자바스크립트와 리액트 DOCS의 내장 훅들에 대한 용도와 특징에 대해서 학습하는데 주력한뒤 개발한 프로젝트입니다. \n 프로젝트를 배포하는 과정에서 GITHUB API의 요청 제한과 CORS 에러에 대해서 고민하게 되었고, 프록시 서버를 도입하여 해결하는 과정에서 CORS 정책과 HTTPS 프로토콜의 중요성에 대해 알게 되었습니다. ",
    preview:
      "프론트엔드 개발자 정욱현 포트폴리오 사이트. 현재 보고있는 사이트 입니다. \n 풀페이지 스크롤을 직접 구현하여 전체 레이아웃을 구성하였고, transform3D와 같은 CSS를 이용하여 우주같은 디자인을 적용하고, Github API를 이용하여 Github TIL 데이터를 응답받아 TIL 블로그로 구현하였습니다.",
    functions: [
      "개발자 정욱현 소개 페이지",
      "기술 스택(언어, 프레임워크, 라이브러리,환경",
      "TIL 기술 블로그",
      "프로젝트 소개 및 Readme.md",
    ],
  },
  {
    name: "colorProject",
    alternateTitle: "Color Project",
    stacks: ["javascript"],
    description:
      "프로젝트 개발 및 디자인 작업 중에 필요한 색상을 찾는데 어려움을 겪는 사람들을 위해,\n 비슷한 색상, 명암을 고려해서 색상을 조합해볼 수 있는 기능을 제공하는 사이트입니다.\n 여러 토이 프로젝트를 진행하면서 색상 선택에 어려움을 겪었던 경험을 바탕으로 제작하게 된 사이트입니다. ",
    whyDeveloped:
      "프로젝트를 진행하면서 MDN과 자바스크립트 Deep Dive 서적을 통해 바닐라 자바스크립트를 깊게 공부하여 이 후 진행한 프로젝트들에 많은 도움이 되었습니다.\n  색상 상태 관리를 위해서 적용했던 옵저버 패턴은 추후 리덕스를 사용할 때 많은 도움이 되었고, 바닐라 자바스크립트의 이벤트 처리를 위해 이벤트 버블링과 관련된 경험으로 리액트에서 이벤트를 처리할 때 많은 도움이 되었습니다.",
    functions: [
      "RGB,HEX,색상이름(red,white, etc..) 을 기반으로 색상을 직접 검색할 수 있는 기능 제공",
      "명암을 조절하는 옵션을 통해서 선택한 색상의 명도와 채도를 조절할 수 있습니다.",
      "여러 색상을 합성하여 새로운 색상을 찾는 기능을 제공합니다.",
    ],
    preview:
      "프로젝트 개발 및 디자인 작업 중에 필요한 색상을 찾는데 어려움을 겪은 경험으로 비슷한 색상, 명암을 고려해서 색상을 조합해볼 수 있는 사이트입니다.\n 여러 토이 프로젝트를 진행하면서 색상 선택에 어려움을 겪었던 경험을 바탕으로 제작하게 된 사이트입니다. ",
  },

  {
    name: "ringblog",
    alternateTitle: "Ring Blog",
    stacks: ["React", "Express.js", "MySQL"],
    library: ["redux", "react-query", "react-router-dom", "React-markdown"],
    description:
      "이 프로젝트는 블로그 기능을 구현해보고 사용자 경험을 향상시키기 위해 몇 가지 기능을 추가해보고 디자인을 수정하여 개발한 웹 사이트입니다. 벨로그의 디자인에 참고를 많이 했으며, 리액트로 제작한 첫 프로젝트로, 아직 부족한 부분이 많아 React의 훅을 적절히 활용하지 못했지만, 리액트를 익히는 과정에서 많은 도움을 받은 프로젝트입니다.",
    whyDeveloped:
      "이 블로그 서비스를 개발함으로써 프론트엔드와 백엔드 간의 통신, 풀스택 개발 과정에서 프론트엔드와 백엔드가 각각 처리해야 하는 일들을 익힐 수 있었습니다. 또한, 마크다운 파싱, 소셜 로그인 구현, 서버에서 데이터를 주고받는 방식 등에 대한 경험을 쌓을 수 있었습니다.",
    review:
      "React로 진행했던 첫 프로젝트, 포트폴리오 제작 시점에 봤을 때는 JS, React 둘 다에 대한 이해도가 많이 부족했다고 느껴진다. 하지만 프로젝트를 진행하면서 React, Express.js, RestAPI, 소셜 로그인, 마크다운, MySQL, Redux 등 다양한 부분에 대해서 지식을 쌓을 수 있었다.",
    functions: [
      "로그인 기능(소셜, 일반)",
      "블로그 포스팅",
      "구독, 좋아요, 댓글, 즐겨찾기 기능",
      "무한 스크롤 및 데이터 캐시",
      "마크다운 파싱 및 디자인",
    ],
    preview:
      "이 프로젝트는 블로그 기능을 구현해보고 사용자 경험을 향상시키기 위해 몇 가지 기능을 추가해보고 디자인을 수정하여 개발한 웹 사이트입니다.\n 벨로그 사이트를 많이 참고하였고 리액트를 처음으로 사용해본 프로젝트라 미흡한 부분이 많습니다.",
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
