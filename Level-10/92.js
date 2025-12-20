//92.
let arr = [1, 2, 2, 3];
let freq = {};
let max = 0;
let result;

for (let i = 0; i < arr.length; i++) {
  freq[arr[i]] = (freq[arr[i]] || 0) + 1;

  if (freq[arr[i]] > max) {
    max = freq[arr[i]];
    result = arr[i];
  }
}

console.log(result); 

//----------------------------------------------- OR ----------------------------------------------------


let arr1 = [1, 2, 3, 4, 5, 3, 3, 4, 3, 4, 3, 3, 3, 23, 2, 3, 4, 3, 4]

let obj = {};

for (let char of arr1) {
    if (obj[char] == undefined) {
        obj[char] = 1;
    }
    else {
        obj[char]++;
    }
}
    let max1;
    let maxFrequency = 0
    for (let char in obj) {
        if (obj[char] > maxFrequency) {
            max1 = char;
            maxFrequency = obj[char];
        }
    }
    console.log(max1)


//--------------------------------------------------- OR -------------------------------------------

let mostfreq = ['d','d','r','d','t','d','h','r','t','t','h','r','r'];
let store = {};
let max2 = 0,num = 0;
for(let i=0;i<mostfreq.length;i++){
    if(store[mostfreq[i]]!=undefined){
        store[mostfreq[i]]++;
        if(store[mostfreq[i]] > max2){
            max2 = store[mostfreq[i]];
            num = mostfreq[i];
        }
    }
    else{
        store[mostfreq[i]] = 1;
    }
}
console.log(`Most frequent Number : ${num} it repeates ${max2} times`);
