import { QueryClient, useQuery } from '@tanstack/react-query';

import { REPOSITORYS } from 'constans/Config';
import React, { useMemo } from 'react'
import { Outlet, useLoaderData, useOutletContext } from 'react-router-dom';
import { Repository, RepositoryData } from 'types/Project';
import { PROJECT_INFOMATION } from "../constans/ProjectData";
import ProjectLayout from 'components/Projects/PrjojectLayout';
import { GITHUBAPIKEY } from 'apiKey';
import { checkStatus } from 'utils/fetch/checkStatus';

const projectQuery = (repo : string) => ({
    queryKey: ['git', repo],
    queryFn: async () => {
        const res = await fetch(`https://api.github.com/users/dnrgus1127/repos`, {
            headers: {
                Authorization : GITHUBAPIKEY
            }
        })
        if (res.status === 403) {
            throw new Response("Not Found", { status: 403 });
          }

        const data = await res.json();
        return data ;
    }
})

export const loader = (queryClient: QueryClient) => async () => {   
  const query = projectQuery("repositoryList");
    
  // getQueryData() = 캐시된 데이터가 존재하면 해당 데이터가 stale하더라도 반환함 
    return (
        queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query))
    )
}



type ContextType = {
    data: Array<Repository>;
}

export default function ProjectPage(): JSX.Element {
    // https://tkdodo.eu/blog/react-query-meets-react-router#a-typescript-tip  참고하여 아래 내용을 적용해봤으나 해결이 안되어서 타입 단언으로 작성하였음.
    const initialData = useLoaderData() as Awaited<ReturnType<ReturnType<typeof loader>>>
  
    const { data: repositoryList } = useQuery<Array<RepositoryData>>({ ...projectQuery("repositoryList"),initialData : [] });
  
    const completelyRepository = useMemo(() => {
        const repoList = repositoryList.filter((repo : RepositoryData) => REPOSITORYS.includes(repo.name));
  
        const CompletelyRepository: Array<Repository> = repoList.map((item) => {
            let idx = PROJECT_INFOMATION.findIndex(repo => repo.name === item.name);
            return {...item, ...PROJECT_INFOMATION[idx]}
        })

        return CompletelyRepository;
    },[repositoryList])

    
    return (
        <ProjectLayout>
            <Outlet context={ {data :completelyRepository} satisfies ContextType}/>
        </ProjectLayout>
    );
}
    
export function useProjectData() {
    return useOutletContext<ContextType>();
}