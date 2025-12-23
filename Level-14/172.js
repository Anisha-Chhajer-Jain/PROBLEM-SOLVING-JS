
// Q172. Strictly Increasing Sorted Array?
function isStrictlyIncreasing(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1])
            console.log(false);
    }
    console.log(true);
}
isStrictlyIncreasing([1,2,3,4])

//------------------------------------------------ BY SIR ---------------------------------------------------

function isStrictlyIncreasing(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= arr[i + 1]){
            console.log(false);
        return
    }
    }
    console.log(true);
}
isStrictlyIncreasing([1,2,3,5,4])