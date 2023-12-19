import React, { useEffect, useMemo, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

const MovedStartAnimation = keyframes`
  0% {
    transform: translateX(400px);
  }
  100% {
    transform: translateX(-400px);
  }
`;

const MovedStarsLayout = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;

  overflow: hidden;
  .star {
    width: 4px;
    height: 4px;
    background-color: ${({ theme }) => theme.color};
    border-radius: 50%;
    position: absolute;
    animation: ${MovedStartAnimation} 2s infinite;
  }
  .star {
  }
`;

interface GlitterStarsProps {
  count?: number;
  zIndex?: number;
}

type location = {
  top: number;
  left: number;
  width: string;
  height: string;
  animationDelay: string;
  animationDuration: string;
};

export default function MovedStars({ count = 50, zIndex = -1 }: GlitterStarsProps) {
  const background = useRef<HTMLDivElement>(null);
  const [witdh, setWidth] = useState<number>(0);

  const starLocations = useMemo(() => {
    if (witdh === 0) return [];
    let locationArray: Array<location> = new Array(count).fill(0).map((e, idx) => {
      if (!background.current)
        return {
          top: 0,
          left: 0,
          width: "1px",
          height: "1px",
          boxShadow: "",
          animationDelay: "0s",
          animationDuration: "0s",
        };

      const size = 1 + Math.floor(Math.random() * 4);
      const animationDelay = `${Math.random()}s`;
      const animationDuration = `${10 + Math.random() * 20}s`;

      return {
        left: background.current.clientWidth * Math.random(),
        top: background.current.clientHeight * Math.random(),
        width: `${size}px`,
        height: `${size}px`,
        animationDelay,
        animationDuration,
      };
    });
    return locationArray;
  }, [witdh]);

  useEffect(() => {
    if (!background.current) return;
    setWidth(background.current.clientWidth);

    const handler = () => {
      if (!background.current) return;
      setWidth(background.current.clientWidth);
    };

    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return (
    <MovedStarsLayout ref={background} style={{ zIndex }}>
      {starLocations.map((e, idx) => {
        const location = starLocations[idx];
        return <div key={idx} className="star" style={{ ...location }}></div>;
      })}
    </MovedStarsLayout>
  );
}
