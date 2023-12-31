import { QueryClient, useQuery } from "@tanstack/react-query";
import PostLayout from "components/Blog/Post/PostLayout";
import PageLoading from "components/Common/PageLoading";
import { Params, useNavigation, useParams } from "react-router-dom";
import { checkStatus } from "utils/fetch/checkStatus";

const githubMarkdownQuery = (fileName: string) => ({
  queryKey: ["git", "md", fileName],
  queryFn: async () => {
    const res = await fetch(`${process.env.REACT_APP_API_SERVER_IP}/post/${encodeURIComponent(fileName)}`);
    checkStatus(res.status);

    const data = await res.text();

    return data;
  },
  staleTime: 60 * 60 * 1000,
});

export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: { params: Params<string> }) => {
    if (!params["*"]) throw new Response("route Error", { status: 404 });
    const query = githubMarkdownQuery(params["*"]);
    return await queryClient.fetchQuery(query);
  };

export default function PostPage() {
  const params = useParams();
  const { data: post, isSuccess, isLoading } = useQuery(githubMarkdownQuery(params["*"]!));

  if (!isSuccess) return <></>;

  return <PostLayout title={params["*"]!} post={post} />;
}
