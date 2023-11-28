export interface Tree {
    path: string;
    type: string;
    children?: Array<Tree>;
    sha: string;
    timeStamp?: string;
}
