//Q135. Absolute Difference

function absoluteDiff(a, b) {
    return a > b ? a - b : b - a;
}
console.log(absoluteDiff(5,7))


//-------------------------------------------------------------------------

function absDifference(a,b){
return Math.abs(a-b);
}
console.log(absDifference(10,-5));
console.log(absDifference(-5,5))




// Q135. Absolute Difference of Two Numbers
// Return |a - b|.
// Input: a = -5, b = 5 → Output: 10
function num(a,b){
    let s=0;
    s=Math.abs(a)+Math.abs(b);
    console.log(s);
}
num(-5,5)
