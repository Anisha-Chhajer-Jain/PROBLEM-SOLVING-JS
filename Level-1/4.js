// Q4. Positive, Negative, or Zero
// Method 1: if-else
let num = 8;

if (num > 0) {
  console.log("positive");
} else if (num < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

// Method 2: Nested ternary

console.log(num > 0 ? "positive" : num < 0 ? "negative" : "zero");
