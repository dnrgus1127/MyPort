import { QueryClient, useQuery } from '@tanstack/react-query';

import { REPOSITORYS } from 'constans/Config';
import React, { useEffect } from 'react'
import { Outlet, useLoaderData, useLocation, useOutletContext } from 'react-router-dom';
import { Repository, RepositoryData } from 'types/Project';
import { PROJECT_INFOMATION } from "../constans/ProjectData";
import ProjectLayout from 'components/Projects/PrjojectLayout';

const projectQuery = (repo : string) => ({
    queryKey: ['git', repo],
    queryFn: async () => {
       // const res = await fetch(`https://raw.githubusercontent.com/dnrgus1127/${repo}/main/README.md`);
        const res = await fetch(`https://api.github.com/users/dnrgus1127/repos`)
        const data = await res.json();
        return data ;
    }
})

export const loader = (queryClient: QueryClient) => async () => {   
  const query = projectQuery("colorProject");
    
  // getQueryData() = 캐시된 데이터가 존재하면 해당 데이터가 stale하더라도 반환함 
    return (
        queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query))
    )
}



type ContextType = {
    data: Array<Repository>;
}

export default function ProjectPage(): JSX.Element {

    const location = useLocation();
    // https://tkdodo.eu/blog/react-query-meets-react-router#a-typescript-tip  참고하여 아래 내용을 적용해봤으나 해결이 안되어서 타입 단언으로 작성하였음.
    const initialData = useLoaderData() as Awaited<ReturnType<ReturnType<typeof loader>>>
  
    const { data: repositoryList } = useQuery<Array<RepositoryData>>({ ...projectQuery("repositoryList"),initialData });
  
    // loader에 의해서 이 코드가 실행될 때에는 데이터가 항상 존재하므로 타입 단언 사용
    const repoList = repositoryList!.filter((repo :RepositoryData)  => REPOSITORYS.includes(repo.name));
    
    const CompletelyRepository: Array<Repository> = repoList.map((item) => {
        let idx = PROJECT_INFOMATION.findIndex(repo => repo.name === item.name);
        return {...item, ...PROJECT_INFOMATION[idx]}
    })

    useEffect(() => {
        
    },[location])

    return (
        <ProjectLayout>
            <Outlet context={ {data :CompletelyRepository} satisfies ContextType}/>
        </ProjectLayout>
    );
}
    
export function useProjectData() {
    return useOutletContext<ContextType>();
}