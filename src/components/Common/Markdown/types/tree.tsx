export interface Tree {
    path: string;
    type: string;
    children?: Array<Tree>;
}
