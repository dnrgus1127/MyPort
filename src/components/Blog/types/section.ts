import { Tree } from "components/Common/Markdown/types/tree";

export interface SectionProps  {
    postList: Array<Tree>;
    maxVisibleItems?: number;
}