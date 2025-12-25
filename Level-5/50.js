// Q50. Toggle Case of Each Character (2–3 methods)
// Method 1: Using loop
function toggleCase1(str) {
  let res = "";
  for (let ch of str) {
    if (ch >= 'a' && ch <= 'z') res += ch.toUpperCase();
    else if (ch >= 'A' && ch <= 'Z') res += ch.toLowerCase();
    else res += ch;
  }
  return res;
}

console.log(toggleCase1("HeLLo")); // hEllO

// Method 2: Using split + map
function toggleCase2(str) {
  return str
    .split("")
    .map(ch =>
      ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase()
    )
    .join("");
}

console.log(toggleCase2("abcDEF")); // ABCdef

// Method 3: Using ASCII values
function toggleCase3(str) {
  let res = "";
  for (let ch of str) {
    let code = ch.charCodeAt(0);
    if (code >= 65 && code <= 90) res += String.fromCharCode(code + 32);
    else if (code >= 97 && code <= 122) res += String.fromCharCode(code - 32);
    else res += ch;
  }
  return res;
}

console.log(toggleCase3("Js 101")); // jS 101
// --------------------------------------------- BY SIR -----------------------------------------
let str = "Anishaaa";
let toggle = "";
for (let i = 0; i < str.length; i++) {
    let ch=str[i];

    if(ch>='a' && ch<='z'){
        toggle += ch.toUpperCase();
    }
    else if(ch>='A' && ch<='Z') {
        toggle += ch.toLowerCase();
    }
    else{
        toggle += ch;
    }
}
console.log(toggle);  
