import { BoxButton } from "components/Common/Buttons/StyledButtons";
import React, { ReactNode } from "react";
import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router-dom";
import styled from "styled-components";
import { FlexCol } from "styles/flex";

const ErrorPageLayout = styled.div`
  width: 100vw;
  height: calc(var(--vh) * 100);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorPageBox = styled(FlexCol)`
  min-width: var(--width);
  align-items: start;

  h1 {
    font-size: 20rem;
    font-family: "Poppins", sans-serif;
    font-weight: 800;
    letter-spacing: 1rem;
    color: ${({ theme }) => theme.pointColor};
    text-transform: uppercase;
  }

  h2 {
    font-size: 12rem;
    font-weight: 800;
    font-family: "Roboto KR";
    margin-bottom: 2rem;
  }
  h3 {
    font-size: 2.2rem;
    margin-bottom: 3rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-family: "Roboto KR";
  }
`;

const PrevPageButton = styled(BoxButton)`
  align-self: center;
  margin-top: 3rem;
  font-size: 1.8rem;
  font-weight: 600;
  padding: 1.2rem 8rem;
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.pointColor};
    color: ${({ theme }) => theme.bgColor2};
  }
`;

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  if (isRouteErrorResponse(error)) {
    return (
      <ErrorPageLayout>
        <ErrorPageBox>
          <h1>Error</h1>
          <h2>{error.status}</h2>
          <h3>Error : {error.data.sorry}</h3>
          {error.data.msg instanceof Array ? (
            error.data.msg.map((msg: string, idx: number) => (
              <p key={idx} className="msg">
                {msg}
              </p>
            ))
          ) : (
            <p className="msg">{error.data.msg}</p>
          )}
          <PrevPageButton
            onClick={() => {
              navigate(-1);
            }}
          >
            이전 페이지
          </PrevPageButton>
        </ErrorPageBox>
      </ErrorPageLayout>
    );
  }
  throw error;
}
