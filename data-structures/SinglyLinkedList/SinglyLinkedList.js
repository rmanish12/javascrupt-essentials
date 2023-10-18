class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // INSERT ELEMENT AT THE END
  // If list is empty, create new node and point head and tail to that node
  // Else, point currentTail.next = newNode and make that node the new tail
  // Increment length by 1
  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  // REMOVE ELEMENT FROM THE END
  // If list is empty, return null
  // If list has only one element, point head and tail to null
  // Else, iterate through the linked list to get the node which is just behind the current tail, then point its next to null and make it the new tail
  // Decrement the length by 1
  // Return the removed node
  pop() {
    if (this.length === 0) return null;
    let removedNode = null;
    if (this.length === 1) {
      removedNode = this.head;
      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head.next;
      let prevNode = this.head;
      while(currentNode.next !== null) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      removedNode = currentNode;
      prevNode.next = null;
      this.tail = prevNode;
    }
    this.length--;

    return removedNode;
  }

  // REMOVE ELEMENT FROM THE BEGINNING OF THE LIST
  // If there are no element, return null
  // If there is only one element, pop that element
  // Else, point the head to currentHead.next and make next of currentHead as null
  // Decrement the length by 1
  // Return the removed node
  shift() {
    if (this.length === 0) return null;
    if (this.length === 1) return this.pop()
    const currentHead = this.head;
    this.head = currentHead.next;
    currentHead.next = null;
    this.length--;

    return currentHead;
  }

  // INSERT ELEMENT AT THE BEGINNING OF THE LIST
  // If there are no element, just push the element to the list
  // Else, create a newNode, point its next to currentHead and point the currentHead of the list to the newNode
  // Increment the length by 1
  // Return the list
  unshift(val) {
    if (this.length === 0) return this.push(val);
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  // GET ELEMENT BY INDEX
  // If index is negative or >= the length of list, return null
  // Else, initialize a counter and iterate through the list till we reach that counter and return that node
  get(index) {
    if (index <0 || index >= this.length) return null;
    let counter = 0;
    let currentNode = this.head
    while(counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  // UPDATE THE VALUE OF NODE AT THE GIVEN INDEX
  // Get the element at the given index
  // Update its value
  // Return updated node
  set(index, value) {
    const node = this.get(index);
    if (node) {
      node.val = value
    }

    return node
  }

  // INSERT ELEMENT AT THE GIVEN INDEX
  // If index < 0, return null
  // If index === list.length, push the element at the end
  // Else, find the element at index - 1 position, prevNode
  // Create a newNode and point its next to prevNode.next and prevNode.next = newNode
  // Increment the length by 1
  insert(index, value) {
    if (index < 0 || index > this.length) return null;
    if (index === this.length) return this.push(value);

    const newNode = new Node(value);
    const prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;

    return this;
  }

  // REMOVE ELEMENT AT THE GIVEN INDEX
  // If index < 0, return null
  // If index === list.length - 1, pop the element
  // If index >= this.length, return null
  // Else, find element at index (currentNode) and index-1 (prevNode) position
  // Point prevNode.next to currentNode.next and currentNode.next = null
  // Decrement the length by 1
  // Return the removed element
  remove(index) {
    if (index < 0) return null;
    if (index === list.length - 1) return this.pop();
    if (index >= this.length) return null;

    const currentNode = this.get(index);
    const prevNode = this.get(index - 1);
    prevNode.next = currentNode.next
    currentNode.next = null;
    this.length--;

    return currentNode;
  }

  // CONSOLE THE VALUES OF THE LIST
  print() {
    const arr = []
    let currentNode = this.head
    while(currentNode) {
      arr.push(currentNode.val)
      currentNode = currentNode.next
    }

    console.log(arr)
  }

  // REVERSE THE LIST
  // Make the currentHead as newTail and currentTail = newHead
  // Keep track of prev, current = this.head and next node
  // Loop through the list
  // Set next to be the next property of whatever node is
  // Set the next property on the node to be whatever prev is
  reverse() {
    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;

    this.head = this.tail;
    this.tail = currentNode;

    for (let i = 0; i < this.length; i++) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    return this;
  }
}

const list = new SinglyLinkedList();

console.log("PUSH")
console.log(list)
console.log(list.push(5))
console.log(list.push(10))
console.log(list.push(15))
console.log(list.push(20))

// console.log("POP")
// console.log(list.pop())
// console.log(list)
// console.log(list.pop())
// console.log(list)
// console.log(list.pop())
// console.log(list)
// console.log(list.pop())
// console.log(list)

// console.log("SHIFT")
// console.log(list.shift())
// console.log(list)
// console.log(list.shift())
// console.log(list)
// console.log(list.shift())
// console.log(list)
// console.log(list.shift())
// console.log(list)

// console.log("UNSHIFT")
// console.log(list.unshift(20))
// console.log(list.unshift(25))
// console.log(list.unshift(30))

// console.log("GET")
// console.log(list.get(-1))
// console.log(list)
// console.log(list.get(100))
// console.log(list)
// console.log(list.get(1))
// console.log(list)
// console.log(list.get(3))
// console.log(list)

// console.log("SET")
// console.log(list.set(-1, 100))
// console.log(list.set(20, 200))
// console.log(list.set(2, 50))
// console.log(list)

// console.log("INSERT")
// console.log(list.insert(-1, 50))
// console.log(list.insert(3, 100))
// console.log(list.insert(1, 200))

// console.log("REMOVE")
// console.log(list.remove(-1))
// console.log(list.remove(100))
// console.log(list.remove(3))
// console.log(list)
// console.log(list.remove(1))
// console.log(list)

// console.log("REVERSE")
// list.print();
// list.reverse();
// list.print();