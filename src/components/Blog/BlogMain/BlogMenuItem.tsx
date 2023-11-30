import { BoxButton } from 'components/Common/Buttons/StyledButtons'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import styled, { css } from 'styled-components'
import media from 'styles/media';


const MenuItem = styled(BoxButton)<{$clicked : boolean}>`
  font-family: 'SUIT-Regular';
  
  cursor: pointer;
  font-size: 1.5rem;
  padding : .8rem 2.2rem;
  transition: .1s all ease-out;
  font-style : italic;

  ${(props)=> props.$clicked && css`
    background-color: ${({theme})=> theme.bgColor};
    color : ${({ theme }) => theme.color};
    position: relative;
    &::after {
        content:  "x";
        font-style: initial;
        text-align: center;
        line-height: 1.3rem;
        font-size: 1.6rem;
        position: absolute;
        top: -.8rem;
        right: -.8rem;
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        color : ${({theme})=>theme.bgColor};
        border: 1px solid ${({ theme }) => theme.color};
        background-color: ${({ theme }) => theme.color2};
  
    }
  
  `}

  ${media.small}{
    padding : .5rem 2rem;
    font-size: 1.4rem;
  }
`


interface BlogMenuItemProps {
    topic: string;
}

export default function BlogMenuItem({ topic }: BlogMenuItemProps) {
    const navigate = useNavigate();
    const params = useParams();

    
  return (
      <MenuItem as="li" $clicked={params.category ? true : false} onClick={() => {
          if (params.category) {
              navigate("/blog/main");
          }
          else {
            if (topic === "Latest") {
                navigate("/blog/main/Latest");
            }
            else {
                navigate(`/blog/main/${topic}`);
            }    
          }
          
    }}>{topic}</MenuItem>
  )
}
