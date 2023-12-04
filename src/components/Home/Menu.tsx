import React from 'react'
import styled from 'styled-components'

const MenuLayout = styled.div`
    position: fixed;
    top: 25%;
    left : 0;

    .circle {
        position: absolute;
        border-radius: 50%;
    }

    .innerCircle {
        top:-4rem;
        left:-4rem;

        width: 8rem;
        height: 8rem;
        box-shadow: 3px 0px 15px ${({theme})=>theme.shadowColor}88;
    }
    .outerCircle {
        top:-10rem;
        left:-10rem;
        width: 20rem;
        height: 20rem;
        
        box-shadow: inset -3px 0px 5px ${({theme})=>theme.shadowColor}80;
    }
`

export default function Menu() {
  return (
      <MenuLayout>
          <div className="outerCircle circle">
          </div>  
            <div className="innerCircle circle"></div>
    </MenuLayout>
  )
}
