const LL = require('../data-structures/linkedList');
const hashFn = require('./hashingFn');

class HashTable {
    constructor() {
        this.storage = [];
        this.size = 10;
    }
    put(key, value) {
        let hash = hashFn(key, this.size);
        this._tryPut(hash, key, value);
    }
    get(key) {
        let hash = hashFn(key, this.size);
        return this._tryGet(hash, key);
    }
    _tryPut(place, k, v, tried = 0) {
        let checking = this.storage[place];
        if (!checking || checking[0] === k) {
            this.storage[place] = [k, v];
            return true;
        } else if (tried >= this.size) {
            return false;
        } else {
            let nextPlace = (place + 1) % this.size;
            return this._tryPut(nextPlace, k, v, tried++);
        }
    }
    _tryGet(place, k, tried = 0) {
        let checking = this.storage[place]
        if (!checking) {
            //end of cluster
            return false;
        }
        if (checking[0] === k) {
            return checking[1];
        } else if (tried >= this.size) {
            return false;
        } else {
            let nextPlace = (place + 1) % this.size;
            return this._tryGet(nextPlace, k, tried++);
        }
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