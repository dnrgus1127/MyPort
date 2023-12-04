import { useQuery } from '@tanstack/react-query'
import { projectQuery } from 'HomePage';
import PortFolioSlide from 'components/Home/PortFolioSection/PortFolioSlide';
import PortFolioSlideDescription from 'components/Home/PortFolioSection/PortFolioSlideDetails';
import ProjectSlider from 'components/Projects/ProjectSlider';
import React, { useCallback, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { FloationSide } from 'styles/keyFrame/floating';
import { Repository, RepositoryData } from 'types/Project';



const PortFolioLayout = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    background-color: ${({ theme }) => theme.bgColor2};

  
`

export default function PortFolio() : JSX.Element | null {
    const projectData = useQuery<Array<Repository>>({ ...projectQuery() });    
    const [slideIndex, setSlide] = useState<number>(0);

  if (!projectData.isSuccess) return null;
  return (
      <PortFolioLayout>
        <PortFolioSlide slideIndex={slideIndex} data={projectData.data} setSlide={setSlide} />
    </PortFolioLayout>
  )
}
