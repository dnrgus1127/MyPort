import useBoolean from 'hooks/useBoolean'
import React, {  useEffect, useLayoutEffect, useMemo, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { DirectionType, clearPath } from 'redux/reducer/navigaterReducer'
import styled, { keyframes } from 'styled-components'

const PageFrame = (x:number,y:number) => keyframes`
  0% {
   transform: translate(0,0);

  }
  33% {

     transform: translate(0,0%);

  }
  66% {
    transform: translate(0,0%);
  }

  100% {
    transform: translate(${x}%,${y}%);

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

const PageInCover = styled.div<{$direction : DirectionType}>`
  position: fixed;
  width: 100vw;
  height :100vh;
  top:0;
  left:0;
  z-index: 898;
  background-color: ${({ theme }) => theme.bgColor};
  transform: translateY(-100%);
  display: flex ;
  align-items: center;
  justify-content: center;
  animation: ${(props) => {
    if (props.$direction === DirectionType.SOUTH) {
      return PageFrame(0,-100);
    }
    if (props.$direction === DirectionType.NORTH) {
      return PageFrame(0,100);    
  }
    if (props.$direction === DirectionType.WEST) {
        return PageFrame(100,0);    
    }
    if (props.$direction === DirectionType.EAST) {
        return PageFrame(-100,0);    
      }
  }} 2s ease-in-out forwards;
  
  .textBox{
    height: 9rem;
    width: 100%;
    overflow: hidden;
    text-align: center;
  }

  .text {
    font-size: 6rem;
    animation: ${TextFrame} .5s .6s ease-in-out forwards;
  }

`

/**
 * 페이지 이동이 일어났을 때 최초로
 * location의 pathname이 바뀌는 경우에만 작동
 * @returns 
 */
export function PageIn() {
  const location = useLocation();
  const [visible, ,setVisible] = useBoolean(false);
  const {prevPath, direction } = useAppSelector(state => state.navigation);
  const coverRef = useRef<HTMLDivElement>(null);
  const pageName = useMemo(() => {
    if (location.pathname === "/project/main") {
      return "PROJECT"
    }
    if (location.pathname === "/project/readme")
    {
      return "READ ME"
    }
    if (location.pathname === "/til") {
      return "Today I Learn"
    }
    if (location.pathname === "/") {
      return "Main"
    }
    return "이동 중"
  }, [location.pathname])

  useLayoutEffect(() => {    
      prevPath !== "init" && setVisible(true);
  }, [location.pathname,setVisible,prevPath]);

  if (!visible) return <></>;
  return (
    <PageInCover ref={coverRef} $direction={direction} onAnimationEnd={(e) => {
      if(e.target === coverRef.current) setVisible(false);
    }}>
      <div className="textBox">
        <p className="text">{pageName}</p>
      </div>
    </PageInCover>
  )
}


const OutFrame = (x: number, y: number) => keyframes`
  from {
    transform: translate(${x}%,${y}%)
  }
  to{
    transform: translate(0,0);
  }
`


const PageOutCover = styled.div<{$direction : DirectionType}>`
  position: fixed;
  width: 100vw;
  height :100vh;
  top:0;
  left:0;
  z-index: 898;
  background-color: ${({theme})=> theme.bgColor};
  transform: translateY(-100%);
  animation: ${(props) => {
    if (props.$direction === DirectionType.SOUTH) {
      return OutFrame(0,100);
    }
    if (props.$direction === DirectionType.NORTH) {
      return OutFrame(0,-100);    
  }
    if (props.$direction === DirectionType.WEST) {
        return OutFrame(-100,0);    
    }
    if (props.$direction === DirectionType.EAST) {
        return OutFrame(100,0);    
      }
  }} .6s ease-in-out forwards;
`



/**
 * state 변경은 되고 아직 페이지 이동이 발생하지 않았을 때 
 * @returns 
 */
export function PageOut() {
  const [visible, onToggleVisible,setVisible] = useBoolean(false);
  const {path,direction} = useAppSelector((state) => state.navigation);
  const navigate = useNavigate();
  const location = useLocation();
  const dispath = useAppDispatch();
  
  useEffect(() => {
    path !== "init" && setVisible(true);
  }, [path,setVisible])


  if (!visible) return <></>
  else {
    return <PageOutCover $direction={direction} key={location.pathname} onAnimationEnd={() => {
      if (path === '-1')
      {
        navigate(-1);  
      }
      else if (path === "init") {
        
      }
      else if (path !== location.pathname) {
        navigate(path);
      }
      dispath(clearPath());
      onToggleVisible();
    }} />
  }
}

export default function PageAnimation() {
  const location = useLocation();
  return <>
    <PageIn key={location.pathname}/>
    <PageOut/>
  </>
}