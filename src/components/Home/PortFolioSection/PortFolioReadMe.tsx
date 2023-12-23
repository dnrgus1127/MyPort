import MarkdownRender from "components/Common/Markdown/MarkdownRender";
import { DirComponentCss, MarkdownStyled } from "components/Common/Markdown/MarkdownStyledComponent";
import useReadme from "components/Projects/hooks/useReadme";
import { PROJECT_INFOMATION } from "constans/ProjectData";
import { getSkillColor } from "constans/SkillsData";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { AnimationComponent } from "styles/animation";
import media from "styles/media";
import { customScrollBar } from "styles/scrollBar";
import { Repository, RepositoryConstant } from "types/Project";
import useWheelStopPropagation from "../Sections/hooks/useWheelStopPropagation";
import MarkdownDirTree from "components/Common/Markdown/MarkdownDirTree";
import LoadingComponent from "components/Common/LoadingComponent";
import { useLocation, useNavigate } from "react-router-dom";

const PortFolioReadMeLayout = styled(AnimationComponent)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  transition: opacity 0s 1s ease-out;
  opacity: 0;
  display: flex;
  ${customScrollBar};

  ${(props) =>
    props.$visible &&
    css`
      transition-delay: 0s;
      opacity: 1;
    `}

  ${media.medium} {
    margin: var(--header) 0;
    flex-direction: column;
    height: inherit;
    overflow-y: scroll;
  }
`;

const Section = styled(AnimationComponent)`
  width: 50%;
  height: 100%;
  padding: var(--header);
  ${media.medium} {
    width: 100%;
    height: auto;
    padding: 3rem;
  }
`;

const FirstSection = styled(Section)`
  padding-right: calc(var(--header) / 2);
  transition: transform 1s ease-out;
  transform: translateX(-100%);
  ${(props) =>
    props.$visible &&
    css`
      transition-delay: 0.3s;
      transform: translateX(0px);
    `}

  h1 {
    font-size: 3rem;
    margin-bottom: 0.6em;
    text-transform: uppercase;
    text-align: center;
  }
  h2 {
    font-size: 1.8rem;
    margin: 1rem 0;
    margin-top: 3rem;
  }
  h1,
  h2 {
    font-family: "Poppins";
    font-weight: 600;
  }

  p {
    font-family: "SUIT-Regular";
    font-size: 1.5rem;
    line-height: 1.7rem;

    text-indent: 1rem;
  }

  .stack {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .functions {
    padding-left: 1rem;
    display: flex;
    flex-wrap: wrap;
    margin-left: 2rem;
    li {
      width: 50%;
      margin: 1rem 0;
      font-size: 1.6rem;
      list-style-type: disc;
      padding-left: 0.2rem;
      font-family: "SUIT-Regular";
    }
  }
  .library {
    margin-left: 1rem;
    padding-left: 1rem;
    li {
      list-style: "- ";
      font-size: 1.5rem;
      font-family: "Poppins";
      text-transform: uppercase;
      margin: 1rem 0;
    }
  }
`;

const ReadmeSection = styled(Section)`
  overflow-y: scroll;
  box-shadow: 0px 0px 15px 5px ${({ theme }) => theme.shadowColor};
  background-color: ${({ theme }) => theme.bgColor3}aa;
  position: relative;

  transition: transform 1s ease-out;
  transform: translateX(100%);
  ${(props) =>
    props.$visible &&
    css`
      transition-delay: 0.3s;
      transform: translateX(0px);
    `}

  .githubNotice {
    border: 1px solid ${({ theme }) => theme.greyColor};
    padding: 1rem;
    margin-bottom: 4rem;
    background-color: #1a1e21;
    background-color: ${({ theme }) => (theme.current === "dark" ? "1a1e21" : "#f6e7ea")};
    h3 {
      font-size: 1.6rem;
      font-family: "Poppins";
      text-align: center;

      color: ${({ theme }) => theme.orange};
    }
    p {
      font-size: 1.4rem;
    }
  }
  ${customScrollBar};
  h1 {
    text-align: center;
  }
  img {
    filter: none;
  }
  blockquote {
    background-color: ${({ theme }) => theme.bgColor4};
    padding: 0.5rem 1rem;
    white-space: pre-wrap;
  }

  ${media.medium} {
    overflow: visible;
  }
`;

interface PortFolioReadMeProps {
  visible: boolean;
  data?: RepositoryConstant;
}

export default function PortFolioReadMe({ visible, data = PROJECT_INFOMATION[0] }: PortFolioReadMeProps) {
  const readmeData = useReadme(data.name, visible);
  const wheelStop = useWheelStopPropagation<HTMLDivElement>();
  const mobileWheel = useWheelStopPropagation<HTMLDivElement>(window.innerWidth < 768);
  const navigate = useNavigate();
  return (
    <PortFolioReadMeLayout
      $visible={visible}
      ref={mobileWheel.ref}
      onWheel={mobileWheel.onWheel}
      onTouchStart={mobileWheel.onWheel}
      onTouchMove={mobileWheel.onWheel}
      onTouchEnd={mobileWheel.onWheel}
    >
      <FirstSection $visible={visible}>
        <h1>{data.alternateTitle ? data.alternateTitle : data.name}</h1>
        <h2>What is?</h2>
        <p>{data.description}</p>
        <h2>Why?</h2>
        <p>{data.whyDeveloped}</p>
        <h2>Functions</h2>
        <ul className="functions">
          {data.functions.map((func) => (
            <li key={func}>{func}</li>
          ))}
        </ul>
        <h2>Stacks</h2>
        <ul className="stack">
          {data.stacks &&
            data.stacks.map((skill) => {
              return (
                <li key={skill}>
                  <img
                    alt={skill}
                    src={`https://img.shields.io/badge/${skill.toUpperCase()}-${getSkillColor(
                      skill
                    )}?&style=for-the-badge&logo=javascript&logoColor=white`}
                  />
                </li>
              );
            })}
        </ul>
        <h2>Used Library</h2>
        <ul className="library">{data.library && data.library.map((lib) => <li key={lib}>{lib}</li>)}</ul>
      </FirstSection>
      <ReadmeSection
        as={MarkdownStyled}
        $visible={visible}
        ref={wheelStop.ref}
        onWheel={wheelStop.onWheel}
        onTouchStart={mobileWheel.onWheel}
        onTouchMove={mobileWheel.onWheel}
        onTouchEnd={mobileWheel.onWheel}
      >
        <div className="githubNotice">
          <h3>Notice</h3>
          <p>하단 내용은 Github의 해당 프로젝트 Repository의 README.md 를 파싱한 내용입니다.</p>
        </div>
        {readmeData.isSuccess && !readmeData.isLoading ? (
          <MarkdownRender
            markdown={readmeData.data}
            dirComponent={
              <DirComponentCss>
                <MarkdownDirTree projectName={data.name} />
              </DirComponentCss>
            }
          />
        ) : (
          <LoadingComponent />
        )}
      </ReadmeSection>
    </PortFolioReadMeLayout>
  );
}
