import React from "react";
import styled, { keyframes } from "styled-components";

const SpinnerLayout = styled.div`
  width: calc(var(--vh) * 15);

  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  .text {
    white-space: nowrap;
    font-size: 2rem;
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
  width: calc(var(--vh) * 8);
  height: calc(var(--vh) * 8);
  border: ${(props) => `${props.$thinkness}px solid ${props.$color || props.theme.color}`};
  border-radius: 50%;
  border-bottom-color: #0000;
  box-sizing: content-box;
  animation: ${SpinnerRotate} 1s linear infinite;
`;

interface SpinnerProps {
  thinkness?: number;
  text?: string;
}

export default function Spinner({ thinkness = 8, text = "로딩 중" }: SpinnerProps) {
  return (
    <SpinnerLayout>
      <SpinnerItem $thinkness={thinkness} />
      <p className="text">{text}</p>
    </SpinnerLayout>
  );
}
