// Q190. k-th Largest Element (Using Sort) — 3 Ways

function kthLargest1(arr, k) {
    let sorted = [...arr].sort((a, b) => b - a);
    return sorted[k - 1];
}
//-------------------------------------------------------------------------------
function kthLargest(arr, k) {
    let a = [...arr]; 
    for (let i = 1; i < a.length; i++) {
        let key = a[i];
        let j = i - 1;

        while (j >= 0 && a[j] < key) {
            a[j + 1] = a[j];
            j--;
        }
        a[j + 1] = key;
    }

    return a[k - 1];
}

console.log(kthLargest([7, 10, 4, 3, 20, 15], 3));






// function kthLargest2(arr, k) {
//     let sorted = [...arr].sort((a, b) => a - b);
//     return sorted[sorted.length - k];
// }

// function kthLargest3(arr, k) {
//     let temp = [...arr];
//     for (let i = 0; i < k - 1; i++) {
//         temp.splice(temp.indexOf(Math.max(...temp)), 1);
//     }
//     return Math.max(...temp);
// }
// console.log(kthLargest1([7,10,4,3,20,15], 2)); 
