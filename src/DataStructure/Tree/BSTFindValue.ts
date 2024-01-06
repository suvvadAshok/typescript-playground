import { BinaryNode } from "../binarySearchTree/preOrdder";

export default function find(
  head: BinaryNode<number> | null,
  needle: number
): boolean {
  if (!head) return false;

  if (head.value === needle) return true;

  if (head.value > needle) return find(head.left, needle);
  return find(head.right, needle);
}
