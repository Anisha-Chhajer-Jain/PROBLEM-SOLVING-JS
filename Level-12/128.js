//Q128. Count Numbers Divisible by 2 and 5

function countDiv2and5(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 10 === 0) {
            count++;
        }
    }
    return count;
}
