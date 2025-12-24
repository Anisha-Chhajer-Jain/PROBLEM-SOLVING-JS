

// Q5. Age Group
// Method 1: if-else
let age = 18;

if (age <= 12) {
  console.log("child");
} else if (age <= 19) {
  console.log("teenager");
} else {
  console.log("adult");
}

// Method 2: Logical ranges
console.log(age <= 12 ? "child" :age <= 19 ? "teenager" :"adult");
