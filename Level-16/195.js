
// Q195. Maximum Subarray Sum (Brute Force)
function maxSubarraySum(arr) {
    let maxSum = arr[0];

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum > maxSum) maxSum = sum;
        }
    }
    return maxSum;
}
console.log(maxSubarraySum([1,-2,3,4,-1])); // 7


