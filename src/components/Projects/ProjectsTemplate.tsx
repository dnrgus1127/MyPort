import CustomMarkdown from "components/Markdown/CustomMarkdown";
import styled from "styled-components"



const Template = styled.div`
    background-color: rgb(255, 255, 255);
    padding: 5rem var(--side-padding);
    padding-top : 8rem;
    background-color: ${({theme})=> theme.bgColor2};
`
interface TemplateProps {
  readme: string;
}
export default function ProjectsTemplate({readme} : TemplateProps) {
  return (
    <Template>
      <CustomMarkdown markdown={readme}/>
    </Template>
  )
}
