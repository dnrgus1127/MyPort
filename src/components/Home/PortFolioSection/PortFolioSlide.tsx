import { ArrowButton } from "components/Common/Buttons/ArrowButtons";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { AnimationComponent } from "styles/animation";
import { FadeIn } from "styles/keyFrame/Fade";
import { FloationSide } from "styles/keyFrame/floating";
import media from "styles/media";
import { Repository } from "types/Project";
import PortFolioReadMe from "./PortFolioReadMe";
import PortFolioSlideDetails from "./PortFolioSlideDetails";
import PortFolioSlideItem from "./PortFolioSlideItem";

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
    opacity: 0;
    svg {
      filter: drop-shadow(0px 0px 5px ${({ theme }) => theme.shadowColor2});
      width: 4.8rem;
      height: 4.8rem;
      fill: white;
    }
  }

  .slideBtn.left {
    left: 1.2rem;
    animation: ${() => FloationSide(-40)} 2s ease-out infinite, ${FadeIn} 1s 1s forwards;
  }
  .slideBtn.right {
    right: 1.2rem;
    animation: ${() => FloationSide(40)} 2s ease-out infinite, ${FadeIn} 1s 1s forwards;
  }

  ${media.small} {
    padding-top: 0;
    align-items: center;
  }
`;

const PortFolioSlideWindow = styled(AnimationComponent)`
  position: relative;
  width: calc(var(--width) / 3.5);
  height: calc(var(--width) / 3.5 * 1.35);
  transform-style: preserve-3d;
  perspective: 1200px;
  border-radius: 8px;
  transition: transform 1s ease-out;
  opacity: 0;

  animation: ${FadeIn} 1s 0.4s linear forwards;

  ${(props) =>
    !props.$visible &&
    css`
      transform: translateZ(-100px) translateY(-200%);
    `}

  ${media.xlarge} {
    width: calc(var(--width) / 3.5);
    height: calc(var(--width) / 3.5 * 1.35);
  }
  ${media.large} {
    width: calc(var(--width) / 2.5);
    height: calc(var(--width) / 2.5 * 1.35);
  }
  ${media.medium} {
    width: calc(var(--width) / 2);
    height: calc(var(--width) / 2 * 1.35);
  }

  ${media.small} {
    width: calc(var(--width) / 1.8);
    height: calc(var(--width) / 1.8 * 1.35);
  }
`;

interface ProjectSliderProps {
  slideIndex: number;
  data: Array<Repository>;
  setSlide: React.Dispatch<React.SetStateAction<number>>;
}

const BUTTON_DELAY = 570;

export default function PortFolioSlide({ slideIndex, data, setSlide }: ProjectSliderProps) {
  const windowRef = useRef<HTMLDivElement>(null);
  const [isButtonDelay, setButtonDelay] = useState(false);

  const { project: projectName } = useParams();

  useEffect(() => {
    if (slideIndex < 0 || slideIndex >= data.length) {
      setTimeout(() => {
        windowRef.current?.classList.remove("trans");
        setSlide(slideIndex < 0 ? data.length - 1 : 0);
      }, 500);
      setTimeout(() => {
        windowRef.current?.classList.add("trans");
      }, 600);
    }
  }, [slideIndex, data, setSlide]);

  const calculateTranslate = useCallback((distance: number) => {
    let translate = "";
    const direction = distance < 0 ? "-" : "+";

    if (distance === 0) {
      translate += "translateZ(0px)";
      return translate;
    }
    translate += "translateY(10%)";
    if (Math.abs(distance) === 1) {
      translate += " scale(0.8)";
      translate += ` rotateY(${direction}15deg)`;
    } else if (Math.abs(distance) === 2) {
      translate += " scale(0.7)";
      translate += ` rotateY(${direction}30deg)`;
    } else if (Math.abs(distance) >= 3) {
      translate += " scale(0.6)";
      translate += ` rotateY(${direction}45deg)`;
    }
    return translate;
  }, []);

  const handlerButtons = useCallback(
    (type: "increase" | "decrease") => {
      if (isButtonDelay) return;
      if (type === "increase") {
        setSlide((prev) => prev + 1);
      }
      if (type === "decrease") {
        setSlide((prev) => prev - 1);
      }
      setButtonDelay(true);
      setTimeout(() => {
        setButtonDelay(false);
      }, BUTTON_DELAY);
    },
    [isButtonDelay]
  );

  return (
    <PortFolioSlideLayout>
      <PortFolioSlideWindow className={`trans`} ref={windowRef} $visible={!projectName}>
        {data.map((item, idx) => {
          return (
            <PortFolioSlideItem
              data={item}
              key={item.id + "prev"}
              distance={slideIndex - idx + data.length}
              trans={calculateTranslate(slideIndex - idx + data.length)}
            />
          );
        })}
        {data.map((item, idx) => {
          return (
            <PortFolioSlideItem
              data={item}
              key={item.id}
              distance={slideIndex - idx}
              trans={calculateTranslate(slideIndex - idx)}
            />
          );
        })}
        {data.map((item, idx) => {
          return (
            <PortFolioSlideItem
              data={item}
              key={item.id + "next"}
              distance={slideIndex - idx - data.length}
              trans={calculateTranslate(slideIndex - idx - data.length)}
            />
          );
        })}
      </PortFolioSlideWindow>
      <PortFolioSlideDetails
        visible={!projectName}
        key={Math.abs(slideIndex)}
        project={data[Math.abs(slideIndex) % data.length]}
      />
      {!projectName && (
        <>
          <ArrowButton
            className="slideBtn left"
            direction="left"
            onClick={() => {
              handlerButtons("decrease");
            }}
          />
          <ArrowButton
            direction="right"
            className="slideBtn right"
            onClick={() => {
              handlerButtons("increase");
            }}
          />
        </>
      )}
      <PortFolioReadMe
        visible={Boolean(projectName)}
        data={data.find((project) => project.name.toLowerCase() === projectName?.toLowerCase())}
      />
    </PortFolioSlideLayout>
  );
}
