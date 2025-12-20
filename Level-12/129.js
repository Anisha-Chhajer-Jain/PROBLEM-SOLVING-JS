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