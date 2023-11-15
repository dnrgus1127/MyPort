import useBoolean from 'hooks/useBoolean';
import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'

const ImageWarpper = styled.img`
    cursor: pointer;
    &.full-screen {
        position: fixed;
        top:0;
        left: 0;
        max-width: 100vw;
        height: 100vh;
        padding: 5rem;
        z-index : 80;
        box-shadow: none;
    }
`

export default function CustomIMG({ src, alt = "img" }: { src?: string, alt?: string }) {
    const [isFullScreen, onToggleIsFullScreen] = useBoolean(false);

    const processedStr = useMemo(() => {
        if (src) {
            return src.replaceAll(/(&amp;)/g, "&");
        }
    },[src])
    
  return (
      <ImageWarpper className={isFullScreen ? "full-screen" : ""} onClick={() => {
          onToggleIsFullScreen();
      }} src={processedStr} alt={alt} />
  )
}
