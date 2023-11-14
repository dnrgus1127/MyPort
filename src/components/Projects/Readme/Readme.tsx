import { QueryClient, useQuery } from '@tanstack/react-query';
import React from 'react'
import {useSearchParams } from 'react-router-dom';
import ReadmeLayout from './ReadmeLayout';


const readmeQuery = (repo: string) => ({
  queryKey: ['readme', repo],
  queryFn: async () => {
    const res = await fetch(`https://raw.githubusercontent.com/dnrgus1127/${repo}/main/README.md`);
    const data = res.text();
    return data;
  },
  staleTime: 1000 * 60 * 2,
  
})

// TODO 타입 단언들 지우기
export const loader = (queryClient: QueryClient) => async ({prams,request}: any) => {
  const sortBy = new URL(request.url).searchParams.get('projectName');
  if (!sortBy) {
    throw Error();
    // 올바르지 않은 접근 방식입니다. 에러 처리 필요
  }
  const query = readmeQuery(sortBy);

  return (
    await queryClient.fetchQuery(query)
)}


export default function Readme(): JSX.Element {
  const [search] = useSearchParams();
  // projectName 파라미터가 없으면 loader에서 ErrorComponent 렌더하므로 타입 단언 사용.
  const repositoryName = search.get("projectName");
  const { data: readme } = useQuery<string, Error>({...readmeQuery(repositoryName!) ,initialData : ""});

  return (
    <ReadmeLayout data={readme} title={repositoryName ? repositoryName : "무제"} />
  )
}
