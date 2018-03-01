const LL = require('../data-structures/linkedList');
const hashFn = require('./hashingFn');

class HashTable {
    constructor() {
        this.storage = [];
        this.size = 10;
    }
    put(key, value) {
        let hash = hashFn(key, this.size);
        let bucket = this.storage[hash];
        if (bucket) {
            //scan for key
            let scan = bucket.scan(key);
            //if exists overwrite
            if (scan) {
                scan.data = [key, value];
            } else {
            //otherwise add to bucket
                bucket.addToHead([key, value]);                
            }
        } else {
            this.storage[hash] = new LL([key, value]);
        }
    }
    get(key) {
        let hash = hashFn(key, this.size);
        let bucket = this.storage[hash];
        if (!bucket) {
            console.log('no bucket');
            return false;
        }
        let scan = bucket.scan(key);
        return scan.data[1] || false;
    }
}

//tests
let ht = new HashTable();
ht.put(1, 'one');
ht.put(2, 'two');
ht.put(3, 'three');
ht.put(4, 'four');
console.log(ht.get(1) === 'one');
console.log(ht.get(2) === 'two');
ht.put(2, 'dos');
console.log(ht.get(2) === 'dos');