import { QueryClient, useQuery } from '@tanstack/react-query';
import ProjectSliderConatiner from 'components/Projects/ProjectSliderConatiner';
import ProjectsTemplate from 'components/Projects/ProjectsTemplate';
import { REPOSITORYS } from 'constans/Config';
import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { RepositoryData } from 'types/Project';

const projectQuery = (repo : string) => ({
    queryKey: ['git', repo],
    queryFn: async () => {
       // const res = await fetch(`https://raw.githubusercontent.com/dnrgus1127/${repo}/main/README.md`);
        const res = await fetch(`https://api.github.com/users/dnrgus1127/repos`)
        const data = await res.json();
        return data;
    }
})

export const loader = (queryClient: QueryClient) => async () => {   
  const query = projectQuery("colorProject");
    
  // getQueryData() = 캐시된 데이터가 존재하면 해당 데이터가 stale하더라도 반환함 
    return (
        queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query))
    )
}



export default function ProjectPage(): JSX.Element {
    // https://tkdodo.eu/blog/react-query-meets-react-router#a-typescript-tip  참고하여 아래 내용을 적용해봤으나 해결이 안되어서 타입 단언으로 작성하였음.
    const initialData = useLoaderData() as Awaited<ReturnType<ReturnType<typeof loader>>>
  
    const { data: repositoryList } = useQuery<Array<RepositoryData>>({ ...projectQuery("repositoryList"),initialData });
  
    // loader에 의해서 이 코드가 실행될 때에는 데이터가 항상 존재하므로 타입 단언 사용
    const repoList = repositoryList!.filter((repo :RepositoryData)  => REPOSITORYS.includes(repo.name));
         
      
       return (
        <ProjectsTemplate>
            <ProjectSliderConatiner data={repoList} />
        </ProjectsTemplate>
      );
    }