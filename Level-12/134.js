//Q134. Count Odd Digits

function countOddDigits(n) {
    let count = 0;
    while (n > 0) {
        let d = n % 10;
        if (d % 2 !== 0) count++;
        n = Math.floor(n / 10);
    }
    return count;
}
console.log(countOddDigits(1605))

//------------------------------------------------------------------------------------------


function countOdd(n) {
    let count = 0
    while (n > 0) {
        if (n % 2 == 0) {
            count++;
        }
        n = Math.floor(n / 10); //last se nikalenge hum and if odd hai then wo count ho jayega
        //  and then next iteration meh wo remove ho jayega and next no i.e. 8 ko check karega if odd or not.
    }
    console.log(count);
}
countOdd(2348962387)