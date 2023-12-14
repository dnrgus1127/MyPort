export interface Skill  {
    name: string;
    color: string;
  }

export const SKILL_LIST: Array<Array<Skill>> = [[{ name: "HTML5", color: "E34F26" }, { name: "CSS3", color: "1572B6" }, { name: "Javascript", color: "F7DF1E" }, { name: "React", color: "61DAFB" }, { name: "Typescript", color: "3178C6" }], [{ name: "Express.js", color: "000000" }, { name: "MySQL", color: "4479A1" }], [{ name: "Visual Studio Code", color: "007ACC" }, { name: "Linux", color: "FCC624" }, { name: "Window", color: "0078D6" }, { name: "Git", color: "F05032" }, { name: "Amazon AWS", color: "232F3E" }, { name:"markdown", color :"000000"}]];


interface SkillDescription {
  name: string;
  part: Array<string>;
  description: string;
  detailDescription: Array<string>;

}

export const SKILL_DESCRIPTION : Array<SkillDescription> = [
  {
    name: "HTML5",
    description : "HTML5를 이용하여 어플리케이션을 마크업 할 수 있고, 시멘틱 태그의 용도에 대해 고려하며 HTML을 작성할 수 있습니다.",
    part: ["마크업", "시멘틱 태그","웹 표준"],
    detailDescription: ["HTML을 이용하여 웹 페이지의 구조를 마크업 할 수 있습니다.","<section>, <header>, <nav>와 같은 시멘틱 태그를 적절히 사용하여 페이지의 접근성을 향상 시킬 수 있습니다.","웹 표준을 준수하여 추후 HTML의 발전에 대한 대비를 할 수 있습니다."],
  },
  {
    name: "CSS3",
    description: "Cascading Style Sheets의 의미에 대해서 이해하고 있으며 position과 diplay를 상황에 맞게 사용하여 레이아웃을 스타일링 할 수 있습니다. Styled-componnet같은 CSS-in-Js에 관심이 많습니다.",
    part: [ "Cascading","선택자", "미디어 쿼리","Flex와 Gird","Animation과 Transition"],
    detailDescription : [":hover, :not(), nth-child()같은 고급 선택자와, ::after,::before 가상 선택자를 다룰 수 있습니다.","CSS의 cascading에 대해서 이해하고 사용할 수 있습니다.","미디어 쿼리를 이용하여 랩탑, 태블릿, 모바일을 기준으로 반응형 디자인을 설계할 수 있습니다.","Flex 레이아웃에 대해서 깊게 이해하고 있으며 능숙하게 다룰 수 있습니다. Grid 레이아웃은 Flex 레이아웃 보다 미흡하나 사용 방법에 대해 이해하고 있습니다.","키프레임과 transition을 이용하여 웹 사이트에 동적인 효과를 부여하여 웹 사이트의 생동감을 부여할 수 있습니다."]
  },
  {
    name: "Javascript",
    description: "ECMAScript 2015(ES6) 자바스크립트에 대해서 이해하고 있으며 자바스크립트를 이용한 DOM 조작, 이벤트 및 비동기 처리, 함수형 프로그래밍을 할 수 있습니다.",
    part: ["DOM 조작","이벤트 처리","비동기 처리","내장 함수","프로토 타입 기반 객체 지향"],
    detailDescription: ["DOM Api 를 이용하여 DOM을 조작해 웹 콘텐츠를 동적으로 업데이트하고 조작 (스타일 적용, 레이아웃 조정, 애니메이션 등)할 수 있습니다.","웹 페이지에서 발생하는 다양한 이벤트를 감지하여 사용자와의 상호작용을 처리할 수 있습니다.","Promise, async/await를 이용하여 비동기 처리를 할 수 있고, 이를 바탕으로 fetch,Ajax를 이용한 비동기 통신을 처리할 수 있습니다.","배열 고차 함수, 표준 빌트인 객체 등을 사용할 수 있습니다.",""]
  },
  {
    name: "Typescript",
    description: "타입스크립트에 대해 아직 미숙하나 프로젝트에 적용해보고 학습 하면서 숙련도를 올리고 있습니다. 타입스크립트를 사용하며 javascript의 타입에 대해서 고려하고 있습니다.",
    part: [],
    detailDescription: [],
  },
  {
    name: "React",
    description: "상태 관리를 기반으로 재사용이 가능한 컴포넌트를 제작하여 유지보수성이 높은 웹 사이트를 제작할 수 있습니다.",
    part: ["Hooks","React Router","라이브러리","가상 돔"],
    detailDescription: ["useState, useEffect, useRef, useCallback같은 리액트 내장 훅들 뿐만 아니라 필요에 따라 커스텀 훅을 제작하여 컴포넌트의 재사용성을 향상시킬 수 있습니다.","React Router를 이용하여 CSR 에서의 경로를 관리해 사용자가 즐겨찾기, 링크 이동 등 사용자 경험을 향상시킬 수 있습니다. ","Tanstack Query를 이용한 데이터 요청 및 캐시 처리, Redux를 이용한 프로젝트 상태 관리, Styled-component를 이용한 CSS-in-JS 적용, react-markdown을 이용한 마크다운 파싱을 할 수 있습니다.","관리해 사용자가 즐겨찾기, 링크 이동 등 사용자 경험을 향상시킬 수 있습니다. Tanstack Query를 이용한 데이터 요청 및 캐시 처리, Redux를 이용한 프로젝트 상태 관리, Styled-component를 이용한 CSS-in-JS 적용, react-markdown을 이용한 마크다운 파싱을 할 수 있습니다.asdasdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"],
  }

]