import { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components'
import { RepositoryData } from 'types/Project';

const PhotoFrameListContainer = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    gap: 2rem;
`

const PhotoFrameWarpper = styled.div`
    position: relative;
    width: 30%;
    height: 100%;
    transform-style: preserve-3d;
    perspective: 1200px;

`
interface ItemProps {
    distance: number;
    translate: string;
    name: string;
}

const PhotoFrameItem = styled.div<ItemProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow : 0px 0px 15px #121212;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: ${(props) => props.distance * 100}%;
    background-image: ${(props)=> `url("assets/img/${props.name}.jpg")`};
    transform: ${(props) => props.translate};
    filter : ${(props)=> props.distance !== 0 && "grayScale(100%) blur(1px) brightness(95%)"};
    .trans > & {
        transition : .5s all ease-out;
    }
    

`




interface ProjectSliderProps {
    frameNumber: number;
    data: Array<RepositoryData>;
    setFrame: React.Dispatch<React.SetStateAction<number>>;
}

export default function ProjectSlider({ frameNumber, data, setFrame }: ProjectSliderProps) {
    const sliderRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if (frameNumber < 0 || frameNumber >= data.length) {
            
            setTimeout(() => {
                sliderRef.current?.classList.remove("trans");
                setFrame(frameNumber < 0 ? data.length-1 : 0);
            }, 500);
            setTimeout(() => {
                sliderRef.current?.classList.add("trans");
            }, 600)
        }
       
    }, [frameNumber,data,setFrame])
    

   

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
                  return <PhotoFrameItem name={item.name} key={idx - 5} distance={frameNumber - idx + data.length} translate={calculateTranslate(frameNumber - idx + data.length)}>{item.name}</PhotoFrameItem>
              })}
              {data.map((item, idx) => {
                  return <PhotoFrameItem name={item.name} key={idx} distance={frameNumber - idx} translate={calculateTranslate(frameNumber-idx)} >{item.name}</PhotoFrameItem>
              })}
              {data.map((item, idx) => {
                  return <PhotoFrameItem name={item.name} key={idx + 5} distance={frameNumber - idx - data.length} translate={calculateTranslate(frameNumber - idx - data.length)}>{item.name}</PhotoFrameItem>
              })}
          </PhotoFrameWarpper>
          
    </PhotoFrameListContainer>
  )
}
