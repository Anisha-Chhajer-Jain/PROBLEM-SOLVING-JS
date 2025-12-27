
// Q187. Selection Sort (Ascending)
function selectionSort(arr) {
    let n = arr.length;

    for (let i=0;i<n;i++) {
        let min = i;
        for (let j=i+1;j<n;j++) {
            if (arr[j]<arr[min]) {
                min=j;
            }
        }
        [arr[i],arr[min]] = [arr[min],arr[i]];
    }
    return arr;
}
console.log(selectionSort([3,1,4,2]));
