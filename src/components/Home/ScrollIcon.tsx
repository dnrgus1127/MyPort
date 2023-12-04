import React from 'react'
import styled from 'styled-components'
import media from 'styles/media'

const ScrollIconLayout = styled.div`
  position: fixed;
  top: 50%;
  right: 0rem;
  transform: rotate(90deg);
  
  
  .text {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
  }
  .text::after {
    content: " ";
    display: inline-block;
    width: 10rem;
    height: 1px;
    margin-left: 1rem;
    background-color: ${({ theme }) => theme.color};
  }

  ${media.small} {
    right: -7rem;
  }
`



export default function ScrollIcon() {
  return (
    <ScrollIconLayout>
        <p className="text">Scroll Down</p>
    </ScrollIconLayout>
  )
}
