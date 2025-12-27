
// Q189. k-th Smallest Element (Using Sort)

function kthSmallest(arr, k) {
    let sorted = [...arr].sort((a, b) => a - b);
    return sorted[k - 1];
}

console.log(kthSmallest([7,10,4,3,20,15], 3)); 
