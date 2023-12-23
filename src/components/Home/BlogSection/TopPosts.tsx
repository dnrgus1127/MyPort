import { Tree } from "components/Common/Markdown/types/tree";
import { TOP_POST_DESCRIPTION, TOP_POST_LIST } from "constans/PostData";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FadeInFromBottom } from "styles/keyFrame/Fade";
import media from "styles/media";
import pathToTitle from "utils/pathToTitle";

const TopPostsLayout = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    display: inline-block;
    align-self: flex-end;
    opacity: 0;
    animation: ${FadeInFromBottom} 1s 1s ease forwards;
  }
`;

const PostItem = styled.li<{ $index: number }>`
  list-style: none;
  text-align: start;
  margin-bottom: 3%;
  margin-left: 5%;
  font-family: "SUIT-Regular";

  opacity: 0;
  animation: ${FadeInFromBottom} 1s ease forwards;
  animation-delay: ${(props) => 1 + props.$index * 0.3}s;

  h3 {
    font-size: 2rem;
    line-height: 110%;
    word-break: keep-all;

    margin-bottom: 1rem;
  }
  p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.color}bb;
  }
  h4 {
    text-align: end;
    font-size: 1.3rem;
    text-transform: uppercase;
  }
  h4:hover {
    color: ${({ theme }) => theme.pointColor};
  }
  h3,
  h4 {
    cursor: pointer;
    text-decoration: underline;
    &:hover {
      font-weight: 600;
      text-decoration: underline;
    }
  }

  ${media.medium} {
    h3 {
      font-size: 1.7rem;
    }
    p {
      font-size: 1.3rem;
    }
    h4 {
      display: none;
    }
  }
`;

interface TopPostsProps {
  className?: string;
  postList: Array<Tree>;
}

export default function TopPosts({ className, postList }: TopPostsProps) {
  const topPosts = postList.filter((post) => TOP_POST_LIST.includes(pathToTitle(post.path)));

  return (
    <TopPostsLayout className={className}>
      <h2>Top Posts</h2>
      {topPosts.map((post, idx) => {
        const [topic, title] = post.path.split("/");
        return (
          <PostItem key={post.sha} $index={idx}>
            <Link to={`/blog/post/${post.path}`}>
              <h3>{title.substring(0, title.length - 3)}</h3>
              <p>{TOP_POST_DESCRIPTION[idx]}</p>
              <h4>{topic}</h4>
            </Link>
          </PostItem>
        );
      })}
    </TopPostsLayout>
  );
}
