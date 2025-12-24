
// Q8. Divisible by 3 and 5
// Method 1: if-else
let num = 15;

if (num % 3 === 0 && num % 5 === 0) {
  console.log("divisible by 3 and 5");
} else {
  console.log("not divisible by both");
}

// Method 2: Logical expression
console.log(
  num % 3 === 0 && num % 5 === 0
    ? "divisible by 3 and 5"
    : "not divisible by both"
);
