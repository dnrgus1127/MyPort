import { FadeInFromBottm } from 'css/keyFrame/Fade';
import React from 'react'
import styled from 'styled-components'
import { RepositoryData } from 'types/Project';
const DescriptionBox = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    gap: 30%;

    align-items: center;
`

const Section = styled.div`
    width : 35%;
    color : white;
    font-family: "Roboto KR", sans-serif;
    text-shadow: 0px 0px 10px #121212;
    min-height: 80%;
    h1,h2 {
        margin-bottom: 2rem;
        padding : 1rem 0 ;
        border-bottom: 1px solid white;
        text-transform: uppercase;        
        font-weight: 600;
        opacity: 0;
        transform: translateY(100%);
    }
    h1 {
        font-size : 3em;
        animation : ${FadeInFromBottm} 1s 1s ease-out forwards;
    }
    h2 {
        font-size : 2em;
        animation : ${FadeInFromBottm} 1s 2s ease-out forwards;

    }
`


const LeftSection = styled(Section)`
    padding-right: 2rem;
`
const RightSection = styled(Section)`
    padding-left : 2rem;

    .readmeWrapper {
        display: flex;
        justify-content: space-between;
        gap: 1rem
    }
`



const Title = styled.h1`
    font-size : 3em;
    font-weight: 800;
    font-family: "Roboto KR", sans-serif;
    text-transform: uppercase;
    color : white;
    text-shadow: 0px 0px 10px #121212;
`
const ProjectDescription = styled.p`
    
`
const WhyDeveloped = styled.p`
    
`

const Readme = styled.button`   
    height : 4rem;
    flex: 1;
    border-radius: 4px;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1.6rem;
    background-color: white;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        background-color: #121212;
        color :white;
    }
`



interface DescriptionProps {
    slideIdx: number;
    data: RepositoryData;
}
export default function ProjectSlideDescription({data,slideIdx} : DescriptionProps) {
  return (
      <DescriptionBox>
          <LeftSection>
              <Title>{data.name}</Title>
              <h2>프로젝트 설명</h2>
              <ProjectDescription>개발 혹은 디자인 작업 시에 필요한 색상 코드를 찾기 쉽게 도와주는 프로젝트.</ProjectDescription>
              <h2>프로젝트 개발 목적</h2>
              <WhyDeveloped>모던 JavaScript 학습과 함께 바닐라 자바스크립트에 대한 학습 목적 프로젝트</WhyDeveloped>
          </LeftSection>
          <RightSection>
              <h1>Stack</h1>
              <h2><img src="https://img.shields.io/badge/javscript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white" /></h2>
              - 바닐라 자바스크립트 기반 사이트
              <br/>
              <h2>Readme.md</h2>
              <div className="readmeWrapper">
                  <Readme>Project README</Readme>
                  <Readme>개발 과정</Readme>
                  <Readme>회고</Readme>
              </div>
          </RightSection>
    </DescriptionBox>
  )
}
