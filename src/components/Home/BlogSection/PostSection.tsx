import { Tree } from "components/Common/Markdown/types/tree";
import React, { useLayoutEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import media from "styles/media";

const PostSectionLayout = styled.div`
  ul {
  }
  li {
    font-size: 1.6rem;
    line-height: 150%;
    margin-bottom: 1rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
    font-family: "SUIT-Regular";
  }
  li:hover {
    text-decoration: underline;
  }

  &:nth-child(2) {
    text-align: end;
    h3::after {
      left: -20%;
    }
  }

  ${media.large} {
    width: 100%;
    padding: 4rem 0;

    h3 {
      font-size: 2.4rem;
    }
    li {
      font-size: 1.8rem;

      line-height: 1.6em;
    }
  }
`;

interface PostSectionProps {
  postList: Array<Tree>;
  topics: "Latest Posts" | string;
  count?: number;
}

export default function PostSection({ postList, topics, count = 4 }: PostSectionProps) {
  const navigate = useNavigate();

  let filteredPostList = useMemo(() => {
    let result;
    if (topics === "Latest Posts") {
      result = postList;
    } else {
      result = postList.filter((post) => post.path.toLowerCase().startsWith(`${topics.toLowerCase()}/`));
    }

    return result;
  }, [postList, topics]);

  return (
    <PostSectionLayout>
      <h2>{topics}</h2>
      <ul>
        {filteredPostList.map((post, idx) => {
          if (idx >= count) return;
          let tokens = post.path.split("/");
          let title = tokens[tokens.length - 1];
          return (
            <li key={idx}>
              <Link to={`/blog/post/${post.path}`}>{title.substring(0, title.length - 3)}</Link>
            </li>
          );
        })}
      </ul>
    </PostSectionLayout>
  );
}
