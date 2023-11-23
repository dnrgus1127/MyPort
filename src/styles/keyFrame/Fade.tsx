import { keyframes } from "styled-components";

export const FadeInFromBottom = () => keyframes`
    from {
        opacity: 0;
        transform: translateY(25%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

export const FadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const FadeOut = keyframes`
    from {
        opacity: 1;
    }
    to{
        opacity: 0;
    }
`