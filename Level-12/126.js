// Q126. Sum of All Odd Numbers (1 to n)

function sumOdd(n) {
    let sum = 0;
    for (let i = 1; i <= n; i += 2) {
        sum += i;
    }
    return sum;
}


// Q126. Sum of All Odd Numbers from 1 to n
// Input: n = 6 → Odds: 1,3,5 → Output: 9
function multi(num){
    let s=0;
    for(let i=1;i<=num;i++){
        if(i%2!=0)
        s=s+i;
    }
    console.log(s);
}
multi(6)
