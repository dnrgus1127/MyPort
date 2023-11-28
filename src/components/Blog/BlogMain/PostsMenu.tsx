
import React from 'react'
import {  useParams } from 'react-router-dom'
import styled from 'styled-components'
import { FadeIn } from 'styles/keyFrame/Fade'
import BlogMenuItem from './BlogMenuItem'


const MenuContainer = styled.div`
  max-width: var(--width);
  margin: 0 auto;
  padding-top: 4rem;
  opacity: 0;
  animation: ${FadeIn} 1s 1s ease-out forwards;

  h2 {
    font-family: "Roboto KR","Noto Sans KR", sans-serif;
    font-weight: 800;
    margin-bottom: 4rem;
    font-size: 1.5rem;
  }
`

const MenuBox = styled.ul`

    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding-bottom: 2rem;
    border-bottom: 2px solid ${({theme})=> theme.color};

    margin-bottom: 10rem;
`



interface BlogMenusProps {
  topics: Array<string>;
}

export default function BlogMenus({ topics }: BlogMenusProps) {
  const params = useParams();
  return (
    <MenuContainer>
      <h2>Topics</h2> 
      <MenuBox>
        {!params.category && <BlogMenuItem key="Latest" topic='Latest' />}
        {params.category ? <BlogMenuItem key={params.category} topic={params.category}/> : topics.map(topic => <BlogMenuItem key={topic} topic={topic}/>)}
      </MenuBox>
      
    </MenuContainer>
  )
}
