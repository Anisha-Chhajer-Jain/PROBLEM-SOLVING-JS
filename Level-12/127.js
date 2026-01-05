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



// Q127. Count Numbers Divisible by 2 or 3 (1 to n)
// Input: n = 10 Numbers: 2,3,4,6,8,9,10 → Output: 7
function multi(num){
    let s=0;
    for(let i=1;i<=num;i++){
        if(i%2==0 || i%3==0)
        s++;
    }
    console.log(s);
}
multi(10)
