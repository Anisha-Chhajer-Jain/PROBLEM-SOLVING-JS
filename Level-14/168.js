
// Q168. Index of Maximum Element
function maxIndex(arr) {
    let maxIdx = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[maxIdx])
            maxIdx = i;
    }
    console.log(maxIdx);
}

maxIndex([1, 4, 7])

//-------------------------------------------------------------------------------------------------

function maximumIndex(arr) {
    let max = - Infinity;
    let maxIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            maxIndex = i;
        }
    }
    console.log(maxIndex);
}
maximumIndex([1, 2, 3, 10, 11, 123, 12])