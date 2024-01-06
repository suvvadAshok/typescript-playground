import { BinaryNode } from "./preOrdder";

function walk<T>(curr: BinaryNode<T> | null, path: T[]): T[] {
  //base
  if (!curr) return path;

  walk(curr.left, path);
  path.push(curr.value);
  walk(curr.right, path);

  return path;
}

export default function inOrder<T>(head: BinaryNode<T>) {
  walk(head, []);
}
