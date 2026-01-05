//Q125. Sum of All Even Numbers (1 to n)

function sumEven(n) {
    let sum = 0;
    for (let i = 2; i <= n; i += 2) {
        sum += i;
    }
    return sum;
}





// Q125. Sum of All Even Numbers from 1 to n
// Input: n = 6 → Evens: 2,4,6 → Output: 12
function multi(num){
    let s=0;
    for(let i=1;i<=num;i++){
        if(i%2===0)
        s=s+i;
    }
    console.log(s);
}
multi(6)
