import { BoxButton } from 'components/Common/Buttons/StyledButtons';
import TypingText from 'components/Common/EffectElement/TypingText';
import { FadeIn, FadeInFromBottom } from 'css/keyFrame/Fade';
import useCustomNavigate from 'hooks/useCustomNavigate';
import React from 'react'
import { DirectionType } from 'redux/reducer/navigaterReducer';
import styled  from 'styled-components'
import media from 'styles/media';
import { Repository } from 'types/Project';

const DescriptionBox = styled.div`
    width: 50%;
    height: 100%;
    position: absolute;
    top:0;
    left:50%;
    background-color: ${({ theme }) => theme.bgColor4};
    box-shadow: 0px 0px 10px ${({theme})=> theme.shadowColor2}88;
    transition: background-color 1s ease-out;
    z-index: 3;
    padding : 5%;
    overflow-y: scroll;
    ${media.large}{
        gap: 10%;
        top: 10%;
        display: block;
        height: auto;
        min-height: 80%;
        padding : 2rem;
        
    }
`

const Section = styled.div`
    width : 100%;
    color : ${({theme})=> theme.color2};
    font-family: "Roboto KR", sans-serif;
    word-break: keep-all;

    h1,h2 {
        margin-top: 2rem;
        font-weight: 600;
        position: relative; 
    }
    h1:first-child,h2:first-child {
        margin-top:0;
    }
    
    h1 {
        font-size : 4rem;
        min-height: 4rem;
        text-align: center;
        padding-bottom: 2rem;;
        margin-bottom: 2.2rem;
    }
    h2 {
        font-size : 2.2rem;
        margin-bottom: 1.6rem;
        animation: ${FadeInFromBottom} .6s .6s ease-out forwards;
    }
    p,li {
        animation : ${FadeInFromBottom} .8s .8s ease-out forwards;
        font-family: 'SUIT-Regular';
        line-height: 2rem;
    }
    
    li {
        list-style-type   : none;
        
    }
    li::before{
        content: "- ";
        margin-right: 3px;
    }
    

    h2,p,li {
        opacity: 0;
        transform: translateY(100%);
    }
   



    .readmeWrapper {
        display: flex;
        justify-content: space-between;
        gap: 1rem;

    }

    ${media.large}{
        width: 100%;
        min-height: none;        
        &.left,&.right {
        padding : 0;
        }
    }

    ${media.small}{
        h1 {
            font-size: 2.2rem;
        }
        h2 {
            font-size: 2rem;
        }
        h3 {
            font-size : 1.6rem;
        }
        p,li {
            font-size: 1.5rem;
        }
     
    }


    
`


const ReadmeButton = styled(BoxButton)`
    font-family: "SUIT-Regular";
    font-weight: 600;
    margin-right: 1rem;
    &:last-child{
        margin :0;
    }

    opacity: 0;
    animation: ${FadeIn} 1s 1.5s ease-out forwards; 
`






interface DescriptionProps {
    data: Repository;
}
export default function ProjectSlideDescription({ data }: DescriptionProps) {
    const [gotoPage] = useCustomNavigate();
    return (
      <DescriptionBox>
            <Section className='left'>
              <TypingText text={`\"${data.alternateTitle? data.alternateTitle : data.name}\"`} delay={300} speed={50}/>
              <h2>What is?</h2>
              <p>{data.description}</p>
              <h2>Why?</h2>
                <p>{data.whyDeveloped}</p>
                {data.review && <>
                    <h2>Review</h2>
                    <p>{data.review}</p>
                </>} 
              {data.functions && <>
                  <h2>Functions</h2>
                  <ul>{data.functions.map(func => <li key={func}>{func}</li>)}</ul>
                </>}
                {data.stacks && <>
                    <h2>Skill Stack</h2>
                <ul>{data.stacks.map((stack) => <li key={stack}>{stack}</li>)}</ul>
                </>}
                
                {data.library && <>
                    <h2>Used Library</h2>
                    <ul>{data.library.map(lib => <li key={lib}>{lib}</li>)}</ul>
                </>}
              <h2>Read Me</h2>
              <div >
                  <ReadmeButton onClick={() => {
                        gotoPage(`/project/readme?projectName=${data.name}`,DirectionType.EAST );
                  }}>README.md</ReadmeButton>
                  <ReadmeButton onClick={() => {
                        gotoPage(`/project/readme?projectName=${data.name}`,DirectionType.EAST );
                  }}>프로젝트 개발 일지</ReadmeButton>
              
              </div>
          </Section>
    </DescriptionBox>
  )
}
