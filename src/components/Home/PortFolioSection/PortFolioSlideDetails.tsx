import { BoxButton } from 'components/Common/Buttons/StyledButtons';
import React from 'react'
import styled from 'styled-components';
import { FadeInFromBottom } from 'styles/keyFrame/Fade';
import media from 'styles/media';
import textShadow from 'styles/shadow';
import { Repository } from 'types/Project'


const PortFolioSlideDetailsLayout = styled.div`
  position: absolute;
  bottom:0;
  left : -50%;
  z-index: 3;
  width: 200%;
  text-align: center;
  margin-bottom: calc(var(--vh) * 10);
  
  h1 {
      font-size: 8rem;
      font-family: 'Dhurjati', sans-serif;
      text-transform: uppercase;
      ${textShadow(3)}
      
      opacity: 0;
      transform: translateY(25%);
      animation: ${FadeInFromBottom} 1s .6s ease-out forwards ;    
      z-index: 1;
      margin-bottom: 3rem;
  }

  p { 
    width: 33%;
    margin: 0 auto;
    opacity: 0;
    transform: translateY(25%);
    font-size : 1.5rem;
    font-family: 'SUIT-Regular';
    animation: ${FadeInFromBottom} 1s 1.5s ease-out forwards ;    
    margin-bottom: 1.6rem;
    line-height: 1.7rem;
    text-shadow: 0px 0px 2px ${({ theme }) => theme.shadowColor};
    word-wrap: normal;
    word-break: keep-all;
  }

  ${media.large} {
    h1 {
      font-size: 6rem;
    }
    p {
      width: 40%;
      font-size: 1.4rem;
    }
  }
  ${media.small} {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top : var(--header);
    padding-bottom: calc(var(--header) / 2);
    align-items: center;
    h1 {
      font-size: 4rem;
      margin-bottom: 1rem;
      ${textShadow(1)}
    }
    margin-bottom: 1rem;
    p {
      display: none;
    }
  } 


`

const MoreButton = styled(BoxButton)`
  padding : 1rem 3.2rem;
  font-weight: 600;
  font-family: 'SUIT-Regular';
  font-size: 1.5rem;
  opacity: 0;
  transform: translateY(25%);
  animation: ${FadeInFromBottom} 1s 2s ease-out forwards ;    

  ${media.small} {
    padding : 1rem 6.4rem;
  }
`


interface PortFolioSlideDetailsProps {
  project: Repository;
}
export default function PortFolioSlideDetails({project} : PortFolioSlideDetailsProps) {
  return (
    <PortFolioSlideDetailsLayout>
      <h1>{project.alternateTitle}</h1>
      <p>{project.description}</p>
      <p>{project.whyDeveloped}</p>
      <MoreButton>자세히 보기</MoreButton>
    </PortFolioSlideDetailsLayout>
  )
}
