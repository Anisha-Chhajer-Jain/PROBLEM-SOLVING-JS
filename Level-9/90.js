
// Q90. Longest String in Array
// Return the longest string (if tie, you can return first longest).
// Input: ["hi", "hello", "hey"] → Output: "hello"

function length(str) {
  let count = 0;
  let i = 0;
  while (str[i]) {
    count++;
    i++;

  }
  return count;

}

function main(arr = ["hello", "he", "str"]) {
  let n = length(arr);
  let res = "";
  let maxlength = 0
  for (let i = 0; i < n; i++) {
    let currentLength = length(arr[i]);
    if (currentLength > maxlength) {
      maxlength = currentLength;
      res = arr[i];
    }
  }
  return res;
}
console.log(main())