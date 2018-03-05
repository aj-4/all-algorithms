class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(data) {
        if (data) {
            this.addToHead(data);
        } else {
            this.head = null;
            this.tail = null;
        }
    }
    addToHead(data) {
        let node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }
    addToTail(data) {
        let node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }
    rmFromHead() {
        let node = this.head;
        this.head = this.head.next;
        return node;
    }
    getAt(i) {
        let node = this.head;
        let count = 0;
        while(count < i) {
            node = node.next;
        }
        return node;
    }
    scan(key) {
        let node = this.head;
        let i = 0;
        while (node) {
            if (node.data[0] === key) {
                return node;
            }
            i++;            
        }
        return false;
    }
    printValues() {
        for (let value of this) {
            console.log(value);
        }
    }
    *[Symbol.iterator]() {
        let node = this.head;
        let count = 0;
        while (count < i) {
            yield node.value;
            node = node.next;
        }
    }
}

module.exports = LinkedList;