import { BinaryNode } from "../binarySearchTree/preOrdder";

function walk(curr: BinaryNode<number> | null, num: number): boolean {
  if (!curr) return false;
  if (curr.value === num) return true;

  if (curr.value < num) return walk(curr.right, num);
  return walk(curr.left, num);
}

export default function search(head: BinaryNode<number>, num: number): boolean {
  return walk(head, num);
}
