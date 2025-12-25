
// Q39. Count Occurrences of 'a'
// Method 1: Loop
function countA(str) {
  let count = 0;
  for (let ch of str.toLowerCase()) {
    if (ch === 'a') count++;
  }
  console.log(count);
}

// Method 2: Regex
function countA(str) {
  let match = str.match(/a/gi);
  console.log(match ? match.length : 0);
}
