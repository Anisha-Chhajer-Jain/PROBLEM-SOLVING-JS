
// Q9. Leap Year
// Method 1: Simple rule (divisible by 4)
let year = 2020;

if (year % 4 === 0) {
  console.log("leap year");
} else {
  console.log("not a leap year");
}

// Method 2: Full rule

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("leap year");
} else {
  console.log("not a leap year");
}
