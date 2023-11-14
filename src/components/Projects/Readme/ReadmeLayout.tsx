import CustomMarkdown from 'components/Markdown/CustomMarkdown';
import useCustomNavigate from 'hooks/useCustomNavigate';
import React, { ReactNode } from 'react'
import styled from 'styled-components';




const ReadmeHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        // 텍스트 타이핑이 어울릴듯
        font-size: 8rem;
        font-family: 'Times Newer Roman';

        padding : 3rem 0;
        margin: 3rem;
        letter-spacing: .5rem;
        text-shadow: 5px 5px 0 #aaaaaa88;
    }
`

const MarkdwonWrapper = styled.div`
    width: 85%;
    padding : 3% 5%;
    border-radius: 1rem;
    background-color: #2c2c2c;
    box-shadow: 0px 0px 15px #000000;
` 

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


interface ReadmeLayoutProps {
    data: string;
    title: string;
}

export default function ReadmeLayout({ data,title }: ReadmeLayoutProps) {
    const [,gotoPrevPage] = useCustomNavigate();
  return (
      <Layout>
          <ReadmeHeader>
              <h1>README.md</h1>
          </ReadmeHeader>
          <MarkdwonWrapper>
              <CustomMarkdown markdown={data} />
          </MarkdwonWrapper>
      </Layout>
  )
}
