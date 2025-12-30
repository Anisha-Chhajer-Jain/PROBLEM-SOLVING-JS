
// Q189. k-th Smallest Element (Using Sort)

function kthSmallest(arr, k) {
    let sorted = [...arr].sort((a, b) => a - b);
    return sorted[k - 1];
}

console.log(kthSmallest([7,10,4,3,20,15], 3)); 

//----------bubble sort-----------------
function kthSmallest(arr, k) {
    let a = [...arr]; 
    for (let i = 0; i < a.length - 1; i++) {
        for (let j = 0; j < a.length - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                let temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }
    return a[k - 1];
}
console.log(kthSmallest([7, 10, 4, 3, 20, 15], 3));
