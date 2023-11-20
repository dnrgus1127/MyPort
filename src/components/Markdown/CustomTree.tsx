import { useQuery } from '@tanstack/react-query';
import { useQueryString } from 'hooks/useQueryString';
import React, { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import CustomTreeItem from './CustomTreeItem';

export interface Tree {
    path: string;
    type: string;
    children?: Array<Tree>;
}

const DirectoryStructure = styled.ul`
    background-color: ${({ theme }) => theme.bgColor2};
    padding : 2rem 3rem;
    border-radius: 8px;

    h3 {
        margin :0;
        padding-left : 1rem;
        padding-bottom: 2rem;
        color :#ff8c10;
    }

    ul {
        background-color: #12121288;
    }

  
    li:not(.tree){
        list-style: none;
    }
    li.tree {
        color : #13a10e;
        list-style-type: "📁";
        cursor: pointer;
        margin-left: 2rem;
    }

    li.tree.open {
        color : #85ff66;
    }

    li:hover {
        background-color: ${({theme})=> theme.bgColor3};
    }
  

    ul.recusive-tree {
        padding-left : 2rem;
        
    }

    .annotation {
        margin-left: 3rem;
        color : #c2ffb3;
    }
`

function setTree(path:string,root: Tree) {
    let splits = path.split("/");
    
    let tree = root;
    splits.forEach(split => {
        if (!tree.children || split === splits[splits.length-1])  return;
        const found = tree.children.find(node => node.path === split);

        if (found)
        {
            tree = found;    
        }
        else {
            const newLevel = {
                path: split,
                type: "tree",
                children : [],
            }
            tree.children.push(newLevel);
            tree = newLevel;
        }
    })

    if (!tree.children) return;
    tree.children.push({
        path: splits[splits.length - 1],
        type: "blob",
    })
}

export default function CustomTree() {
    const querys = useQueryString();

    // 깃허브 Readme.md 요청
    const { data } = useQuery<Array<Tree>>({
        queryKey: ["tree"], queryFn: async () => {
        const res = await fetch(`https://api.github.com/repos/dnrgus1127/${querys.get("projectName")}/git/trees/main?recursive=1`);
        const data = await res.json();
        return data.tree;            
        }
    })
    
    // 가공 처리한 데이터 
    const processedData = useMemo(() => {
        if (!data) return [];
        let rootNode: Tree = { path: "root", type: "tree", children : [] };

        let blobs = data.filter(node => node.type === "blob");

        blobs.forEach((blob) => {
            setTree(blob.path, rootNode);
        })

        rootNode.children?.sort((a, b) => a.type === "tree" ? -1 : 1);
        
        return rootNode.children || [];
    }, [data])
    

    
  return (
      <DirectoryStructure>
          <h3>// 📁{ querys.get("projectName")} Project</h3>
          <ul>
              {processedData.map((tree, idx) => {
                  return <CustomTreeItem tree={tree } projectName={querys.get("projectName") || ""} />
              })}
          </ul>
      </DirectoryStructure>
  )
}
