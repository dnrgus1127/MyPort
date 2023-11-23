import styled, { css } from "styled-components";

export const MarkdownStyled = styled.div`  
    color : ${({theme})=> theme.color};
    img {
        max-width: 49%;
        ${({theme})=> theme.current ==="dark" && css`
            filter: grayscale(50%) ;
        `}
    }
    h1,h2,h3,h4 {
        font-family: "Roboto KR","Noto Sans KR";
        font-weight: 600;
    }
    h5,h6,p,li{
        font-family: 'SUIT-Regular';
    }
    h1 {
        font-size: 3rem;
        margin-bottom: 3rem;

    }
    h2 {
        font-size: 2.2rem;
    }
    h3 {
        font-size : 1.8rem;
    }
    h2,h3,blockquote {
        margin-bottom: 2rem;
    }
    hr {
        margin : 3rem 0;
        height: 1px;
        border: none;
        width: 100%;
        background-color: ${({ theme }) => theme.color};
        opacity: .6;
    }
    p,li {
        font-size: 1.6rem;
        margin-bottom: 1rem;
        line-height: 1.7rem;
    }

    blockquote {
        padding : .5rem 0;
        padding-left : 1rem;
        border-left : 2px solid ${({ theme }) => theme.color2};
        background-color : ${({ theme }) => theme.bgColor2};
        p{
            margin: 0;
        }
    }

    a {
        text-decoration:none;
        color : inherit;
        font-weight:600;
        text-decoration:underline;
    }
    a::before {
        content : "[참조] ";
        
    } 
`