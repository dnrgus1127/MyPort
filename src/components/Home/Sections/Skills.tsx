import GlitterStars from "components/Common/EffectElement/GlitterStars";
import MeteorEffect from "components/Common/EffectElement/MeteorEffect";
import { SKILL_LIST, Skill } from "constans/SkillsData";
import { SECTIONS } from "index";
import { useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import RestSkills from "../SkillSection/RestSkills";
import SKillHome from "../SkillSection/SKillHome";
import SkillDescription from "../SkillSection/SkillDescription";
import { useAnimationState } from "./hooks/useSectionAnimation";

const SkillsLayout = styled.div`
  height: calc(var(--vh) * 100);
  position: relative;
  transform-style: preserve-3d;
  perspective: 200px;
`;

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<Skill>(SKILL_LIST[0][2]);
  const navigate = useNavigate();
  const { section } = useParams();
  const { isAnimation } = useAnimationState(SECTIONS.indexOf("skills"));

  const setSkillHandler = useCallback(
    (skill: Skill) => {
      setSelectedSkill(skill);
      navigate(`${skill.name}`);
    },
    [setSelectedSkill, navigate]
  );

  const gotoHomePage = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const gotoRestPage = useCallback(() => {
    navigate("rest");
  }, [navigate]);

  if (!isAnimation) return <></>;
  return (
    <SkillsLayout>
      <GlitterStars count={15} />
      <MeteorEffect count={8} minSpeed={5} maxDelay={20} white={false} />
      <SKillHome visible={!section} onClickLogo={setSkillHandler} onClickRest={gotoRestPage} />
      <SkillDescription
        visible={Boolean(section) && section !== "rest"}
        currentSkill={selectedSkill}
        onClickBack={gotoHomePage}
      />
      <RestSkills visible={section === "rest"} skillList={SKILL_LIST[1]} />
    </SkillsLayout>
  );
}
