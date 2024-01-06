class Link<T> {
  value: T;
  next: Link<T> | undefined;
  prev: Link<T> | undefined;

  constructor(value: T) {
    this.value = value;
    this.next = this.prev = undefined;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class DoubleLinkedList<T> {
  head: Link<T> | undefined;
  tail: Link<T> | undefined;
  length = 0;

  constructor(value?: T) {
    if (value === undefined) {
      this.head = this.tail = undefined;
      this.length = 0;
    } else {
      const link: Link<T> = new Link(value);
      this.head = link;
      this.tail = link;
      this.length = 1;
    }
  }
  first(): T | undefined {
    return this.head === undefined ? undefined : this.head.value;
  }

  last(): T | undefined {
    return this.tail === undefined ? undefined : this.tail.value;
  }

  push(value: T): void {
    const node = new Link(value);
    if (this.tail === undefined) {
      this.head = node;
      this.tail = node;
      this.length += 1;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
      this.length += 1;
    }
  }

  pop(): T | undefined {
    if (this.tail === undefined) {
      return undefined;
    } else if (this.tail.prev === undefined) {
      const c = this.tail.value;
      this.head = this.tail = undefined;
      this.length -= 1;
      return c;
    } else {
      const c = this.tail.value;
      this.tail.prev.next = undefined;
      this.tail = this.tail.prev;
      this.length -= 1;
      return c;
    }
  }

  unshift(value: T): void {
    const node = new Link(value);
    if (this.length === 0) {
      this.head = undefined;
      this.tail = undefined;
      this.length += 1;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.head!.prev = node;
      node.next = this.head;
      this.head = node;
      this.length += 1;
    }
  }

  shift(): T | undefined {
    if (this.head?.next === undefined) return undefined;
    const c = this.head.value;
    this.head.next.prev = undefined;
    this.head = this.head.next;
    this.length -= 1;
    return c;
  }

  find(value: T): Link<T> | undefined {
    if (!this.head) return undefined;
    let cur = this.head;
    while (cur.next !== undefined) {
      if (cur.value === value) return cur;
      cur = cur.next;
    }
    return undefined;
  }

  size() {
    return this.length;
  }
}
