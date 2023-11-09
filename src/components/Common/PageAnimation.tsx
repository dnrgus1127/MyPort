import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const PageFrame = keyframes`
  0% {
   transform: translateY(-100%);

  }
  30% {
     transform: translateY(0%);

  }
  66% {
    transform: translateY(0%);
 
  }
  100% {
    transform: translateY(-100%);
 
  }
`

const TextFrame = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-120%);
  }
`

const AnimatedCover = styled.div`
  position: fixed;
  width: 100vw;
  height :100vh;
  top:0;
  left:0;
  z-index: 898;
  background-color: ${({theme})=> theme.bgColor};
  transform: translateY(-100%);
  display: flex ;
  align-items: center;
  justify-content: center;

  animation: ${PageFrame} 2s ease-in-out forwards;
  
  .textBox{
    height: 9rem;
    width: 100%;
    overflow: hidden;
    text-align: center;
  }

  .text {
    font-size: 3.2rem;
    animation: ${TextFrame} .5s .6s ease-in-out forwards;
  }
`


export default function PageAnimation() {
  const location = useLocation();
  const pageName = useMemo(() => {
    if (location.pathname === "/project/main") {
      return "프로젝트"
    }
    if (location.pathname === "/project/readme")
    {
      return "READ ME"
    }
    return "이동 중"
  }, [location.pathname])
  
  return (
    <AnimatedCover key={location.pathname}>
    <div className="textBox">
      <p className="text">{pageName}</p>
    </div>
  </AnimatedCover>
  )
}
