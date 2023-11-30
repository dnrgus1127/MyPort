import { keyframes } from "styled-components";

export const Floating = (translateY : number) => keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform:  translateY(${translateY}%);
    }
    100% {
        transform: translateY(0);
    }
`