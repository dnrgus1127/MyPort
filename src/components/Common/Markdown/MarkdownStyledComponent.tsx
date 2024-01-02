import styled, { css } from "styled-components";
import media from "styles/media";

export const MarkdownStyled = styled.div`
  color: ${({ theme }) => theme.color};
  img {
    max-width: 49%;
    ${({ theme }) =>
      theme.current === "dark" &&
      css`
        filter: grayscale(50%);
      `}
  }
  h1,
  h2,
  h3,
  h4 {
    font-family: "Roboto KR", "Noto Sans KR";
    font-weight: 600;
  }
  h5,
  h6,
  p,
  li {
    font-family: "SUIT-Regular";
  }
  h1 {
    font-size: 3rem;
    margin-bottom: 3rem;
  }
  h2 {
    font-size: 2.2rem;
  }
  h3 {
    font-size: 1.8rem;
  }
  h2,
  h3,
  blockquote {
    margin-bottom: 0.5em;
  }
  hr {
    margin: 3rem 0;
    height: 1px;
    border: none;
    width: 100%;
    background-color: ${({ theme }) => theme.color};
    opacity: 0.6;
  }
  p,
  li {
    font-size: 1.6rem;
    margin-bottom: 0.5em;
    line-height: 1.3em;
  }
  blockquote {
    padding: 0.5rem 0;
    padding-left: 1rem;
    border-left: 2px solid ${({ theme }) => theme.color2};
    background-color: ${({ theme }) => theme.bgColor2};
    p {
      margin: 0;
    }
  }
  a {
    text-decoration: none;
    color: inherit;
    font-weight: 600;
    text-decoration: underline;
  }

  ${media.small} {
    h1 {
      font-size: 2.2rem;
    }

    h2 {
      font-size: 1.8rem;
    }
    h3 {
      font-size: 1.7rem;
    }
    h4 {
      font-size: 1.6rem;
    }

    p,
    li {
      font-size: 1.5rem;
      line-height: 1.6em;
    }
  }
`;

export const DirComponentCss = styled.div`
  width: 100%;
  padding: 1.6rem 0;
  ${({ theme }) =>
    theme.current === "dark"
      ? css`
          box-shadow: inset 0px 0px 8px ${({ theme }) => theme.shadowColor};
        `
      : css`
          box-shadow: inset 0px 0px 5px ${({ theme }) => theme.shadowColor2};
        `}
  background-color: ${({ theme }) => theme.bgColor2}aa;
  h3 {
    text-align: center;
    span {
      text-transform: uppercase;
    }
  }
  ul {
    padding-left: 1.6rem;
    li {
      list-style: none;
    }
  }

  .tree::before {
    content: "📁 ";
  }
  .tree.open {
    color: ${({ theme }) => theme.green};
    font-weight: 600;
  }
  .annotation {
    color: ${({ theme }) => theme.color2}aa;
    margin-left: 1rem;
  }
  .blob {
    color: ${({ theme }) => theme.color2};
  }
  .tree {
    cursor: pointer;
  }
  .tree:hover,
  .blob:hover {
    color: ${({ theme }) => theme.orange};
  }
`;
