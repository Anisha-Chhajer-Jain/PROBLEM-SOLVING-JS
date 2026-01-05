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



// Q128. Count Numbers Divisible by Both 2 and 5 (1 to n)
// Input: n = 10 → Numbers: 10 → Output: 1
function multi(num){
    let s=0;
    for(let i=1;i<=num;i++){
        if(i%2==0 && i%5==0)
        s++;
    }
    console.log(s);
}
multi(10)

