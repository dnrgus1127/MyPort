import React from 'react'
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import remarkGfm from 'remark-gfm';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CustomIMG from './CustomIMG';
import MarkdownDirTree from './MarkdownDirTree';



// img 태그로 되어있는 경우에 대한 parser
function replacer(match: string) {
  
    const regex = /src="([^"]*)"/;
  
    const src = match.match(regex);
    
    if (!src) return "";
    
    return `![image](${src[1].replace(/\s/g,'')})`;
}

interface MarkdownRenderProps {
  markdown: string;
  dirComponent?: JSX.Element;
}
  
export default function MarkdownRender({markdown,dirComponent = <MarkdownDirTree projectName='none'/>} :MarkdownRenderProps) {
    const renderedMarkdown = markdown.replaceAll( /<img\b[^>]*>/ig, replacer);
    const rendere = renderedMarkdown.replaceAll(/<br\/>/g, "\n");
  return (
    <ReactMarkdown  remarkPlugins={[remarkGfm]}
    components={{
      code({ node, inline, className, children, ...props }: any) {
        if (className === "language-dir") return dirComponent;
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
  >{rendere}</ReactMarkdown>
  )
}
