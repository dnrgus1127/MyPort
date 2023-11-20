import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import { convertCamelToSpace } from 'utils/convertString';

const TypingAnimation = keyframes`
    from {
        border-right: 2px solid ${({theme})=> theme.bgColor3};
    }
    to {
        border-right: 2px solid #aaa;
    }
`

const Title = styled.h1`

        font-size: 6rem;
        font-family: 'Times Newer Roman';
        font-weight: 600;
        padding : 3rem 0;
        margin: 3rem;
        letter-spacing: 1rem;
        text-shadow: 8px 8px  #080808;

    &::after {
        display: inline-block;
        content:  " ";
        height: 4rem;
        width: 1rem;
        animation: ${TypingAnimation} 1.2s infinite steps(2);
    }
`



export default function ReadmeTitle({ title } :{title:string}) {
    const [text, setText] = useState<string>("");
    const TITLE = ["README.md",convertCamelToSpace(title).toUpperCase()];

    useEffect(() => {
        const initDelay = 2000; // 초기 딜레이 시간 (페이지 이동 애니메이션 2s)
        let speed = 100; // 글자 타이핑 속도
        let length = 0;
        let flag = 1; // 글자 줄어들지 늘어날지
        let intervalId: NodeJS.Timer;
        let index = 0;
        const wait = 8; // 문장 완성된 후 딜레이
        const timerId = setTimeout(() => {
            intervalId = setInterval(() => {
                
                if (length >= TITLE[index % TITLE.length].length + wait) {                
                    flag = -1;
                }
                if (length === 0) {
                    flag = 1;
                    index++;
                }
                length += flag;
                setText(TITLE[index % TITLE.length].substring(0,length));
            }, speed)
            return () => {
                clearInterval(intervalId);
            }    
        },initDelay)

        return () => {
            clearTimeout(timerId);
            clearInterval(intervalId);
        }
    },[])
  return (
    <Title>{text}</Title>
    )
}
