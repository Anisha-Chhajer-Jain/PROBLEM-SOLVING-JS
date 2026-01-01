
// //77. Count Elements Greater than Average

let arr7 = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr7.length; i++) {
    sum += arr7[i];
}
let avgg = sum / arr7.length;
let countt = 0;
for (let i = 0; i < arr7.length; i++) {
    if (arr7[i] > avgg) {
        countt++;
    }
}
console.log(countt);
//------------------------------------------------- OR ----------------------------------------------------
let countavg = [84, 28, 92, 26, 18];
let avg = countavg.reduce((x, y) => (x + y));
avg = avg / countavg.length;
console.log(avg);
let count = 0;
for (let i = 0; i < countavg.length; i++) {
    if (countavg[i] > avg) {
        count++;
    }
}
console.log(`Counts of Number which are greater than avg = ${count}`);

