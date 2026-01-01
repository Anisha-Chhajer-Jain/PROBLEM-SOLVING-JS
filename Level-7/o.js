function secondLargest(arr) {
  let largest = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num > largest) {
      second = largest;
      largest = num;
    } else if (num > second && num !== largest) {
      second = num;
    }
  }

  return second;
}

console.log(secondLargest([10, 5, 8, 20])); // 10






// Q69. Second Largest Element
// Input: [10, 5, 8, 20] → Largest = 20 → Second largest = 10

// Q70. Second Smallest Element
// Input: [10, 5, 8, 20] → Smallest = 5 → Second smallest = 8



























// Q71. Remove Even Numbers (Keep Only Odd)
// Input: [1, 3, 5] → Output: [1, 3, 5]

// Q72. Remove Duplicates
// Input: ["a", "a", "b"] → Output: ["a", "b"]

// Q73. Concatenate Two Arrays
// Input: ["a"] and ["b", "c"] → Output: ["a", "b", "c"]

// Q74. Intersection of Two Arrays (Common Elements)
// Input: [1, 1, 2] and [1, 2, 2] → Output: [1, 2]

// Q75. Rotate Array Right by 1
// Input: [1, 2, 3, 4] → Output: [4, 1, 2, 3]

// Q76. Rotate Array Left by 1
// Input: [1, 2, 3, 4] → Output: [2, 3, 4, 1]

// Q77. Count Elements Greater than Average
// Input: [1, 2, 3, 4, 5] → Avg = 3 → Elements greater: 4,5 → Output: 2

// Q78. Largest Positive and Smallest Negative
// Input: [-5, -1, 3, 7, -2] → Largest positive = 7, Smallest negative = -5

// Q79. Count 0s and 1s in Binary Array
// Input: [0, 1, 0, 1, 1] → Output: zeros = 2, ones = 3

// Q80. Separate Even and Odd into Two Arrays
// Given an array, return two arrays: evens and odds.
// Input: [1, 3, 5] → Output: evens = [], odds = [1, 3, 5]
