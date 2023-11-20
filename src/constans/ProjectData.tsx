import { RepositoryConstant } from "types/Project";

export const PROJECT_INFOMATION: Array<RepositoryConstant> = [
    {
        name: "colorProject",
        stacks: ["javascript"],
        library: [],
        description: "개발 혹은 디자인 작업 시에 필요한 색상 코드를 찾기 쉽게 도와주는 프로젝트로, 디자인에 어려움을 겪는 주니어 혹은 디자이너가 없는 프로젝트를 진행하는 개발자가 색상을 찾는데 도움을 주는 사이트 입니다.",
        whyDeveloped: "바닐라 자바스크립트에 대한 학습 목적 프로젝트",
        functions : ["색상 조합","명암별 색상","색상 조정"],
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
        stacks: ["React", "Express.js"],
        library: ["redux","react-query","react-router-dom"],
        description: "나만의 블로그 사이트를 만들어 보고 싶어서 제작하게된 블로그 사이트, velog.io 블로그의 디자인을 참고하여 제작한 블로그 프로젝트",
        whyDeveloped: "abd",
        functions : ["소셜 로그인","댓글,구독,좋아요","포스트 CRUD", "무한 스크롤","포스트 검색"],
    },
    {
        name: "TIL",
        stacks: [],
        description: "abc",
        whyDeveloped: "abd",
        functions : ["색상 조합","명암별 색상","색상 조정"],
    },
    {
        name: "MyPort",
        stacks: ["React", "Javascript", "typescript"],
        library: ["react-query","react-router-dom"],
        description: "abc",
        whyDeveloped: "abd",
        functions : ["프로젝트 소개","Skill"],
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