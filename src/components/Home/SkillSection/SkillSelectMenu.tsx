import React, { useState } from 'react'
import styled from 'styled-components'
import { ComponentType } from 'types/types'
import { ReactComponent as SVG_ArrowDown } from "../../../assets/arrow_down.svg";
import { Skill } from 'constans/SkillsData';
import { Floating } from 'styles/keyFrame/floating';


const SkillSelectMenuLayout = styled.div`
    width: 100%;
    position: relative;
    background-color: #12121244;
    padding : 0 4rem;
    transition: all .4s ease-out;
    box-shadow: 0px 0px 5px ${({theme})=>theme.shadowColor};
    .menuTopBox {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 5.8rem;
        p {
            font-weight: 600;
            font-size: 1.7rem;
            font-family: "Poppins";
            animation: ${() =>Floating(20)} 2s ease-out infinite;
        }
        p:hover {
            font-size: 1.8rem;
        }
        svg {
            width: 4.8rem;
            height: 4.8rem;
        }
    }
    &.open {
        backdrop-filter: blur(20px);
    }
    &.close {
       transform: translateY(calc(100% - 5.8rem));
       p {
         text-shadow: 0px 0px 5px ${({theme})=> theme.shadow2}cc;
       }
    }


    h4 {
        font-size: 2rem;
        font-weight: 600;
        font-family: 'SUIT-Regular';
        text-transform: uppercase;
        margin-bottom: 2rem;
    }

    .skillList {
        display: flex;
        max-height: calc(var(--vh) * 15);
        flex-direction: column;
        flex-wrap: wrap;
        padding: 1rem;
        gap : 1rem;
        margin-bottom: 2rem;
        li {
            font-size: 1.5rem;
            cursor: pointer;
            list-style-type: circle;
            margin-left: 1rem;
            display: flex;
            align-items: center;
            /* text-transform: uppercase; */
            gap: 1.6rem;
            font-family: "Poppins";
        }
        li:hover {
            text-decoration: underline;
        }
        li img {
            height: 1.8rem;
        }
    }

`

interface SkillSelectMenuProps extends ComponentType {
    skillList: Array<Array<Skill>>;
    currentSkill: Skill;
    setSkill: (skill:Skill) => void;
}

export default function SkillSelectMenu({ className,skillList,currentSkill,setSkill }: SkillSelectMenuProps) {
    const [isOpen, setOpen] = useState<boolean>(false);

    const toggleButtonHandler = () => {
        setOpen(prev => !prev);
    }

  return (
      <SkillSelectMenuLayout className={className + " " + `${isOpen ? "open" : "close"}`}>
          <div className='menuTopBox'>
              <button type="button" onClick={toggleButtonHandler} className='toggleButton'>
                  {isOpen ? <SVG_ArrowDown/> :<p style={{color: `#${currentSkill.color}`}}>{currentSkill.name}</p>}
              </button>
          </div>
          <h4>Frontend</h4>
          <ul className="skillList">
              {skillList[0].map(skill => <SkillItem onClick={()=> {
                setSkill(skill);
                toggleButtonHandler();
              }} key={skill.name} skill={skill}/>)}
          </ul>
          <h4>Backend</h4>
          <ul className="skillList">
              {skillList[1].map(skill => <SkillItem onClick={()=>{
                
                setSkill(skill);
                toggleButtonHandler();;
              }} key={skill.name} skill={skill}/>)}
          </ul>
          <h4>ETC (OS, ENV, TOOL)</h4>
          <ul className="skillList">
              {skillList[2].map(skill => <SkillItem onClick={()=>{
                
                setSkill(skill);
                toggleButtonHandler();;
              }} key={skill.name} skill={skill}/>)}
          </ul>
      </SkillSelectMenuLayout>
  )
}


function SkillItem({skill,onClick}:{skill :Skill, onClick : () =>void}) {
    return <li onClick={onClick}>
        <span>{skill.name}</span>
        <img alt={skill.name} src={`https://img.shields.io/badge/${skill.name.toUpperCase()}-${skill.color}?&style=for-the-badge&logo=javascript&logoColor=white`} />
    </li>
}