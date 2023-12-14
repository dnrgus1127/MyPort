import { Tree } from 'components/Common/Markdown/types/tree'
import React, { useLayoutEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import media from 'styles/media'


const PostSectionLayout = styled.div`
  width: 50%;
  padding : 2rem;
  h3 {
    font-family: 'Dhurjati', sans-serif;
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 150%;
    margin-bottom: 1em;
    display: inline-block;
    position: relative;
  }
  h3::after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 120%;
    height: 1px;
    background-color: ${({ theme }) => theme.color};
    content: " ";
  }

  ul {

  }
  li {
    font-size: 1.5rem;
    line-height: 1.4em;
    margin-bottom: 1rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
    font-family: 'SUIT-Regular';

    
  }
  li:hover {
    text-decoration: underline;
  }

  &:nth-child(2){
    
    text-align: end;
    h3::after {
        left : -20%;
    } 
  }


  ${media.large} {
    width: 100%;
    padding : 4rem 0;
  
    h3 {
        font-size: 2.4rem;
        
    }
    li{
        font-size: 1.8rem;
        
        line-height: 1.6em;

    }
  }
`

interface PostSectionProps {
    postList: Array<Tree>;
    topics: string;
    count?: number;
}

export default function PostSection({ postList, topics, count = 4 }: PostSectionProps) {
    const navigate = useNavigate();

    let filteredPostList = useMemo(() => {
        let result;
        if (topics === "Latest") {
            result = postList;
        }
        else {
            result = postList.filter(post => post.path.toLowerCase().startsWith(`${topics.toLowerCase()}/`));
        }

        return result;

        
    },[postList,topics])
    
  return (
      <PostSectionLayout>
          <h3>{topics}</h3>
          <ul>
              {filteredPostList.map((post, idx) => {
                  if (idx >= count) return;
                  let tokens = post.path.split("/");
                  let title = tokens[tokens.length - 1];
                  return <li key={idx} onClick={() => {
                      navigate(`/blog/post/${post.path}`)
                  }}>{title.substring(0, title.length - 3)}</li>;
              })}
          </ul>
    </PostSectionLayout>
  )
}

