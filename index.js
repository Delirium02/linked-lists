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

  tail() {
    if (this.firstNode === null) return undefined;

    let current = this.firstNode;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    return current.value;
  }

  at(index) {
    if (index < 0 || this.firstNode === null) return undefined;

    let length = 0;
    let current = this.firstNode;

    while (current !== null) {
      if (length === index) return current;

      current = current.nextNode;
      length++;
    }

    return null;
  }

  pop() {
    if (this.firstNode === null) return undefined;

    const headValue = this.firstNode.value;
    this.firstNode = this.firstNode.nextNode;
    this.length--;

    return headValue;
  }
}

const list = new LinkedList();

list.append("Zero");
list.append("One");
list.append("Two");

console.log(list.at(0).value); 
console.log(list.at(2).value); 