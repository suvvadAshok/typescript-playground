type Node<T> = {
  value: T;
  next: Node<T> | undefined;
};

export class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = this.tail = undefined;
  }

  eQueue(item: T): void {
    const node = { value: item, next: undefined };
    if (!this.tail) {
      this.head = this.tail = node;
    }

    this.length++;

    this.tail.next = node;
    this.tail = node;
  }

  dQueue(): T | undefined {
    if (!this.head) return undefined;

    this.length--;

    //save head
    const h = this.head;
    //update head
    this.head = this.head.next;

    if (this.length === 0) {
      this.head = this.tail = undefined;
    }

    return h.value;
  }

  peek(): T | undefined {
    return this.head ? this.head.value : undefined;
  }
}
