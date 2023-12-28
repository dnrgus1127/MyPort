import Blog from "components/Home/Sections/Blog";
import Contact from "components/Home/Sections/Contact";
import useSectionAnimation, { useAnimationState } from "components/Home/Sections/hooks/useSectionAnimation";
import useCurrentSection from "components/Home/hooks/useCurrentSection";
import useTouchScroll from "components/Home/hooks/useTouchScroll";
import { SECTIONS } from "index";
import { throttle } from "lodash";
import React, { ReactNode, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Gnb from "../components/Home/Gnb";
import About from "../components/Home/Sections/About";
import Intro from "../components/Home/Sections/Intro";
import PortFolio from "../components/Home/Sections/PortFolio";
import Skills from "../components/Home/Sections/Skills";
import { GITHUBAPIKEY } from "apiKey";

const HomeLayout = styled.div`
  width: 100%;
  height: calc(var(--vh) * 100);
  overflow: hidden;
  position: relative;
`;

const HomeScrollWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export default function Home() {
  const navigate = useNavigate();
  const { index: sectionIndex } = useCurrentSection();
  const { scrollWrapper: scrollWrapperRef, transitionEndHandler } = useTouchScroll({
    index: sectionIndex,
    setIndex: (index: number) => navigate(`/${SECTIONS[index]}`),
  });

  return (
    <HomeLayout>
      <HomeScrollWrapper
        ref={scrollWrapperRef}
        onTransitionEnd={transitionEndHandler}
        style={{ transform: `translateY(${sectionIndex * 100 * -1}%)` }}
      >
        <ContentsSection contents={<Intro />} flag={0} />
        <ContentsSection contents={<About />} flag={1} />
        <ContentsSection contents={<Skills />} flag={2} />
        <ContentsSection contents={<PortFolio />} flag={3} />
        <ContentsSection contents={<Blog />} flag={4} />
        <ContentsSection contents={<Contact />} flag={5} />
      </HomeScrollWrapper>
      <Gnb />
    </HomeLayout>
  );
}

const Section = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    height: 10%; /* 스크롤바의 길이 */
    background: ${({ theme }) => theme.pointColor}; /* 스크롤바의 색상 */

    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
  }
`;
const SectionWrapper = styled.div`
  height: 100%;
`;

interface ContentsScrtionProps {
  contents: ReactNode;
  isSetup?: boolean;
  flag: number;
}

const max = 5;
const min = 0;

function ContentsSection({ contents, flag }: ContentsScrtionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { index: sectionIndex } = useCurrentSection();
  useSectionAnimation(flag);
  const { isAnimation } = useAnimationState(flag);

  const wheelEventHandler = useCallback(
    throttle((e: React.WheelEvent) => {
      if (sectionIndex !== flag) return;
      if (Math.abs(e.deltaY) < window.innerHeight * 0.02) return;
      let nextSection = sectionIndex;
      if (e.deltaY < 0) {
        nextSection -= 1;
      }

      if (e.deltaY > 0) {
        nextSection += 1;
      }
      if (nextSection >= min && nextSection <= max) {
        navigate(`/${SECTIONS[nextSection]}`);
      }
    }, 100),
    [navigate, flag]
  );

  return (
    <Section ref={sectionRef} onWheel={wheelEventHandler}>
      <SectionWrapper ref={contentRef}>{isAnimation && contents}</SectionWrapper>
    </Section>
  );
}
