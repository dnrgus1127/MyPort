import GlitterStars from "components/Common/EffectElement/GlitterStars";
import MeteorEffect from "components/Common/EffectElement/MeteorEffect";
import { SKILL_LIST, Skill } from "constans/SkillsData";
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import RestSkills from "../SkillSection/RestSkills";
import SKillHome from "../SkillSection/SKillHome";
import SkillDescription from "../SkillSection/SkillDescription";

const SkillsLayout = styled.div`
  height: calc(var(--vh) * 100);
  position: relative;
  transform-style: preserve-3d;
  perspective: 200px;
`;

export enum SKILLS_NUMBER {
  Home,
  Description,
  Rest,
}

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<Skill>(SKILL_LIST[0][2]);
  const [currentPage, setCurrentPage] = useState<SKILLS_NUMBER>(SKILLS_NUMBER.Home);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#2") setCurrentPage(SKILLS_NUMBER.Home);
  }, [location.hash]);

  const setSkillHandler = useCallback(
    (skill: Skill) => {
      setSelectedSkill(skill);
      setCurrentPage(SKILLS_NUMBER.Description);
    },
    [setCurrentPage, setSelectedSkill]
  );

  const gotoHomePage = useCallback(() => {
    setCurrentPage(SKILLS_NUMBER.Home);
  }, [setCurrentPage]);

  const gotoRestPage = useCallback(() => {
    setCurrentPage(SKILLS_NUMBER.Rest);
  }, []);

  return (
    <SkillsLayout>
      <GlitterStars count={15} />
      <MeteorEffect count={8} minSpeed={5} maxDelay={20} white={false} />
      <SKillHome
        visible={currentPage === SKILLS_NUMBER.Home}
        onClickLogo={setSkillHandler}
        onClickRest={gotoRestPage}
      />
      <SkillDescription
        visible={currentPage === SKILLS_NUMBER.Description}
        currentSkill={selectedSkill}
        onClickBack={gotoHomePage}
      />
      <RestSkills visible={currentPage === SKILLS_NUMBER.Rest} skillList={SKILL_LIST[1]} />
    </SkillsLayout>
  );
}
