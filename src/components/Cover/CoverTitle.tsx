import useMorphing from 'hooks/text/useMorphing';
import React from 'react'
import styled from 'styled-components';
import media from 'styles/media';


const MorphTitle = styled.div`
    filter : url(#threshold) blur(.6px);
    

    // Safari 에만
    @media not all and (min-resolution:.001dpcm) { 
      @supports (-webkit-appearance:none) {
         filter : url(#threshold);
      }
    }

 
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
    ${media.medium}{
      font-size: 4rem;
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
