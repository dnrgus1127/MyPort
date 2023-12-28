import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import DirTreeNode from "./DirTreeNode";
import { Tree } from "./types/tree";

function setTree(path: string, root: Tree) {
  let splits = path.split("/");

  let tree = root;
  splits.forEach((split) => {
    if (!tree.children || split === splits[splits.length - 1]) return;
    const found = tree.children.find((node) => node.path === split);

    if (found) {
      tree = found;
    } else {
      const newLevel = {
        type: "tree",
        path: split,
        children: [],
        sha: "",
      };
      tree.children.push(newLevel);
      tree = newLevel;
    }
  });

  if (!tree.children) return;
  tree.children.push({
    path: splits[splits.length - 1],
    type: "blob",
    sha: "",
  });
}

interface RootTree {
  tree: Array<Tree>;
}

export default function MarkdownDirTree({ projectName }: { projectName: string }) {
  // 깃허브 Readme.md 요청
  const { data } = useQuery<RootTree, Error, Array<Tree>>({
    queryKey: ["tree", projectName],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_SERVER_IP}/tree/${projectName}`);
      const data = res.json();
      return data;
    },
    select: (data) => data.tree,
    staleTime: 60 * 10 * 1000,
  });

  // 가공 처리한 데이터
  const processedData = useMemo(() => {
    if (!data) return [];
    let rootNode: Tree = { path: "root", type: "tree", children: [], sha: "" };

    let blobs = data.filter((node) => node.type === "blob");

    blobs.forEach((blob) => {
      setTree(blob.path, rootNode);
    });

    rootNode.children?.sort((a, b) => (a.type === "tree" ? -1 : 1));

    return rootNode.children || [];
  }, [data]);

  return (
    <>
      <h3>
        GitHub <span>{projectName}</span> Repository
      </h3>
      <ul>
        {processedData.map((tree, idx) => {
          return <DirTreeNode key={tree.path} tree={tree} projectName={projectName} />;
        })}
      </ul>
    </>
  );
}
