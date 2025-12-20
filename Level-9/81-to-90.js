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

// Q82. Right-Angled Triangle of *
// For N = 4:
// *
// * *
// * * *
// * * * *
// 

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j + " ";
  }
  console.log(row);
}


// Q83. Number Triangle Increasing Each Row
// For N = 4:
// 1
// 1 2
// 1 2 3
// 1 2 3 4

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += i + " ";
  }
  console.log(row);
}


// Q84. Triangle with Repeated Row Number
// For N = 4:
// 1
// 2 2
// 3 3 3
// 4 4 4 4

for (let i = 1; i <= 10; i++) {
  let row = "";
  for (let j = 1; j <= 10; j++) {
    row += (i * j) + " ";
  }
  console.log(row);
  // console.log(`Table of ${i}: ${row.trim()}`);
}


// Q85. Print Multiplication Tables from 1 to 10
// Print tables 1 to 10, each up to 10.
// Output includes:
// Table of 1: 1 2 3 4 5 6 7 8 9 10

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`)
  }
  console.log(" ");
}


// Q86. Sum of Each Row in 2D Array
// Given a 2D array, print sum of each row.
// Input: [[1, 2, 3], [4, 5, 6]] Row sums: 1+2+3 = 6, 4+5+6 = 15 → Output: [6, 15]

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let rowSums = [];

for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  for (let j = 0; j < arr[i].length; j++) {
    sum += arr[i][j];
  }
  rowSums.push(sum);
}
console.log(rowSums);


// Q87. Check Perfect Square
// Return true if number is a perfect square.
// Input: n = 16 → Output: true

let n = 16;
let sq = false;

for (let i = 1; i * i <= n; i++) {
  if (i * i === n) {
    sq = true;
    break;
  }
}
console.log(sq);
//-------------------------------------------------- OR -------------------------------------------------
let square = 20;
let root = Math.sqrt(square);
if (root * root == square) {
  console.log("Number is perfect square")
}
else {
  console.log("Number is not perfect square");
}
//----------------------------------------------- OR -----------------------------------------------------
let squ = 20;
for (let i = 1; i < squ; i++) {
  if (i * i == squ) {
    console.log("Number 1s perfect square")
    return;
  }
}
console.log("Number is not perfect square");

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