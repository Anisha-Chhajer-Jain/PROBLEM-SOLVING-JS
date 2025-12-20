////71.Remove Even Numbers (Keep Only Odd)
//----------------with given and an empty array-----push
let arr71 = [1,2,3,4,5];
let result = [];
for (let i = 0; i < arr71.length; i++) {
    if (arr71[i] % 2 == 0) {
        continue;
    }
    else{
        result.push(arr71[i]);
    }
}
console.log(result);
//---------------------------------------------with the given array------------------------------splice
for (let i = arr71.length - 1; i >= 0; i--) {
    if (arr71[i] % 2 === 0) {
        arr71.splice(i, 1); 
    }
}
console.log(arr71); 
//-------------------------------------------------- OR ---------------------------------------------------
let res71=arr71.filter((value, index, array)=>{
    // console.log(value);
    // console.log(index);
    // console.log(array);
    // return 0;
    return value%2!=0
})
console.log(res71);


////72.
let arr = [1, 2, 2, 3, 3, 3];
let dupli = [];
for (let i = 0; i < arr.length; i++) {
    let check = false;

    for (let j = 0; j < dupli.length; j++) {
        if (arr[i] === dupli[j]) {
            check = true;
            break;
        }
    }
    if (!check) dupli.push(arr[i]);
}
console.log(dupli);
//-------------------------------------------------------------------------------------------------
let dupli1 = [];
let obj = {};
for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {       
        obj[arr[i]] = true;   
        dupli.push(arr[i]);   
    }
}
console.log(dupli);
//--------------------------------------------------------------------------------------------------
let res=[];
let obj1={};
for(let i=0;i<arr.length; i++){
if(obj1[arr[i]]){
obj1[arr[i]]++
}
else{
obj1[arr[i]]=1;
}
}
for(let char in obj1){
res.push(Number (char));
}
console.log(res)
//----------------------------------------------- OR ---------------------------------------------------------
let res1=[];
for(let i=0;i<arr.length; i++ ){
let notpresent=true;
for(let j=0;j<res1. length; j++){
if(arr[i] == res[j]){
notpresent=false;
break;
}
}
if(notpresent == true){
res1.push(arr[i]);
}
}
console.log(res1)
//----------------------------set is the data structure that stores unique code-----------------------------
let res2=new Set(arr);
console.log(res2);
console.log([...res2]);
let dupli2 = [];
for (let i = 0; i < arr.length; i++) {
    let check = false;

    for (let j = 0; j < dupli2.length; j++) {
        if (arr[i] === dupli2[j]) {
            check = true;
            break;
        }
    }
    if (!check) dupli2.push(arr[i]);
}
console.log(dupli2);


// 73. Concatenate Two Arrays

let a = [1, 2];
let b = [3, 4];
let merged = [];
for (let i = 0; i < a.length; i++) {
    merged.push(a[i]);
}
for (let i = 0; i < b.length; i++) {
    merged.push(b[i]);
}
console.log(merged);
// //--------------------------------------------------by spread-----------------------------------------------
let merged1 = [...a, ...b];
console.log(merged1);
// //-------------------------------------------------by concat------------------------------------------------
let merged2 = a.concat(b);
console.log(merged2);


// //74. Intersection of Two Arrays (Common Elements) (without duplicates)

let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5];
let intersect = [];
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {

            let check = false;
            for (let k = 0; k < intersect.length; k++) {
                if (intersect[k] === arr1[i]) {
                    check = true;
                    break;
                }
            }

            if (!check) intersect.push(arr1[i]);
        }
    }
}
console.log(intersect);
//------------------alt sir way------------------------------- OR -------------------------------------------
let arr01=[1,2,3,4];
let arr0=[1,2,2,3];
let res7=[];
let i=0;
let j=0;
while(i<arr.length && j<arr2.length){
if(arr01[i] == arr2[j]){
res7.push(arr01[i]);
  i++;
  j++;
}
else if(arr01[i]>arr01[j]){
    j++;
 }
else{
    i++;
 }
}
console.log(res7);
//--------filter and include together//------------------- OR -----------------------------------------------
let arr74 = [1, 2, 3, 4];
let arr4 = [3, 4, 5];
let intersection = arr74.filter(item => arr4.includes(item));
console.log(intersection);


// //75. Rotate Array Right by 1

let arr5 = [1, 2, 3, 4];
let rotate0 = [];
if (arr5.length > 0) {
    rotate0.push(arr5[arr5.length - 1]);       

    for (let i = 0; i < arr5.length - 1; i++) {
        rotate0.push(arr5[i]);
    }
}
console.log(rotate0);
//----------------------------------------------- OR ---------------------------------------------------------
let rotate1 = [55,84,93,49,89,87];
let res3 = [];
 res3 = [rotate1[rotate1.length-1]];
for(let i =0;i<rotate1.length-1;i++){
    res.push(rotate1[i]);
}
console.log(res3);
//----------------------------------------------- OR ---------------------------------------------------------
let temp2=rotate2[rotate.length-1];
for(let i=rotate2.length-1;i>0;i--){
rotate2[i]=rotate2[i-1];
}
rotate2[0]=temp2;
console.log(rotate2)


// //76. Rotate Array Left by 1

let arr6 = [1, 2, 3, 4];
let rotated = [];
if (arr6.length > 0) {
    for (let i = 1; i < arr6.length; i++) {
        rotated.push(arr6[i]);
    }
    rotated.push(arr6[0]);
}
console.log(rotated);
//-------------------------------------------- OR -------------------------------------------------------
let rotate = [55,84,93,49,89,87];
let res4 = [];
let temp = rotate[0];
for(let i =1;i<rotate.length-1;i++){
    res4.push(rotate[i]);
}
res4.push(temp);
console.log(res4);


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
let countavg = [84,28,92,26,18];
let avg = countavg.reduce((x,y)=>(x+y));
avg = avg/countavg.length;
console.log(avg);
let count = 0;
for(let i=0;i<countavg.length;i++){
    if(countavg[i]>avg){
        count++;
    }
}
console.log(`Counts of Number which are greater than avg = ${count}`);


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


// //Q79. Count 0s and 1s in Binary Array

let arr9 = [0, 1, 0, 1, 1];
let zeros = 0;
let ones = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr9[i] === 0) {
    zeros++;
    }
    else if (arr9[i] === 1) {
        ones++;
    }
}
console.log("zeros =", zeros, "ones =", ones);


//// 80. Separate Even and Odd into Two Arrays

let arr80 = [1, 2, 3, 4, 5];
let evens = [];
let odds = [];
for (let i = 0; i < arr80.length; i++) {
    if (arr80[i] % 2 === 0){
        evens.push(arr80[i]);
    } 
    else {
        odds.push(arr80[i]);
    }
}
console.log("evens =", evens);
console.log("odds =", odds);
//---------------------------------------------- OR ---------------------------------------------------
let arr10=[12,8,9,7,3,4];

let even=arr10.filter((value)=>{
return value%2 == 0;
})
let odd=arr10.filter((value)=>{
return value%2 != 0;
})
console.log(even);
console.log(odd);
