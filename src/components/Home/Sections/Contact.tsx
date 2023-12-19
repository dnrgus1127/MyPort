import MovedStars from "components/Common/EffectElement/MovedStars";
import styled, { css, keyframes } from "styled-components";
import { AnimationComponent } from "styles/animation";
import { DrawLine } from "styles/keyFrame/DrwaLine";
import { FadeInFromBottom } from "styles/keyFrame/Fade";
import media from "styles/media";
import textShadow from "styles/shadow";
import useSectionAnimation from "./hooks/useSectionAnimation";

const ContactLayout = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  /* background: radial-gradient(ellipse at bottom, #403d4a 0, #090a0f 100%); */
  background: radial-gradient(ellipse at bottom, #090a0f 0%, #17151e 100%);
  ${({ theme }) =>
    theme.current === "light" &&
    css`
      background: radial-gradient(ellipse at bottom, #c9c9c9 0, #ffffff 100%);
    `}

  .footer {
    text-align: center;
    background-color: ${({ theme }) => theme.footerCover};
    h2 {
      font-family: "Dhurjati", sans-serif;
      font-size: 8rem;
    }
  }
`;

const BackgroundLinear = keyframes`
  0% {
    opacity: .7;
  }
  33% {
    opacity: 1;
  }
  66% {
    opacity: .5;
  }
  100% {
    opacity: 0;
  }
`;

const ContactContentsBox = styled.div`
  width: var(--width);
  flex: 1;
  margin: 0 auto;
  text-align: center;
  z-index: 5;
  display: flex;
  justify-content: center;

  ${media.medium} {
    flex-direction: column;
    gap: 5%;
  }
`;

const ContactContent = styled(AnimationComponent)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: flex 1s 0.5s ease-out;
  padding: 0 3%;
  gap: 1rem;
  flex: 1;

  p,
  a {
    display: none;
    padding-bottom: 1.6rem;
    opacity: 0;
    cursor: pointer;
    ${textShadow(2)}
  }
  p:hover,
  a:hover {
    font-weight: 600;
    color: ${({ theme }) => theme.green};
  }

  h3 {
    font-size: 4rem;
    font-weight: 600;
    font-family: "Poppins";
    position: relative;
    padding-bottom: 0.8rem;
    margin-bottom: 2.4rem;
    ${textShadow(3)}
  }
  h3::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    height: 3px;
    background-color: ${({ theme }) => theme.pointColor};
    transition: 1s ease-out;
  }
  .email {
    font-family: "Poppins";
    font-size: 1.7rem;
  }
  .email::before {
    content: "✉️";
    padding-right: 1rem;
  }
  a::after {
    content: "🔗";
    padding-left: 1rem;
  }

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: -1;
    background: linear-gradient(to left top, rgba(255, 255, 255, 0), rgba(192, 192, 192, 0.15));
    transition: opacity 0.5s ease-out;
  }

  ${(props) =>
    props.$enableAnimation &&
    css`
      &::before {
        animation: ${BackgroundLinear} 1s ease-out;
      }

      &:nth-child(1)::before {
        animation-delay: 0s;
      }
      &:nth-child(2)::before {
        animation-delay: 0.3s;
      }
      &:nth-child(3)::before {
        animation-delay: 0.6s;
      }
    `}

  &:hover {
    flex: 3;
    p,
    a {
      display: inherit;
      animation: ${FadeInFromBottom} 0.5s 1s ease-out forwards;
    }
    h3::after {
      animation: ${() => DrawLine(100)} 1s forwards;
    }
    &::before {
      ${({ theme }) =>
        theme.current === "light" &&
        css`
          background-color: rgba(0, 0, 0, 0.1);
        `}

      opacity: 1;
    }
  }

  // 태블릿 이하
  ${media.medium} {
    flex: 0;
    justify-content: start;

    h3 {
      font-size: 3rem;
    }
    h3::after {
      animation: ${FadeInFromBottom} 0.5s 1s ease-out forwards;
    }
    p,
    a {
      display: inherit;
      opacity: 1;
      animation: none;
    }

    &::before {
      animation: none;
    }
    &:hover {
      flex: 0;
      &::before {
        opacity: 0;
      }

      p,
      a {
        display: inherit;
        opacity: 1;
        animation: none;
      }
    }
  }
`;

export default function Contact() {
  const animationState = useSectionAnimation(5);
  return (
    <ContactLayout>
      <MovedStars zIndex={1} />
      <ContactContentsBox>
        <ContactContent $enableAnimation={animationState === "animation-active"}>
          <h3>E-mail</h3>
          <p className="email" style={{ animationDelay: "1s" }}>
            Gmail : dnrgus1127@gamil.com
          </p>
          <p className="email" style={{ animationDelay: "1.5s" }}>
            Naver : dnrgus1127@naver.com
          </p>
        </ContactContent>
        <ContactContent $enableAnimation={animationState === "animation-active"}>
          <h3>Github</h3>
          <a href="https://github.com/dnrgus1127">Goto Github</a>
        </ContactContent>
        <ContactContent $enableAnimation={animationState === "animation-active"}>
          <h3>TIL & Blog</h3>
          <a href="https://github.com/dnrgus1127/TIL">Today I Learn (gitHub)</a>
          <a href="/*" style={{ animationDelay: "1.5s" }}>
            포트폴리오에서 Blog 읽기
          </a>
        </ContactContent>
      </ContactContentsBox>
      {/* <div className="footer">
        <h2>Contact Me</h2>
      </div> */}
    </ContactLayout>
  );
}
