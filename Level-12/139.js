//139.Harshad number :- if it’s divisible by sum of its digits.
//Input: n = 18 → Digits: 1+8 = 9 → 18 % 9 == 0 → Output: true

function isHarshad(n) {
    let sum = 0;
    let temp = n;

    while (temp>0) {
        sum += temp % 10;
        temp = Math.floor(temp/10);
    }
    return n%sum === 0;
}

console.log(isHarshad(19)); 

