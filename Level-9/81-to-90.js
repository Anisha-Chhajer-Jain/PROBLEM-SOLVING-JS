// Q81. Square Pattern of * of Size N
// For N = 3:
// * * *
// * * *
// * * *


for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}


// Q88. Armstrong Number (3-digit)
// Number is Armstrong if sum of cubes of its digits equals the number (for 3-digit).
// Input: 153 → 1³ + 5³ + 3³ = 153 → Output: true

let number = 153;
let arr88 = String(number).split("");
let res = arr88.reduce((current, value) => {
  return Number(current) + Number(value) ** arr88.length;
})
if (res == number) {
  console.log("Armstrong");
}
else {
  console.log("Not Armstrong")
}


// Q89. Length of Each String in Array
// Given array of strings, return array of lengths.
// Input: ["hi", "hello", "a"] → Output: [2, 5, 1]

let arr89 = ["Anisha", "Prashant", "Aniket", "Anubhav", "Samir"];
let lengths = [];
for (let i = 0; i < arr89.length; i++) {
  lengths.push(arr89[i].length);
}
console.log(lengths);

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