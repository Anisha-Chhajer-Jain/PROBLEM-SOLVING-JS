// Q169. Index of Minimum Element
function minIndex(arr) {
    let minIdx = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[minIdx])
            minIdx = i;
    }

    return minIdx;
}

//---------------------------------------------------------------------------------------------------


function maximumIndex(arr) {
    let max = - Infinity;
    let maxIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < max) {
            max = arr[i];
            maxIndex = i;
        }
    }
    console.log(maxIndex);
}
maximumIndex([1, 2, 3, 10, 11, 123, 12])