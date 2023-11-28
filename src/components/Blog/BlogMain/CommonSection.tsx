import React, { useMemo } from 'react'
import { SectionProps } from '../types/section'
import PostSectionTemplate from './PostSectionTemplate'
import PostItem from './PostItem';

interface CommonSectionProps extends SectionProps {
  title: string;
  subTitle?: string;
}

const MAX_VISIBLE_VALUE = 99999;

export default function CommonSection({ title,subTitle, postList, maxVisibleItems = MAX_VISIBLE_VALUE }: CommonSectionProps) {
  
  const filteredPostList = useMemo(() => {
    if (title === "Latest") return postList;
    return postList.filter(post => post.path.toLowerCase().includes(title.toLowerCase()) || (subTitle && post.path.toLowerCase().includes(subTitle?.toLowerCase())));
  }, [title, subTitle, postList])

  return (
      <PostSectionTemplate title={title} count={filteredPostList.length} isMore={maxVisibleItems === MAX_VISIBLE_VALUE}>
        {filteredPostList.map((item, idx) => {
            return idx < maxVisibleItems && <PostItem key={item.path} data={item}/>
        })}
      </PostSectionTemplate>
  )
}
