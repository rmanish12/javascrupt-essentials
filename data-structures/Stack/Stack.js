// STACK -> Last In First Out (LIFO)

// We can implement it using array as well as linked list

// USING ARRAY, then there are two ways of implementing it
// Insert at the end and remove from the end (push and pop)
//  - It will provide us all the inbuilt array function which is kind of heavy

// Or, insert at the beginning and remove from the beginning (unshift and shift)
//  - These two are very expensive operations as they involve re-indexing all the elements



// USING LINKED LIST
// We can insert element at the end and remove element from the end
// but deletion from end in linked list is of O(n) because we have to traverse the entire list

// so we should insert at the beginning and remove from the beginning

// INSETION -> O(1)
// REMOVAL -> O(1)
// SEARCHING -> O(n)
// ACCESS -> O(n)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  print() {
    const arr = [];
    let current = this.first;
    while(current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

  // INSERT ELEMENT AT THE BEGINNING
  // Create a new node
  // If list is empty, mark that node the new first and last
  // Else, point next of new node to current first and make it the new first
  // Increment the length by 1
  // Return the stack
  push(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;

    return this;
  }

  // REMOVE ELEMENT FROM THE BEGINNING
  // If size = 0, return null
  // Else, store this.first in a newVariable
  // If size = 1, make first and last as null
  // Else, mark currentFirst.next as the new first and mark next of removed node to null
  // Decrement the value by 1
  // Return removed node
  pop() {
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

const stack = new Stack();
stack.push(5);
stack.print();
stack.push(10);
stack.print();
stack.push(15);
stack.print();
stack.pop();
stack.print();
stack.pop();
stack.print();
stack.pop();
stack.print();
stack.pop();
stack.print();
stack.pop();
stack.print();