import { useQuery } from "@tanstack/react-query";

export default function useReadme(projectName: string, enable?: boolean) {
  const readmeData = useQuery<string, Error>({
    queryKey: ["readme", projectName],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_SERVER_IP}/readme/${projectName}`);
      const data = res.text();
      return data;
    },
    staleTime: 60 * 10 * 1000,
    enabled: enable,
  });

  return readmeData;
}
