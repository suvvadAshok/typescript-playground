import { BinaryNode } from "../binarySearchTree/preOrdder";

export function breadthFirstSearch(
  head: BinaryNode<number>,
  needle: number
): boolean {
  //this is QUEUE
  const q: (BinaryNode<number> | null)[] = [head];

  while (q.length) {
    const cur = q.pop();

    if (!cur) continue;

    if (cur.value === needle) return true;

    q.push(cur.left);
    q.push(cur.right);
  }

  return false;
}
