import { SKILL_DESCRIPTION, Skill } from 'constans/SkillsData';
import React, { useRef } from 'react'
import styled, { css } from 'styled-components'
import { Rotating } from 'styles/keyFrame/Rotating';
import { Floating } from 'styles/keyFrame/floating';
import media from 'styles/media';
import useSectionAnimation from '../Sections/hooks/useSectionAnimation';
import { FadeIn, FadeOut } from 'styles/keyFrame/Fade';

const SkillDescriptionLayout = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding : var(--header) 0;
  display: flex;
  transition: transform 1s ease-out;
  z-index: -1;
  transform: translateZ(-100px)  translateX(100%);
  &.visible {
    transform:  none;
    z-index: 1;
  }

  ${media.medium}{
    h2 {
      font-size: 4rem;
    }
  }


  ${media.small}{
    padding : var(--header) 2rem;

    h2 {
      font-size: 3rem;
    }
  }

 
`

const SkillDescriptionWrapper = styled.div`
  width: var(--width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  
  .skill-description {
    text-align: center;
    h3 {
      opacity: 0;
      font-size: 6rem;
      font-family: 'Dhurjati', sans-serif;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 2rem;
      text-shadow: 1px 1px 0px ${({ theme }) => theme.shadowColor};
      animation : ${() => Floating(5)} 2s ease-out infinite;
      ${({theme})=> theme.current !=="dark" && css`
        text-shadow: 1px 1px 0px ${({ theme }) => theme.shadowColor2}aa;
      `}
    }
    p {
      font-family: 'SUIT-Regular';
      font-size: 1.5rem;
    }
  }
  .skill-contents {
    height : 100%;
    display: flex;
    flex: 1;
    overflow: hidden;
  }

  .skill-logo {
    width: 20%;
    align-self: center;
    img {
      width: 100%;
      animation : ${Rotating} 10s ease infinite;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.5rem;
      text-align: center;
      font-family : "Poppins";
      white-space : nowrap;
      font-weight : 600;
      color : ${({theme})=>theme.greyColor};
      margin-bottom: 1rem;
    }
  }
  .skill-details {
    flex : 1;
    overflow-y: scroll;
    overflow-x : hidden;
    margin : 3% 0;
    padding : 1rem;
    display : flex;
    flex-direction: column;
    align-items : flex-end;
    justify-content: space-between;
    gap : 2rem;


    &::-webkit-scrollbar {
        width: 3px;
    }
    &::-webkit-scrollbar-thumb {
        height: 15%; /* 스크롤바의 길이 */
        background: ${({theme})=>theme.pointColor}; /* 스크롤바의 색상 */
        border-radius: 4px;
    }
  }

  .detail-descriptionBox {
      max-width:80%;
      border-radius: 2px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.2rem;
      padding :1rem 2rem;
      backdrop-filter: blur(4px);
      border-radius: 4px;
      h4 {
        font-family: "Poppins","Noto Sans KR","Roboto KR","Roboto",sans-serif;
        font-weight: 600;
        align-self: flex-end;
        text-decoration :underline;    
      }
      p {
        color : ${({ theme }) => theme.greyColor};
        font-size: 1.5rem;
        line-height: 1.6rem;
        font-family: 'SUIT-Regular';
        word-wrap: normal;
        word-break : keep-all;
        text-align: end;
      }
  }

  h3, p, .skill-logo, h4, .detail-descriptionBox{
    
    animation : ${FadeOut} 1s forwards;
  }

  &.visible {
    p, .skill-logo, h4 , .detail-descriptionBox{
      opacity : 0;
      animation : ${FadeIn} 1s forwards;
    }
    h3 {
      animation : ${FadeIn} 1s forwards, ${() =>Floating(3)} 1s ease-out infinite;
    }
    h3 {
      animation-delay: .5s;
    }
    .skill-logo {
      animation-delay : .7s;
    }
    p {
      animation-delay: 1.2s;
    }
    
    .detail-descriptionBox:nth-child(1) {
      animation-delay : 1.4s;
    }
    .detail-descriptionBox:nth-child(2) {
      animation-delay :1.6s;
    }
    .detail-descriptionBox:nth-child(3) {
      animation-delay :1.8s;
    }
    .detail-descriptionBox:nth-child(4) {
      animation-delay :2s;
    }
    .detail-descriptionBox:nth-child(5) {
      animation-delay :2.2s;
    }
    .detail-descriptionBox:nth-child(6) {
      animation-delay :2.4s;
    }

  }

  

  ${media.xlarge} {
    
    .detail-descriptionBox{
      max-width : 95%;
    }
    
  }

  ${media.medium}{
    .skill-description {
      h3 {
        font-size: 2.2rem;
      }
    }
    .skill-logo {
      display: none;
    }
    .skill-details {
      padding : 2rem 0;
      align-items: flex-start;
      
    }
    .detail-descriptionBox {
        padding: .6rem 0;
        gap: .5rem;
        max-width : 100%;
        box-shadow : none;
        h4 {
          align-self: flex-start;
        }
        p {
          text-align: start;
        }
      }
  }
  
`

interface SkillDescriptionProps {
  visible: boolean;
  currentSkill: Skill;
  onClickBack: () => void;
}

export default function SkillDescription({visible, currentSkill, onClickBack }:SkillDescriptionProps) {
  const contents = useRef<HTMLDivElement>(null);
  const skillDescription = SKILL_DESCRIPTION.find(skill => skill.name === currentSkill.name);

  const handleWheel = (e: React.WheelEvent) => {
    if (!contents.current) return;
    if (contents.current.scrollHeight > contents.current.clientHeight) {
      e.stopPropagation();
      e.nativeEvent.stopPropagation();
    }
  }
  return (
    <SkillDescriptionLayout className={visible ? "visible" : undefined}> 
        <SkillDescriptionWrapper className={visible ? "visible" : undefined}>
          <div className='skill-description' >
              <h3 style={{color : `#${currentSkill.color}`}}>{currentSkill.name}</h3>
              {skillDescription && <p className='skill-description-paragraph'>{skillDescription.description}</p>}
          </div>
          <div className="skill-contents">
           <div className="skill-logo"  onClick={onClickBack}>
            <img src={`/assets/img/${currentSkill.name.toLowerCase()}.png`} alt={currentSkill.name} style={{ filter: `drop-shadow(0px 0px 5px #${currentSkill.color})` }} />
            <p>로고를 누르면 목록으로 돌아갑니다.</p>
            <p>Click the logo to return to the list.</p>
            </div>
            <div key={currentSkill.name} onWheel={handleWheel} className="skill-details"  ref={contents} >
              {skillDescription && skillDescription.part.map((item, idx) => {
                return <div key={item} className='detail-descriptionBox'>
                  <h4>{item}</h4>
                  <p>{skillDescription.detailDescription[idx]}</p>
                </div>
              })}
            </div>
          
          </div>
        </SkillDescriptionWrapper>
      </SkillDescriptionLayout>
  )
}
