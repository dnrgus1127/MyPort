import React, { ReactNode, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import About from '../components/Home/Sections/About'
import Gnb from '../components/Home/Gnb'
import PortFolio from '../components/Home/Sections/PortFolio'
import Skills from '../components/Home/Sections/Skills'
import Intro from '../components/Home/Sections/Intro'
import Blog from 'components/Home/Sections/Blog'
import Contact from 'components/Home/Sections/Contact'
import { useLocation, useNavigate } from 'react-router-dom'
import { debounce, throttle } from 'lodash'

const HomeLayout = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
`

const HomeScrollWrapper = styled.div<{$sectionIndex : number}>`
    position: absolute;
    transition: top 1s cubic-bezier(0.4, 0, 1, 1);
    width: 100%;
    height: 100%;
    top: -${(props)=> props.$sectionIndex * 100}vh;
    left:0;
`
    
export default function Home() {
    const location = useLocation();

  return (
    <HomeLayout>
          <HomeScrollWrapper $sectionIndex={Number(location.hash.substring(1))}>
              <ContentsSection contents={<Intro/>} flag= {0}/>
              <ContentsSection contents={<About/>} flag= {1}/>
              <ContentsSection contents={<Skills/>} flag= {2}/>
              <ContentsSection contents={<PortFolio />} flag= {3}/>
              <ContentsSection contents={<Blog/>} flag= {4}/>
              <ContentsSection contents={<Contact />} flag= {5}/>
              <Gnb />
       
          </HomeScrollWrapper>
    </HomeLayout>
  )
}


const Section = styled.section`
    width: 100%;
    height : 100vh;

    &::-webkit-scrollbar {
        width: 4px;
    }
    &::-webkit-scrollbar-thumb {
        height: 10%; /* 스크롤바의 길이 */
        background: ${({theme})=>theme.pointColor}; /* 스크롤바의 색상 */
        
        border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
    }
`
const SectionWrapper = styled.div`
    height: 100%;
`

interface ContentsScrtionProps { 
    contents: ReactNode;
    isSetup?: boolean;
    flag: number;
}

const max = 5;
const min = 0;

function ContentsSection({ contents,flag }: ContentsScrtionProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Section 이동 이후 발생하는 추가적인 스크롤 이벤트에 대해서 처리 X    
        if (!sectionRef.current || location.hash !== `#${flag}`) return;
    
        const section = sectionRef.current;
        const handler = (e: WheelEvent) => {
            let nextSection = Number(flag) + (e.deltaY < 0 ? -1 : 1);
            if (nextSection >= min && nextSection <= max) {
                navigate(`#${nextSection}`);
            }
        }

        let throttleHandler = throttle(handler,1000);

        section.addEventListener("wheel", throttleHandler);

        return () => {
            
            section.removeEventListener("wheel",throttleHandler);
        }

    }, [location.hash,flag,navigate])
    
    
    
    
    return <Section ref={sectionRef} className='scrollSection' >
        <SectionWrapper ref={contentRef}>{contents}</SectionWrapper>
    </Section>
}