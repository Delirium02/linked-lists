class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    this.length++;
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    current.nextNode = newNode;
  }

  prepend(value) {
    this.length++;
    const newNode = new Node(value);

    newNode.nextNode = this.head;

    this.head = newNode;
  }

  size() {
    return this.length;
  }

  head() {
    if (this.head === null) return undefined;
    else return this.head;
  }
}

const a = new LinkedList();

a.append(5);
a.prepend(17);

console.log(a.head())