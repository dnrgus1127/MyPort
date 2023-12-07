import React from 'react'
import styled from 'styled-components'
import TypingText from './EffectElement/TypingText'

const LoadingConatainer = styled.div`
    display: flex;
    width: 100vw;
    height: calc(var(--vh) * 100);;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    align-items: center;
    justify-content: center;
    background-color: ${({theme})=> theme.bgColor};
    h1 {
      font-size: 8rem;
    }
`

export default function Loading() {

  return (
    <LoadingConatainer>
      <TypingText text='로딩중...'/>
    </LoadingConatainer>
  )
}
