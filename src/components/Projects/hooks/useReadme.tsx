import { useQuery } from "@tanstack/react-query";
import { GITHUBAPIKEY } from "apiKey";

export default function useReadme(projectName: string, enable?: boolean) {
  const readmeData = useQuery<string, Error>({
    queryKey: ["readme", projectName],
    queryFn: async () => {
      const res = await fetch(`https://raw.githubusercontent.com/dnrgus1127/${projectName}/main/README.md`, {
        headers: {
          Authorization: GITHUBAPIKEY,
        },
      });
      const data = res.text();
      return data;
    },
    staleTime: 60 * 10 * 1000,
    enabled: enable,
  });

  return readmeData;
}
