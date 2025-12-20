//Q133. Count Even Digits

function countEvenDigits(n) {
    let count = 0;
    while (n > 0) {
        let d = n % 10;
        if (d % 2 === 0) {
            count++;
            n = Math.floor(n / 10);
        }
    }
    return count;
}
console.log(countEvenDigits(1620))

//----------------------------------------------------------------------------------------


function countEven(n) {
    let count = 0
    while (n > 0) {
        if (n % 2 == 0) {
            count++;
        }
        n = Math.floor(n / 10);
    }
    console.log(count);
}
countEven(2348962387)