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

export const FloationSide = (value: number) => keyframes`
    0% {
        transform: translateX(0);;
    }
    50% {
        transform: translateX(${value}%);
    }
    100% {
        transform: translateX(0);
    }
`