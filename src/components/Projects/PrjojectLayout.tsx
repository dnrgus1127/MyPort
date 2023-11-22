import styled from "styled-components"
import { ReactNode } from "react";
import { DirectionType, changePath } from "redux/reducer/navigaterReducer";
import { useAppDispatch } from "redux/hooks";
import PageAnimation from "components/Common/PageAnimation";
import media from "styles/media";
import useCustomNavigate from "hooks/useCustomNavigate";


const Template = styled.div`
    height: 100vh;
    overflow-x: hidden;
    position: relative;

    .homeButton {
      position: absolute;
      top:0;
      left:0;
      padding : 2rem;
      svg {
        fill : ${({ theme }) => theme.color};
        filter: blur(.4px);
      }
      svg:hover{
        filter: none;
        transform: scale(1.2);
      }
    }
`


export default function ProjectLayout({ children }: { children: ReactNode }) {
  const [gotoPage] = useCustomNavigate();
  return (
    <Template>      
      <button className="homeButton" onClick={() => {
        gotoPage("/",DirectionType.NORTH);
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 7.093l-3-3v-2.093h3v5.093zm4 5.907h-3v10h-18v-10h-3l12-12 12 12zm-10 2h-4v6h4v-6z"/></svg>
      </button>
      {children}
    </Template>
  )
}
