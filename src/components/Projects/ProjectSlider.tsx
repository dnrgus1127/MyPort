import { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components'
import media from 'styles/media';
import { RepositoryData } from 'types/Project';

const PhotoFrameLayout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;    
`

const PhotoFrameWarpper = styled.div`
    position: relative;
    width: calc(var(--width) / 3.5);
    height: calc(var(--width) / 3.5 * 1.35);
    transform-style: preserve-3d;
    perspective: 1500px;
    border-radius: 8px;

    ${media.xlarge} {
        width: calc(var(--width) / 2.5);
        height: calc(var(--width) / 2.5 * 1.35);
    }
    ${media.large} {
        width: calc(var(--width) / 2);
        height: calc(var(--width) / 2 * 1.35);
    }

    ${media.small} {
        width: calc(var(--width) / 1.2);
        height: calc(var(--width) / 1.2 * 1.35);
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
    border-radius: 0px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: ${(props) => props.$distance * 100}%;
    transform: ${(props) => props.$trans};
    overflow :hidden;

    filter : ${(props)=> props.$distance !== 0 && "grayScale(50%) blur(1px) brightness(70%)"};
    .trans > & {
        transition : .5s all ease-out;
    }
    
    box-shadow : 0px 0px 5px ${({ theme }) => theme.current ==="dark" ? theme.shadowColor :theme.shadowColor2};
    ${(props) => props.$distance === 0 && css`
        box-shadow : 0px 0px 12px ${({ theme }) => theme.current ==="dark" ? theme.shadowColor :theme.shadowColor2};

    `}
    img {
        object-fit : cover;
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
        console.log("🚀 ~ file: ProjectSlider.tsx:102 ~ calculateTranslate ~ distance:", distance)
        let translate = "";
        const direction = distance < 0 ? '-' : "+";
        if (distance === 0) {
            translate += " scale(1)";
            return translate;
        }
        if (Math.abs(distance) === 1) {
            translate += " scale(0.8)";
            translate += ` rotateY(${direction}20deg)`
        }
        else if (Math.abs(distance) === 2) {
            translate += " scale(0.7)"
            translate += ` rotateY(${direction}35deg)`
        }
        else if (Math.abs(distance) >= 3) {
            translate += " scale(0.5)";
            translate += ` rotateY(${direction}45deg)`;
        }
        return translate;
    }
  return (
      <PhotoFrameLayout>          
          <PhotoFrameWarpper className="trans" ref={sliderRef}>
              {data.map((item, idx) => {
                
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
                  
                  return <PhotoFrameItem name={item.name} key={item.id + "next"} $distance={frameNumber - idx - data.length} $trans={calculateTranslate(frameNumber - idx - data.length)}>
                    <img  src={`/assets/img/${item.name}.jpg`} alt={item.name + "이미지"}/>
                  </PhotoFrameItem>
              })}
          </PhotoFrameWarpper>
    </PhotoFrameLayout>
  )
}

