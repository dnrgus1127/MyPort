import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'


const GliterFrameType1 = keyframes`
  0% {
    opacity: 0;
  }
  /* 20% {
    opacity: .3;
  }
  40% {
    opacity: .7;
  } */
  50% {
    opacity: 1;
  }
  /* 75% {
    opacity: .3;
  } */
  100% {
    opacity: 0;
  }
`

const GlitterStarsLayout = styled.div`
    position: absolute;
    width : 100%;
    height: 100%;

    overflow: hidden;
    .star {
      width: 4px;
      height: 4px;
      background-color: #fff;
      border-radius: 50%;
      position: absolute;
    }
    .star {
      animation: ${GliterFrameType1} 2s infinite;
    }
    
`

interface GlitterStarsProps {
  count?: number;
}

type location = {
  top: number;
  left: number;
  width: string;
  height: string;
  boxShadow: string;
  animationDelay: string;
  animationDuration: string;
}

export default function GlitterStars({ count = 50 }: GlitterStarsProps) {
  const background = useRef<HTMLDivElement>(null);
  const [witdh, setWidth] = useState<number>(0);

  const starLocations = useMemo(() => {
    if (witdh === 0) return [];
    let locationArray : Array<location> = (new Array(count)).fill(0).map((e, idx) => {
      if (!background.current) return { top: 0, left: 0, width:"1px", height:"1px", boxShadow : "", animationDelay: '0s' ,animationDuration : "0s"};
      
      const size = 1 + Math.floor(Math.random() * 3);
      const boxShadow = `0px 0px 7px ${size - 1}px #eeea`;
      const animationDelay = `${Math.random()}s`;
      const animationDuration = `${1 + Math.random() * 4}s`

      return {
        left: background.current.clientWidth * Math.random(),
        top: background.current.clientHeight * Math.random(),
        width: `${size}px`,
        height: `${size}px`,
        boxShadow,
        animationDelay,
        animationDuration
      }
    })
    return locationArray;
  },[witdh])

  useEffect(() => {
    if (!background.current) return;
    setWidth(background.current.clientWidth);
    
    const handler = () => {
      if (!background.current) return;
      setWidth(background.current.clientWidth);
      console.log("Resize");
    }

    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
    }
  }, [])
  
  
  return (
    <GlitterStarsLayout ref={background}>
      {starLocations.map((e, idx) => {
        const location = starLocations[idx];
        return <div key={idx} className='star' style={{...location}}></div>
      })}
    </GlitterStarsLayout>
  )
}
