class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.firstNode = null;
    this.length = 0;
  }

  append(value) {
    this.length++;
    const newNode = new Node(value);

    if (this.firstNode === null) {
      this.firstNode = newNode;
      return;
    }

    let current = this.firstNode;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    current.nextNode = newNode;
  }

  prepend(value) {
    this.length++;
    const newNode = new Node(value);

    newNode.nextNode = this.firstNode;

    this.firstNode = newNode;
  }

  size() {
    return this.length;
  }

  head() {
    if (this.firstNode === null) return undefined;
    else return this.firstNode;
  }
}