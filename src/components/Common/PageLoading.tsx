import React from "react";
import styled from "styled-components";
import Spinner from "./Spinner";

const PageLoadingLayout = styled.div`
  width: 100vw;
  height: calc(var(--vh) * 100);
  position: fixed;
  background-color: ${({ theme }) => theme.bgColor4};
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function PageLoading({ text = "페이지 이동 중!" }: { text?: string }) {
  return (
    <PageLoadingLayout>
      <Spinner text={text} />
    </PageLoadingLayout>
  );
}
