import  { UnMountProps } from 'hooks/useUnmount';
import React  from 'react'
import styled, { css } from 'styled-components';
import { FadeIn, FadeOut } from 'styles/keyFrame/Fade';
import useReadme from './hooks/useReadme';
import LoadingComponent from 'components/Common/LoadingComponent';
import ErrorComponent from 'components/Common/ErrorComponent';
import MarkdownRender from 'components/Common/Markdown/MarkdownRender';
import { MarkdownStyled } from 'components/Common/Markdown/MarkdownStyledComponent';
import MarkdownDirTree from 'components/Common/Markdown/MarkdownDirTree';
import media from 'styles/media';

interface ReadmeProps extends UnMountProps {
    className: string;
    visible: boolean;
    projectName: string;
}

const Container = styled.div<{$unMount: boolean}>`
    opacity: 0;
    animation : ${FadeIn} 1s .5s ease-out forwards;
    ${(props) => props.$unMount && css`
    animation: ${FadeOut} 1s ease-out forwards;
    `}

    .title {
      text-align:center;
      font-size : 4rem;
      font-weight : 600;
      font-family : "Roboto KR",sans-serif;
      margin-bottom: 4rem;
    }

    ${media.small}{
      .title {
        font-size: 2.4rem;
      }
    }
`

const MarkdownCss = styled(MarkdownStyled)`
`

const DirComponentCss = styled.div`
  width: 100%;
  padding: 1.6rem 0;
  ${({theme})=> theme.current === 'dark' ? css`
    box-shadow: inset 0px 0px 8px ${({theme})=>theme.shadowColor};
    
  ` : css`
    box-shadow: inset 0px 0px 5px ${({theme})=>theme.shadowColor2};
  `}
  background-color: ${({theme})=> theme.bgColor2}aa;
  h3 {  
    text-align  : center;
    span {
        text-transform: uppercase;
        
    }
  }
  ul {
    padding-left: 1.6rem;
  }
  .tree::before {
    content: "📁 ";
  }
  .tree.open {
    color :${({theme})=> theme.green};
  }
  .annotation {
    color :${({ theme }) => theme.color2}aa;
    margin-left : 1rem;
  }
  .blob {
    color :${({theme})=> theme.color2};

  }
  .tree {
    cursor: pointer;
  }
  .tree:hover , .blob:hover{
    color: ${({theme})=>theme.orange};
  }
`


export default function Readme({ visible, className, handleAnimationEnd,projectName }: ReadmeProps): JSX.Element {    
    const readmeData = useReadme(projectName);
    
    if (readmeData.isLoading) return <LoadingComponent />
    
    if(readmeData.isSuccess) return (
      <Container className={className} onAnimationEnd={handleAnimationEnd} $unMount={!visible}>
            <h1 className='title'>README.md</h1>
            <MarkdownCss>
                <MarkdownRender markdown={readmeData.data} dirComponent={<DirComponentCss><MarkdownDirTree projectName={projectName} /></DirComponentCss>} />
            </MarkdownCss>
        </Container>
    )
    else {
        return <ErrorComponent errorMessage={readmeData.error?.message} />
    }
    
}
