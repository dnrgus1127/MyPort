import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components';

const StickyBox = styled.div`
    
`

interface StickyProps {
    className?: string;
    children?: ReactNode;
    top: number ;
}

export default function Sticky({ className, children, top }: StickyProps) {
    const [y, setY] = useState(0);
    const element = useRef<HTMLDivElement>(null);
    const [fixed, setFixed] = useState<Boolean>(false);

    const setup = useCallback(() => {
        if (!element.current) return;
        const pos = element.current.getBoundingClientRect();
        setY(pos.top + document.body.scrollTop);
      }, []);
    
    
    const handleScroll = useCallback(() => {
        const scroll = window.scrollY;
        const isFixed = scroll + top > y;
        setFixed(isFixed);
    }, [fixed, y])
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [handleScroll])
    
    useEffect(() => {
        setup();
      }, [setup]);

  return (
      <StickyBox ref={element} className={className} style={{
          position: fixed ? "fixed" : undefined,
          top : fixed ? top : undefined,
    }}>
        {children}
    </StickyBox>
  )
}
