import TypingText from 'components/Common/EffectElement/TypingText'
import { Tree } from 'components/Common/Markdown/types/tree'
import React from 'react'
import styled from 'styled-components'
import { FadeIn } from 'styles/keyFrame/Fade'
import { formatRelativeDate } from 'utils/time/formatRelativeDate'

const Container = styled.div`
  width: 100%;
  padding: var(--side-padding) 0;
  text-align: center;
  min-height: var(--header-height);
  h1 {
    font-family: 'Times Newer Roman';
    font-size: 7rem;
    text-shadow: 4px 4px ${({theme})=> theme.shadowColor};
  }

  h1:after {
    height: 100%;
    width: 2px;
  }

  h3 {
    font-family: 'Times Newer Roman';
    margin-top : calc(var(--side-padding)/2);
    opacity: 0;
    animation: ${FadeIn} 1s 1s ease-out forwards; 
  }
`

export default function BlogHeader({ lastUpdate }: { lastUpdate: Tree }) {
  return (
    <Container>
      <TypingText delay={1000} speed={100} text='Jung Wook Hyun Tech Blog' />
      {lastUpdate && <h3>Last Update Time : {lastUpdate.timeStamp && formatRelativeDate(lastUpdate.timeStamp)}</h3>}
    </Container>
  )
}
