import { QueryClient } from "@tanstack/query-core";
import { useQuery } from "@tanstack/react-query";
import BlogHeader from "components/Blog/BlogHeader";
import BlogLayout from "components/Blog/BlogLayout";
import { Tree } from "components/Common/Markdown/types/tree";
import PageLoading from "components/Common/PageLoading";
import { GITHUB403 } from "constans/ErrorMessage";
import { useMemo } from "react";
import { Outlet, json, useNavigation, useOutletContext } from "react-router-dom";
import { checkStatus } from "utils/fetch/checkStatus";

const blogQuery = () => ({
  queryKey: ["git", "TIL", "tree"],
  queryFn: async () => {
    const res = await fetch(`${process.env.REACT_APP_API_SERVER_IP}/postList`);

    if (res.status === 403) {
      throw json({ sorry: "Github API rate limit exceede", msg: GITHUB403 }, { status: 403 });
    }

    checkStatus(res.status);

    const data = await res.json();
    return data;
  },
  staleTime: 60 * 10 * 1000,
});

export const loader = (queryClient: QueryClient) => async () => {
  const query = blogQuery();

  return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
};

export default function BlogPage() {
  const { data, isSuccess } = useQuery<Array<Tree>>({ ...blogQuery() });
  const { state } = useNavigation();
  const [posts] = useMemo(() => {
    if (!isSuccess) return [[], []];

    const posts = data.filter((item) => item.path.includes(".md"));
    return [posts];
  }, [data, isSuccess]);
  const topics = ["Javascript", "css", "Typescript", "React", "FrontEnd"];
  if (state === "loading") return <PageLoading text="블로그 데이터 불러오는 중..." />;
  return (
    <BlogLayout>
      <BlogHeader lastUpdate={posts[0]} />
      <Outlet context={{ topics, timeStampPosts: posts } satisfies ContextType} />
    </BlogLayout>
  );
}

type ContextType = { topics: Array<string>; timeStampPosts: Array<Tree> };

export function usePostTree() {
  return useOutletContext<ContextType>();
}
