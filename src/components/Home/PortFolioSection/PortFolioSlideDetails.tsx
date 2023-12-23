import { BoxButton } from "components/Common/Buttons/StyledButtons";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { AnimationComponent } from "styles/animation";
import { FadeInFromBottom } from "styles/keyFrame/Fade";
import media from "styles/media";
import textShadow from "styles/shadow";
import { Repository } from "types/Project";
import useSectionAnimation from "../Sections/hooks/useSectionAnimation";

const PortFolioSlideDetailsLayout = styled(AnimationComponent)`
  position: absolute;
  bottom: 0;
  left: -50%;
  z-index: 3;
  width: 200%;
  text-align: center;
  margin-bottom: calc(var(--vh) * 10);
  transition: transform 1s ease-out, opacity 1s 0.2s ease;
  display: flex;
  flex-direction: column;

  ${(props) =>
    !props.$visible &&
    css`
      transform: translate(0, 200%);
    `}

  h1 {
    font-size: 4rem;
    font-family: "Poppins Black", sans-serif;
    text-transform: uppercase;
    ${textShadow(1)}

    opacity: 0;
    transform: translateY(25%);
    z-index: 1;
    margin-bottom: 3rem;
  }

  p {
    max-width: 33%;
    display: inline-block;
    opacity: 0;
    transform: translateY(25%);
    margin: 0 auto;
    font-size: 1.5rem;
    font-family: "SUIT-Regular";
    margin-bottom: 1.6rem;
  }
  span {
    line-height: 1.7rem;
    display: inline-block;
    padding: 4px 6px;
    text-shadow: 0px 0px 2px ${({ theme }) => theme.shadowColor};
    word-wrap: normal;
    background-color: ${({ theme }) => theme.bgColor4};
    border-radius: 1px;
    white-space: pre-wrap;
    word-break: keep-all;
  }

  ${(props) =>
    props.$enableAnimation &&
    css`
      h1,
      p,
      button {
        animation: ${FadeInFromBottom} 1s 1s ease-out forwards;
      }
      p {
        animation-delay: 1.2s;
      }
      button {
        animation-delay: 1.6s;
      }
    `}

  ${media.large} {
    h1 {
      font-size: 6rem;
    }
    p {
      width: 40%;
      font-size: 1.4rem;
    }
  }
  ${media.small} {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: var(--header);
    padding-bottom: calc(var(--header) / 2);
    align-items: center;
    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      ${textShadow(1)}
    }
    margin-bottom: 1rem;
    p {
      display: none;
    }
  }
`;

const MoreButton = styled(BoxButton)`
  padding: 1rem 3.2rem;
  font-weight: 600;
  font-family: "SUIT-Regular";
  font-size: 1.5rem;
  opacity: 0;
  transform: translateY(25%);
  align-self: center;
  ${media.small} {
    padding: 1rem 6.4rem;
  }
`;

interface PortFolioSlideDetailsProps {
  project: Repository;
  visible: boolean;
}
export default function PortFolioSlideDetails({ project, visible }: PortFolioSlideDetailsProps) {
  const animationState = useSectionAnimation(3);

  return (
    <PortFolioSlideDetailsLayout $enableAnimation={animationState === "animation-active"} $visible={visible}>
      <h1>{project.alternateTitle}</h1>
      <p>
        {project.description.split("\n").map((text, idx) => (
          <span key={idx}>
            {text}
            <br />
          </span>
        ))}
      </p>
      <p>
        {project.whyDeveloped.split("\n").map((text, idx) => (
          <span key={idx}>
            {text}
            <br />
          </span>
        ))}
      </p>
      <MoreButton tabIndex={-1}>
        <Link to={`${project.name}`}>자세히 보기</Link>
      </MoreButton>
    </PortFolioSlideDetailsLayout>
  );
}
