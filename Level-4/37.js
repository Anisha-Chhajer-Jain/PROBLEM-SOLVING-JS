// Q37. Reverse a String
// Method 1: Loop
function reverseString(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  console.log(rev);
}

// Method 2: Built-in
function reverseString(str) {
  console.log(str.split("").reverse().join(""));
}

