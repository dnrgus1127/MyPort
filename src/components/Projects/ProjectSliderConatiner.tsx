import React, {  useState } from 'react'
import styled, {  keyframes } from 'styled-components'
import {ReactComponent as ArrowRight} from "../../assets/arrow_right.svg"
import {ReactComponent as ArrowLeft} from "../../assets/arrow_left.svg"
import ProjectSlider from './ProjectSlider'
import ProjectSlideDescription from './ProjectSlideDescription'
import { useProjectData } from 'pages/ProjectPage'
import media from 'styles/media'

const ProjectSliderBox = styled.div`
    width: 100%;
    height: 100%;
    padding : 5% 0;
    position: relative;
    
`

const ButtonAnimation = (direction : "left" | "right") => keyframes`
    0% {
        transform: translateX(${direction === "left" ? '-100' :"100"}%);
    }
    50% {
        transform: translateX(${direction === "left" ? '-140' :"140"}%);
    }
    100% {
        transform: translateX(${direction === "left" ? '-100' :"100"}%);
    }

`
const MobileButtonAnimation = (direction : "left" | "right") => keyframes`
    0% {
        transform: translateX(${direction === "left" ? '-40' :"40"}%);
    }
    50% {
        transform: translateX(${direction === "left" ? '-50' :"50"}%);
    }
    100% {
        transform: translateX(${direction === "left" ? '-40' :"40"}%);
    }
`

const SlideButton = styled.button`
    position: absolute;
    top: calc(50% - 2.4rem);
    svg {
        fill: white;
        filter: drop-shadow(0px 0px 5px #121212);
        width : 4.8rem;
        height: 4.8rem;
    }

  
    
`
const PrevSlideBtn = styled(SlideButton)`
    left: 0;
    animation: ${() => ButtonAnimation("left")} 2s ease  infinite;
    ${media.small}{
        animation : ${()=> MobileButtonAnimation("left")} 2s ease infinite;
    }

`
const NextSlideBtn = styled(SlideButton)`

    right: 0;
    animation: ${() => ButtonAnimation("right")} 2s ease  infinite;
    ${media.small}{
        animation : ${()=> MobileButtonAnimation("right")} 2s ease infinite;
    }
`



export default function ProjectSliderConatiner() {
    const {data} = useProjectData();
    const [frameNumber, setFraemNumber] = useState<number>(data.length -1);
    const [isButtonDelay, setButtonDelay] = useState(false);

    const handlerButtons = (type: "increase" | "decrease") => {
        if (isButtonDelay) return;
        if (type === "increase") {
            setFraemNumber(prev => prev+1) 
        }
        if (type === "decrease") {
            setFraemNumber(prev => prev-1)    
        }
        setButtonDelay(true);
        setTimeout(() => {
            setButtonDelay(false);
        },600)
    }
  return (
      <ProjectSliderBox>
          <ProjectSlider frameNumber={frameNumber} setFrame={setFraemNumber} data={data} />
          <PrevSlideBtn onClick={() => handlerButtons("decrease")}>
                <ArrowLeft/>
              </PrevSlideBtn>
          <NextSlideBtn onClick={() => handlerButtons("increase")}>
              <ArrowRight />
          </NextSlideBtn>
          <ProjectSlideDescription key={frameNumber} data={data[Math.abs(frameNumber) % data.length]} />
      </ProjectSliderBox>
  )
}
