import React from 'react'
import styled, { css } from 'styled-components';
import { Repository } from 'types/Project';
import PortFolioSlideDetails from './PortFolioSlideDetails';


interface ItemProps {
    $distance: number;
    $trans: string;
    name: string;
}

const PortFolioSlideItemLayout = styled.div<ItemProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: ${(props) => props.$distance * 100}%;
    transform: ${(props) => props.$trans};
    overflow :hidden;

    filter : ${(props) => props.$distance !== 0 && "grayScale(50%) blur(1px) brightness(70%)"};
    
    .trans > & {
        transition : .5s all ease-out;
    }
    
    box-shadow : 0px 0px 5px ${({ theme }) => theme.current ==="dark" ? theme.shadowColor :theme.shadowColor2};
    ${(props) => props.$distance === 0 && css`
        box-shadow : 0px 0px 12px ${({ theme }) => theme.current ==="dark" ? theme.shadowColor :theme.shadowColor2};

    `}
    img {
        object-fit : cover;
        width:100%;
        height:100%;
    }
`

interface PortFolioSlideItemProps {
    data: Repository;
    distance: number;
    trans: string;
}


export default function PortFolioSlideItem({data,distance,trans}:PortFolioSlideItemProps) {
  return (
    <PortFolioSlideItemLayout name={data.name}  $distance={distance} $trans={trans}>
        <img src={`/assets/img/${data.name}.jpg`} alt={data.name + "이미지"}/>
    </PortFolioSlideItemLayout>
  )
}
