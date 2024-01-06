import { BinaryNode } from "../binarySearchTree/preOrdder";

export default function insert(
  head: BinaryNode<number> | null,
  num: number
): void {
  if (!head) num;
  else if (head.value >= num) {
    insert(head.left, num);
  } else insert(head.right, num);
}
