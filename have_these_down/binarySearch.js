const binarySearch = (arr, val) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = (left + right) >> 1;
        let midVal = arr[mid];

        if (midVal === val) {
            return mid;
        } else if (val > midVal) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

//tests
console.log(binarySearch([1, 2, 3], 2) === 1);
console.log(binarySearch([1, 2, 3], 4) === -1);
console.log(binarySearch([1, 2, 3], 1) === 0);
console.log(binarySearch([1, 2, 3, 4], 4) === 3);
console.log(binarySearch([1, 2, 3, 4], 1) === 0);
