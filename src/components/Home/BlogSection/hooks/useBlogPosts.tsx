import { useQuery } from "@tanstack/react-query";
import { GITHUBAPIKEY } from "apiKey";
import { Tree } from "components/Common/Markdown/types/tree";
import { ErrorResponse } from "react-router-dom";

type SuccessResponse<A> = {
  isSuccess: true;
  data: Array<A>;
  isError: boolean;
  isLoading: boolean;
};
type AnotherResponse = {
  isSuccess: false;
  data: undefined;
  isError: boolean;
  isLoading: boolean;
};

type CustomHookResponse<A> = SuccessResponse<A> | AnotherResponse;

const exceiptionTopics = ["days"];

export default function useBlogPosts(): CustomHookResponse<Tree> {
  const { data, isSuccess, isLoading, isError } = useQuery<Array<Tree>, Error, Array<Tree>>({
    queryKey: ["git", "TIL", "tree"],
    queryFn: async () => {
      const res = await fetch(`https://api.github.com/repos/dnrgus1127/TIL/git/trees/main?recursive=10`, {
        headers: {
          Authorization: GITHUBAPIKEY,
        },
      });

      const data = await res.json();
      return data.tree;
    },
    staleTime: 60 * 10 * 1000,
    select: (data: Array<Tree>) => {
      return data.filter((tree) => {
        return !exceiptionTopics.some((exception) => tree.path.startsWith(exception));
      });
    },
  });
  if (isSuccess) {
    return { data, isError, isLoading, isSuccess };
  } else {
    return { data: undefined, isError, isLoading, isSuccess };
  }
}
