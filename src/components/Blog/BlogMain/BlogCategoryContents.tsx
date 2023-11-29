import React, {  useEffect } from 'react'
import CommonSection from './CommonSection'
import { usePostTree } from 'pages/BlogPage'
import {  useParams } from 'react-router-dom';

export default function BlogCategoryContents() {
    const { timeStampPosts} = usePostTree();
    const params = useParams<string>();

    if (!params.category) throw new Response("찾을 수 없는 경로", { status: 403 });
    return (
        <CommonSection postList={timeStampPosts} title={params.category}/>
    )
}
