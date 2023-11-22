import MenuButton from 'components/Common/Buttons/MenuButton'

import ThemeToggleButton from 'components/Common/Buttons/ThemeToggleButton'
import useBoolean from 'hooks/useBoolean'
import React from 'react'
import styled from 'styled-components'

const HeaderConatiner = styled.div`
    position: fixed;
    top:0;
    right: 0;
    z-index: 9999;
    
    button{
        position: absolute;
        top:0;
        right:0;
        transition: .4s all ease-out;
    }

    button:first-child {
        opacity: 0;
        transform: scale(0.5);
    }
    
    &.open button:first-child {
        transform: translateX(-4.4rem) scale(1);
        opacity: 1;
        
    }

    &.open button:last-child {
        transition: none;
        transform: scale(0.8);
    }
  
`

export default function Header() {
    const [menuOpen, onToggleMenuOpen] = useBoolean(false);
  return (
      <HeaderConatiner className={`${menuOpen ? "open" : "close"}`}>
          <ThemeToggleButton/>
          <MenuButton state={menuOpen} onClick={onToggleMenuOpen} />
    </HeaderConatiner>
  )
}
