

// Q68. Check if Array is Sorted (Increasing)
// Input: [1, 2, 2, 3] → Output: true
function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) 
    console.log(false);
  }
  console.log(true);
}
isSorted([1, 2, 3, 4]); 
