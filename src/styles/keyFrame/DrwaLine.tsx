import { keyframes } from "styled-components";

export const DrawLine = (width : number) => keyframes`
    from
    {
        width: 0;
    }
    to {
        width: ${width}%;
    }
`