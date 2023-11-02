import ProjectsTemplate from './ProjectsTemplate';
import { useQuery } from "@tanstack/react-query"


const projectQuery = (repo : string) => ({
    queryKey: ['project', repo],
    queryFn: async () => {
        const res = await fetch(`https://raw.githubusercontent.com/dnrgus1127/${repo}/main/README.md`);
        const data = await res.text();
        return {readme : data};
    }
})

export const loader = (queryClient :any) => async () => {
    const query = projectQuery("colorProject");
    return (
        queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query))
    )
}
interface ProjectsQueryData  {
    readme: string;
   
  };
  
  export default function ProjectsContainer(): JSX.Element {
    const { data : project } = useQuery<ProjectsQueryData,Error>(
      projectQuery("colorProject")
      );
      
      
    return (
        <ProjectsTemplate readme={project!.readme} />
    );
  }