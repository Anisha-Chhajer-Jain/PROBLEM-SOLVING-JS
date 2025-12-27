// Q190. k-th Largest Element (Using Sort) — 3 Ways
// Way 1: Sort Descending
function kthLargest1(arr, k) {
    let sorted = [...arr].sort((a, b) => b - a);
    return sorted[k - 1];
}
// Way 2: Sort Ascending

function kthLargest2(arr, k) {
    let sorted = [...arr].sort((a, b) => a - b);
    return sorted[sorted.length - k];
}
//Way 3: Using Max Removal
function kthLargest3(arr, k) {
    let temp = [...arr];
    for (let i = 0; i < k - 1; i++) {
        temp.splice(temp.indexOf(Math.max(...temp)), 1);
    }
    return Math.max(...temp);
}
console.log(kthLargest1([7,10,4,3,20,15], 2)); 
