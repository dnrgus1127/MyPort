import { css } from "styled-components";

const textShadow = (pixel:number) => 
     css`
        text-shadow: ${pixel}px ${pixel}px 0 ${({theme})=>theme.shadowColor};
     `

 

export default textShadow;

