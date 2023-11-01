import styled from "styled-components"

const Template = styled.div`
    background-color: rgb(255, 255, 255);
    height: 100vh;
    padding: 0 var(--side-padding);
    background-color: ${({theme})=> theme.bgColor2};

`

export default function ProjectsTemplate({children} : any) {
  return (
    <Template>{children}</Template>
  )
}
