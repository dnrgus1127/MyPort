export interface RepositoryData {
    repo: string;
    name: string;
    id: number;
}

export interface RepositoryConstant {
    name: string;
    stacks: Array<string>;
    description: string;
    whyDeveloped: string;
    functions: Array<string>;
    library?: Array<string>; 
}

export type Repository = RepositoryData & RepositoryConstant 

