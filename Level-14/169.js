// Q169. Index of Minimum Element
function minIndex(arr) {
    let minIdx = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[minIdx])
            minIdx = i;
    }

    return minIdx;
}
