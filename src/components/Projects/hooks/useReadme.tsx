import { useQuery } from '@tanstack/react-query';

export default function useReadme(projectName :string) {
    const readmeData = useQuery<string,Error>({queryKey : ["readme",projectName],queryFn : async () => {
        const res = await fetch(`https://raw.githubusercontent.com/dnrgus1127/${projectName}/main/README.md`);
        const data = res.text();
        return data;
    }
    })
    
    return readmeData;
}
