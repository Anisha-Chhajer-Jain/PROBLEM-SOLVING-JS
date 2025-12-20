//Q127. Count Numbers Divisible by 2 or 3

function countDiv(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0 || i % 3 === 0) {
            count++;
        }
    }
    return count;
}
console.log(countDiv(18))