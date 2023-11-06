import React, { useEffect, useRef, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import PhotoFrameList from './PhotoFrameList'
import {ReactComponent as ArrowRight} from "../../assets/arrow_right.svg"
import {ReactComponent as ArrowLeft} from "../../assets/arrow_left.svg"

const PhotoFrameContainer = styled.div`
    width: 100%;
    height: 100%;
    padding : 5% 0;
    position: relative;
`

const PhotoFrameInfo = styled.div`
    width: 100%;
    height: 40%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 3;
    background-color: #34343477;
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

const FrameButton = styled.button`
    position: absolute;
    top: calc(50% - 1.2rem);
    svg {
        width : 2.4rem;
        height: 2.4rem;
    }
`
const PrevFrame = styled(FrameButton)`
    transform: translateX(-100%);
    left: 0;
    animation: ${() => ButtonAnimation("left")} 2s ease  infinite;

`
const NextFrame = styled(FrameButton)`
    transform: translateX(100%);
    right: 0;
    animation: ${() => ButtonAnimation("right")} 2s ease  infinite;
`
const items = [0, 0, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 0, 0];

const itemCounts = 5;

export default function PhotoFrame({initFrameNumber = 7}) {
    const [frameNumber, setFraemNumber] = useState<number>(initFrameNumber);
    const [isButtonDelay, setButtonDelay] = useState(false);
    useEffect(() => {
        let distance = initFrameNumber - frameNumber;
        if (Math.abs(distance) <= itemCounts / 2) {
            return;
        }

        setTimeout(() => {
            setFraemNumber(distance > 0 ? frameNumber + itemCounts : frameNumber - itemCounts);
        },500)
    },[frameNumber,initFrameNumber])

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
        },500)
    }
  return (
      <PhotoFrameContainer>
          <PhotoFrameList frameNumber={frameNumber} data={items} />
          <PrevFrame onClick={() => handlerButtons("increase")}>
                <ArrowLeft/>
              </PrevFrame>
          <NextFrame onClick={() => handlerButtons("decrease")}>
              <ArrowRight />
          </NextFrame>
        <PhotoFrameInfo></PhotoFrameInfo>
      </PhotoFrameContainer>
  )
}
