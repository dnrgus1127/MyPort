import useMorphing from 'hooks/text/useMorphing';
import React from 'react'
import styled from 'styled-components';


const MorphTitle = styled.div`
    filter : url(#threshold) blur(0.6px);
    width: 100%;
    height : 20%;
    display: flex;
    align-items: center;

    span {
        font-family: "Raleway", sans-serif;
        font-size: 8rem;
        position : absolute;
        display: inline-block;
        width: 100%;
        text-align : center;
        letter-spacing: 5px;
    }
    svg {
      position: absolute;
    }
`

export default function CoverTitle({ title } : { title : Array<string>}) {
    const { textRef1, textRef2,filter } = useMorphing({texts : title});


  return (
    <MorphTitle >
        <span ref={textRef1}></span>
        <span ref={textRef2}></span>
        {filter}
    </MorphTitle>
  )
}
