import styled, { keyframes } from "styled-components"
import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageAnimation from "components/Common/PageAnimation";




const Template = styled.div`
    background-color: rgb(255, 255, 255);
    padding: 5rem var(--side-padding);
    padding-top : 8rem;
    background-color: ${({ theme }) => theme.bgColor2};
    height: 100vh;
    overflow-x: hidden;
    position: relative;
`


export default function ProjectLayout({ children }: { children: ReactNode }) {
  return (
    <Template  >
      <PageAnimation/>
      {children}
    </Template>
  )
}
