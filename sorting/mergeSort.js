function mergeSort( arr ) {
    if (arr.length < 2) {
        return arr;
    }
    
    let mid = arr.length >> 1;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge ( left, right ) {
    let out = [];
    while (left.length || right.length) {
        if (left[0] < right[0]) {
            out.push(left.shift());
        } else {
            out.push(right.shift());
        }
    }
    return out;
}

//tests
console.log(mergeSort([2,3,4,8,9]));