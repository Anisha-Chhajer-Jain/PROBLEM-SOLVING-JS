// Q35. To Uppercase
// Method 1: Built-in
function toUpper(str) {
  console.log(str.toUpperCase());
}

// Method 2: Manual (ASCII)
function toUpper(str) {
  let res = "";
  for (let ch of str) {
    let code = ch.charCodeAt(0);
    if (code >= 97 && code <= 122)
      res += String.fromCharCode(code - 32);
    else
      res += ch;
  }
  console.log(res);
}
