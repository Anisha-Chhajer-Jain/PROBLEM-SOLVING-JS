function swapElements(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}

// Tests
console.log(swapElements([1,2,3,4], 1, 3)); // [1,4,3,2]
console.log(swapElements(["a","b","c"], 0, 2)); // ["c","b","a"]
console.log(swapElements([10,20], 0, 0)); // [10,20]
