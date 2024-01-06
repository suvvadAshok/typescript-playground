type Node<T> = {
  value: T;
  prev: Node<T>;
};

export class Stack<T> {
  length: number;
  head?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
  }

  push(item: T): void {
    const node = { value: item } as Node<T>;
    if (!this.head) {
      this.head = node;
      return;
    }
    node.prev = this.head;
    this.head = node;
    this.length++;
  }

  pop(): T | undefined {
    if (this.head === undefined) return undefined;

    const h = this.head;
    this.head = this.head.prev;
    this.length--;

    return h.value;
  }

  peak(): T | undefined {
    return this.head?.value;
  }
}
