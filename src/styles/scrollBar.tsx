import { css } from "styled-components";

export const customScrollBar = () => css`
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    height: 10%; /* 스크롤바의 길이 */
    background: ${({ theme }) => theme.pointColor}; /* 스크롤바의 색상 */

    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
  }
`;
