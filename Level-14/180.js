
// Q180. Sum of Even Numbers
function sumEven(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0)
            sum += arr[i];
    }

    console.log(sum);
}
sumEven([5, 4, 3, 2, 6, 7, 7, 8])

//-------------------- BY REDUCE ---------------------
function sumEven(arr) {
    let sum = arr.reduce((acc, curr) => {
        if (curr % 2 === 0) {
            acc += curr;
        }
        return acc;
    }, 0);

    console.log(sum);
}

sumEven([5, 4, 3, 2, 6, 7, 7, 8]);

//--------------------------- BY SIR ------------------------------

function sumEven(arr) {
    let res = arr.reduce((sum, num) => {
        if (num % 2 == 0) {
            return sum + num
        }
        else{
            return sum;
        }
}, 0)
    console.log(res)
}
sumEven([1, 2, 3, 4, 5]);