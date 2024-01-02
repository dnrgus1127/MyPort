import styled, { keyframes } from "styled-components";
import Spinner from "./Spinner";

const Conatiner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export default function LoadingComponent({ text }: { text?: string }) {
  return (
    <Conatiner>
      <Spinner thinkness={6} text={text || "로딩 중.."} />
    </Conatiner>
  );
}
