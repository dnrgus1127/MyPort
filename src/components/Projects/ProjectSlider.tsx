import { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components'
import media from 'styles/media';
import { RepositoryData } from 'types/Project';

const PhotoFrameListContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 2rem;

    ${media.large}{
        height: 50%;
    }
    ${media.small}{
        height: 50%;
    }

    
`

const PhotoFrameWarpper = styled.div`
    position: relative;
    width: 70%;
    height: 100%;
    transform-style: preserve-3d;
    perspective: 1500px;
    border-radius: 8px;

    ${media.large}{
        width: 60%;
    }
    ${media.small}{
        width: 80%;
    }

  
`

interface ItemProps {
    $distance: number;
    $trans: string;
    name: string;
}

const PhotoFrameItem = styled.div<ItemProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: ${(props) => props.$distance * 100}%;
    transform: ${(props) => props.$trans};
    filter : ${(props)=> props.$distance !== 0 && "grayScale(100%) blur(1px) brightness(80%)"};
    .trans > & {
        transition : .5s all ease-out;
    }
    
    ${(props) => props.$distance === 0 && css`
        box-shadow : 0px 0px 12px ${({ theme }) => theme.shadowColor2}44;
    `}
    overflow :hidden;
    img {
        object-fit :cover;
        width:100%;
        height:100%;
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
            translate += " scale(1.01)";
            return translate;
        }
        if (Math.abs(distance) === 1) {
            translate += " scale(0.9)";
            translate += ` rotateY(${distance <0 ? '-' :"+"}20deg)`
        }
        else if (Math.abs(distance) === 2) {
            translate += " scale(0.8)"
            translate += ` rotateY(${distance <0 ? '-' : "+"}35deg)`
        }
        return translate;
    }
  return (
      <PhotoFrameListContainer>          
          <PhotoFrameWarpper className="trans" ref={sliderRef}>
              {data.map((item, idx) => {
                  if(idx <data.length / 2) return <></>
                  return <PhotoFrameItem name={item.name} key={item.id + "prev"} $distance={frameNumber - idx + data.length} $trans={calculateTranslate(frameNumber - idx + data.length)}>
                    <img src={`/assets/img/${item.name}.jpg`} alt={item.name + "이미지"}/>
                  </PhotoFrameItem>
              })}
              {data.map((item, idx) => {
                  return <PhotoFrameItem name={item.name} key={item.id } $distance={frameNumber - idx} $trans={calculateTranslate(frameNumber-idx)} >
                    <img src={`/assets/img/${item.name}.jpg`} alt={item.name + "이미지"}/>
                  </PhotoFrameItem>
              })}
              {data.map((item, idx) => {
                  if(idx >data.length /2) return <></>
                  return <PhotoFrameItem name={item.name} key={item.id + "next"} $distance={frameNumber - idx - data.length} $trans={calculateTranslate(frameNumber - idx - data.length)}>
                    <img  src={`/assets/img/${item.name}.jpg`} alt={item.name + "이미지"}/>
                  </PhotoFrameItem>
              })}
          </PhotoFrameWarpper>
    </PhotoFrameListContainer>
  )
}

