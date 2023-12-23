import { useQuery } from "@tanstack/react-query";
import { projectQuery } from "HomePage";
import PageLoading from "components/Common/PageLoading";
import PortFolioSlide from "components/Home/PortFolioSection/PortFolioSlide";
import { useState } from "react";
import styled from "styled-components";

import { Repository } from "types/Project";

const PortFolioLayout = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.bgColor2};
`;

export default function PortFolio(): JSX.Element | null {
  const projectData = useQuery<Array<Repository>>({ ...projectQuery() });
  const [slideIndex, setSlide] = useState<number>(0);
  if (!projectData.isSuccess) return <PageLoading text="프로젝트 데이터 로딩 중.." />;

  return (
    <PortFolioLayout>
      <PortFolioSlide slideIndex={slideIndex} data={projectData.data} setSlide={setSlide} />
    </PortFolioLayout>
  );
}
