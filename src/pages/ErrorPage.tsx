import { BoxButton } from "components/Common/Buttons/StyledButtons";
import { useEffect } from "react";
import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router-dom";
import styled from "styled-components";
import { FlexCol } from "styles/flex";
import media from "styles/media";

const ErrorPageLayout = styled.div`
  width: 100vw;
  height: calc(var(--vh) * 100);

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.bgColor2};
`;

const ErrorPageBox = styled(FlexCol)`
  width: var(--width);
  position: relative;
  align-items: start;

  h1 {
    font-size: 14rem;
    font-family: "Poppins", sans-serif;
    font-weight: 800;
    letter-spacing: 1rem;
    color: ${({ theme }) => theme.orange};
    text-transform: uppercase;
  }

  h2 {
    font-size: 10rem;
    font-weight: 800;
    font-family: "Roboto KR";
    margin-bottom: 2rem;
  }
  h3 {
    font-size: 2.2rem;
    margin-bottom: 3rem;
    font-family: "SUIT-Regular";
  }

  p {
    max-width: 80%;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-family: "SUIT-Regular";
    white-space: pre-line;
    line-height: 140%;
  }

  img {
    position: absolute;
    right: 0;
    top: 0;
    width: 30%;

    ${media.large} {
      display: none;
    }
  }
`;

const PrevPageButton = styled(BoxButton)`
  align-self: center;
  margin-top: 3rem;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 1.2rem 8rem;

  font-family: "SUIT-Regular";
  transition: none;
`;

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  useEffect(() => {
    const html = document.querySelector("html");
    html!.style.overflow = "hidden";
    return () => {
      html!.style.overflow = "initial";
    };
  }, []);

  if (isRouteErrorResponse(error)) {
    return (
      <ErrorPageLayout>
        <ErrorPageBox>
          <h1>Error</h1>
          <h2>{error.status}</h2>
          <h3>경고 : {error.data.sorry || error.data}</h3>
          {error.data.msg instanceof Array ? (
            error.data.msg.map((msg: string, idx: number) => (
              <p key={idx} className="msg">
                {msg}
              </p>
            ))
          ) : (
            <p className="msg">
              {error.data.msg ||
                "올바르지 않은 경로입니다. 하단의 버튼을 눌러 이전 페이지로 돌아가주시길 바랍니다.\n 모든 페이지에서 이 화면이 발생하거나 사이트에 문제가 있을 경우 `dnrgus1127@naver.com` 혹은 `dnrgus1127@gmail.com`으로 연락 부탁드립니다."}
            </p>
          )}
          <PrevPageButton
            onClick={() => {
              navigate(-1);
            }}
          >
            이전 페이지
          </PrevPageButton>
          <img src="/assets/img/error.png" alt="error" />
        </ErrorPageBox>
      </ErrorPageLayout>
    );
  }
  throw error;
}
