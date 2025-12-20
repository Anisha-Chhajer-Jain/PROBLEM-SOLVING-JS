
//91.
let freq = [2, 3, 4, 2, 3, 1, 4, 4, 1, 2, 2];
let obj = {};
for (let i = 0; i < freq.length; i++) {
    if (obj[freq[i]] != undefined) {
        obj[freq[i]]++;
    }
    else {
        obj[freq[i]] = 1;
    }
}
console.log(obj);


