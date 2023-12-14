import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import textShadow from 'styles/shadow'
import { SKILL_DESCRIPTION, SKILL_LIST, Skill } from 'constans/SkillsData'
import media from 'styles/media'
import { Floating } from 'styles/keyFrame/floating'
import GlitterStars from 'components/Common/EffectElement/GlitterStars'
import MeteorEffect from 'components/Common/EffectElement/MeteorEffect'
import { Rotating } from 'styles/keyFrame/Rotating'
import SKillHome from '../SkillSection/SKillHome'
import SkillDescription from '../SkillSection/SkillDescription'

const SkillsLayout = styled.div`
  /* background-color: ${({ theme }) => theme.bgColor4}; */
  height: calc(var(--vh) * 100);
  position: relative;
  transform-style : preserve-3d;
  perspective: 200px;
`


export enum SKILLS_NUMBER { Home,Description };


export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<Skill>(SKILL_LIST[0][2]);
  const [currentPage, setCurrentPage] = useState<SKILLS_NUMBER>(SKILLS_NUMBER.Home);

  const setSkillHandler = useCallback((skill : Skill) => {
      setSelectedSkill(skill);
      setCurrentPage(SKILLS_NUMBER.Description); 
  }, [setCurrentPage, setSelectedSkill])

  const gotoHomePage = useCallback(() => {
    setCurrentPage(SKILLS_NUMBER.Home);
  }, [setCurrentPage])



  return (
    <SkillsLayout >
      <GlitterStars count={15}/>
      <MeteorEffect count={8} minSpeed={5} maxDelay={20} white={false} />
      <SKillHome visible={currentPage === SKILLS_NUMBER.Home} onClickLogo={setSkillHandler} />
      <SkillDescription visible={currentPage === SKILLS_NUMBER.Description} currentSkill={selectedSkill} onClickBack={gotoHomePage}/>
    </SkillsLayout>
  )
}
