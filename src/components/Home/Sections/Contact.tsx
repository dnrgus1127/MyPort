import NoizeFilter from 'components/Common/NoizeFilter'
import React from 'react'
import styled, { css } from 'styled-components'

const ContactLayout = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background-color: ${({ theme }) => theme.footerCover};
    overflow: hidden;
    .blur {
        position: absolute;
        width: 100%;
        height: 20%;
        top:0;
        left:0;
        z-index: 1;
        ${({theme})=> theme.current ==="dark" ? css`
            background: linear-gradient(to top, ${({theme})=>theme.bgColor2}00 , ${({theme})=>theme.bgColor2});
            backdrop-filter: blur(1px);
        
        `: css`
            background: linear-gradient(to top, #ffffff00, ${({theme})=>theme.bgColor2});
            backdrop-filter: blur(1px);
        `}
        pointer-events: none;
    }
`

const ContactContentsBox = styled.div`
    width: var(--width);
    height: 100%;
    margin: 0 auto;
    padding-top : 8.4rem;
    position: relative;
    text-align :center;
    z-index: 5;
    h2 {
        font-family: 'Dhurjati', sans-serif;
        font-size: 8rem;
    }
`

const BlurBox = styled.div`
    width: 100%;
    height: 100%;
    background-color: #ffffff33;
    backdrop-filter: blur(4px);

`

export default function Contact() {
  return (
      <ContactLayout>
          <NoizeFilter/>
          <div className='blur'></div>
          <ContactContentsBox>
              <h2>Contact Me</h2>
              <BlurBox>123</BlurBox>
          </ContactContentsBox>
    </ContactLayout>
  )
}
