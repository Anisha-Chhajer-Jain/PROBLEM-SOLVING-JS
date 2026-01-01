
// Q89. Length of Each String in Array
// Given array of strings, return array of lengths.
// Input: ["hi", "hello", "a"] → Output: [2, 5, 1]

let arr89 = ["Anisha", "Prashant", "Aniket", "Anubhav", "Samir"];
let lengths = [];
for (let i = 0; i < arr89.length; i++) {
  lengths.push(arr89[i].length);
}
console.log(lengths);
