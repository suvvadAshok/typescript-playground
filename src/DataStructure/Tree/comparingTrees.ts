import { BinaryNode } from "../binarySearchTree/preOrdder";

export function comparingTrees(
  a: BinaryNode<number> | null,
  b: BinaryNode<number> | null
): boolean {
  if (a === null && b === null) return true;
  if (a === null || b === null) return false;
  if (a.value === b.value) return true;
  return comparingTrees(a?.left, b?.left) && comparingTrees(a?.right, b?.right);
}
