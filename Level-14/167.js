//Q167. Count Elements Greater Than k
function countGreater(arr, k) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > k)
            count++;
    }

    return count;
}
