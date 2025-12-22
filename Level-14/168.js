
// Q168. Index of Maximum Element
function maxIndex(arr) {
    let maxIdx = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[maxIdx])
            maxIdx = i;
    }

    return maxIdx;
}

