//shuffle is key
const shuffle = (arr) => {
    const shuffled = [];
    const arrCopy = arr.slice();
    while (arrCopy.length) {
        let randIndex = Math.floor(arrCopy.length * Math.random());
        shuffled.push(arrCopy[randIndex]);
        arrCopy.splice(randIndex, 1);
    }
    return shuffled;
}

const sort = (arr, left = 0, right = arr.length - 1) => {
    let i = left;
    let j = right;
    let temp;
    let pivotIndex = Math.floor((left + right) / 2);
    let pivot = arr[pivotIndex];

    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
    if (left < j) {
        sort(arr, left, j);
    }
    if (i < right) {
        sort(arr, i, right);
    }
    return arr;

}

const quickSort = (arr) => {
    arr = shuffle(arr);
    return sort(arr);
}

console.log(quickSort([3,4,1,2]));