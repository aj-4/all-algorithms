class Queue {
    constructor() {
        this.queue = new LinkedList();
    }
    enqueue(value) {
        this.queue.addToTail(value);
    }
    dequeue() {
        return this.queue.removeFromHead();
    }
    loop() {
        for (let value of this.queue) {
            console.log(value);
        }
    }
}

//LL
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
    addToTail(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }
    removeFromHead() {
        let head = this.head;
        this.head = this.head.next;
    }
    isEmpty() {
        return this.head ? false : true;
    }
    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node.val;
            node = node.next;
        }
    }
}

//with 'resizing array' object
class queueArray {
    constructor() {
        this.storage = {};
        this.counter = 0;
        this.begin = 0;
    }
    enqueue(value) {
        this.storage[counter] = value;
    }
    dequeue() {
        let val = this.storage[begin];
        delete this.storage[begin];
        this.begin++;
        return val;
    }
}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.loop();