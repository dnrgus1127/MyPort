import React, { ReactNode } from 'react'
import styled from 'styled-components';


interface BlogLayoutProps {
    children: ReactNode;
}

const BlogLayoutContainer = styled.div`
    padding-bottom: var(--side-padding);
    background-color: ${({ theme }) => theme.bgColor2};
    
    .wrapper {
      width: var(--width);
      margin: 0 auto;

    }
`

export default function BlogLayout({children} : BlogLayoutProps) {
  return (
    <BlogLayoutContainer>
      <div className='wrapper'>
      {children}
    </div></BlogLayoutContainer>
  )
}
