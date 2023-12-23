export interface Skill {
  name: string;
  color: string;
}

export const SKILL_LIST: Array<Array<Skill>> = [
  [
    { name: "HTML5", color: "E34F26" },
    { name: "CSS3", color: "1572B6" },
    { name: "Javascript", color: "F7DF1E" },
    { name: "React", color: "61DAFB" },
    { name: "Typescript", color: "3178C6" },
  ],
  [
    { name: "Express.js", color: "484848" },
    { name: "MySQL", color: "4479A1" },
    // { name: "Visual Studio Code", color: "007ACC" },
    { name: "Linux", color: "FCC624" },
    // { name: "Window", color: "0078D6" },
    { name: "Git", color: "F05032" },
    { name: "Amazon AWS", color: "232F3E" },
    { name: "markdown", color: "484848" },
  ],
];

export function getSkillColor(name: string) {
  let skill = SKILL_LIST.flat().find((skill) => skill.name.toLowerCase() === name.toLowerCase());

  return skill?.color;
}

interface SkillDescription {
  name: string;
  part: Array<string>;
  description: string;
  detailDescription: Array<string>;
}

export const SKILL_DESCRIPTION: Array<SkillDescription> = [
  {
    name: "HTML5",
    description:
      "HTML5를 이용하여 어플리케이션을 마크업 할 수 있고, 시멘틱 태그의 용도에 대해 고려하며 HTML을 작성할 수 있습니다.",
    part: ["마크업", "시멘틱 태그", "웹 표준"],
    detailDescription: [
      "HTML을 이용하여 웹 페이지의 구조를 마크업 할 수 있습니다.",
      "<section>, <header>, <nav>와 같은 시멘틱 태그를 적절히 사용하여 페이지의 접근성을 향상 시킬 수 있습니다.",
      "웹 표준을 준수하여 추후 HTML의 발전에 대한 대비를 할 수 있습니다.",
    ],
  },
  {
    name: "CSS3",
    description:
      "Cascading Style Sheets의 의미에 대해서 이해하고 있으며 position과 diplay를 상황에 맞게 사용하여 레이아웃을 스타일링 할 수 있습니다. Styled-componnet같은 CSS-in-Js에 관심이 많습니다.",
    part: ["Cascading", "선택자", "미디어 쿼리", "Flex와 Gird", "Animation과 Transition"],
    detailDescription: [
      ":hover, :not(), nth-child()같은 고급 선택자와, ::after,::before 가상 선택자를 다룰 수 있습니다.",
      "CSS의 cascading에 대해서 이해하고 사용할 수 있습니다.",
      "미디어 쿼리를 이용하여 랩탑, 태블릿, 모바일을 기준으로 반응형 디자인을 설계할 수 있습니다.",
      "Flex 레이아웃에 대해서 깊게 이해하고 있으며 능숙하게 다룰 수 있습니다. Grid 레이아웃은 Flex 레이아웃 보다 미흡하나 사용 방법에 대해 이해하고 있습니다.",
      "키프레임과 transition을 이용하여 웹 사이트에 동적인 효과를 부여하여 웹 사이트의 생동감을 부여할 수 있습니다.",
    ],
  },
  {
    name: "Javascript",
    description:
      "ECMAScript 2015(ES6) 자바스크립트에 대해서 이해하고 있으며 자바스크립트를 이용한 DOM 조작, 이벤트 및 비동기 처리, 함수형 프로그래밍을 할 수 있습니다.",
    part: ["DOM 조작", "이벤트 처리", "비동기 처리", "내장 함수"],
    detailDescription: [
      "DOM Api 를 이용하여 DOM을 조작해 웹 콘텐츠를 동적으로 업데이트하고 조작 (스타일 적용, 레이아웃 조정, 애니메이션 등)할 수 있습니다.",
      "웹 페이지에서 발생하는 다양한 이벤트를 감지하여 사용자와의 상호작용을 처리할 수 있습니다.",
      "Promise, async/await를 이용하여 비동기 처리를 할 수 있고, 이를 바탕으로 fetch,Ajax를 이용한 비동기 통신을 처리할 수 있습니다.",
      "배열 고차 함수, 표준 빌트인 객체 등을 사용할 수 있습니다.",
    ],
  },
  {
    name: "Typescript",
    description:
      "타입스크립트에 대해 아직 미숙하나 프로젝트에 적용해보고 학습 하면서 숙련도를 올리고 있습니다. 타입스크립트를 사용하며 javascript의 타입에 대해서 고려하고 있습니다.",
    part: ["타입", "제네릭", "학습중"],
    detailDescription: [
      "'number','string','boolean','object' 등 기본적인 데이터 타입에 대해 이해하고 있습니다.",
      "제네릭의 사용 목적과 사용 방법에 대해 학습하였지만 아직 제네릭을 적재 적소에 활용하여 재사용성을 높이는 것은 미흡합니다.",
      "타입스크립트 핸드북(Docs)와 이펙티브 자바스크립트(도서)를 바탕으로 타입스크립트를 학습하고 있습니다.",
    ],
  },
  {
    name: "React",
    description:
      "상태 관리를 기반으로 재사용이 가능한 컴포넌트를 제작하여 유지보수성이 높은 웹 사이트를 제작할 수 있습니다.",
    part: ["Hooks", "React Router", "라이브러리", "가상 돔"],
    detailDescription: [
      "useState, useEffect, useRef, useCallback같은 리액트 내장 훅들 뿐만 아니라 필요에 따라 커스텀 훅을 제작하여 컴포넌트의 재사용성을 향상시킬 수 있습니다.",
      "React Router를 이용하여 CSR 에서의 경로를 관리해 사용자가 즐겨찾기, 링크 이동 등 사용자 경험을 향상시킬 수 있습니다. ",
      "Tanstack Query를 이용한 데이터 요청 및 캐시 처리, Redux를 이용한 프로젝트 상태 관리, Styled-component를 이용한 CSS-in-JS 적용, react-markdown을 이용한 마크다운 파싱을 할 수 있습니다.",
      "가상 돔의 장단점에 대해서 이해하고 있으며 왜 React에서 가상돔을 사용하는지 설명할 수 있습니다.",
    ],
  },
  {
    name: "express.js",
    description:
      "Node.js 기반의 웹 프레임워크인 express.js를 사용해 본적 있습니다. 간단한 RESTful API를 구현할 수 있으며 백엔드에서의 소셜 로그인 처리, MySQL DB와의 연동을 처리해본 경험이 있습니다.",
    part: ["RESTful API", "소셜 로그인"],
    detailDescription: [
      "HTTP 메서드 (GET,POST,PUT,DELETE)를 기반으로 RESTful 엔드포인트를 정의할 수 있습니다.",
      "Kakao, Github의 소셜 로그인 기능을 처리할 수 있습니다.",
    ],
  },

  {
    name: "MySQL",
    description:
      "관계형 데이터베이스 관리 시스템인 MySQL8.0을 사용하여 DB,테이블 생성, 데이터 삽입 및 조회, 뷰 사용, 데이터베이스 백업, 트랜잭션 처리 등을 해본 경험이 있습니다.",
    part: ["관계형 데이터베이스", "DB 쿼리"],
    detailDescription: [
      "학부 시절 수강하였던 데이터베이스 강의를 통해 관계형 데이터베이스에 대해서 이해하고 있습니다.",
      "SELECT, INSERT, UPDATE, DELETE, CREATE, ALTER, DROP, JOIN, GRANT 등을 이용하여 데이터베이스 작업을 수행할 수 있습니다.",
    ],
  },
  {
    name: "linux",
    description:
      "오픈 소스 운영 체제인 Linux(우분투,레드햇)를 이용해 서버를 구축해 본적이 있으며, 학부 시절 Linux 서버 보안에 대해서 배웠습니다.",
    part: ["계정 관리", "Command Line"],
    detailDescription: [
      "리눅스의 계정 관리, 패스워드 관리를 알고 있으며 사용자별, 디렉토리, 파일별 권한관리를 할 수 있습니다.",
      "리눅스 GUI보다 CMD 기반의 리눅스에 친화적입니다.",
    ],
  },
  {
    name: "Git",
    description: "분산 버전 관리 시스템인 Git을 이용해서 소스 코드의 버전을 관리할 수 있습니다.",
    part: ["버전 관리", "협업"],
    detailDescription: [
      "Repository를 만들어 프로젝트의 파일을 관리할 수 있습니다. 커밋 시 컨벤션에 맞는 커밋 메시지를 작성하려고 노력하고 있습니다.",
      "브랜치를 만들어서 코드를 독립적으로 작성하는 방법을 알고 있으나 아직 브랜치 병합에 관하여는 미흡합니다.",
    ],
  },
  {
    name: "Amazon Aws",
    description:
      "아마존의 클라우드 컴퓨팅 플랫폼인 AWS를 사용해본 적 있습니다. 주로 EC2를 사용하여 가상 머신을 이용하였고 가상 머신 위에 MySQL과 Express.js를 이용하여 서버를 가동시켜 본 경험이 있습니다.",
    part: ["EC2"],
    detailDescription: ["EC2를 사용하여 클라우드 서버에 웹 서버를 올려본 경험이 있습니다."],
  },
  {
    name: "MarkDown",
    description:
      "텍스트 기반의 경량 마크업 언어인 마크다운을 이용하여 문서를 구조화하고 작성할 수 있습니다. React를 이용하여 마크다운을 파싱하거나 작성할 수 있습니다.",
    part: ["마크다운 작성", "마크다운 파싱"],
    detailDescription: [
      "Velog, ReadMe, TIL, ReactMarkDown 등을 이용하여 마크다운을 작성하고 있고 RingBlog 프로젝트에서 마크다운 작성 기능을 구현해본 적 있습니다.",
      "React-markdown 라이브러리를 이용하여 마크다운 파싱과 파싱된 요소들의 커스텀을 적용해본 적이 있습니다.",
    ],
  },
];
