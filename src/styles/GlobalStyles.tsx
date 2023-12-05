import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
  * {
        
        box-sizing: border-box;
    }
    
    body {
      color: ${({ theme }) => theme.color};
    }

    button {
      color: ${({ theme }) => theme.color};
    }
    

    .App {
      transition: background-color 1s ease-out;
    }
    html {
      background-color: ${({theme})=> theme.bgColor2};
    }

    svg {
      fill : ${({theme})=> theme.color};
    }
    a {
      text-decoration: none;
      color : inherit;
    }
    
`

