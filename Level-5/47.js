
// let str = "AnIsHaaa";
// let lowerCount = 0;

// for (let i = 0; i < str.length; i++) {
//     let ch = str[i];
//     if (ch >= 'a' && ch <= 'z') {
//         lowerCount++;
//     }
// }
// console.log(lowerCount);  


let str = "AnIsHaaa";
let lowerCount = 0;

for (let i = 0; i < str.length; i++) {
    if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122){
        lowerCount++;
    }
    else{
        continue;
    }
}
console.log(lowerCount);  

