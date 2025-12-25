// Q31. Length of String
// Method 1: Using .length
function stringLength(str) {
  console.log(str.length);
}

// Method 2: Using loop
function stringLength(str) {
  let count = 0;
  for (let ch of str) count++;
  console.log(count);
}
