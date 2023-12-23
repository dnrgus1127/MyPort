import useBoolean from "hooks/useBoolean";
import React from "react";
import styled from "styled-components";

const MenuBox = styled.button`
  padding: 2rem;
  line-height: 0;

  .menuWrapper {
    position: relative;
    width: 2.4rem;
    height: 2.4rem;
  }

  span {
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.color};
    display: inline-block;
    position: absolute;
    top: 50%;
    transition: all 0.2s ease-out;
  }
  span:first-child {
    transform: translateY(-5px);
  }
  span:not(:last-child) {
    left: 0;
  }
  span:last-child {
    transform: translateY(5px);
    width: 50%;
    right: 0;
  }

  .menuWrapper.open {
    span:first-child {
      transform: rotate(-45deg);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:last-child {
      transform: rotate(45deg);
      width: 100%;
    }
  }
`;

interface ButtonProps {
  state: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function MenuButton({ onClick, state }: ButtonProps) {
  return (
    <MenuBox tabIndex={-1} onClick={onClick}>
      <div className={`menuWrapper ${state ? "open" : ""}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </MenuBox>
  );
}
