//141.Extract the middle character

function middleChar(str) {
    let len = str.length;
    let mid = Math.floor(len / 2);
    return len % 2 === 0 ? str[mid - 1] + str[mid] : str[mid];
}

//-----------------------------------------------------------------------

let str = "Anisha";
if (str.length % 2 === 0) {
    let mid1 = str[(str.length / 2) - 1];
    let mid2 = str[str.length / 2];
    console.log(`Middle characters of string are ${mid1} and ${mid2}`);
} else {
    let mid = str[Math.floor(str.length / 2)];
    console.log(`Middle character of string is ${mid}`);
}

//------------------------------------------------------------------------

function middleChar(str){
let length=str.length;
let middle=Math.floor(length/2);
let res="";
if(length%2 == 0){
res=res+str[middle-1]+str[middle];
}
else{
res=res+str[middle];
}
console.log(res);
}

middleChar("anisha");
