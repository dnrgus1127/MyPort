import { QueryClient } from "@tanstack/react-query";
import PageLoading from "components/Common/PageLoading";
import { REPOSITORYS } from "constans/Config";
import { GITHUB403 } from "constans/ErrorMessage";
import { PROJECT_INFOMATION } from "constans/ProjectData";
import Home from "pages/Home";
import { useEffect } from "react";
import { Outlet, json, useNavigation } from "react-router-dom";
import { Repository, RepositoryData } from "types/Project";
import { ErrorJson } from "types/errorJson";
import "./App.css";

export const projectQuery = () => ({
  queryKey: ["git", "repositoryList"],
  queryFn: async () => {
    const res = await fetch(`${process.env.REACT_APP_API_SERVER_IP}/repository`);

    if (res.status === 403) {
      let errorBody: ErrorJson = { msg: GITHUB403, sorry: "GitHUB API limit" };
      throw json(errorBody, { status: 403 });
    }

    const data = await res.json();
    return data;
  },
  select: (data: Array<RepositoryData>) => {
    const repoList = data.filter((repo: RepositoryData) => REPOSITORYS.includes(repo.name));

    const CompletelyRepository: Array<Repository> = repoList.map((item) => {
      let idx = PROJECT_INFOMATION.findIndex((repo) => repo.name === item.name);
      return { ...item, ...PROJECT_INFOMATION[idx] };
    });

    return CompletelyRepository;
  },

  staleTime: 60 * 10 * 1000,
});

export const loader = (queryClient: QueryClient) => async () => {
  const query = projectQuery();

  return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
};

function HomePage() {
  const { state } = useNavigation();

  useEffect(() => {
    const html = document.querySelector("html");
    html!.style.overflow = "hidden";
    return () => {
      html!.style.overflow = "initial";
    };
  }, []);
  return (
    <>
      <Home />
      {state === "loading" && <PageLoading />}
      <Outlet />
    </>
  );
}

export default HomePage;
