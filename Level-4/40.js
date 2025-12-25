
// Q40. Remove All Spaces
// Method 1: Using replace
function removeSpaces(str) {
  console.log(str.replace(/\s+/g, ""));
}

// Method 2: Using loop
function removeSpaces(str) {
  let res = "";
  for (let ch of str) {
    if (ch !== " ") res += ch;
  }
  console.log(res);
}