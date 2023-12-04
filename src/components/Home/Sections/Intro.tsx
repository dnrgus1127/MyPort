import React from 'react'
import styled, { keyframes } from 'styled-components'
import CoverTitle from '../../Main/Cover/CoverTitle'
import Gnb from '../Gnb'
import media from 'styles/media'

const CoverLayout = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({theme})=> theme.cover};
    box-shadow: 0px 5px 25px ${({theme})=>theme.shadowColor};
`

const noize = keyframes`
    0% { transform: translate(0,0) }
    10% { transform: translate(-5%,-5%) }
    20% { transform: translate(-10%,5%) }
    30% { transform: translate(5%,-10%) }
    40% { transform: translate(-5%,15%) }
    50% { transform: translate(-10%,5%) }
    60% { transform: translate(15%,0) }
    70% { transform: translate(0,10%) }
    80% { transform: translate(-15%,0) }
    90% { transform: translate(10%,5%) }
    100% { transform: translate(5%,0) }

`

const CoverBox = styled.div`
        height: 100%;
        margin: 0 auto;
        text-align: start;
        position: relative;
        overflow: hidden;
        .bg {
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200vh;
        background: transparent url('http://assets.iceable.com/img/noise-transparent.png') repeat 0 0;
        background-repeat: repeat;
        animation: ${noize} .2s infinite;
        opacity: .9;
        visibility: visible;
      
    }


`


const TitleBox = styled.div`
        position: absolute;
        width: 100%;
        top: calc(50% - .5em);
        font-size: 22rem;
        h1 {
        width: 100%;
        line-height: 59%;        
        font-family: 'Dhurjati', sans-serif;
        font-weight : 900;
        text-shadow: 8px 8px 0 ${({theme})=>theme.shadowColor};
        letter-spacing: 2rem;
        text-align: center;
        margin-bottom: 3rem;   
    }

    ${media.xlarge} {
        font-size : 18rem;
    }
    ${media.large}{
        font-size : 14rem;
    }
    ${media.medium}{
        font-size: 8rem;
        h1{
            letter-spacing: 1rem;
            text-shadow: 5px 5px 0 ${({theme})=>theme.shadowColor};
        }
    }
    ${media.small}{
        font-size: 6rem;
    }
    
`

const ArrowFloating = keyframes`    
    0% {
        transform: translateY(0);
    }
    
    50% {
        transform: translateY(1rem);
    }

    100% {
        transform: translateY(0);
    }

`

const ScrollArrow = styled.div`
    position: absolute;
    width: 4.8rem;
    bottom:0;
    left: calc(50% - 1.8rem);
    padding-bottom: 2rem;
    animation: ${ArrowFloating} 1.5s ease infinite;
    display    : flex;
    flex-direction: column;
    align-items: center;
    span {
        font-size: 1.4rem;
        font-family: 'SUIT-Regular';
        margin-bottom: .5rem;
        text-shadow: 2px 2px 0 ${({theme})=>theme.shadowColor};
    }
    svg {
        width: 2.4rem;
        height: 2.4rem;
        transform: scale(.8);
    }
`

export default function Intro() {
  return (
      <CoverLayout>
          <CoverBox>
            <div className="bg"></div>
            <TitleBox>
                <h1>PORTFOLIO</h1>
                <CoverTitle />
            </TitleBox>
              <ScrollArrow>
                  <span>스크롤</span>
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" /></svg>
              </ScrollArrow>
          </CoverBox>
     
    </CoverLayout>
  )
}
