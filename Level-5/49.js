// Q49. Remove All Digits
function removeDigits(str) {
  return str.replace(/[0-9]/g, "");
}

console.log(removeDigits("abc123"));        // abc
console.log(removeDigits("Js 101 course")); // Js  course
console.log(removeDigits("2025"));          // ""

//-------------------------------------------------------------------------------------

let str = "Anisha1605";
let remove = "";

for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch>=0 && ch<=9){
       
    }
    else {
        remove += ch;
    }
}
console.log(remove);  

