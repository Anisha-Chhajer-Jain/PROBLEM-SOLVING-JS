// Q44. Compare Two Strings (Exact Match)
// Input: "Hello", "hello" → Output: false
function compare(str1,str2){
    if(str1==str2){
    // if(str1.includes(str2)){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
compare("hello","helLo");

//console.log(str1 === str2 ? "Both are equal" :"Both are not equal ");
//--------------------------------------------------------------------------------------------

// Q44. Compare Two Strings (Exact Match)
function compareStrings(a, b) {
  return a === b;
}

console.log(compareStrings("hello", "hello")); // true
console.log(compareStrings("Hello", "hello")); // false
console.log(compareStrings("js", "js "));       // false

//--------------------------------------------------------------

let str1="123";
let str2="123";

if(str1 === str2){
console.log("Both are equal");
}
else{
console.log("Both are not equal");
}
console.log(str1 === str2 ? "Both are equal" :"Both are not equal ");

if(str1.includes(str2)){
console.log("Both are equal ");
}
else{
console.log("both are not equal ");
}