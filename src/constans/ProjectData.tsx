import { RepositoryConstant } from "types/Project";

export const PROJECT_INFOMATION: Array<RepositoryConstant> = [
    {
        name: "colorProject",
        alternateTitle : "Color Project",
        stacks: ["javascript"],
        description: "개발 혹은 디자인 작업 시에 필요한 색상 코드를 찾기 쉽게 도와주는 프로젝트로 디자인에 어려움을 겪는 주니어 혹은 디자이너가 없는 프로젝트를 진행하는 개발자가 색상을 찾는데 도움을 주는 사이트 입니다.",
        whyDeveloped: "바닐라 자바스크립트에 대해 익숙해지고 프로젝트와 함께 '모던 자바스크립트 Deep Dive'를 학습하며 기초 지식을 탄탄하게 쌓기 위해 진행한 프로젝트입니다.",
        functions : ["RGB,HEX,색상이름(red,white, etc..) 기반 색상 검색","명암별 색상 제공","두 색상을 합성"],
    },
    {
        name: "DES",
        stacks: ["C언어"],
        description: "abc",
        whyDeveloped: "abd",
        functions : ["색상 조합","명암별 색상","색상 조정"],
    },
    {
        name: "ringblog",
        alternateTitle : "Ring Blog",
        stacks: ["React", "Express.js","MySQL"],
        library: ["redux","react-query","react-router-dom","React-markdown"],
        description: " 벨로그의 구성에 몇가지 기능을 추가해보고 디자인과 기능들을 수정해보며 제작한 사이트.",
        whyDeveloped: "블로그 사이트를 개발해 보며 프론트엔드와 백엔드가 어떤 식으로 통신하는지, 웹 개발 자체가 어떤 식으로 돌아가는지 체험해보기 위해 풀스택으로 개발해본 사이트, 벨로그의 마크다운 파싱, 소셜 로그인을 구현하는 방법, 서버가 데이터를 받거나 주는 방식 등에 대해서 학습하였습니다.",
        review: "React로 진행했던 첫 프로젝트, 포트폴리오 제작 시점에 봤을 때는 JS, React 둘 다에 대한 이해도가 많이 부족했다고 느껴진다. 하지만 프로젝트를 진행하면서 React, Express.js, RestAPI, 소셜 로그인, 마크다운, MySQL, Redux 등 다양한 부분에 대해서 지식을 쌓을 수 있었다.",
        functions : ["로그인 기능(소셜, 일반)","블로그 포스팅","구독, 좋아요, 댓글, 즐겨찾기 기능","무한 스크롤 및 데이터 캐시","마크다운 파싱 및 디자인"],
    },
    {
        name: "TIL",
        alternateTitle: "Today I Learn",
        description: "",
        whyDeveloped: "abd",
        functions : ["색상 조합","명암별 색상","색상 조정"],
    },
    {
        name: "MyPort",
        alternateTitle : "Port Folio",
        stacks: ["React", "Javascript", "typescript"],
        library: ["react-query","react-router-dom","Redux","styled-component"],
        description: "주니어 개발자 정욱현의 포트폴리오 사이트. 현재 보고 있는 사이트 입니다.",
        whyDeveloped: "개발자로서의 정욱현에 대한 소개를 하기 위해 개발한 사이트. 리액트에 대해서 더 깊게 공부하며 웹 통신, 웹 퍼플리싱, UI/UX, React에 대한 더 많은 경험을 얻고, Typescript를 도입하여 타입스크립트의 기초를 쌓고 있다. ",
        functions : ["프로젝트 소개","기술 스택","TIL 블로그","RESUME"],
    },
    
    
]

const common = {
    utils: "유틸 함수",
    "README.md": "프로젝트 설명",
    "readme.md": "프로젝트 설명",
    constans: "상수",
    fonts: "프로젝트 폰트 관련",
}

const reactCommon = {
    hooks: "React hooks",
    page: "Router 경로 페이지",
    redux: "리덕스 상태 관리",
    store: "리덕스 상태 관리 저장소",
    assets: "이미지, svg 아이콘 등",
    components: "재사용 컴포넌트",

}

const typescriptCommon = {
    types : "타입 정의",
}


export const PROJECT_DIRECTORY_DESCRIPTION : any = {
    "colorProject": {
        ...common,
        handler: "이벤트 핸들러 함수들",
        core: "주요 기반 JS 클래스 및 상수",
        component: "컴포넌트들",
        browser: "safari, Edge 및 브라우저 호환성",
        store: "옵저버 패턴 상태 저장소",
        "script.js" : "프로젝트 진입점"
    },
    "MyPort": {
        ...common,
        ...reactCommon,
        ...typescriptCommon,
        components: "재사용 컴포넌트",
        
    }
}