import { useQuery } from '@tanstack/react-query'
import TypingText from 'components/Common/EffectElement/TypingText'
import React, { useEffect, useMemo } from 'react'
import styled, { css } from 'styled-components'
import useBlogPosts from '../BlogSection/hooks/useBlogPosts'
import CommonSection from 'components/Blog/BlogMain/CommonSection'
import useLatestTimePost from 'components/Blog/hooks/useLatestTimePost'

const BlogLayout = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    .blur {
        position: absolute;
        width: 100%;
        height: 30%;
        top:0;
        left:0;
        ${({theme})=> theme.current ==="dark" ? css`
            background: linear-gradient(to top, rgba(0, 0, 0,0 ), rgba(0, 0, 0, 1));
            backdrop-filter: blur(1px);
        
        `: css`
            background: linear-gradient(to top, rgba(255, 255, 255,0.2 ), rgba(255, 255, 255, 1));
            backdrop-filter: blur(3px);
        `}
        pointer-events: none;
        z-index: -1;
    }
`

const BlogContentsBox = styled.div`
    width   : var(--width);
    height: 100%;
    margin: 0 auto;
    padding-top : 8.4rem;
    h1 {
        font-family: 'Poppins';
        font-size: 5rem;
        font-weight: 600;
        text-shadow: 0px 0px 3px ${({ theme }) => theme.shadowColor};
        text-align: center;
    }
`

export default function Blog() {
    const blogPosts = useBlogPosts();

    const [topics, posts] = useMemo(() => {
        if (!blogPosts.isSuccess) return [[],[]];
        const topics = blogPosts.data.filter(item => item.type === "tree" && !item.path.includes("/"));
        
        const posts = blogPosts.data.filter(item => item.path.includes(".md"));
        return [topics.map(topic => topic.path), posts];
    }, [blogPosts.data, blogPosts.isSuccess])
    
    const timeStampPosts = useLatestTimePost({ postList: posts});
    
    return (
      <BlogLayout>
        <div className="blur"></div>
        <BlogContentsBox>
            <TypingText delay={1000} speed={100} text='Jung Wook Hyun Tech Blog' />
            <CommonSection postList={timeStampPosts} maxVisibleItems={4} title='Latest'/>
        </BlogContentsBox>
      </BlogLayout>
    )
}
