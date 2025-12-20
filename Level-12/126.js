// Q126. Sum of All Odd Numbers (1 to n)

function sumOdd(n) {
    let sum = 0;
    for (let i = 1; i <= n; i += 2) {
        sum += i;
    }
    return sum;
}
