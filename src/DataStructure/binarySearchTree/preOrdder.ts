export type BinaryNode<T> = {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
};

function walk<T>(curr: BinaryNode<T> | null, path: T[]): T[] {
  //base condition
  if (!curr) {
    return path;
  }

  //pre
  path.push(curr.value);

  //recurse
  walk(curr.left, path);
  walk(curr.right, path);

  //post
  return path;
}

export default function preOrder<T>(head: BinaryNode<T>) {
  return walk(head, []);
}
