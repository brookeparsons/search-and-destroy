"use strict";

const observedRefs = {};

//Complete this algo
const isLoop = (linkedlist, observedRefs) => {
  if (linkedlist.next === null) {
    return false;
  }

  if (linkedlist.head) {
    debugger;
    if (linkedlist.head.next === linkedlist.head) {
      return true;
    }
    if (observedRefs[linkedlist.head.next.value]) {
      debugger;
      return true;
    } else {
      debugger;
      observedRefs[linkedlist.head.next.value] = 1;
      return isLoop(linkedlist.head.next, observedRefs);
    }
  } else if (observedRefs[linkedlist.next.value]) {
    debugger;
    return true;
  } else {
    debugger;
    observedRefs[linkedlist.next.value] = 1;
    return isLoop(linkedlist.next, observedRefs);
  }
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
const emojis = ["🥚", "🐣", "🦅 ", "👾"];

class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(value) {
    const newNode = new Node(value);
    const formerHead = this.head;
    this.head = newNode;
    if (formerHead) {
      formerHead.previous = newNode;
      newNode.next = formerHead;
    } else {
      this.tail = newNode;
    }
  }

  addToTail(value) {
    const newNode = new Node(value);
    const formerTail = this.tail;
    this.tail = newNode;
    if (formerTail) {
      formerTail.next = newNode;
      newNode.previous = formerTail;
    } else {
      this.head = newNode;
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) return null;
    if (removedHead.next) {
      this.head = removedHead.next;
      this.head.previous = null;
    } else {
      this.head = null;
      this.tail = null;
    }
    return removedHead.value;
  }

  removeTail() {
    const removedTail = this.tail;
    if (!removedTail) return null;
    if (removedTail.previous) {
      this.tail = removedTail.previous;
      this.tail.next = null;
    } else {
      this.head = null;
      this.tail = null;
    }
    return removedTail.value;
  }

  search(comparator) {
    if (typeof comparator === "string") {
      const comparatorString = comparator;
      comparator = (elementValue) => comparatorString === elementValue;
    }
    let currentNode = this.head;
    while (currentNode !== null) {
      if (comparator(currentNode.value)) return currentNode.value;
      currentNode = currentNode.next;
    }
    return null;
  }

  getNthNode(n) {
    let counter = 1;
    let curr = this.head;
    while (counter < n) {
      curr = curr.next;
      counter++;
    }
    return curr;
  }
}

//These LLs have loops!
const test1 = new LinkedList();
test1.addToHead(0);
numbers.forEach((val) => test1.addToTail(val));
test1.getNthNode(6).next = test1.getNthNode(3);

const test2 = new LinkedList();
test2.addToHead("z");
letters.forEach((letter) => test2.addToTail(letter));
test2.getNthNode(9).next = test2.getNthNode(1);

// This LL has no loop!
const test3 = new LinkedList();
test3.addToHead("📺");
emojis.forEach((el) => test3.addToTail(el));

isLoop(test1, observedRefs);
isLoop(test2, observedRefs);

module.exports = LinkedList;

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
