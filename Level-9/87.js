
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
