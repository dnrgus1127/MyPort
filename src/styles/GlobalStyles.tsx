import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
  * {
        
        box-sizing: border-box;
    }
    
    body {
      color: ${({ theme }) => theme.color};
    }

    .App {
      background-color: ${({ theme }) => theme.bgColor};
      transition: background-color 1s ease-out;
    }

`

