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