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
            this.length = 1;
        } else {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
    }
    addToHead(data) {
        let node = new Node(data);
        this.length++;
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
        this.length++;
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
        this.length--;
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
        while (count < this.length) {
            yield node.data;
            node = node.next;
            count++;
        }
    }
}

module.exports = LinkedList;