const binarySearch = (arr, val) => {
    let max = arr.length - 1;
    let min = 0;
    let mid = arr.length >> 1;

    while (min <= max) {
        mid = (min + max) >> 1;
        if (val < arr[mid]) {
            max = mid - 1;
        } else if (val > arr[mid]) {
            min = mid + 1;
        } else {
            return mid;
        }
    }

    return -1;
}

console.log(binarySearch([1,2,3,4], 4))

const bsRecursive = (arr, val, min = 0, max = arr.length - 1) => {
    let mid = (min + max) >> 1;
    if (min > max) {
        return -1;
    }
    if (arr[mid] === val) {
        return mid
    }
    if (val > arr[mid]) {
        return bsRecursive(arr, val, mid + 1, max);
    } else {
        return bsRecursive(arr, val, min, mid - 1);
    }
}

console.log(bsRecursive([1,2,3], 3));