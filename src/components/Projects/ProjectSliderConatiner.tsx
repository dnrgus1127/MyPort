import React, {  useEffect, useState } from 'react'
import styled, {  keyframes } from 'styled-components'
import {ReactComponent as ArrowRight} from "../../assets/arrow_right.svg"
import {ReactComponent as ArrowLeft} from "../../assets/arrow_left.svg"
import ProjectSlider from './ProjectSlider'
import { useProjectData } from 'pages/ProjectPage'
import media from 'styles/media'
import Description from './Description'

const Container = styled.div`
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
    position: fixed;
    top: calc(50% - 2.4rem);
    svg {
        fill: white;
        filter: drop-shadow(0px 0px 5px ${({theme})=> theme.shadowColor});
        width : 4.8rem;
        height: 4.8rem;
    }

  
    
`
const PrevSlideBtn = styled(SlideButton)`
    right: 91%;
    animation: ${() => ButtonAnimation("left")} 2s ease  infinite;
    ${media.small}{
        animation : ${()=> MobileButtonAnimation("left")} 2s ease infinite;
    }

`
const NextSlideBtn = styled(SlideButton)`

    left :41%;
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
        },550)
    }



    useEffect(() => {
        let timer = setTimeout(() => {
            setFraemNumber(0);
        }, 2000)
        
        return () => {
            clearTimeout(timer);
        }
    }, [])

  return (
      <Container>
          <ProjectSlider frameNumber={frameNumber} setFrame={setFraemNumber} data={data} />
          <Description projecIdx={frameNumber}/>
          <PrevSlideBtn onClick={() => handlerButtons("decrease")}>
                <ArrowLeft/>
              </PrevSlideBtn>
          <NextSlideBtn onClick={() => handlerButtons("increase")}>
              <ArrowRight />
          </NextSlideBtn>
      </Container>
  )
}
