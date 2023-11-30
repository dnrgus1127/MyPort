import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import media from 'styles/media';

const PostMenuContainer = styled.div`
    margin-bottom: 10rem;
    display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: "Noto Sans KR","Roboto KR";
    button {
        color : ${({ theme }) => theme.color};
        font-weight: 600;
        text-decoration: underline;
    }

    ${media.small}{
        margin-bottom: 3rem;
    }

`


export default function PostMenu() {
    const naviagte = useNavigate();
  return (
    <PostMenuContainer>
    
            <div></div>
            <button onClick={() => {
                naviagte(-1);
            }}>목록으로</button>
          
          
    </PostMenuContainer>
  )
}
