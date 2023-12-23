export default function pathToTitle(path: string) {
  const tokens = path.split("/");
  return tokens[tokens.length - 1];
}
