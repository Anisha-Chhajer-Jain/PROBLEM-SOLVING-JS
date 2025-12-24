
// Q6. Grade Calculator
// Method 1: if-else ladder
let marks = 97;

if (marks >= 90) console.log("A");
else if (marks >= 80) console.log("B");
else if (marks >= 70) console.log("C");
else if (marks >= 60) console.log("D");
else console.log("F");

// Method 2: Using ranges array

let grade =
  marks >= 90 ? "A" :
  marks >= 80 ? "B" :
  marks >= 70 ? "C" :
  marks >= 60 ? "D" : "F";

console.log(grade);
