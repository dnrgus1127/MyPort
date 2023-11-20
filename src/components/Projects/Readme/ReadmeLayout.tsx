import React from 'react'
import CustomMarkdown from 'components/Markdown/CustomMarkdown';
import useCustomNavigate from 'hooks/useCustomNavigate';
import styled from 'styled-components';
import ReadmeTitle from './ReadmeTitle';
import { DirectionType } from 'redux/reducer/navigaterReducer';
import media from 'styles/media';

const ReadmeHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    box-shadow : 0px 5px 15px #12121288;
    position: relative;

    .exitButton {
        position: absolute;
        top:0;
        right: 0;
        padding:2rem;
        fill :${({ theme }) => theme.color};
        
        svg {
            filter : drop-shadow(3px 5px 0 #121212);
        }
        svg:hover {
            transform: scale(1.2);
        }

        ${media.medium}{
            svg {
                width: 1.6rem;
                height: 1.6rem;
            }
        }
    }
`

const MarkdwonWrapper = styled.div`
    padding : 8% 5%;  
` 

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom : 5rem;
    margin-bottom: var(--side-padding);
    
    .layoutWapper {
        background-color: ${({ theme }) => theme.bgColor3};
        box-shadow: 0px 0px 15px #000000;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
        width: 100%;
    }
    ${media.large} {
        padding: 0;
    }
`

interface ReadmeLayoutProps {
    data: string;
    title: string;
}

export default function ReadmeLayout({ data, title } : ReadmeLayoutProps) {
    const [gotoPage] = useCustomNavigate();
    return (
        <Layout>
            <div className="layoutWapper">
                <ReadmeHeader>
                    <button className="exitButton" onClick={() => {
                        gotoPage("/project/main",DirectionType.NORTH);
                }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"/></svg></button>
                
                   <ReadmeTitle title={title}/>
                </ReadmeHeader>
                <MarkdwonWrapper>
                    <CustomMarkdown markdown={data} />
                </MarkdwonWrapper>
            </div>
        </Layout>
)
}
