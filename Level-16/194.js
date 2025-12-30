
//Q194. Any Triplet with Given Sum (Brute Force)
function hasTripletSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === target) {
                    return true;
                }
            }
        }
    }
    return false;
}
console.log(hasTripletSum([0,-1,2,-3,1], 0));   // true
