import { QueryClient, useQuery } from '@tanstack/react-query';
import PostLayout from 'components/Blog/Post/PostLayout';
import React from 'react'
import { Params, useParams } from 'react-router-dom'


const githubMarkdownQuery = (fileName : string) => ({
    queryKey: ["git", "md", fileName],
    queryFn: async () => {
        
        // const res = await fetch(`https://raw.githubusercontent.com/dnrgus1127/TIL/main/${fileName.split("/").map(item => encodeURIComponent(item)).join("/")}`)
        const res = await fetch(`https://raw.githubusercontent.com/dnrgus1127/TIL/main/${fileName}`)
        
        if (res.status === 404) {
            throw new Response("not post", { status: 404 });
        }
        const data = res.text();
        return data;
    },
    staleTime : 60 * 60 * 1000,
})

export const loader = (queryClient: QueryClient) => async ({ params } : {params : Params<string>}) => {
    
    if (!params["*"]) throw new Response("route Error", { status: 404 });
    const query = githubMarkdownQuery(params["*"]);
    

    return (
        await queryClient.fetchQuery(query)
    )
    
}

export default function PostPage() {
   const params = useParams();
   const { data: post, isSuccess } = useQuery(githubMarkdownQuery(params["*"]!))
    
   if (!isSuccess) return <></>;
    
  return (
    <PostLayout title={params["*"]!} post={post} />
  )
}
