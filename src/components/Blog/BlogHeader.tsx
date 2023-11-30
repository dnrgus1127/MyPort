import TypingText from 'components/Common/EffectElement/TypingText'
import { Tree } from 'components/Common/Markdown/types/tree'
import React from 'react'
import styled from 'styled-components'
import { FadeIn } from 'styles/keyFrame/Fade'
import media from 'styles/media'
import { formatRelativeDate } from 'utils/time/formatRelativeDate'

const Container = styled.div`
  width: 100%;
  height: var(--header-height);
  margin-bottom: calc(var(--side-padding));

  .headerWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  
  h1 {
    font-family: 'Times Newer Roman';
    font-size: 7rem;
    text-shadow: 3px 3px ${({theme})=> theme.shadowColor};
  }

  h3 {
    position: absolute;
    bottom:0;
    left: 0;
    text-align: center;
    width: 100%;
    font-family: 'Times Newer Roman';
    opacity: 0;
    animation: ${FadeIn} 1s 1s ease-out forwards; 
    span {
      font-family: "Roboto KR","Noto Sans KR";
      font-size: 1.4rem;
      font-weight : 600;
    }
  }


  ${media.large}{
    h1 {
      font-size: 6rem;
    }
  }
  ${media.medium}{
    h1 {
      font-size : 4rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }
  ${media.small}{
    h1 {
      font-size: 2.2rem;
      text-shadow: 1px 1px ${({theme})=> theme.shadowColor};

    }
    margin-bottom: calc(var(--side-padding)*3);

  }
`

export default function BlogHeader({ lastUpdate }: { lastUpdate: Tree }) {
  return (
    <Container>
      <div className='headerWrapper'>
        <TypingText delay={1000} speed={100} text='Jung Wook Hyun Tech Blog' />
        {lastUpdate && <h3>Last Update Time : <span>{lastUpdate.timeStamp && formatRelativeDate(lastUpdate.timeStamp)}</span></h3>}
      </div>
    </Container>
  )
}
