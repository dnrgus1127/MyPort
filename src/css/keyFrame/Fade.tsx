import { keyframes } from "styled-components";

export const FadeInFromBottm = () => keyframes`
    from {
        opacity: 0;
        transform: translateY(100%);
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