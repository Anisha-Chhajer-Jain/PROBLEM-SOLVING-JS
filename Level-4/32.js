 // Q32. Print Each Character on New Line
// Method 1: Using loop
function printChars(str) {
  for (let ch of str) {
    console.log(ch);
  }
}

// Method 2: Using split
function printChars(str) {
  str.split("").forEach(ch => console.log(ch));
}