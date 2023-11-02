import React from 'react'
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';

const MarkdownCss = styled.div`
   
   h1 {
      font-size: 2em;
  }
   h2 {
      font-size: 1.5em;

  }
   h3 {
      font-size: 1em;
  }

  h1,h2,h3,h4,h5,h6 {
      font-weight: 800;
      border-bottom : 1px solid ${({ theme }) => theme.color2};
      padding-bottom: .3em;
      margin-bottom: 1.6rem;
      line-height: 1.25;
      letter-spacing: 2px;
  }



`

export default function CustomMarkdown({ markdown }: { markdown: string; }) {
  return (
    <MarkdownCss>
        <Markdown remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props } : any) {
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
              }
            }}
          >{markdown}</Markdown>
    </MarkdownCss>
  )
}
