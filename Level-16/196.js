// Q196. Max Sum of Subarray of Size k (Brute Force)
function maxSumSubarrayK(arr, k) {
    let maxSum = -Infinity;

    for (let i = 0; i <= arr.length - k; i++) {
        let sum = 0;
        for (let j = i; j < i + k; j++) {
            sum += arr[j];
        }
        if (sum > maxSum) maxSum = sum;
    }
    return maxSum;
}
console.log(maxSumSubarrayK([4,4,4], 1));     // 4
