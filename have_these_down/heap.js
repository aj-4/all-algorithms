class minHeap {
    
}

let mh = new minHeap(4);
mh.add(2);
mh.add(6);
mh.add(1);
mh.add(3);
mh.add(5);

console.log(mh.rm() === 1);
console.log(mh.rm() === 2);
console.log(mh.rm() === 3);