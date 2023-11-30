import Sticky from 'components/Common/Sticky';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { Floating } from 'styles/keyFrame/floating';
import media from 'styles/media';

const NavigationBox = styled.div`
  height: 0;
  .navigtorWrapper{
    height: 100%;

  }
  ${media.medium}{
    display: none;
  }
`

const Navigation = styled(Sticky)`
  box-shadow: 0px 0px 5px ${({ theme }) => theme.shadowColor}, 3px 3px 0 ${({theme})=>theme.shadowColor};
  background-color: ${({theme})=>theme.bgColor};
  border-radius: 20px;
  width: 6rem;
  display: flex;
  flex-direction: column;
  gap : 1rem;
 
  button {
    padding : 1rem;
    width: 100%;
  }
  position: absolute;
  right: 2rem;


`

export default function BlogNavigation() {
  const navigate = useNavigate();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth"});
  }
  const handlerListButton = () => {
    navigate(-1);
  }
  return (
    <NavigationBox >
      <div className='navigtorWrapper'>
        <Navigation top={360}>
           <button type="button" onClick={scrollTop}><svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16.843 13.789c.108.141.157.3.157.456 0 .389-.306.755-.749.755h-8.501c-.445 0-.75-.367-.75-.755 0-.157.05-.316.159-.457 1.203-1.554 3.252-4.199 4.258-5.498.142-.184.36-.29.592-.29.23 0 .449.107.591.291 1.002 1.299 3.044 3.945 4.243 5.498z"/></svg></button>
           <button type="button" onClick={handlerListButton}><svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 17.75c0-.414-.336-.75-.75-.75h-13.5c-.414 0-.75.336-.75.75s.336.75.75.75h13.5c.414 0 .75-.336.75-.75zm-18.25-2.75c.966 0 1.75.784 1.75 1.75s-.784 1.75-1.75 1.75-1.75-.784-1.75-1.75.784-1.75 1.75-1.75zm18.25-1.25c0-.414-.336-.75-.75-.75h-13.5c-.414 0-.75.336-.75.75s.336.75.75.75h13.5c.414 0 .75-.336.75-.75zm-18.25-3.75c.966 0 1.75.784 1.75 1.75s-.784 1.75-1.75 1.75-1.75-.784-1.75-1.75.784-1.75 1.75-1.75zm18.25-.25c0-.414-.336-.75-.75-.75h-13.5c-.414 0-.75.336-.75.75s.336.75.75.75h13.5c.414 0 .75-.336.75-.75zm-18.25-4.75c.966 0 1.75.784 1.75 1.75s-.784 1.75-1.75 1.75-1.75-.784-1.75-1.75.784-1.75 1.75-1.75zm18.25.75c0-.414-.336-.75-.75-.75h-13.5c-.414 0-.75.336-.75.75s.336.75.75.75h13.5c.414 0 .75-.336.75-.75z" fillRule="nonzero"/></svg></button>
        </Navigation>
      </div>
    </NavigationBox>
  )
}
