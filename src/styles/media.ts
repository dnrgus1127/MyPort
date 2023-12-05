export const mediaQuery = (maxWidth : number) => `
  @media (max-width: ${maxWidth}px)
`;



const media = {
  xlarge : mediaQuery(1479), // 태블릿
  large: mediaQuery(1023), // 작은 태블릿
  medium: mediaQuery(767), // 작은 태블릿
  small: mediaQuery(480), // 모바일 세로
  custom: mediaQuery,
};

export default media;


