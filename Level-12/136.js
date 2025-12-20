
// Q136. Is 3-digit Number

function isThreeDigit(n) {
    return n >= 100 && n <= 999;
}
console.log(isThreeDigit(768));

//-----------------------------------------------------------------------------------------

function digitCheck(n){
let count=0;
while(n>0){
count++;
}
n=Math.floor(n/10);
console.log(count == 3)
}
digitCheck(1000)