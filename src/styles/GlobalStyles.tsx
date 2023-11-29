import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
  * {
        
        box-sizing: border-box;
    }
    
    body,button {
      color: ${({ theme }) => theme.color};
    }
    

    .App {
      background-color: ${({ theme }) => theme.bgColor2};
      transition: background-color 1s ease-out;
    }
    html {
      background-color: ${({theme})=> theme.color2};
    }

    svg {
      fill : ${({theme})=> theme.color};
    }
    a {
      text-decoration: none;
      color : inherit;
    }
    
`

