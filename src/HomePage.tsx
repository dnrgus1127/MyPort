import './App.css';
import {Outlet, ScrollRestoration, useLocation, useNavigation} from "react-router-dom"
import PageAnimation from 'components/Common/PageAnimation';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/GlobalStyles';
import { darkTheme, ligthTheme } from 'styles/theme';
import { useAppSelector } from 'redux/hooks';
import Header from 'components/Main/Header';
import Home from 'pages/Home';
import { QueryClient } from '@tanstack/react-query';
import { GITHUBAPIKEY } from 'apiKey';
import { Repository, RepositoryData } from 'types/Project';
import { PROJECT_INFOMATION } from 'constans/ProjectData';
import { REPOSITORYS } from 'constans/Config';


export const projectQuery = () => ({
  queryKey: ['git', "repositoryList"],
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
  },
  select: (data: Array<RepositoryData>) => {
    const repoList = data.filter((repo : RepositoryData) => REPOSITORYS.includes(repo.name));
  
        const CompletelyRepository: Array<Repository> = repoList.map((item) => {
            let idx = PROJECT_INFOMATION.findIndex(repo => repo.name === item.name);
            return {...item, ...PROJECT_INFOMATION[idx]}
        })

        return CompletelyRepository;
  },

  staleTime: 60 * 10 * 1000,
})

export const loader = (queryClient : QueryClient) =>async () => {
  const query = projectQuery();
  
  return (
    queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query))
  )
}


function HomePage() {
  const navigation = useNavigation();
  const location = useLocation();
  const { theme } = useAppSelector(state => state.theme);
  return (
      <ThemeProvider theme={theme === "dark" ? darkTheme : ligthTheme}>
      <GlobalStyles />
        <div className='App'>
          <ScrollRestoration  getKey={(location, matches) => {
              return location.key;
          }} />
          <Home />
          <Header />
          <PageAnimation/>
        <Outlet />
        
        </div>
      </ThemeProvider>

  );
}

export default HomePage;
