const LL = require('./linkedList');

class Queue {
    constructor(){
        this.store = new LL();
        this.length = 0;
    }
    enq(val) {
        this.length++;
        this.store.addToTail(val);
    }
    dq() {
        this.length--;
        return this.store.rmFromHead();
    }
    *[Symbol.iterator](){
        for (let node of this.store) {
            yield node;
        }
    }
}

module.exports = Queue;