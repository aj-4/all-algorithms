const quickSort = (arr, left = 0, right = arr.length - 1) => {
    let mid = ( left + right ) >> 1;
    let midVal = arr[mid];

    let l = left;
    let r = right;

    while (l <= r) {
        while (arr[l] < midVal) {
            l++;
        }
        while (arr[r] > midVal) {
            r--;
        }

        if (l <= r) {
            let tmp = arr[r];
            arr[r] = arr[l];
            arr[l] = tmp;
            r++;
            l--;
        }
    }

    if (left < r) {
        quickSort(arr, left, r);
    }
    if (right > l) {
        quickSort(arr, l, right);
    }

    return arr;
}

//tests
console.log(quickSort([4, 1, 7, 2, 3])[2] === 3);
console.log(quickSort(['a', 'r', 'a', 'o', 'n']).join('') === 'aanor');