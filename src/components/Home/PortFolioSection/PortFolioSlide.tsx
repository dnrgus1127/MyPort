import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { FloationSide } from 'styles/keyFrame/floating'
import media from 'styles/media'
import { Repository } from 'types/Project'
import PortFolioSlideItem from './PortFolioSlideItem'
import PortFolioSlideDetails from './PortFolioSlideDetails'

const PortFolioSlideLayout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 2rem;   
    position: relative;
    padding-top: calc(var(--header) * 2);

    .slideBtn {
        position: absolute;
        top: calc(50% - 2.4rem);
        z-index: 4;
        svg {
            fill: white;
            filter: drop-shadow(0px 0px 5px ${({theme})=>theme.shadowColor2});
            width : 4.8rem;
            height: 4.8rem;
        }
    }
    .slideBtn.left {
        left:1.2rem;
        animation: ${()=>FloationSide(-40)} 2s ease-out infinite;
    }
    .slideBtn.right {
        right: 1.2rem;
        animation: ${()=>FloationSide(40)} 2s ease-out infinite;
    }

    .blur {
        ${({ theme }) => theme.current === "light" && css`
            display: none;
        `}
        position: absolute;
        bottom:0;
        width: 100%;
        height: 40%;
        ${({theme})=> theme.current ==="dark" ? css`
            background: linear-gradient(to bottom, rgba(0, 0, 0,0 ), rgba(0, 0, 0, 1));
            backdrop-filter: blur(1px);
        
        `: css`
            background: linear-gradient(to bottom, rgba(255, 255, 255,0.2 ), rgba(255, 255, 255, 1));
            backdrop-filter: blur(3px);
        `}
        pointer-events: none;
        z-index: 1;
    }

    ${media.small}{
        padding-top : 0;
        align-items : center;
    }
`
const PortFolioSlideWindow = styled.div`
    position: relative;
    width: calc(var(--width) / 3.5);
    height: calc(var(--width) / 3.5 * 1.35);
    transform-style: preserve-3d;
    perspective: 1500px;
    border-radius: 8px;

    ${media.xlarge} {
        width: calc(var(--width) / 3.5);
        height: calc(var(--width) / 3.5 * 1.35);
    }
    ${media.large} {
        width: calc(var(--width) /2.5);
        height: calc(var(--width) /2.5 * 1.35);
    }
    ${media.medium} {
        width: calc(var(--width) /2);
        height: calc(var(--width) /2 * 1.35);
    }

    ${media.small} {
        width: calc(var(--width) / 1.2);
        height: calc(var(--width) / 1.2 * 1.35);
    }
    
  
`

interface ProjectSliderProps {
    slideIndex: number;
    data: Array<Repository>;
    setSlide: React.Dispatch<React.SetStateAction<number>>;
}

const BUTTON_DELAY = 570;


export default function PortFolioSlide({ slideIndex, data, setSlide }: ProjectSliderProps) {
    const windowRef = useRef<HTMLDivElement>(null);
    const [isButtonDelay, setButtonDelay] = useState(false);

    useEffect(() => {
        if (slideIndex < 0 || slideIndex >= data.length) {
            
            setTimeout(() => {
                windowRef.current?.classList.remove("trans");
                setSlide(slideIndex < 0 ? data.length-1 : 0);
            }, 500);
            setTimeout(() => {
                windowRef.current?.classList.add("trans");
            }, 600)
        }
       
    }, [slideIndex,data,setSlide])
    
    const calculateTranslate = (distance: number) => {
        let translate = "";
        if (distance === 0) {
            translate += " scale(1)";
            return translate;
        }
        if (Math.abs(distance) === 1) {
            translate += " scale(0.8)";
            translate += ` rotateY(${distance <0 ? '-' :"+"}20deg)`
        }
        else if (Math.abs(distance) === 2) {
            translate += " scale(0.7)"
            translate += ` rotateY(${distance <0 ? '-' : "+"}35deg)`
        }
        return translate;
    }


    
    const handlerButtons = useCallback((type: "increase" | "decrease") => {
        if (isButtonDelay) return;
        if (type === "increase") {
            setSlide(prev => prev+1) 
        }
        if (type === "decrease") {
            setSlide(prev => prev-1)    
        }
        setButtonDelay(true);
        setTimeout(() => {
            setButtonDelay(false);
        },BUTTON_DELAY)
    },[isButtonDelay])

  return (
      <PortFolioSlideLayout>
          <PortFolioSlideWindow className="trans" ref={windowRef}>
          {data.map((item, idx) => {
              return <PortFolioSlideItem data={item} key={item.id + "prev"} distance={slideIndex - idx + data.length} trans={calculateTranslate(slideIndex - idx + data.length)}/>
            })}
            {data.map((item, idx) => {
                return <PortFolioSlideItem data={item} key={item.id } distance={slideIndex - idx} trans={calculateTranslate(slideIndex-idx)} />
            })}
            {data.map((item, idx) => {
                return <PortFolioSlideItem data={item} key={item.id + "next"} distance={slideIndex - idx - data.length} trans={calculateTranslate(slideIndex - idx - data.length)}/>
            })}
          </PortFolioSlideWindow>
          <PortFolioSlideDetails key={Math.abs(slideIndex)} project={data[Math.abs(slideIndex) % data.length]}/>
          <div className="blur"></div>
          <button type='button' className="slideBtn left"  onClick={()=>{
              handlerButtons("decrease");
          }}>
              <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13.789 7.155c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591 1.299-1.002 3.945-3.044 5.498-4.243z" /></svg>
          </button>
          <button type='button' className="slideBtn right" onClick={()=>{
            handlerButtons("increase");
          }}><svg clipRule="evenodd"  fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"/></svg></button>
    </PortFolioSlideLayout>
  )
}
