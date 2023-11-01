import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
  * {
        color: ${({ theme }) => theme.color};
    }
    
    body {
        
        padding-top: 100vh;
        background-color: ${({theme})=> theme.bgColor};
    }
`

