// Q36. To Lowercase
// Method 1: Built-in
function toLower(str) {
  console.log(str.toLowerCase());
}

// Method 2: Manual
function toLower(str) {
  let res = "";
  for (let ch of str) {
    let code = ch.charCodeAt(0);
    if (code >= 65 && code <= 90)
      res += String.fromCharCode(code + 32);
    else
      res += ch;
  }
  console.log(res);
}
