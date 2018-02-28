class MinHeap {
    constructor() {
        this.storage = [null];
    }
    add(value) {
        this.storage.push(value);
        this._bubble();
    }
    removeMin() {
        let temp = this.storage[1];
        this.storage[1] = this.storage[this.storage.length - 1];
        this.storage[this.storage.length - 1] = temp;
        let rm = this.storage.pop();
        this._sink();
        return rm;
    }
    _bubble(i = this.storage.length - 1) {
        let length = i;
        let itemValue = this.storage[i]
        let parent = i >> 1;
        if (itemValue < this.storage[parent]) {
            this.storage[i] = this.storage[parent];
            this.storage[parent] = itemValue;
            this._bubble(parent);
        } else {
            return;
        }
    }
    _sink(i = 1) {
        let length = this.storage.length; 
        let child = i * 2;
        if (i < length && this.storage[child] > this.storage[child + 1]) {
            child++;
        }
        if (this.storage[child] < this.storage[i]) {
            let temp = this.storage[child];
            this.storage[child] = this.storage[i];
            this.storage[i] = temp;
            this._sink(child);
        } else {
            return;
        }
    }
}

// //tests
// const heap = new MinHeap();
// heap.add(1);
// heap.add(2);
// heap.add(3);
// console.log(heap.removeMin());
// heap.add(5);
// heap.add(1);
// heap.add(4);
// console.log(heap.removeMin());
// console.log(heap.removeMin());