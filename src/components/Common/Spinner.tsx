import React from "react";
import styled, { keyframes } from "styled-components";

const SpinnerLayout = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: calc(var(--vh) * 5);
  align-items: center;
  .text {
    white-space: nowrap;
    font-size: 1.8rem;
    font-weight: 600;
    font-family: "Noto Sans KR";
  }
`;

interface SpinnerItemProps {
  $thinkness: number;
  $color?: string;
}

const SpinnerRotate = keyframes`
   0% {
    transform: rotate(0deg);
  }
  
   100% {
    transform: rotate(360deg);
   }
   
  
`;

const SpinnerItem = styled.div<SpinnerItemProps>`
  width: 4rem;
  height: 4rem;
  margin-top: 3rem;
  border: ${(props) => `${props.$thinkness}px solid ${props.$color || props.theme.pointColor}`};
  border-radius: 50%;
  border-bottom-color: #0000;
  box-sizing: content-box;
  animation: ${SpinnerRotate} 1s linear infinite;
`;

interface SpinnerProps {
  thinkness?: number;
  text?: string;
}

export default function Spinner({ thinkness = 4, text = "로딩 중" }: SpinnerProps) {
  return (
    <SpinnerLayout>
      <SpinnerItem $thinkness={thinkness} />
      <p className="text">{text}</p>
    </SpinnerLayout>
  );
}
