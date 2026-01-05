// Q129. Perfect Number

function isPerfect(n) {
    let sum = 0;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return sum === n;
}
console.log(isPerfect(6));

// Q129. Perfect Number
// Input: n = 10 Divisors: 1,2,5 → Sum = 8 → Output: false
function multi(num){
    let s=0;
    for(let i=1;i<=num/2;i++){
        if(num%i===0)
        s=s+i;
    }
    console.log(s);
}
multi(10)
