import styled from "styled-components"
import { ReactNode } from "react";
import { changePath } from "redux/reducer/navigaterReducer";
import { useAppDispatch } from "redux/hooks";
import PageAnimation from "components/Common/PageAnimation";


const Template = styled.div`
    padding: 0 var(--side-padding);
    height: 100vh;
    overflow-x: hidden;
    position: relative;
`


export default function ProjectLayout({ children }: { children: ReactNode }) {
  return (
    <Template>      
      {children}
    </Template>
  )
}
