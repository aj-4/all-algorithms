class LL {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    addToTail(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }
    addToHead(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }
    rmFromHead(){
        let node = this.head;
        this.head = this.head.next;
        return node.data;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.store = new LL;
        this.length = 0;
    }
    enqueue(...val) {
        this.length++;
        for (let value of val) {
            this.store.addToTail(value);            
        }
    }
    enqueueFront(...val) {
        this.length++;                
        for (let value of val) {
            this.store.addToHead(value);
        }
    }
    dequeue() {
        this.length--;                
        return this.store.rmFromHead();
    }
}

class Tree {
    constructor(val) {
        this.data = val;        
        this.children = [];
    }
    add(val) {
        this.children.push(new Tree(val));
    }
    BFS(fn) {
        const arr = new Queue;
        arr.enqueue(this);
        while(arr.length) {
            const node = arr.dequeue();
            if (node.children) {
                arr.enqueue(...node.children);
            }
            fn(node);
        }
    }
    DFS(fn) {
        const arr = new Queue;
        arr.enqueue(this);
        while(arr.length) {
            const node = arr.dequeue();
            if(node.children) {
                arr.enqueueFront(...node.children);
            }
            fn(node);            
        }
    }
}

//test
let tr = new Tree(5);
tr.add(3);
tr.add(2);
tr.children[0].add(4);
tr.add(1);

tr.BFS((node) => console.log(node.data));
tr.DFS((node) => console.log(node.data));


// class Node {
//     constructor() {
//         this.data = data;
//         this.children = null;
//     }
// }