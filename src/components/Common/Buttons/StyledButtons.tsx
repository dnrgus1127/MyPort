import styled from "styled-components";

const Button = styled.button`
    
`

export const BoxButton = styled(Button)`
    padding: 1.2rem 2.6rem;
    background-color: ${({ theme }) => theme.color2};
    color :${({ theme }) => theme.bgColor};
    transition: all .5s ease-in-out;
    border: 1px solid ${({ theme }) => theme.color2};

    
    &:hover {
        background-color: ${({theme})=> theme.bgColor};
        color : ${({ theme }) => theme.color};
    }
`