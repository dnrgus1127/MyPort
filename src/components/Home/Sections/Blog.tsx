import { BoxButton } from "components/Common/Buttons/StyledButtons";
import ConditionalComponent from "components/Common/ConditionalComponent";
import GlitterStars from "components/Common/EffectElement/GlitterStars";
import SpinPlanet from "components/Common/EffectElement/SpinPlanet";
import TypingText from "components/Common/EffectElement/TypingText";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DrawLine } from "styles/keyFrame/DrwaLine";
import { FadeInFromBottom } from "styles/keyFrame/Fade";
import media from "styles/media";
import PostSection from "../BlogSection/PostSection";
import TopPosts from "../BlogSection/TopPosts";
import useBlogPosts from "../BlogSection/hooks/useBlogPosts";
import useSectionAnimation from "./hooks/useSectionAnimation";

const BlogLayout = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  @media screen and (max-height: 580px) {
    min-height: 100%;
  }
`;

const BlogWrapper = styled.div`
  width: var(--width);
  height: 100%;
  margin: 0 auto;
  padding: var(--header) 0;
`;

const Contents = styled.div`
  height: 100%;
  display: flex;

  section {
    width: 50%;
  }
  section:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  section {
    h2 {
      font-family: "Dhurjati", sans-serif;
      font-weight: 400;
      font-size: 4rem;
      line-height: 150%;
      margin-bottom: 0.5em;
      display: inline-block;
      position: relative;
    }
    h2::after {
      position: absolute;
      bottom: 0;
      width: 0;
      height: 2px;
      background-color: ${({ theme }) => theme.color};
      animation: ${() => DrawLine(120)} 0.7s 2s linear forwards;
      content: " ";
    }
  }
  section:nth-child(1) {
    h2::after {
      left: 0;
    }
  }

  section:nth-child(2) {
    text-align: end;
    h2::after {
      right: 0;
    }
  }

  ${media.medium} {
    section {
      h2 {
        font-size: 3rem;
      }
    }
  }

  ${media.custom(580)} {
    section {
      width: 100%;
    }
    section:nth-child(2) {
      display: none;
    }
  }
`;

const IntroBanner = styled.div`
  margin: 5%;

  padding-top: 0;
  text-align: start;
  h1 {
    font-size: 4rem;
    font-family: "Dhurjati", sans-serif;
    margin-bottom: 2.4rem;
    position: relative;
    padding-bottom: 1rem;
    display: inline-block;
  }
  h1::after {
    position: absolute;
    width: 0;
    height: 2px;
    left: 0;
    bottom: 0;
    content: " ";
    animation: ${() => DrawLine(110)} 1s 1s ease forwards;
    background-color: ${({ theme }) => theme.color};
  }
  p {
    font-size: 1.5rem;
    font-family: "SUIT-Regular";
    color: ${({ theme }) => theme.color}dd;
    word-wrap: normal;
    word-break: keep-all;
    line-height: 120%;
    margin-bottom: 2.4rem;
  }

  p,
  button {
    opacity: 0;
    animation: ${FadeInFromBottom} 1s 0.5s ease forwards;
  }

  strong {
    color: ${({ theme }) => theme.pointColor};
    font-weight: 600;
  }

  ${media.medium} {
    h1 {
      font-size: 3rem;
    }
  }
`;

const MorePostButton = styled(BoxButton)`
  width: 50%;
  margin: 0 auto;
  display: block;
  font-family: "SUIT-Regular";
  font-weight: 600;
  font-size: 1.5rem;
  transition: none;
  ${media.medium} {
    width: 100%;
    padding: 2% 3%;
  }
`;
const LatestPosts = styled.div`
  padding: 5%;
  h2,
  li {
    opacity: 0;
    animation: ${FadeInFromBottom} 1s 1s ease forwards;
  }
  li {
    animation-delay: 1.3s;
  }

  ${media.medium} {
    li {
      font-size: 1.5rem;
    }
  }
`;

export default function Blog() {
  const blogPosts = useBlogPosts();

  const [posts] = useMemo(() => {
    if (!blogPosts.isSuccess) return [[], []];

    const posts = blogPosts.data.filter((item) => item.path.includes(".md"));
    return [posts];
  }, [blogPosts.data, blogPosts.isSuccess]);

  const animationState = useSectionAnimation(4);

  if (animationState === "animation-deactive") return <></>;

  // if (blogPosts.isLoading) return <PageLoading text="블로그 데이터 로딩 중.." />;

  return (
    <BlogLayout>
      <GlitterStars count={25} />
      <SpinPlanet />
      <BlogWrapper>
        <Contents>
          <section>
            <IntroBanner>
              <TypingText delay={0} speed={50} text="Tech Blog" tag="h1" />
              <p>
                GitHub에 개발과 관련된 경험, 학습 등을 정리한 TIL(Today I Learn)을 파싱한 <strong>블로그 페이지</strong>{" "}
                입니다.
                <br /> TIL 포스트를 주 2~3회 이상 꾸준히 작성하는 것을 목표로 하고있고 포스트가 일정량 이상 쌓이면
                github.io를 이용해서 정적 블로그를 제작하여 꾸준히 기록을 하고 싶습니다.
              </p>

              <Link to={"/blog/main"}>
                <MorePostButton>더 많은 포스트 읽기</MorePostButton>
              </Link>
            </IntroBanner>
            <LatestPosts>
              <h2>Latest Posts</h2>
              <ConditionalComponent
                dataStatus={blogPosts.status}
                component={<PostSection postList={posts} topics="Latest Posts" />}
              />
            </LatestPosts>
          </section>
          <section>
            <ConditionalComponent dataStatus={blogPosts.status} component={<TopPosts postList={posts} />} />
          </section>
        </Contents>
      </BlogWrapper>
    </BlogLayout>
  );
}
