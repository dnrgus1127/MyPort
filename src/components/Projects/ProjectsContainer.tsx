import { useQuery } from '@tanstack/react-query';
import ProjectsTemplate from './ProjectsTemplate';

export default function ProjectsContainer() : JSX.Element {
    const { data, isLoading, error } = useQuery({
        queryKey: ["git"], queryFn: async () => {
            const res = await fetch(`https://api.github.com/repos/dnrgus1127/colorProject/readme`);
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) return <div></div> ;
    return (
    //   TODO 마크다운 적용하기
      <ProjectsTemplate>{data.name}</ProjectsTemplate>
  )
}
