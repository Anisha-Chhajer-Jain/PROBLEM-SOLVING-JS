
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

