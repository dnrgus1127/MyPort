import { BoxButton } from 'components/Common/Buttons/StyledButtons';
import TypingText from 'components/Common/EffectElement/TypingText';
import { FadeIn, FadeInFromBottom } from 'styles/keyFrame/Fade';
import useCustomNavigate from 'hooks/useCustomNavigate';
import React from 'react'
import { DirectionType } from 'redux/reducer/navigaterReducer';
import styled  from 'styled-components'
import media from 'styles/media';
import { Repository } from 'types/Project';


const Container = styled.div`
    color : ${({theme})=> theme.color2};
    font-family: "Roboto KR", sans-serif;
    word-break: keep-all;
    transition: opacity 1s ease-out;
    
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
        list-style-type : none;
        margin-bottom: 2px;
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
    visible: boolean;
    documentButtonHandler: React.MouseEventHandler<HTMLButtonElement>;
}
export default function ProjectInfo({ data,visible, documentButtonHandler}: DescriptionProps) {
    const [gotoPage] = useCustomNavigate();
    return (
        <Container  style={{opacity : visible ? 1 : 0}}>
            <TypingText text={`\"${data.alternateTitle ? data.alternateTitle : data.name}\"`} delay={300} speed={50} />
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
            <h2>Documents</h2>
            <ReadmeButton type="button" onClick={documentButtonHandler} value="readme">README.md</ReadmeButton>
            <ReadmeButton type="button" onClick={documentButtonHandler} value="record">프로젝트 개발 일지</ReadmeButton>
            
        </Container>
  )
}
