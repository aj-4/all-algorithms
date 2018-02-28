class Stack {
    constructor() {
        this.ll = new LinkedList();
        // or
        // this.ll = new DynamicArray();
        // resizes at (full) or (1/4)
    }
    push(item) {
        this.ll.addToHead(item);
    }
    pop() {
        return this.ll.removeFromTail(item);
    }
    isEmpty() {
        return this.ll.isEmpty();
    }
}

//LL implementation
class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    addToHead(value) {
        let node = new Node(value);        
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }
    removeFromTail() {
        let popNode = this.head;
        this.head = this.head.next || null;
        return popNode;
    }
    isEmpty() {
        return this.head ? false : true;
    }
}