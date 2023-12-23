import { useQueries } from "@tanstack/react-query";
import { GITHUBAPIKEY } from "apiKey";
import { Tree } from "components/Common/Markdown/types/tree";

interface LatestTimePostHookProps {
  postList: Array<Tree>;
}

export default function useLatestTimePost({ postList }: LatestTimePostHookProps): Array<Tree> {
  const querys = useQueries({
    queries: postList.map((post) => {
      return {
        queryKey: ["commit", post.path],
        queryFn: async () => {
          const res = await fetch(
            `https://api.github.com/repos/dnrgus1127/TIL/commits?path=${post.path}&per_page=1&page=1`,
            {
              headers: {
                Authorization: GITHUBAPIKEY,
              },
            }
          );
          const data = res.json();
          return data;
        },
        select: (data: any) => {
          return data[0].commit.committer.date;
        },
        staleTime: 60 * 10 * 1000,

        enabled: postList.length > 0,
      };
    }),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
      };
    },
  });
  if (querys.pending) return postList;

  return postList
    .map((post, idx) => {
      return { ...post, timeStamp: querys.data[idx] };
    })
    .sort((a, b) => {
      return new Date(b.timeStamp!).getTime() - new Date(a.timeStamp!).getTime();
    });
}
