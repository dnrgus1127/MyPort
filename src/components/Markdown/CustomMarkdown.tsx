import React from 'react'
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';
import { DrawLine } from 'css/keyFrame/DrwaLine';
import CustomIMG from './CustomIMG';
import CustomTree from './CustomTree';
import media from 'styles/media';

const MarkdownCss = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'SUIT-Regular';
   img {
    max-width: 33%;
    box-shadow: 3px 3px 0 #121212;
    margin-right: 1rem;
   }

   h1 {
      font-size: 2em;
      
      
  }
   h2 {
      font-size: 1.3em;

  }
   h3 {
      font-size: 1em;
  }

  h1,h2{
      font-weight: 800;
      line-height: 1.25;
      letter-spacing: 2px;
      padding-bottom: 1rem;
      
  }
  h3,h4,h5,h6 {
    padding-bottom: 0.5rem;
  }

  h1,h2,h3{
    position: relative;
    align-self: self-start;
    text-shadow: 4px 4px  ${({ theme }) => theme.shadowColor};
  }

  & > h1::after, & > h2::after, & > h3::after{
    position: absolute;
    content: " ";
    bottom: 0;
    left: 0;
    height: 3px;
    animation: ${() => DrawLine(100)} 1s 2s ease-in forwards;
    box-shadow: 3px 3px 0 ${({ theme }) => theme.shadowColor};
    
}
  & > h1::after {
      background-color: #9ACD32;
  }
  & > h2::after {
      background-color: #ff9400;
  }
  & > h3::after {
      background-color: #b49eff;    
  }

  h1:not(:nth-child(1)),h2{
    margin-top : 2rem;
  }

  h1,h2,blockquote,pre {
    margin-bottom : 2rem;
  }

  li,p,h3,h4,h5,h6 {
    margin-bottom: 1rem;
  }

  hr {
    margin : 4rem 0;
    border: none;
    height: 1px;
    background-color: ${({theme})=> theme.color}88;
  }

  blockquote {
    border-left : 4px solid white;
    background-color: ${({ theme }) => theme.bgColor};
    padding : 1rem;
    align-self: self-start;
    
    p{
      margin :0;
    }
  }

  a {
    color : ${({ theme }) => theme.color};
    font-weight: 600;
    text-decoration: underline;
    position: relative;
  }
  a::before {
    content: " 🔗 ";
  }

  ul {
    list-style-position: inside;
    padding-left: 2rem;
  }
  li {
    list-style: circle;
    
  }
  p,li{
    text-shadow: 2px 2px  ${({ theme }) => theme.shadowColor};
  }



  ${media.small} {
    h1 {
      font-size : 2rem;
    }
    h2 {
      font-size: 1.7rem;
    }
    h3{
      font-size: 1.6rem;
    }
    h1,h2 {
      font-weight: 400;
      letter-spacing: normal;
      padding-bottom: .5rem;
    }
    h1,h2,h3{
      text-shadow: 2px 2px  ${({ theme }) => theme.shadowColor};
    }
    li,p {
      font-size:1.4rem;
      text-shadow: 1px 1px ${({ theme }) => theme.shadowColor};
    }

    h1,h2,blockquote,pre {
      margin-bottom: 1.6rem;
    }

    hr {
      margin : 1.6rem 0;
    }
    img {
      max-width: 48%;
      margin-right : .5%;
      box-shadow: 1px 1px 0 #121212;
    }

    ul {
      padding-left: 1rem;
    }
    & > h1::after, & > h2::after, & > h3::after{
      height: 2px;
      box-shadow: 2px 2px 0 #121212;
    
}

}


`

// img 태그로 되어있는 경우에 대한 parser
function replacer(match: string) {
  
  const regex = /src="([^"]*)"/;

  const src = match.match(regex);
  
  if (!src) return "";
  
  return `![image](${src[1].replace(/\s/g,'')})`;
}

export default function CustomMarkdown({ markdown }: { markdown: string; }) {

  const renderedMarkdown = markdown.replaceAll( /<img\b[^>]*>/ig, replacer);
  const rendere = renderedMarkdown.replaceAll(/<br\/>/g, "\n");
  return (
    <MarkdownCss>
      
        <Markdown  remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }: any) {
                if(className === "language-dir") return <CustomTree/>
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter language={match[1]} style={dark} PreTag="div"
                    {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
        
                ) : (
                  <code className={className ? className : ""} {...props}>
                    {children}
                  </code>
                );
              },
              img({ node, src,alt }) {
                return <CustomIMG src={src} alt={alt} />
              }
            }}
          >{rendere}</Markdown>
    </MarkdownCss>
  )
}
