
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
//------------------------------------------------
function selection(arr){
    for(let i=0;i<arr.length-1;i++){
        let min_idx = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min_idx]){
                min_idx = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min_idx];
        arr[min_idx] = temp;
    }
    console.log(arr);
    
}
selection([2,49,1,4,4,4,33,47,28]);

//---------------------- FOR DECREASING ORDER ---------------------------
function selectionDesc(arr) {
    for (let i=0;i<arr.length-1;i++) {
        let max_idx=i;

        for (let j=i+1; j < arr.length; j++) {
            if (arr[j] > arr[max_idx]) {
                max_idx = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[max_idx];
        arr[max_idx] = temp;
    }
    console.log(arr);
}

selectionDesc([2,49,1,4,4,4,33,47,28]);

