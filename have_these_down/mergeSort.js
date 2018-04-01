const merge = (left, right) => {
    let l = 0;
    let r = 0;
    const out = [];
    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            out.push(left[l]);
            l++;
        } else {
            out.push(right[r]);
            r++;
        }
    }
    return [...out, ...left.slice(l), ...right.slice(r)];
}

const mergeSort = (arr) => {
    if (arr.length < 2) return arr;
    
    let mid = arr.length >> 1;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

//tests
console.log(mergeSort([4,1,7,2,3])[2] === 3);
console.log(mergeSort(['a', 'r', 'a', 'o', 'n']).join('') === 'aanor');