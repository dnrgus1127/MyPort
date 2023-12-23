import { SKILL_DESCRIPTION, SKILL_LIST, Skill, getSkillColor } from "constans/SkillsData";
import styled, { css } from "styled-components";
import { AnimationComponentProps } from "styles/animation";
import media from "styles/media";
import { customScrollBar } from "styles/scrollBar";
import useWheelStopPropagation from "../Sections/hooks/useWheelStopPropagation";
import { BackToBottom, FadeIn, FadeInFromBottom, FadeOut } from "styles/keyFrame/Fade";

const RestSkillsLayout = styled.div<AnimationComponentProps>`
  position: absolute;
  top: 0;
  left: 0;
  margin-top: var(--header);
  padding: var(--header) 0;
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
  transform: translateZ(-50px);
  opacity: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  ${customScrollBar}

  width: 100%;
  height: 100%;
  will-change: transform;

  ${(props) =>
    props.$visible &&
    css`
      transform: none;
      opacity: 1;
    `}

  ${media.large} {
    margin-top: 0;
  }
`;

const RestSkillsWrapper = styled.div`
  display: flex;

  flex-wrap: wrap;
  width: var(--width);
  min-height: 100%;
  margin: 0 auto;
  justify-content: start;
  gap: 2%;
  align-items: start;

  ${media.large} {
    flex-direction: column;
  }
`;

const SkillItemBox = styled.div<{ $shadowColor?: string } & AnimationComponentProps>`
  --shadowColor: ${(props) => props.$shadowColor || props.theme.color};
  width: 49%;
  padding: 1.6rem 2rem;
  margin-bottom: 2rem;
  box-shadow: 0px 0px 5px var(--shadowColor);
  backdrop-filter: blur(4px);

  &:hover {
    box-shadow: 0px 0px 10px 2px var(--shadowColor);
    background-color: ${({ theme }) => theme.bgColor4};
  }

  .item-header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    justify-content: space-between;
  }
  h3 {
    font-size: 2.4rem;
    font-weight: 600;
    font-family: "Poppins";
    text-transform: uppercase;
    display: inline-block;
    text-shadow: 0px 0px 5px var(--shadowColor);
    ${({ theme }) =>
      theme.current === "light" &&
      css`
        text-shadow: 0px 0px 2px var(--shadowColor);
      `}
  }
  p,
  li,
  h4 {
    font-size: 1.5rem;
    font-family: "SUIT-Regular";
  }

  p {
    color: ${({ theme }) => theme.color}aa;
    margin-bottom: 2rem;
    line-height: 110%;
  }
  h4 {
    text-align: center;
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 1.6rem;
    color: var(--name);
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 1rem;
    li {
      width: 50%;
      text-align: center;
      cursor: pointer;
      font-weight: 600;
      position: relative;
    }
    li:hover {
      color: ${({ theme }) => theme.pointColor};
      font-size: 1.5rem;
    }
    li details {
      color: ${({ theme }) => theme.color};
      word-break: keep-all;
      font-weight: 400;
      font-size: 90%;
      position: absolute;
      visibility: hidden;
      top: 150%;
      padding: 1rem;
      width: 150%;
      background-color: ${({ theme }) => theme.bgColor4};
      z-index: 4;
      border: 1px solid ${({ theme }) => theme.color};
      opacity: 0;
      transition: opacity 0.3s ease-out;
    }

    li:nth-child(odd) details {
      left: 40%;
    }
    li:nth-child(even) details {
      right: 40%;
    }
    li:hover details {
      visibility: visible;
      transition-duration: 1s;
      opacity: 1;
    }
  }

  &:nth-child(n + 5) {
    ul {
      li details {
        top: 0;
        transform: translateY(-110%);
      }
    }
  }

  // 애니메이션

  opacity: 0;
  transition: opacity 0.5s 1s ease-out;
  h3,
  p,
  h4,
  ul,
  li,
  img {
    animation: ${FadeOut} 1s ease-out forwards;
    opacity: 0;
  }
  ${(props) =>
    props.$visible &&
    css`
      opacity: 1;
      h3,
      p,
      h4,
      ul,
      li,
      img {
        animation: ${FadeInFromBottom} 1s 0.5s ease-out forwards;
      }

      h3,
      img {
        animation-delay: 1s;
      }
      p {
        animation-delay: 1.3s;
      }
      li {
        animation-delay: 1.6s;
      }
    `}

  // 반응형

  ${media.large} {
    width: 100%;
  }

  ${media.medium} {
    h3 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }
    img {
      height: 1.6rem;
    }
  }
`;

interface RestSkillsProps {
  visible: boolean;
  skillList: Array<Skill>;
}

export default function RestSkills({ visible, skillList }: RestSkillsProps) {
  const { ref: scrollRef, onWheel } = useWheelStopPropagation<HTMLDivElement>();
  const skillNames = skillList.map((skill) => skill.name.toLowerCase());

  const skillDescription = SKILL_DESCRIPTION.map((skill) => {
    return { ...skill, name: skill.name.toLowerCase() };
  });

  const skills = skillDescription.filter((skill) => skillNames.includes(skill.name.toLowerCase()));
  return (
    <RestSkillsLayout
      $visible={visible}
      ref={scrollRef}
      onWheel={onWheel}
      onTouchStart={onWheel}
      onTouchEnd={onWheel}
      onTouchMove={onWheel}
    >
      <RestSkillsWrapper>
        {skills.map((skill) => (
          <SkillItemBox key={skill.name} $shadowColor={"#" + getSkillColor(skill.name)} $visible={visible}>
            <div className="item-header">
              <h3>{skill.name}</h3>
              <img
                alt={skill.name}
                src={`https://img.shields.io/badge/${skill.name}-${getSkillColor(
                  skill.name
                )}?&style=for-the-badge&logo=javascript&logoColor=white`}
              />
            </div>
            <p>{skill.description}</p>
            {/* <h4>Experience</h4> */}
            <ul>
              {skill.part.map((item, idx) => (
                <li key={idx}>
                  {item}
                  <details open={true}>
                    <summary></summary>
                    {skill.detailDescription[idx] && skill.detailDescription[idx]}
                  </details>
                </li>
              ))}
            </ul>
          </SkillItemBox>
        ))}
      </RestSkillsWrapper>
    </RestSkillsLayout>
  );
}
