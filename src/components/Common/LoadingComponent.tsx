import React from 'react'
import styled from 'styled-components'

const Conatiner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function LoadingComponent() {
  return (
    <Conatiner>로딩중</Conatiner>
  )
}
