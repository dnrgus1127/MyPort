import { usePostTree } from 'pages/BlogPage';
import React from 'react'
import BlogMenus from './PostsMenu';
import { Outlet, useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import { FadeIn } from 'styles/keyFrame/Fade';

const BlogContentBox = styled.div`
    width: 100%;
    opacity: 0;
    animation: ${FadeIn} 1s 1.5s ease-out forwards;
`

export default function BlogMainLayout() {
  const { topics } = usePostTree();
  return (
    <>
      <BlogMenus topics={topics} />
      <BlogContentBox>
        <Outlet context={useOutletContext()}/>
      </BlogContentBox>
    </>
  )
}
