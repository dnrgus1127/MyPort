import Blog from "components/Home/Sections/Blog";
import Contact from "components/Home/Sections/Contact";
import useSectionAnimation from "components/Home/Sections/hooks/useSectionAnimation";
import useTouchScroll from "components/Home/hooks/useTouchScroll";
import { throttle } from "lodash";
import React, { ReactNode, useCallback, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Gnb from "../components/Home/Gnb";
import About from "../components/Home/Sections/About";
import Intro from "../components/Home/Sections/Intro";
import PortFolio from "../components/Home/Sections/PortFolio";
import Skills from "../components/Home/Sections/Skills";

const HomeLayout = styled.div`
  width: 100%;
  height: calc(var(--vh) * 100);
  overflow: hidden;
  position: relative;
`;

interface HomeScrollWrapperProps {
  $sectionIndex: number;
}

const HomeScrollWrapper = styled.div<HomeScrollWrapperProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  transform: translateY(${(props) => props.$sectionIndex * 100 * -1}%);
  left: 0;
`;

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollWrapper: scrollWrapperRef, transitionEndHandler } = useTouchScroll({
    index: Number(location.hash.substring(1)),
    setIndex: (index: number) => navigate(`#${index}`),
  });

  return (
    <HomeLayout>
      <HomeScrollWrapper
        ref={scrollWrapperRef}
        $sectionIndex={Number(location.hash.substring(1))}
        onTransitionEnd={transitionEndHandler}
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
  const location = useLocation();
  const navigate = useNavigate();
  useSectionAnimation(flag);

  const wheelEventHandler = useCallback(
    throttle((e: React.WheelEvent) => {
      if (location.hash !== `#${flag}`) return;
      if (Math.abs(e.deltaY) < window.innerHeight * 0.02) return;
      let nextSection = Number(flag);
      if (e.deltaY < 0) {
        nextSection -= 1;
      }

      if (e.deltaY > 0) {
        nextSection += 1;
      }
      if (nextSection >= min && nextSection <= max) {
        navigate(`#${nextSection}`);
      }
    }, 100),
    [navigate, flag, location.hash]
  );

  return (
    <Section ref={sectionRef} onWheel={wheelEventHandler}>
      <SectionWrapper ref={contentRef}>{contents}</SectionWrapper>
    </Section>
  );
}
