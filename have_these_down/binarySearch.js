const binarySearch = (arr, val) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = (left + right) >> 1;
        if (arr[mid] === val) {
            return mid;
        } else if (val < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
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
