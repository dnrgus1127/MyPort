import React, { useMemo } from "react";
import styled from "styled-components";
import { ReactComponent as SVG_ArrowTop } from "../../../assets/arrow_top.svg";
import { ReactComponent as SVG_ArrowBottom } from "../../../assets/arrow_down.svg";
import { ReactComponent as SVG_ArrowLeft } from "../../../assets/arrow_left.svg";
import { ReactComponent as SVG_ArrowRight } from "../../../assets/arrow_right.svg";

interface ArrowButton {
  direction: "top" | "left" | "right" | "bottom";
  onClick: React.MouseEventHandler<HTMLButtonElement> | (() => void);
  className: string;
}

const ArrowButtonCss = styled.button``;

export function ArrowButton({ className, direction, onClick }: ArrowButton) {
  const arrow = useMemo(() => {
    if (direction === "top") return <SVG_ArrowTop />;

    if (direction === "left") return <SVG_ArrowLeft />;

    if (direction === "right") return <SVG_ArrowRight />;

    if (direction === "bottom") return <SVG_ArrowBottom />;
  }, [direction]);

  return (
    <ArrowButtonCss type="button" className={className} onClick={onClick}>
      {arrow}
    </ArrowButtonCss>
  );
}
