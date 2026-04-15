class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
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
    const newNode = new Node(value);

    newNode.nextNode = this.head;

    this.head = newNode;
  }

  size() {
    let totalNodes = 0;
    let currentNode = this.head

    if (currentNode !== null) {
      totalNodes += 1;
      while (currentNode.nextNode !== null) {
        totalNodes += 1;
        currentNode = currentNode.nextNode;
      }
    }
    
    return totalNodes;
  }
}