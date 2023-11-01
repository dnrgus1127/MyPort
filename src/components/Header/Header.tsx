import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div<{height: number}>`
    position: fixed;
    
    top:0;
    left : 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.bgColor};
    text-transform: uppercase;
    font-size: 4em;
    font-family: "Times Newer Roman";
    letter-spacing: 1.5rem;
    font-weight: 800;
    width: 100vw;
    height: ${(props) => props.height > 30 ? props.height : 30}vh;
    z-index : 99;
   
    transition: height .5s ease-out; 

    span {
        color : ${({theme})=> theme.color2};
        margin-left :4rem;
    }
`;

export default function Header() {
  const targetRef = useRef<HTMLDivElement>(null);  
  const [heigth, setHeight] = useState<number>(100);



  useEffect(() => {    
    const handleScroll = () => {
      let heightValue = 100 - (window.scrollY / window.innerHeight * 100); 
      requestAnimationFrame(() => {
        setHeight(heightValue);
      })
    };
      window.addEventListener("scroll", handleScroll);
    return () => {
     
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer ref={targetRef} height={heigth}>Daily <span>P</span>ortfolio</HeaderContainer>
  )
}
