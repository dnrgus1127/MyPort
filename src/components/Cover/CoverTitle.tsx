import useMorphing from 'hooks/text/useMorphing';
import React from 'react'
import styled from 'styled-components';
import media from 'styles/media';


const MorphTitle = styled.div`
    filter : url(#threshold) blur(.5px);
    

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
      span{
        font-size: 6rem;
      }
    }
    ${media.small}{
      span{
        font-size: 4rem;
      }
    }
`

const texts = ["FrontEnd","Programmer","WookHyun"];

export default function CoverTitle() {
    const { textRef1, textRef2,filter } = useMorphing({texts});


  return (
    <MorphTitle >
        <span ref={textRef1}></span>
        <span ref={textRef2}></span>
        {filter}
    </MorphTitle>
  )
}
