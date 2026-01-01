
////78. Largest Positive and Smallest Negative

let arr8 = [-5, -1, 3, 7, -2];
let largest = null;
let smallest = null;
for (let i = 0; i < arr8.length; i++) {
    if (arr8[i] > 0) {
        if (largest === null || arr8[i] > largest) {
            largest = arr8[i];
        }
    } else if (arr8[i] < 0) {
        if (smallest === null || arr8[i] < smallest) {
            smallest = arr8[i];
        }
    }
}
console.log("Largest positive:", largest);
console.log("Smallest negative:", smallest);

