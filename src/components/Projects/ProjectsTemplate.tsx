import styled from "styled-components"
import { ReactNode } from "react";



const Template = styled.div`
    background-color: rgb(255, 255, 255);
    padding: 5rem var(--side-padding);
    padding-top : 8rem;
    background-color: ${({ theme }) => theme.bgColor2};
    height: 100vh;
    overflow-x: hidden;
`



export default function ProjectsTemplate({children} : {children : ReactNode}) {
  return (
    <Template>
      {children}
    </Template>
  )
}
