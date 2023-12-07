import React from 'react'
import styled from 'styled-components'
import media from 'styles/media'

const AboutLayout = styled.div`
    width: var(--width);
    margin : 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
`

const IntroduceBox = styled.div`
  font-family: 'SUIT-Regular';
  /* font-family: "Poppins"; */
  font-size: 1.5rem;
  width: 60%;

  word-wrap: normal;
  margin-left: auto;

  h1 {
    font-size: 2.4rem;
    font-weight: 600;
    margin-bottom: 1.6rem;
  }
  h1 span{
    color : ${({theme})=>theme.pointColor};
  }

  h2 {
    font-size: 2.2rem;
    font-weight: 600;
    margin-bottom: 1rem;

  }
  h2 span {
    font-size: 1.4rem;
    color : ${({theme})=>theme.pointColor};
  }

  p {
    word-break: keep-all;
    line-height: 1.6em;
    margin-bottom: 2rem;
  }
  p strong{
    color : #8ebcdb;
    font-weight: 600;
  }
  p span {
    font-size: 1.6rem;
  }
  .js{
    color : #f7e025;
  }
  .ts{
    color : #377dc9;
    font-weight: 600;
  }
  .react{
    color : #66dbfb;
  }

  ${media.small}{
    width: 80%;
  }
`

export default function About() {
  return (
      <AboutLayout>
        <IntroduceBox>
          <h1>프론트엔드 개발자 <span>정욱현</span>입니다.</h1>
          <h2>호기심 <span>Curiosity</span></h2>
          <p>새로운 기술과 이론을 탐험하며, 이전에 보이지 않던 <strong>가능성</strong>에 눈을 뜨는 것을 즐깁니다. 프론트엔드 기술을 주력으로 삼아 왔지만, 이것이 끝이 아닌 <strong>출발점</strong>이라고 생각합니다. 기존 지식을 갈고 닦으면서도, 개발 분야를 가리지 않고 다양한 영역에서 폭넓은 지식을 쌓아가는 것이 제 목표입니다.</p>
          <h2>목표 <span>Goals</span></h2>
          <p>주로 사용하는 언어는 <span className="js">Javascript</span>이며, <span className="react">React</span>,<span className="ts">Typescript</span>를 통해 더욱 효율적이고 유지보수가 용이한 코드를 작성하는데 주력하고 있습니다.</p>
          <p>항상 열려 있는 자세를 유지하고 있으며, 아직 부족한 협업 경험과 문제 해결 경험을 얻기 위해서 다양한 프로젝트를 경험해 보고 기여하면서 성장하고 싶습니다.</p>
        </IntroduceBox>
      
    </AboutLayout>
  )
}

// TODO - about me
// 목표는 하나의 분야가 아닌 여러 분야를 넓고
// 현재는 ~~~ 에 관심이 많습니다.
// 몰랐던 사실에 대해서 알게 되고, 이 지식을 바탕으로 다른 