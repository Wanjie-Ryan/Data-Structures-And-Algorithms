// linear data structure that includes a series of connected nodes
// each node consists of a data value and a pointer that points to the next node
// the list elements can be easily inserted or removed without reallocation or reorganization of the entire structure
// random access of elements is not feasible
// main ops in a linked list - 1. Insertion - add an element at the beginning, end or at a given index in the list. 2. Deletion - remove an item given its index or value. 3 search - find an element given its value
// linked lists are used to implement stacks and queues
//  (head)10 -> 20 -> 30 -> null

// instantiate the node class
class Node {
  constructor(value) {
    // the node will have a value and the next which will be null for starters
    this.value = value;
    this.next = null;
  }
}

// always maintain a pointer to the first node of the list, if the list is empty then the head should point at null
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    // returns the number of nodes in the list
    return this.size;
  }

  // create a method that adds a value in the node, and accepts a value as a parameter
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      // to add a new node at the start....... make the newly created node point at the head node, then make the newly added node as the head of the list, to ensure that both are connected and the head points to the start of the node

      node.next = this.head;
      this.head = node;
    }

    // update the size to keep track of the number of nodes in the list
    this.size++;
  }
}

const list = new LinkedList();
console.log("List is empty", list.isEmpty());
console.log("List size", list.getSize());
list.prepend(12);
list.prepend(16);
list.prepend(18);
list.prepend(19);

// To add a value to the linked list, you must create a new node that hold the value and the pointer that points to the next node if any.
