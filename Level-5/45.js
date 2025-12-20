let str="CodingGIta123634";

let str2="1234567890";

let count=0;
for(let i=0;i<str.length; i++){
if(str2.includes(str[i])){
count++;
}
}

for(let i=0;i<str.length; i++){
let check=Number(str[i]);
if(check>=0 &&check <= 9){
count++;
}
}
console.log(count)



// let str = "anisha1620";
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//     ch=str[i];
//     if(ch>='0' && ch<='9')
//         count++;
//     }
// console.log(count);  
