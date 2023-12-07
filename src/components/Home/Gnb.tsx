import useBoolean from 'hooks/useBoolean';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components'
import media from 'styles/media';

interface GnbLayoutProps {
    $index: number;
    $mobileOpen: boolean;
}

const GnbLayout = styled.div<GnbLayoutProps>`
    display: flex;
    position: fixed;
    width: 100%;
    top:0;
    left: 0;
    height: 6.4rem;
    z-index: 9999;
    justify-content: center;
    ul {
        align-items: center;
        display: flex;
        position: relative; 
        height: 100%;
    }
    .gnb-wrapper {
        display: flex;
        align-items: center;
    }
    li {
        list-style: none;
        margin-right: 2rem;
        font-family: 'Poppins';
        font-weight: 400;
        font-size: 1.5rem;
        text-transform: uppercase;
        cursor: pointer;
    }
    li:hover {
        font-weight: 600;
    }

    .current {
        font-size: 1.7rem;
        font-weight: 600;
        color :${({theme})=>theme.pointColor};
    }

    .bar{
        position: absolute;
        top:0;
        left:0;
        width: 3rem;
        height: 2px;
        background-color: ${({theme})=>theme.pointColor};
        transition: all .5s cubic-bezier(0.4, 0, 1, 1);
        border-radius: 4px;
    }

    ${media.medium}{
        li{
            margin-right: 1rem;
        }
    }
    ${media.medium}{
        .gnb-wrapper {
            height: 3rem;
            margin-top: 2.4rem;
            overflow: hidden;
            overflow: ${(props) => props.$mobileOpen ? "visible" : "hidden"};
        }
        ul {
            flex-direction : column;
            height: auto;
            position: relative;
            border-radius: 4px;
            top: ${(props) => props.$mobileOpen ? `7.5rem`:`${7.5 - props.$index * 3}rem`};
            transition : all ease-out .6s ;
            ${(props)=> props.$mobileOpen && css`
                background-color: ${({theme})=>theme.current ==="dark" ? "#12121288" : "#ffffffaa"};
                backdrop-filter: blur(4px);

            `}
        }
        li {
            line-height: 2rem;
            margin: 0;
            padding : .5rem;
            text-align : center;
            width: 20rem;
        
        }
        .bar {
            display: none;
        }
    }

`
const sections = ["Intro", "About", "Skills", "PortFolio", "Blog", "Contact"];
export default function Gnb() {
    const gnbRef = useRef<HTMLUListElement>(null);
    const barRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const navigate = useNavigate();

    const index = useMemo(() => {
        return Number(location.hash.substring(1));
    },[location.hash])

    const [mobileIsOpen, onToggleMobileOpen, setMobileOpen] = useBoolean(false);

    const resizeBar = useCallback(() => {
        if (!gnbRef.current || !barRef.current) return;
        let item = gnbRef.current.getElementsByTagName("li")[index];
        const itemClientRect = item.getBoundingClientRect();
        barRef.current.style.top = `${itemClientRect.bottom}px`;
        barRef.current.style.left = `${itemClientRect.left - gnbRef.current.getBoundingClientRect().left}px`
        barRef.current.style.width = `${item.clientWidth}px`;
        setMobileOpen(false);
    },[index])

    useEffect(() => {
        resizeBar();
    }, [index])

    useEffect(() => {
        window.addEventListener("resize", resizeBar)
        return () => {
            window.removeEventListener("resize", resizeBar);
        }
    },[resizeBar])
  return (
      <GnbLayout $index={index} $mobileOpen={ mobileIsOpen}>  
        <div className='gnb-wrapper'>
            <ul ref={gnbRef}>
                  {sections.map((section, idx) => <li key={section} onClick={() => {
                    if (index === idx) {
                        onToggleMobileOpen();
                    }
                    else {
                        navigate(`#${idx}`);
                    }
                }} className={index === idx ? "current" : undefined}>{section}</li>)}
                <div className='bar' ref={barRef}></div>
            </ul>
        </div>
    </GnbLayout>
  )
}
