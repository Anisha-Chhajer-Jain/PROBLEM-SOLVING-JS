// Q42. Replace All 'a' with 'e'
function replaceA(str) {
  return str.replace(/a/g, "e");
}

console.log(replaceA("banana")); // benene
console.log(replaceA("apple"));  // epple
console.log(replaceA("cat"));    // cet
// ----------------------------------------------------
var sen = "i ate an apple today"

sen = sen.toLowerCase().replaceAll('a','e')
console.log(sen)