import React, { useEffect, useMemo } from "react";
import styled from "styled-components";
import MarkdownRender from "components/Common/Markdown/MarkdownRender";
import { MarkdownStyled } from "components/Common/Markdown/MarkdownStyledComponent";
import PostMenu from "./PostMenu";
import BlogNavigation from "../BlogNavigation";
import media from "styles/media";
import { Floating } from "styles/keyFrame/floating";

interface PostLayoutProps {
  title: string;
  post: string;
}

const LayoutBox = styled.div`
  .mobileTopBtn {
    visibility: hidden;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 1rem;
    animation: ${() => Floating(10)} 2s ease-in-out infinite;
    svg {
      fill: ${({ theme }) => theme.pointColor};
      width: 4.8rem;
      height: 4.8rem;
      filter: drop-shadow(0px 2px 0 #12121244);
    }
  }

  ${media.large} {
    .mobileTopBtn {
      visibility: visible;
    }
  }
`;

const Title = styled.div`
  font-size: 4rem;
  line-height: 5rem;
  font-family: "Noto Sans KR";
  font-weight: 600;
  padding-bottom: 1.6rem;
  margin-bottom: 1rem;
  text-shadow: 3px 3px 0 ${({ theme }) => theme.shadowColor};
  position: relative;
  &::after {
    content: " ";
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.color};
    position: absolute;
    bottom: 0;
    left: 0;
    box-shadow: 3px 3px 0 ${({ theme }) => theme.shadowColor};
  }
  ${media.small} {
    text-align: center;
    font-size: 2.4rem;
    text-shadow: 1px 1px 0 ${({ theme }) => theme.shadowColor};
    line-height: 2.8rem;
  }
`;
const PostContents = styled(MarkdownStyled)`
  display: flex;
  flex-direction: column;
  word-wrap: normal;

  h1,
  h2,
  h3,
  h4 {
    padding-bottom: 1rem;
    margin-top: 2rem;
    word-break: keep-all;
  }
  h1,
  h2 {
    position: relative;
    line-height: 1.2em;
  }
  h4 {
    margin-bottom: 1.6rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-shadow: 2px 2px 0 ${({ theme }) => theme.shadowColor};
  }

  code {
    font-family: "Fira Mono", monospace;
    font-size: 1.4rem;
  }

  blockquote {
    padding: 1rem;
    background-color: ${({ theme }) => theme.bgColor};
    box-shadow: inset 0px 0px 5px ${({ theme }) => theme.shadowColor};
  }

  img {
    max-width: 90%;
    display: block;
    margin: 3rem auto;
    box-shadow: 0px 0px 10px ${({ theme }) => theme.shadowColor};
    border: 1px solid ${({ theme }) => theme.pointColor};
  }
  ul {
    padding-left: 1rem;
  }

  li::before {
    content: "-ㅊ ";
  }
  p,
  li {
    font-size: 1.5rem;
    word-break: keep-all;
    text-indent: 5px;
    word-spacing: 1px;
    font-family: "Noto Sans KR";
  }

  code:not([class^="language-"]) {
    word-break: break-all;
    background-color: ${({ theme }) => theme.bgColor};
    margin-right: 0.5rem;
    padding: 3px 6px;
    border-radius: 2px;
    font-weight: 600;
  }

  ul {
    margin-bottom: 1.6rem;
  }
  ul,
  ol,
  p {
    margin-bottom: 1.6rem;
  }

  h1,
  h2,
  h3,
  h4 {
    align-self: start;
    position: relative;
  }

  h1::after,
  h2::after {
    position: absolute;
    content: " ";
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.color};
    box-shadow: 3px 3px 0 ${({ theme }) => theme.shadowColor};
  }

  h1::before,
  h2::before,
  h3::before,
  h4::before {
    content: "#";
    position: absolute;
    font-size: inherit;
    color: ${({ theme }) => theme.color}66;
    top: 0;
    left: 0;
    transform: translateX(-180%);
    text-shadow: none;
  }

  strong {
    font-weight: 800;
    color: ${({ theme }) => theme.pointColor};
  }

  ${media.small} {
    a,
    li,
    p {
      font-size: 1.5rem;
    }
    h1,
    h2,
    h3,
    h4 {
      margin-left: 1rem;
      margin-top: 2rem;
    }
    li::before {
      font-size: 1.3rem;
      line-height: 1.5rem;
    }
    img {
      margin: 1rem auto;
    }
    p,
    ul {
      margin-bottom: 1rem;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      text-shadow: none;
    }

    h1::after,
    h2::after {
      box-shadow: 1px 1px 0 ${({ theme }) => theme.shadowColor};
    }
  }
`;

export default function PostLayout({ title, post }: PostLayoutProps) {
  const processedTitle = useMemo(() => {
    const arr = title.split("/");
    return arr[arr.length - 1];
  }, [title]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const topButtonHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <LayoutBox>
      <Title>{processedTitle.substring(0, processedTitle.length - 3)}</Title>
      <BlogNavigation />
      <PostMenu />
      <PostContents>
        <MarkdownRender markdown={post} />
      </PostContents>
      <PostMenu />
      <button className="mobileTopBtn" onClick={topButtonHandler}>
        <svg
          clipRule="evenodd"
          fillRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m16.843 13.789c.108.141.157.3.157.456 0 .389-.306.755-.749.755h-8.501c-.445 0-.75-.367-.75-.755 0-.157.05-.316.159-.457 1.203-1.554 3.252-4.199 4.258-5.498.142-.184.36-.29.592-.29.23 0 .449.107.591.291 1.002 1.299 3.044 3.945 4.243 5.498z" />
        </svg>
      </button>
    </LayoutBox>
  );
}
