//Q132. Smallest Digit in a Number

function smallestDigit(n) {
    let min = 9;
    while (n > 0) {
        let d = n % 10;
        if (d < min) {
            min = d;
            n = Math.floor(n / 10);
        }
    }
    return min;
}
console.log(smallestDigit(8675))

//---------------------------------------------------------------------------------


function smallest(n) {
    let min = 9;
    while (n > 0) {
        min = Math.min(min, n % 10);
        n = Math.floor(n / 10);
    }
    console.log(min);
}
smallest(2348962387)
