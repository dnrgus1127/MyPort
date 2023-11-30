import useBoolean from 'hooks/useBoolean'
import useUnmount from 'hooks/useUnmount'
import { useProjectData } from 'pages/ProjectPage'
import React, { useCallback, useState } from 'react'
import styled, { css } from 'styled-components'
import { Floating } from 'styles/keyFrame/floating'
import media from 'styles/media'
import Readme from './Readme'
import ProjectInfo from './ProjectInfo'


const DescriptionLayout = styled.div`
    width: 50%;
    height: 100%;
    position: absolute;
    top:0;
    left:50%;
    background-color : ${({ theme }) => theme.bgColor2};
    box-shadow: 0px 0px 10px ${({ theme }) => theme.shadowColor2}88;
    transition: background-color 1s ease-out;
    z-index: 3;
    background-size: cover;

    &::before{
        content :"";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.bgColor2};
        ${({theme})=> theme.current === "light" ? css`
            background-image: url("/assets/img/crumpledPaper.jpg");
            background-size: cover;
        ` : css`
            background-image : url("/assets/img/noize.jpg");
        `}
        top:0; 
        left:0;
    }
    

    &::after {
        width: 5%;
        height: 4px;
        position: absolute;
        top: 2rem ;
        left :calc(47.5%);
        border-radius: 20px;
        content: " ";
        background-color: ${({ theme }) => theme.color2};
        animation: ${()=>Floating(100)} 2s ease-in-out infinite;
    }

    
  
    & > div {
        padding : 10%;
        position: absolute;
        top:0;
        left:0;
        height: 100%;
        width: 100%;
        overflow-y: scroll;
      
    }

    .closeSectionBtn{
        position : absolute;
        right :0;
        top:0;
        width: 3.6rem;
        height: 3.6rem;
        line-height: 0;
        z-index:5;

    }

    ${media.large}{
        width: 100%;
        position: relative;
        left :0;
        box-shadow: none;
        overflow : initial;
      
        &::before{
            background-color : none;
            display : none;
        }

        & > div {
            overflow : visible;
            position: absolute;
            height : auto;
            z-index: 4;
            background-color : inherit;
        }
    
        
    }
    ${media.small}{
        transform: translateY(-10%);
        &::after {
            width : 10%;
        }
    }

`

interface DescriptionProps {
    projecIdx: number;   
}

type Section =  "readme" | "record";

export default function Description({ projecIdx }: DescriptionProps) {
    const [current, setCurrent] = useState<Section>("readme");
    const [isOpenReadme, onToggleIsOpenReadme] = useBoolean(false);
    const [renderReadme, handleTransitionEnd] = useUnmount(isOpenReadme);
    const { data } = useProjectData();
    
    const documentButtonHandler : React.MouseEventHandler<HTMLButtonElement>  = useCallback((e :React.MouseEvent<HTMLButtonElement> ) => {
        const target = e.target as HTMLButtonElement;
        if (target.value === "readme" ||  target.value === "record")
        {
            setCurrent(target.value);
            onToggleIsOpenReadme();
        }
    }, [onToggleIsOpenReadme])
    
    
  return (
      <DescriptionLayout>
          <ProjectInfo visible={!isOpenReadme} key={projecIdx % data.length} data={data[Math.abs(projecIdx) % data.length]} documentButtonHandler={documentButtonHandler} />
          {(renderReadme && current === "readme") && <Readme className="page" visible={isOpenReadme} handleAnimationEnd={handleTransitionEnd} projectName={data[Math.abs(projecIdx) % data.length].name} />}          
          {isOpenReadme && <button className="closeSectionBtn" onClick={onToggleIsOpenReadme}><svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg></button>}
      </DescriptionLayout>
  )
}
