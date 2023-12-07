import React, { useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import textShadow from 'styles/shadow'
import TechStakList from '../SkillSection/TechStackList'

const SkillsLayout = styled.div`
    height: 100%;
    background-color: ${({ theme }) => theme.bgColor};
    padding : var(--header) 0;
    h3 {
      font-size: 6rem;
      font-weight: 800;
      text-align: center;
      font-family: 'Dhurjati', sans-serif;
      text-transform: uppercase; 
      ${textShadow(3)};
    }

`
const SkillSectionWrapper = styled.div`
  width: var(--width);
  margin : 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const SkillSectionContents = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  flex : 1;


`

const SkillDetailBox = styled.div`
  flex :1;
  border: 1px solid green;
`

export default function Skills() {


  return (
    <SkillsLayout>
      <SkillSectionWrapper>
        <h3>Skills</h3>
        <SkillSectionContents>
          <TechStakList/>
          <SkillDetailBox>
          </SkillDetailBox>
        </SkillSectionContents>
      </SkillSectionWrapper>
    </SkillsLayout>
  )
}
