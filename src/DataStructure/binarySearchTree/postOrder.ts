import { BinaryNode } from "./preOrdder";

function walk<T>(curr: BinaryNode<T> | null, path: T[]) {
  if (!curr) {
    return path;
  }

  walk(curr.left, path);
  walk(curr.right, path);
  path.push(curr.value);

  return path;
}
export default function postOrder<T>(head: BinaryNode<T>) {
  walk(head, []);
}
