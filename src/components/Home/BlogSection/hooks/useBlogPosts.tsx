import { useQuery } from "@tanstack/react-query";
import { Tree } from "components/Common/Markdown/types/tree";

type SuccessResponse<A> = {
  isSuccess: true;
  data: Array<A>;
  isError: boolean;
  isLoading: boolean;
  status: "error" | "pending" | "success";
};
type AnotherResponse = {
  isSuccess: false;
  data: undefined;
  isError: boolean;
  isLoading: boolean;
  status: "error" | "pending";
};

type CustomHookResponse<A> = SuccessResponse<A> | AnotherResponse;

const exceiptionTopics = ["days"];

export default function useBlogPosts(): CustomHookResponse<Tree> {
  const { data, isSuccess, isLoading, isError, status } = useQuery<Array<Tree>, Error, Array<Tree>>({
    queryKey: ["git", "TIL", "tree"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_SERVER_IP}/postList`);

      const data = await res.json();
      return data;
    },
    staleTime: 60 * 10 * 1000,
    select: (data: Array<Tree>) => {
      return data.filter((tree) => {
        return !exceiptionTopics.some((exception) => tree.path.startsWith(exception));
      });
    },
  });

  if (isSuccess) {
    const sortData = data.sort((a, b) => {
      return new Date(b.timeStamp!).getTime() - new Date(a.timeStamp!).getTime();
    });
    return { data: sortData, isError, isLoading, isSuccess, status };
  } else {
    return { data: undefined, isError, isLoading, isSuccess, status };
  }
}
