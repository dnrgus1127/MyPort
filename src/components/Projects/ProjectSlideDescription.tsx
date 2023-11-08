import { FadeIn, FadeInFromBottm } from 'css/keyFrame/Fade';
import React from 'react'
import styled from 'styled-components'
import { Repository, RepositoryData } from 'types/Project';

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
    text-shadow: 0px 0px 15px ${({theme})=> theme.pointColor};
    min-height: 80%;
    h1,h2 {
        margin-bottom: 2rem;
        padding : 1rem 0 ;
        border-bottom: 1px solid white;
        text-transform: uppercase;        
        font-weight: 600;
 
    }
    
    h1 {
        font-size : 3em;
        animation : ${FadeInFromBottm} .5s 1s ease-out forwards;
    }
    h2 {
        font-size : 2em;
        animation : ${FadeInFromBottm} .5s 1.25s ease-out forwards;

    }
    p {
        animation : ${FadeInFromBottm} .5s 1.75s ease-out forwards;
        font-family: "Noto Sans KR","Roboto KR",sans-serif;
        line-height: 2rem;
        
    }

    h1,h2,p {
        opacity: 0;
        transform: translateY(100%);
    }

    button, img {
        opacity: 0;
        animation : ${FadeIn} .5s 2s ease-out forwards;
    }

    .readmeWrapper {
        display: flex;
        justify-content: space-between;
        gap: 1rem
    }

    &.left {
        padding-right : 2rem;
    }
    &.right {
        padding-left : 2rem;
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
    data: Repository;
}
export default function ProjectSlideDescription({data} : DescriptionProps) {
  return (
      <DescriptionBox>
          <Section className='left'>
              <Title>{data.name}</Title>
              <h2>프로젝트 설명</h2>
              <ProjectDescription>{data.description}</ProjectDescription>
              <h2>프로젝트 개발 목적</h2>
              <WhyDeveloped>{data.whyDeveloped}</WhyDeveloped>
              {data.functions && <>
                  <h2>기능</h2>
                  <div>{data.functions.map(func => <p key={func}>{func}</p>)}</div>
              </>}
          </Section>
          <Section className='right'>
              <h2>Stack</h2>
                <div>{data.stacks.map((stack) => <p key={stack}>{stack}</p>)}</div>
                {data.library && <>
                    <h2>library</h2>
                    <div>{data.library.map(lib => <p key={lib}>{lib}</p>)}</div>
                </>}
              <h2>Readme.md</h2>
              <div className="readmeWrapper">
                  <Readme>Project README</Readme>
                  <Readme>개발 과정</Readme>
                  <Readme>회고</Readme>
              </div>
          </Section>
    </DescriptionBox>
  )
}
