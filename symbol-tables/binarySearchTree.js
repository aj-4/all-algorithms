class BST {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
    }
    put(key, value) {
        if (key > this.key) {
            if (!this.right) {
                this.right = new BST(key, value);                
            } else {
                this.right.put(key, value);
            }
        }

        if (key < this.key) {
            if (!this.left) {
                this.left = new BST(key, value);                
            } else {
                this.left.put(key, value);
            }
        }
        
        if (key === this.key) {
            this.value = value;
        }
    }
    get(key) {
        if (this.key === key) {
            return this.value;
        }

        if (key > this.key && this.right) {
            return this.right.get(key);
        }
        
        if (key < this.key && this.left) {
            return this.left.get(key);            
        }

        return -1;
    }
    getMin() {
        if (this.left) {
            return this.left.getMin()
        }
        return this.value;
    }
    getMax() {
        if (this.right) {
            return this.right.getMax();
        }
        return this.value;
    }
    traverse(cb) {
        if(this.left) {
            this.left.traverse(cb);
        }

        cb(this.value);

        if(this.right) {
            this.right.traverse(cb);
        }

    }
    validate(min = null, max = null) {
        if (min && this.key < min) {
            return false;
        }

        if (max && this.key > max) {
            return false;
        }

        if (this.left && !this.left.validate(min, this.key)) {
            return false;
        }

        if (this.right && !this.right.validate(this.key, max)) {
            return false;
        }

        return true;
    }
    // *[Symbol.iterator](){
    //     //in order traversal
    //     let inOrder = this._inorderQueue();
    //     for (let val of inOrder) {
    //         yield val;
    //     }
    // }
}

let tree = new BST(5, 'five');
tree.put(4, 'four');
tree.put(3, 'three');
tree.put(6, 'six');

console.log(tree.get(6) === 'six');
console.log(tree.get(4) === 'four');

console.log(tree.getMin() === 'three');
console.log(tree.getMax() === 'six');

let i = 0;
let arr = ['three', 'four', 'five', 'six'];

tree.traverse((item) => {
    console.log(arr[i++] === item);
});

console.log(tree.validate());