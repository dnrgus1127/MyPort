import { ReactNode } from "react";

export interface ChildrenType {
    children: ReactNode;
}

export interface ComponentType {
    className?: string;
    children?: ReactNode;

}