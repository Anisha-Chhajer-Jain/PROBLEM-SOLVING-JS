//Q131. Largest Digit in a Number

function largestDigit(n) {
    let max = 0;
    while (n > 0) {
        let d = n % 10;
        if (d > max) {
            max = d;
            n = Math.floor(n / 10);
        }
    }
    return max;
}
console.log(largestDigit(543))

//--------------------------------------------------------------------------------------

function largest(n) {
    let max = 0;
    while (n > 0) {
        max = Math.max(max, n % 10);
        n = Math.floor(n / 10);
    }
    console.log(max);
}
largest(2348962387)