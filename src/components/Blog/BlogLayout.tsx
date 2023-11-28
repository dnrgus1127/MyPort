import React, { ReactNode } from 'react'
import styled from 'styled-components';


interface BlogLayoutProps {
    children: ReactNode;
}

const BlogLayoutBox = styled.div`
    width: var(--width);
    margin: 0 auto;
    padding-bottom: var(--side-padding);
`

export default function BlogLayout({children} : BlogLayoutProps) {
  return (
    <BlogLayoutBox>{children}</BlogLayoutBox>
  )
}
