import React, { ReactNode, useCallback, useEffect, useRef } from 'react'
import styled from 'styled-components'
import ScrollIcon from '../components/Home/ScrollIcon'
import About from '../components/Home/Sections/About'
import Gnb from '../components/Home/Gnb'
import PortFolio from '../components/Home/Sections/PortFolio'
import Skills from '../components/Home/Sections/Skills'
import Intro from '../components/Home/Sections/Intro'
import Blog from 'components/Home/Sections/Blog'

const HomeLayout  = styled.div`
    width: 100%;
`
const Section = styled.section`
    width: 100%;
    height: 120vh;
`
const SectionWrapper = styled.div`
    position: sticky;
    top:0;
    min-height: 100vh;
`

export default function Home() {
    
  return (
    <HomeLayout>
          <ContentsSection contents={<Intro/>}/>
          <ContentsSection contents={<About/>}/>
          <ContentsSection contents={<Skills/>}/>
          <ContentsSection contents={<PortFolio />} />          
          <ContentsSection contents={<Blog/>}/>
          <Gnb />
          <ScrollIcon/>
    </HomeLayout>
  )
}

interface ContentsScrtionProps { 
    contents: ReactNode;
}

function ContentsSection({ contents }: ContentsScrtionProps) {
    const contentRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    const setupHeight = useCallback(() => {
        if (contentRef.current && sectionRef.current) {
            sectionRef.current.style.height = `${contentRef.current.clientHeight * 1.3}px`;
        } 
    },[])

    useEffect(() => {
        setupHeight();
    }, [setupHeight])
    useEffect(() => {
        window.addEventListener("resize", setupHeight);
        return () => {
            window.removeEventListener("resize", setupHeight);
        }
    },[setupHeight])
    
    return <Section ref={sectionRef}>
        <SectionWrapper ref={contentRef}>{contents}</SectionWrapper>
    </Section>
}