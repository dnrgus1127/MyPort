import { CoverTarnslate } from 'constans/enum/CoverTranslate'
import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import CoverTitle from './CoverTitle'



const Template = styled.div`
   position: fixed;
    background-color: ${({ theme }) => theme.bgColor2};
    width: 100%;
    height: 100%;
    text-transform: uppercase;
    font-size: 4em;
    font-family: "Times Newer Roman";
    letter-spacing: 1.5rem;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .5s ease-out;
 
    z-index: 10;
  
    
`

const ButtonAnimation = (x:number,y:number) => keyframes`
  0% {
    opacity : 0;
    transform: translate(${x * -1}%,${y * -1}%);
  }
  50% {
    opacity: 1;
    transform: translate(0);
    
  }
  100% {
    opacity: 0;
    transform: translate(${x}%,${y}%);
  }
`

const Arrow = styled.button`
    position: absolute;
    
    padding : 1rem;
    
    svg {
      fill :${({theme})=> theme.color};
      width: 2.4rem;
      height: 2.4rem;
    }
`

const ArrowUp = styled(Arrow)`
  top: 0;
  left: calc(50% - 2.2rem);
  animation: ${() => ButtonAnimation(0,-30)} 2s ease-in-out infinite;

`
const ArrowDown = styled(Arrow)`
  bottom: 0;
  left : calc(50% - 2.2rem);
  animation: ${() => ButtonAnimation(0,30)} 2s ease-in-out infinite;
`
const ArrowLeft = styled(Arrow)`
  top : calc(50% - 2.2rem);
  left: 0;
  animation: ${() => ButtonAnimation(-30,0)} 2s ease-in-out infinite;

`
const ArrowRight = styled(Arrow)`
  top : calc(50% - 2.2rem);
  right: 0;
  animation: ${() => ButtonAnimation(30,0)} 2s ease-in-out infinite;

`

interface HomeTemplateProps {
  title: string;
  arrowButtonHandler : React.MouseEventHandler<HTMLButtonElement>;
}

const texts = ["FrontEnd","Programmer","WookHyun"];
export default function CoverTemplate({ title, arrowButtonHandler}: HomeTemplateProps) {

  return (
    <Template >
         <CoverTitle title={texts} />
      
        <ArrowUp onClick={arrowButtonHandler} value={CoverTarnslate.up}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg></ArrowUp>
        <ArrowDown onClick={arrowButtonHandler} value={CoverTarnslate.down}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg></ArrowDown>
        <ArrowLeft onClick={arrowButtonHandler} value={CoverTarnslate.left}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg></ArrowLeft>
        <ArrowRight onClick={arrowButtonHandler} value={CoverTarnslate.right}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg></ArrowRight>
      </Template>
  )
}
