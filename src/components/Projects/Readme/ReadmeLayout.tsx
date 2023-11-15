import CustomMarkdown from 'components/Markdown/CustomMarkdown';
import useCustomNavigate from 'hooks/useCustomNavigate';
import React, { ReactNode, useEffect, useMemo, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import ReadmeTitle from './ReadmeTitle';


const ReadmeHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    box-shadow : 0px 5px 15px #12121288;
`

const MarkdwonWrapper = styled.div`
    padding : 8% 5%;
` 

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  
    padding : 0 var(--side-padding);
    padding-bottom : 5rem;
    margin-bottom: var(--side-padding);
    
    .layoutWapper {
        background-color: ${({ theme }) => theme.bgColor3};
        box-shadow: 0px 0px 15px #000000;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
        width: 100%;
    }

`


interface ReadmeLayoutProps {
    data: string;
    title: string;
}


export default function ReadmeLayout({ data,title }: ReadmeLayoutProps) {
   
    return (
        <Layout>
            <div className="layoutWapper">
                <ReadmeHeader>
                   <ReadmeTitle/>
                </ReadmeHeader>
                <MarkdwonWrapper>
                    <CustomMarkdown markdown={data} />
                </MarkdwonWrapper>
            </div>
        </Layout>
)
}
