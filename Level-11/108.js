// Q108. Is String Length > 5

let str = "javascript";
let checkLength = str.length > 5;
console.log(checkLength);

//------------------------------------------------------------------

function check(str) {
    let count = 0;
    for (let ch of str) {
        count++;
    }
    return count > 5;
}
let str1 = "javascript";
console.log(check(str1)); 
