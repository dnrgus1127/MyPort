import React, { useEffect } from 'react'
import styled from 'styled-components'

const LoadingConatainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 33;
    background-color: #121212;
`

export default function Loading() {

  return (
    <LoadingConatainer></LoadingConatainer>
  )
}
