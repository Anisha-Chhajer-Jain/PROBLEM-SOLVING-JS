
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
