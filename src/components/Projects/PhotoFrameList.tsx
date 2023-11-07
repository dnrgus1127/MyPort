import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'

const PhotoFrameListContainer = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    gap: 2rem;

    overflow-x: hidden;
`

const PhotoFrameWarpper = styled.div`
    position: relative;
    width: 30%;
    height: 100%;
    background-color: yellow;
    transform-style: preserve-3d;
    perspective: 1200px;


`
interface ItemProps {
    distance: number;
    translate: string;
}

const PhotoFrameItem = styled.div<ItemProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: ${(props) => props.distance * 100}%;
    transform: ${(props) => props.translate};
    
    .trans > & {
        transition : .5s all ease-out;
    }
    
`




interface PhotoFrameListProps {
    frameNumber: number;
    data: Array<number>;
    setFrame: React.Dispatch<React.SetStateAction<number>>;
}

export default function PhotoFrameList({ frameNumber, data, setFrame }: PhotoFrameListProps) {
    const sliderRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if (frameNumber < 0 || frameNumber >= data.length) {
            
            setTimeout(() => {
                sliderRef.current?.classList.remove("trans");
                setFrame(frameNumber < 0 ? data.length-1 : 0);
            }, 500);
            setTimeout(() => {
                sliderRef.current?.classList.add("trans");
            }, 1000)
        }
       
    }, [frameNumber])
    

   

    const calculateTranslate = (distance: number) => {
        let translate = "";
        if (distance === 0) {
            return translate;
        }
        if (Math.abs(distance) === 1) {
            translate += " scale(0.9)";
            translate += ` rotateY(${distance <0 ? '-' :"+"}30deg)`
        }
        else if (Math.abs(distance) === 2) {
            translate += " scale(0.8)"
            translate += ` rotateY(${distance <0 ? '-' : "+"}45deg)`
        }
        return translate;
    }
  return (
      <PhotoFrameListContainer>
          <PhotoFrameWarpper className="trans" ref={sliderRef}>
              {data.map((item, idx) => {
                  return <PhotoFrameItem key={idx - 5} distance={frameNumber - idx + data.length} translate={calculateTranslate(frameNumber - idx + data.length)}>f{item}</PhotoFrameItem>
              })}
              {data.map((item, idx) => {
                  return <PhotoFrameItem key={idx} distance={frameNumber - idx} translate={calculateTranslate(frameNumber-idx)} >{item}</PhotoFrameItem>
              })}
              {data.map((item, idx) => {
                  return <PhotoFrameItem key={idx + 5} distance={frameNumber - idx - data.length} translate={calculateTranslate(frameNumber - idx - data.length)}>n{item}</PhotoFrameItem>
              })}
          </PhotoFrameWarpper>
          
    </PhotoFrameListContainer>
  )
}
