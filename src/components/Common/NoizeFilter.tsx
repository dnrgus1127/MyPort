import React from 'react'
import styled from 'styled-components'
import { noize } from 'styles/keyFrame/noize'

const NoizeFilterLayout = styled.div`
     
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: calc(var(--vh) * 200);
    background: transparent url('http://assets.iceable.com/img/noise-transparent.png') repeat 0 0;
    background-repeat: repeat;
    animation: ${noize} .2s infinite;
    opacity: .9;
    visibility: visible;
    pointer-events: none;
  
    
`

export default function NoizeFilter() {
  return (
    <NoizeFilterLayout/>
  )
}
