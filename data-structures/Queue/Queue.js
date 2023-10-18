// QUEUE -> First In First Out (FIFO)

// There are two ways of implementing it -> ARRAY and LINKED LIST

// USING ARRAY
// One way is to insert at start and remove from end (unshift and pop)
// Other way is to insert and end and remove from start (push and shift)
// Both the ways are expensive as shift and unshift requires re-indexing of all the elements

// LINKED LIST
// We can insert at start and remove from end but it is expensive
// as removing from end requires traversal of the list

// So, its better to insert at end and remove from the start

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  print() {
    const arr = [];
    let current = this.first;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

  // INSERT AT THE END
  // Create a new node
  // If queue is empty then mark the new node the first and last
  // Else, make the new node as currentLast.next and the new last
  // Increment the size by 1
  // Return the queue
  enqueue(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;

    return this;
  }

  // REMOVE FROM THE START
  // If list is empty, return null
  // Store this.first in a variable
  // If list has only one element, mark first and last as null
  // Else, mark currentFirst.next as the new first and mark next of removed node to null
  // Decrement the value by 1
  // Return removed node
  dequeue() {
    if (this.size === 0) return null;
    const removedNode = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = removedNode.next;
      removedNode.next = null;
    }
    this.size--;

    return removedNode;
  }
}

const q = new Queue();
q.enqueue(5);
q.print();
q.enqueue(10);
q.print();
q.enqueue(15);
q.print();
q.dequeue();
q.print();
q.dequeue();
q.print();
q.dequeue();
q.print();
q.dequeue();
q.print();