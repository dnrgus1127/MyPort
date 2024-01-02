export interface RepositoryData {
  repo: string;
  name: string;
  id: number;
}

export interface RepositoryConstant {
  name: string;
  alternateTitle?: string;
  stacks?: Array<string>;
  description: string;
  whyDeveloped: string;
  preview: string;
  functions: Array<string>;
  library?: Array<string>;
  review?: string;
}

export type Repository = RepositoryData & RepositoryConstant;
