function count(str){
    let ch;
    let c=1;
    for(let i=0;i<str.length-1;i++){
        ch=str.charCodeAt(i);
        if(ch>=65 && ch<=90)
        c++;
    }
    console.log(c);
}
count("ANISHA");


function count(str){
    let c=0;
    for(let i=0;i<str.length-1;i++){
        if(str[i]>='A' && str[i]<='Z')
        c++;
    }
    console.log(c);
}
count("ANISHA");











// Q46. Count Uppercase Letters
function countUppercase(str) {
  let count = 0;
  for (let ch of str) {
    if (ch >= 'A' && ch <= 'Z') count++;
  }
  return count;
}

console.log(countUppercase("HeLLo"));     // 3
console.log(countUppercase("javascript"));// 0
console.log(countUppercase("JS 101"));    // 2

//------------------------------------------------------------------------------

// let str = "AnIsHaaa";
// let upperCount = 0;

// for (let i = 0; i < str.length; i++) {
//     let ch = str[i];
//     if(ch >= 'A' && ch <= 'Z') {
//         upperCount++;
//     }
// }
// console.log(upperCount);  


let str = "AnIsHaaa";
let upperCount = 0;

for (let i = 0; i < str.length; i++) {
    if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
        upperCount++;
    }
    else{
        continue;
    }
}
console.log(upperCount);  

