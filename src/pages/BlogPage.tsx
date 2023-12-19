import { QueryClient } from "@tanstack/query-core";
import { useQuery } from "@tanstack/react-query";
import { Tree } from "components/Common/Markdown/types/tree";
import React, { useMemo } from "react";
import BlogLayout from "components/Blog/BlogLayout";
import BlogHeader from "components/Blog/BlogHeader";
import useLatestTimePost from "components/Blog/hooks/useLatestTimePost";
import { GITHUBAPIKEY } from "apiKey";
import { Outlet, json, useOutletContext } from "react-router-dom";
import { checkStatus } from "utils/fetch/checkStatus";
import { GITHUB403 } from "constans/ErrorMessage";

const blogQuery = () => ({
  queryKey: ["git", "TIL", "tree"],
  queryFn: async () => {
    const res = await fetch(`https://api.github.com/repos/dnrgus1127/TIL/git/trees/main?recursive=10`, {
      headers: {
        Authorization: GITHUBAPIKEY,
      },
    });
    if (res.status === 403) {
      throw json({ sorry: "Github API rate limit exceede", msg: GITHUB403 }, { status: 403 });
    }

    checkStatus(res.status);

    const data = await res.json();
    return data.tree;
  },
  staleTime: 60 * 10 * 1000,
});

export const loader = (queryClient: QueryClient) => async () => {
  const query = blogQuery();

  return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
};

export default function BlogPage() {
  const { data, isSuccess } = useQuery<Array<Tree>>({ ...blogQuery() });

  const [topics, posts] = useMemo(() => {
    if (!isSuccess) return [[], []];
    const topics = data.filter((item) => item.type === "tree" && !item.path.includes("/"));

    const posts = data.filter((item) => item.path.includes(".md"));
    return [topics.map((topic) => topic.path), posts];
  }, [data, isSuccess]);

  const timeStampPosts = useLatestTimePost({ postList: posts });
  timeStampPosts.sort((a, b) => {
    return new Date(b.timeStamp!).getTime() - new Date(a.timeStamp!).getTime();
  });

  return (
    <BlogLayout>
      <BlogHeader lastUpdate={timeStampPosts[0]} />
      <Outlet context={{ topics, timeStampPosts } satisfies ContextType} />
    </BlogLayout>
  );
}

type ContextType = { topics: Array<string>; timeStampPosts: Array<Tree> };

export function usePostTree() {
  return useOutletContext<ContextType>();
}
