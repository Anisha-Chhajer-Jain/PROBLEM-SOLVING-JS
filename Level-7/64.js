
// Q64. Copy Array
// Input: ["x", "y"] → Output: ["x", "y"]
function copyArray(arr) {
  let copy = [];
  for (let i = 0; i < arr.length; i++) {
    copy.push(arr[i]);
  }
  console.log(copy);
}
copyArray([1, 2, 3]); 


