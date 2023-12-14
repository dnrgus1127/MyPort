import { keyframes } from "styled-components";

export const Rotating = keyframes`
    0% {
        transform : rotateY(0deg);
    }
    100% {
        transform : rotateY(360deg);
    }
`