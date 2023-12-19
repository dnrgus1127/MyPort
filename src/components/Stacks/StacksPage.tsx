import styled from "styled-components";


const StackPageLayout = styled.div`
    width: var(--width);
    margin: 0 auto;
`
const SkillNavigationBox = styled.div`
  width: 100%;
  height: var(--header-height);
`

export default function StacksPage() {
    
  return (
    <StackPageLayout>
      <SkillNavigationBox>
          123
      </SkillNavigationBox>
    </StackPageLayout>
  )
}
