

Q5. Age Group
Method 1: if-else
let age = 15;

if (age <= 12) {
  console.log("child");
} else if (age <= 19) {
  console.log("teenager");
} else {
  console.log("adult");
}

Method 2: Logical ranges
let age = 25;
console.log(
  age <= 12 ? "child" :
  age <= 19 ? "teenager" :
  "adult"
);

Q6. Grade Calculator
Method 1: if-else ladder
let marks = 75;

if (marks >= 90) console.log("A");
else if (marks >= 80) console.log("B");
else if (marks >= 70) console.log("C");
else if (marks >= 60) console.log("D");
else console.log("F");

Method 2: Using ranges array
let marks = 92;

let grade =
  marks >= 90 ? "A" :
  marks >= 80 ? "B" :
  marks >= 70 ? "C" :
  marks >= 60 ? "D" : "F";

console.log(grade);

Q7. Divisible by 5
Method 1: if-else
let num = 10;

if (num % 5 === 0) {
  console.log("divisible by 5");
} else {
  console.log("not divisible by 5");
}

Method 2: Ternary
let num = 11;
console.log(num % 5 === 0 ? "divisible by 5" : "not divisible by 5");

Q8. Divisible by 3 and 5
Method 1: if-else
let num = 15;

if (num % 3 === 0 && num % 5 === 0) {
  console.log("divisible by 3 and 5");
} else {
  console.log("not divisible by both");
}

Method 2: Logical expression
let num = 9;
console.log(
  num % 3 === 0 && num % 5 === 0
    ? "divisible by 3 and 5"
    : "not divisible by both"
);

Q9. Leap Year
Method 1: Simple rule (divisible by 4)
let year = 2020;

if (year % 4 === 0) {
  console.log("leap year");
} else {
  console.log("not a leap year");
}

Method 2: Full rule
let year = 2000;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("leap year");
} else {
  console.log("not a leap year");
}

Q10. In Range 10–50
Method 1: if-else
let num = 25;

if (num >= 10 && num <= 50) {
  console.log("in range");
} else {
  console.log("out of range");
}

Method 2: Boolean check
let num = 7;
console.log(num >= 10 && num <= 50 ? "in range" : "out of range");
