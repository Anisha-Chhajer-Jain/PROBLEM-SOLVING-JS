// Q192. Count Occurrences of Target in Sorted Array

function countOccurrences(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) count++;
    }
    return count;
}
console.log(countOccurrences([1,2,2,2,3], 2)); 



//Binary search 
function countOccurrences(arr, target) {
  function findFirst() {
    let low = 0, high = arr.length - 1;
    let first = -1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (arr[mid] === target) {
        first = mid;
        high = mid - 1;
      } else if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return first;
  }

  function findLast() {
    let low = 0, high = arr.length - 1;
    let last = -1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (arr[mid] === target) {
        last = mid;
        low = mid + 1; // move right
      } else if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return last;
  }

  const firstIndex = findFirst();
  const lastIndex = findLast();

  if (firstIndex === -1) return 0;

  return lastIndex - firstIndex + 1;
}

console.log(countOccurrences([1, 2, 2, 2, 3], 2)); 
