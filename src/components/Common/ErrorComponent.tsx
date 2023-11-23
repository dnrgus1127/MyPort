import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function ErrorComponent({errorMessage} : {errorMessage? : string}) {
  return (
    <Container>{errorMessage ? errorMessage : "에러"}</Container>
  )
}
