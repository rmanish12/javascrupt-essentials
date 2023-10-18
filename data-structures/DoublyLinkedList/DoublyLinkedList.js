class Node {
  constructor(val){
      this.val = val;
      this.prev = null;
      this.next = null;
  }
}


class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // INSERT AT THE END
  // Create new node
  // If list is empty, point the head and tail of list to that node
  // Else, point newNode.prev = this.tail and this.tail.next = newNode.prev and this.tail = newNode
  // Increment the length by 1
  // Return the list
  push(val){
      let newNode = new Node(val)
      
      if (this.length === 0) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          newNode.prev = this.tail;
          this.tail.next = newNode;
          this.tail = newNode;
      }
      this.length++;
      
      return this;
  }

  // REMOVE ELEMENT FROM THE END
  // If list is empty, return null
  // Else if, list has only one element, point head and tail to null
  // Else:
  //  - store the tail in a variable, poppedElement
  //  - find this.tail.prev, prevEl
  //  - set poppedElement.prev to null
  //  - set prevEl.next to null
  //  - set tail to prevEl
  // Decrement length by 1
  // Return popped element
  pop() {
    if (this.length === 0) return null;
    let poppedEl = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let secondLastEl = this.tail.prev;
      poppedEl.prev = null;
      secondLastEl.next = null;
      this.tail = secondLastEl
    }
    this.length--;

    return poppedEl;
  }

  // INSERT AT THE BEGINNING
    // If list is empty, push the node
    // Else:
    //  - create a new node
    //  - point next of new node to current head
    //  - point prev of current head to new node
    //  - mark the new node as head
    // Increment the length by 1
    // Return the list
  unshift(val){
      if (this.length === 0) return this.push(val)
      let newNode = new Node(val)
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
      
      return this;
  }

    // REMOVE ELEMENT FROM THE BEGINNING
    // If element is empty, return null
    // Else if, list has only one element, pop that element
    // Else:
    //  - store this.head in a variable, firstEl
    //  - set this.head = firstEl.next
    //  - set firstEl.next = null
    //  - set this.head.prev = null
    // Decrement the length by 1
    // Return the removed node
  shift(){
      if (this.length === 0 || this.length === 1) return this.pop()
      let firstEl = this.head;
      this.head = firstEl.next;
      firstEl.next = null;
      this.head.prev = null
      this.length--;
      
      return firstEl
  }

  // GET ELEMENT AT THE GIVEN INDEX
  // If index is negative or >= list.length, return null
  // If index <= Math.ceil(list.length)/2, traverse from the beginning
  //  - initialze counter with 0 and currentNode with this.head
  //  - initialize a loop, set currentNode = currentNode.next and increment the counter
  // Else if, index > Math.ceil(list.length)/2, traverse from the end
  //  - initialize counter with this.length-1 and currentNode with this.tail
  //  - move in a loop till we reach that index, set currentNode = currentNode.prev and decrement the counter
  // Return the node at the given index
  get(index) {
    if (index <0 || index >= this.length) return null;
    let counter, currentNode;
    if (index <= Math.ceil(this.length/2)) {
      counter = 0;
      currentNode = this.head;
      while(index != counter) {
        currentNode = currentNode.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      currentNode = this.tail;
      while (index != counter) {
        currentNode = currentNode.prev;
        counter--
      }
    }

    return currentNode;
  }

  // SET ELEMENT THE GIVEN INDEX WITH VALUE PROVIDED
  // Return true if value is updated
  // Return false if invalid index is passed
  set(index, val) {
    const node = this.get(index)
    if (node) {
      node.val = val;
      return true
    }

    return false;
  }

  // REMOVE NODE AT THE GIVEN INDEX
  // If index<0 or index>=list.length, return null
  // Get the element at index-1 (prevEl), index(currentEl) and index+1(nextEl)
  // point next of prevEl to nextEl and prec of nextEl to prevEl
  // point next and prev of currentEl to null
  // decrement the length by 1
  // return the currentEl
  remove(index) {
    if (index < 0 || index>=this.length) return null;
    let prevEl = this.get(index-1);
    let currentEl = this.get(index);
    let nextEl = this.get(index+1)
    prevEl.next = nextEl;
    nextEl.prev = prevEl;
    currentEl.next = null;
    currentEl.prev = null;
    this.length--;

    return currentEl
  }

  // INSET NODE AT THE GIVEN INDEX
  // If index <0 or index>this.length, return null
  // If index = this.length, push the element
  // Create a node with the given value
  // Find element at index(currentEl) and index-1(prevEl)
  // point next of newNode to currentEl and prev to newNode to prevEl
  // set next of prevEl to current node and prev of currentEl to current node
  // increment the length by 1
  // return the newEl
  insert(index, val) {
    if (index<0 || index>this.length) return null;
    if (index === this.length) return this.push(val);
    let newNode = new Node(val);
    let currentEl = this.get(index);
    let prevEl = this.get(index-1);
    newNode.next = currentEl;
    newNode.prev = prevEl;
    prevEl.next = newNode;
    currentEl.prev = newNode;
    this.length++;
    
    return newNode;
  }

  // REVERSE THE LIST
  // if length = 0 or length = 1, return list
  // 
  reverse() {
    if (this.length === 0 || this.length === 1) return this;
    let temp = null;
    let current = this.head;
    while (current !== null) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
  }
    let head = this.head;
    this.head = this.tail;
    this.tail = head
    return this
  }
}