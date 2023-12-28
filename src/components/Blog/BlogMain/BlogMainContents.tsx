import React from "react";
import CommonSection from "./CommonSection";
import { usePostTree } from "pages/BlogPage";

export default function BlogMainContents() {
  const { timeStampPosts } = usePostTree();
  return (
    <>
      <CommonSection postList={timeStampPosts} maxVisibleItems={4} title="Latest" />
      <CommonSection postList={timeStampPosts} title="Javascript" maxVisibleItems={4} />
      <CommonSection postList={timeStampPosts} title="Typescript" maxVisibleItems={4} />
      <CommonSection postList={timeStampPosts} title="React" maxVisibleItems={5} />
      <CommonSection postList={timeStampPosts} title="CSS" maxVisibleItems={2} />
      <CommonSection postList={timeStampPosts} title="Frontend" maxVisibleItems={2} />
    </>
  );
}
