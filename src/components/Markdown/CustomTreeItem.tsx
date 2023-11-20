import React from 'react'
import { Tree } from './CustomTree'
import useBoolean from 'hooks/useBoolean'
import { PROJECT_DIRECTORY_DESCRIPTION } from 'constans/ProjectData';
import styled from 'styled-components';





export default function CustomTreeItem({ tree,projectName }: { tree: Tree,projectName : string}) {
  const [open, onToggleOpen] = useBoolean(false);
   
    if (projectName === "") return <></>;
    return (
      <>
        <li className={tree.type === "tree" ? `tree ${open && "open"}` : "blob"} onClick={() => {
          onToggleOpen();
        }}>{tree.path}
            <Annotation projectName={projectName} path={tree.path}/>
        </li>
        {open && tree.children && <ul className='recusive-tree'>{tree.children.sort((a,b)=> a.type === "tree" ? -1 : 1).map((item) => <CustomTreeItem tree={item} projectName={projectName || ""} />)}</ul>}
      </>
  )
}

function Annotation({projectName, path} : {projectName : string, path : string}): JSX.Element {
  if (!PROJECT_DIRECTORY_DESCRIPTION[projectName] || !PROJECT_DIRECTORY_DESCRIPTION[projectName][path]) return <></>;
  return <span className='annotation'>//{PROJECT_DIRECTORY_DESCRIPTION[projectName][path]}</span>
}
