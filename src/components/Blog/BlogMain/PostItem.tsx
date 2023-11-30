import {  Tree } from 'components/Common/Markdown/types/tree';
import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import media from 'styles/media';
import { formatRelativeDate } from 'utils/time/formatRelativeDate';


interface PostItemProps {
    data: Tree;
}

const PostItemBox = styled.li`
    font-family: "Roboto KR";
    cursor: pointer;
    padding : 1rem 0 ;

    h3 {
        font-size: 2.4rem;
        font-weight: 800;
        margin-bottom: 3.6rem;
    }
    h3:hover {
        text-decoration: underline;
    }
    .descriptionBox {
        display: flex;
        justify-content: space-between;
        p {
            font-size: 1.4rem;
        }
        span {
            font-size: 1.5rem;
            text-decoration: underline;
        }
        strong{
            padding : 0 3px;
        }
    }

    ${media.small}{
    h3 {
      font-size: 1.8rem;
      margin-bottom: 1em;
    }
    .descriptionBox{
        span {
            font-size: 1.4rem;
        }
    }
   
  }

`

export default function PostItem({ data }: PostItemProps) {
    const navigate = useNavigate();

    const [topics,title] = useMemo(() => {
        let splits = data.path.split("/");
        let topics = splits.slice(0, -1).join("/");
        return [topics,splits[splits.length - 1]]
    }, [data])
    

  return (
      <PostItemBox>
          <h3 onClick={() => {
              navigate(`/blog/post/${encodeURIComponent(data.path)}`)
          }}>{title.slice(0,-3)}</h3>
          <div className='descriptionBox'>
              <p>Last commits : {data.timeStamp && formatRelativeDate(data.timeStamp)} </p><span onClick={(() => {
                  navigate(`/blog/main/${topics.split("/")[0]}`)
              })}>{topics}</span>
          </div>
      </PostItemBox>
  )
}
