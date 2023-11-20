import { DrawLine } from 'css/keyFrame/DrwaLine';
import { FadeIn, FadeInFromBottm } from 'css/keyFrame/Fade';
import useCustomNavigate from 'hooks/useCustomNavigate';
import React from 'react'
import { useAppDispatch } from 'redux/hooks';
import { DirectionType } from 'redux/reducer/navigaterReducer';
import styled  from 'styled-components'
import { Repository } from 'types/Project';

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
    text-shadow: 0px 0px 15px ${({ theme }) => theme.pointColor};
    min-height: 80%;
    h1,h2 {
        margin-bottom: 2rem;
        padding-top: 2rem;
        padding-bottom: .5rem;
        text-transform: uppercase;        
        font-weight: 600;
        position: relative;
        display: inline-block;
        
    }

    h1::after, h2::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: white;
        animation : ${()=> DrawLine(110)} .5s 1.5s ease-out forwards;
    }
 
    
    h1 {
        font-size : 2.2em;
        animation : ${FadeInFromBottm} .5s 1s ease-out forwards;
    }
    h2 {
        font-size : 1.8em;
        animation : ${FadeInFromBottm} .5s 1.25s ease-out forwards;

    }
    p,li {
        animation : ${FadeInFromBottm} .5s 1.75s ease-out forwards;
        font-family: "Noto Sans KR","Roboto KR",sans-serif;
        line-height: 2rem;
    }
    ul {
        padding-left: 2rem;;
        list-style-position: outside;
    }
    li {
        list-style-type   : disc;
    }
    

    h1,h2,p,li {
        opacity: 0;
        transform: translateY(100%);
    }

    button, img {
        opacity: 0;
        animation : ${FadeIn} .5s 2s ease-out forwards;
        font-family: "SUIT-Regular";

    }

    .readmeWrapper {
        display: flex;
        justify-content: space-between;
        gap: 1rem;

    }

    &.left {
        padding-right : 2rem;
    }
    &.right {
        padding-left : 2rem;
    }


    
`

const ReadmeSection = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    button {
        height : 4rem;
        flex: 1;
        border-radius: 4px;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 1.6rem;
        background-color: white;
        font-weight: 600;
        cursor: pointer;
        position: relative;
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



interface DescriptionProps {
    data: Repository;
}
export default function ProjectSlideDescription({ data }: DescriptionProps) {
    const dispatch = useAppDispatch();
    const [gotoPage] = useCustomNavigate();
    return (
      <DescriptionBox>
          <Section className='left'>
              <Title>{data.name}</Title>
              <br/>
              <h2>프로젝트 설명</h2>
              <p>{data.description}</p>
              <h2>프로젝트 개발 목적</h2>
              <p>{data.whyDeveloped}</p>
              {data.functions && <>
                  <h2>기능</h2>
                  <div>{data.functions.map(func => <li key={func}>{func}</li>)}</div>
              </>}
          </Section>
          <Section className='right'>
              <h2>Stack</h2>
                <ul>{data.stacks.map((stack) => <li key={stack}>{stack}</li>)}</ul>
                {data.library && <>
                    <h2>library</h2>
                    <ul>{data.library.map(lib => <li key={lib}>{lib}</li>)}</ul>
                </>}
              <h2>Readme.md</h2>
              <ReadmeSection >
                    <button onClick={() => {
                        gotoPage(`/project/readme?projectName=${data.name}`,DirectionType.SOUTH );
                  }}>ReadMe</button>
                  <button>ReadMe</button>
                  <button>ReadMe</button>
              </ReadmeSection>
          </Section>
    </DescriptionBox>
  )
}
