import { Tree } from 'components/Common/Markdown/types/tree'
import React from 'react'
import styled from 'styled-components'
import PostSection from './PostSection'
import media from 'styles/media'


const PreviewPostLayout = styled.div`
  width : 100%;
  height: 100%;
`

const MainPosts = styled.div`
  padding : 0 var(--side-padding);
  width: 100%;
  display: flex;
  justify-content: space-between;
  ${media.large} {
    padding : 0;
  }

`
const MainPostItems = styled.div`
  border : 1px solid white;
  width: 31%;
  padding-bottom: 31%;
  
`

const PostSectionBox = styled.div`
  display: flex;
  align-items: center;
  height: 50%;

  ${media.large}{
    margin-top: 4rem;
    display: block;
    height: auto;
  }
`


interface PreviewPostsProps {
  postList : Array<Tree>
}

export default function PreviewPosts({postList}:PreviewPostsProps) {
  return (
    <PreviewPostLayout>
      <MainPosts>
        <MainPostItems></MainPostItems>
        <MainPostItems></MainPostItems>
        <MainPostItems></MainPostItems>
      </MainPosts>
      <PostSectionBox>
        <PostSection postList={postList} topics='Latest'/>
        <PostSection postList={postList} topics='TypeScript'/>
      </PostSectionBox>
    </PreviewPostLayout>
  )
}
