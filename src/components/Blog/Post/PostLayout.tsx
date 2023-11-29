import React, { useEffect, useMemo } from 'react'
import styled from 'styled-components';
import MarkdownRender from 'components/Common/Markdown/MarkdownRender';
import { MarkdownStyled } from 'components/Common/Markdown/MarkdownStyledComponent';
import PostMenu from './PostMenu';
import BlogNavigation from '../BlogNavigation';


interface PostLayoutProps {
  title: string;
  post: string;
}

const LayoutBox = styled.div`
`

const Title = styled.div`
  font-size: 4rem;
  line-height: 5rem;
  font-family: "Noto Sans KR";
  font-weight: 600;
  padding-bottom: 1.6rem;
  margin-bottom: 1rem;
  text-shadow: 3px 3px 0 ${({ theme }) => theme.shadowColor};
  position: relative;
  &::after {
    content: " ";
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.color};
    position: absolute;
    bottom:0;
    left: 0;
    box-shadow: 3px 3px 0 ${({theme})=> theme.shadowColor};
  }
  
`
const PostContents = styled(MarkdownStyled)`
  display: flex;
  flex-direction: column;
  
  h1,h2,h3,h4 {
    padding-bottom: .6em;
  }
  h1,h2 {
    margin-bottom: .8em;
  }
  h4{
    margin-bottom: 1.6rem;
  }
  h1,h2,h3,h4,h5,h6 {
    text-shadow: 3px 3px 0 ${({ theme }) => theme.shadowColor};
    
  }
  h1 {
    position  : relative;
    padding-bottom: 1.6rem;
    
  }
  h1::after {
    content: " ";
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.color};
    position: absolute;
    bottom:0;
    left: 0;
    box-shadow: 3px 3px 0 ${({theme})=> theme.shadowColor};
  }


  code {
    font-family: 'Fira Mono', monospace;
    font-size: 1.4rem;
  }

  blockquote {
    padding : 1rem;
    background-color: ${({theme})=>theme.bgColor};
    box-shadow: inset 0px 0px 5px ${({theme})=> theme.shadowColor};
  }

  img {
    display: block;
    margin: 3rem auto;
    box-shadow: 0px 0px 10px ${({ theme }) => theme.shadowColor};
    
  }
  ul {
    padding-left: 1rem;
  }

  li::before{
    content: "○ ";
  }
  p,li {
    font-size : 1.8rem;
    word-break: keep-all;
    line-height: 160%;
    text-indent: 5px;
    word-spacing: 1px;
  }

  p,ul{
    margin-bottom: 2em;
  }

 

  h1,h2,h3,h4 {
    align-self: start;
    position: relative;
  }

  h1::after ,h2::after {
    position: absolute;
    content: " ";
    width: 100%;
    height: 2px;
    bottom:0;
    left :0;
    background-color: ${({theme})=>theme.color};
  }

  h1::before, h2::before, h3::before,h4::before {
    content :"#";
    position: absolute;
    font-size: inherit;
    color : ${({theme})=> theme.color}66;
    top : 0;
    left : 0;
    transform: translateX(-180%);
    text-shadow: none;
  }

  strong {
    font-weight: 800;
    color : ${({ theme }) => theme.pointColor};
  }


`

export default function PostLayout({ title, post }: PostLayoutProps) {
  const processedTitle = useMemo(() => {
    const arr = title.split("/");
    return arr[arr.length - 1];
  }, [title])
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth"});
  },[])
  return (
    <LayoutBox>
      <Title>{processedTitle.substring(0, processedTitle.length - 3)}</Title>
      <BlogNavigation/>
      <PostMenu/>
      <PostContents>
        <MarkdownRender markdown={post} />
      </PostContents>
      <PostMenu/>
    </LayoutBox>
  )
}
