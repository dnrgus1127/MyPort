import React from 'react'
import { usePostTree } from 'pages/BlogPage';
import BlogMenus from './PostsMenu';
import { Outlet, useOutletContext } from 'react-router-dom';
import styled from 'styled-components';

const BlogContentBox = styled.div`
    width: 100%;
    
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
