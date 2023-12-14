import { SKILL_LIST, Skill } from 'constans/SkillsData'
import React from 'react'
import styled from 'styled-components'
import { FadeIn, FadeInFromBottom } from 'styles/keyFrame/Fade'
import { Floating } from 'styles/keyFrame/floating'
import useSectionAnimation from '../Sections/hooks/useSectionAnimation'


const SkillHomeLayout = styled.div`
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  transition: transform 1s ease;
  display: flex;
  flex-direction: column;
  transform: translateZ(300px);

  &.visible {
    transform: translateZ(0px);
  }
  
  h1 {
    font-family: 'Dhurjati', sans-serif;
    font-size: 8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-shadow: 0px 0px 3px ${({ theme }) => theme.shadowColor};
    text-align: center;
    padding : var(--header) 0;
  }

  .skill-list-box {
    width: var(--width);
    margin : 0 auto;
    flex: 1;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-bottom: 12rem;
  }

  ul {
    display : flex;
    min-height: 10rem;
    gap: 8rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.7rem;
    font-family: "Poppins";
    font-weight: 600;
    line-height: 2rem;
    text-transform: uppercase;
    opacity: 0;
  }

  .skill-item {
    width: 10rem;
    cursor: pointer;
    animation: ${() => Floating(3)} 2s ease-out infinite;
    &:nth-child(2){
        animation-delay: 0.2s;
    }
    &:nth-child(3){
        animation-delay: 0.5s;
    }
    &:nth-child(4){
        animation-delay: 0.4s;
    }
    &:nth-child(5){
        animation-delay: 0.8s;
    }
    &:nth-child(6){
        animation-delay: 1.1s;
    }

  }
  
  .skill-item:hover{
    img {
        filter : none;
    }
    animation: none;
  }


  h1,ul {
    opacity: 0;
  }

  &.animation-active {
    h1 {
      animation: ${FadeIn} 1s ease-out forwards;
    }
    ul {
    animation: ${FadeInFromBottom} .5s ease-out forwards;
    }
    ul:nth-child(1){
    animation-delay: .2s;
   }
    ul:nth-child(2){
      animation-delay: .6s;
    }
    ul:nth-child(3){
      animation-delay: .9s;
    }

  }
`

const SkillImage = styled.img<{ $color: string }>`
    width: 100%;
    filter: drop-shadow(0 0 .5rem ${(props)=> `#${props.$color}`});
`

interface SkillHomeProps {
    visible: boolean;
    onClickLogo: (skill: Skill) => void;
}

export default function SKillHome({ visible, onClickLogo }: SkillHomeProps) {
  const AnimationState = useSectionAnimation(2);
  return (
      <SkillHomeLayout className={`${visible ? "visible" : ""} ${AnimationState}`}>
          <h1>Skill</h1>
          <div className="skill-list-box">
              <ul>{SKILL_LIST[0].map((skill,idx) => <li onClick={()=>{onClickLogo(skill)}} key={idx} className='skill-item'>
                  <SkillImage src={`/assets/img/${skill.name}.png`} alt={skill.name} $color={skill.color} />
                {skill.name}
              </li>)}</ul>
              <ul>{SKILL_LIST[1].map((skill,idx) => <li onClick={()=>{onClickLogo(skill)}} key={idx} className='skill-item'>
                  <SkillImage src={`/assets/img/${skill.name}.png`} alt={skill.name} $color={skill.color} />
                {skill.name}
              </li>)}</ul>
              <ul>{SKILL_LIST[2].map((skill,idx) => <li onClick={()=>{onClickLogo(skill)}} key={idx} className='skill-item'>
                  <SkillImage src={`/assets/img/${skill.name}.png`} alt={skill.name} $color={skill.color} />
                {skill.name}
              </li>)}</ul>
          </div>
    </SkillHomeLayout>
  )
}
