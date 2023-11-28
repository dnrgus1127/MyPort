import React, { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface PostSectionTemplateProps {
  children: ReactNode;
  title: string;
  count: number;
  isMore: boolean;
}


const Template = styled.div`
   hr {
    margin : 8rem 0;
   }
`

const SectionHeader = styled.div`
  display: flex;
  font-family: "Roboto KR",sans-serif;
  margin-bottom: 3rem;
  h2 {
    flex: 1;
    font-size: 2.2rem;
    font-weight: 600;
  }
  button {
    font-size : 1.5rem;
    font-family: inherit;
    text-decoration: underline;
    margin-bottom: 4rem;
    color : inherit;
    font-weight: 800;
  }

`

const PostList = styled.ul`
   & > li {
    margin-bottom: 3rem;
   }
`


export default function PostSectionTemplate({ children, title, count, isMore }: PostSectionTemplateProps) {
  const navigate = useNavigate();
  return (
    <Template>
      <SectionHeader>
        <h2>{title} ({count})</h2>
        <button type='button' onClick={() => {
          if (isMore) {
            navigate("/blog/main");
          }
          else {
            navigate(`/blog/main/${title}`)
          }
        }}>{isMore ? "Close" : "See More"}</button>
      </SectionHeader>
      <PostList>
        {children}
      </PostList>
      <hr/>
    </Template>
  )
}
