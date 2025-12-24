
// Q180. Sum of Even Numbers
function sumEven(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0)
            sum += arr[i];
    }

    console.log(sum);
}
sumEven([5,4,3,2,6,7,7,8])