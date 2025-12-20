// Q144. Count Spaces in String

function countSpaces(str) {
    let count = 0;
    for (let ch of str) if (ch === ' ') count++;
    return count;
}

//-------------------------------------------------------------------------------------------


function spaces (str){
let count=0;

for(let i=0;i<str.length; i++){
if(str[i] == " "){
count++
}
}
console.log(count);
}
spaces("Hellos    World");