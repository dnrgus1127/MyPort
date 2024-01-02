import React, { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import media from "styles/media";

interface PostSectionTemplateProps {
  children: ReactNode;
  title: string;
  count: number;
  isMore: boolean;
}

const Template = styled.div`
  hr {
    margin: 8rem 0;
  }

  ${media.small} {
    hr {
      margin: 4rem 0;
    }
  }
`;

const SectionHeader = styled.div`
  display: flex;
  font-family: "Roboto KR", sans-serif;
  margin-bottom: 3em;
  h2 {
    flex: 1;
    font-size: 3.2rem;
    font-weight: 600;
  }
  button {
    font-size: 1.5rem;
    font-family: inherit;
    text-decoration: underline;
    color: inherit;
    font-weight: 800;
  }
  ${media.xlarge} {
    h2 {
      font-size: 2.2rem;
    }
  }
  ${media.small} {
    h2 {
      font-size: 1.8rem;
    }
    button {
      font-size: 1.4rem;
    }
  }
`;

const PostList = styled.ul`
  & > li {
    margin-bottom: 3rem;
  }
`;

export default function PostSectionTemplate({ children, title, count, isMore }: PostSectionTemplateProps) {
  const navigate = useNavigate();
  return (
    <Template>
      <SectionHeader>
        <h2>
          {title} ({count})
        </h2>
        <button
          type="button"
          onClick={() => {
            if (isMore) {
              navigate(-1);
            } else {
              navigate(`/blog/main/${title}`);
            }
          }}
        >
          {isMore ? "Close" : "See More"}
        </button>
      </SectionHeader>
      <PostList>{children}</PostList>
      <hr />
    </Template>
  );
}
