
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

//---------------------------- BY SIR ----------------------------------

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) { 
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            } else {
                break; 
            }
        }
    }
    console.log(arr);
}
insertionSort([5, 2, 9, 1, 5, 6]); 