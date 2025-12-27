
// Q188. Insertion Sort (Ascending)
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
console.log(insertionSort([5,4,3,2,1]));
// Q189. k-th Smallest Element (Using Sort)

function kthSmallest(arr, k) {
    let sorted = [...arr].sort((a, b) => a - b);
    return sorted[k - 1];
}

console.log(kthSmallest([7,10,4,3,20,15], 3)); 
