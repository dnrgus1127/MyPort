import React, { useMemo } from 'react'
import styled from 'styled-components';
import MarkdownRender from 'components/Common/Markdown/MarkdownRender';
import { MarkdownStyled } from 'components/Common/Markdown/MarkdownStyledComponent';


interface PostLayoutProps {
  title: string;
  post: string;
}

const Title = styled.div`
  font-size: 4rem;
  font-family: "Noto Sans KR";
  font-weight: 600;
  margin-bottom: 3rem;
  padding-bottom: 1.6rem;
  text-shadow: 3px 3px 0 ${({ theme }) => theme.shadowColor};
  position: relative;
  &::after {
    content: " ";
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.color};
    position: absolute;
    bottom:0;
    left: 0;
    box-shadow: 3px 3px 0 ${({theme})=> theme.shadowColor};
  }
  
`
const PostContents = styled(MarkdownStyled)`
 h1,h2 {
  margin-top: 3rem;
 }
 h3{
  margin-top: 2.4rem;
 }
  h1,h2,h3,h4,h5,h6 {
    text-shadow: 3px 3px 0 ${({theme})=>theme.shadowColor};
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
`

export default function PostLayout({ title, post }: PostLayoutProps) {
  const processedTitle = useMemo(() => {
    const arr = title.split("/");
    return arr[arr.length - 1];
  },[title])
  return (
    <div>
      <Title>{processedTitle.substring(0,processedTitle.length-3)}</Title>
      <PostContents>
        <MarkdownRender markdown={post} />
      </PostContents>
    </div>
  )
}
