function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
binarySearch([1, 3, 5, 7, 9], 5);




function binarySearch(arr, k) {
    let low = 0;
    let high = arr.length - 1;

    while (high >= low) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] > k) {
            high = mid - 1;
        }
        else if (arr[mid] < k) {
            low = mid + 1;
        }
        else {
            console.log(mid);
            return;

        }

    }
    console.log(-1)
}
binarySearch([1, 3, 5, 7, 9], 5);