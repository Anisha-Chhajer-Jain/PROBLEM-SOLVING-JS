// // Q51. Print All Elements of an Array
// // Input: [1, 2, 3] → Output: 1 2 3
// function haha(num){
//     for(let i=0;i<num.length;i++){
//         console.log(num[i]);
//     }
// }
// haha([1,2,3]);

// // Q52. Sum of Array Elements
// // Input: [5, -2, 7] → Output: 10
// function haha(num){
//     let sum=0;
//     for(let i=0;i<num.length;i++){
//         sum=sum+num[i];
//     }
//     console.log(sum);
// }
// haha([1,2,3]);

// // Q53. Maximum in Array
// // Input: [-5, -2, -10] → Output: -2
// function haha(num){
//     let max=num[0];
//     for(let i=0;i<num.length;i++){
//         if(num[i]>max){
//         max=num[i];
//         }
//     }
//     console.log(max);
// }
// haha([1,2,3]);

// // Q54. Minimum in Array
// // Input: [-5, -2, -10] → Output: -10
// function haha(num){
//     let min=num[0];
//     for(let i=0;i<num.length;i++){
//         if(num[i]<min){
//         min=num[i];
//         }
//     }
//     console.log(min);
// }
// haha([1,2,3]);

// // Q55. Count Even Numbers in Array
// // Input: [2, 4, 8] → Output: 3
// function haha(num){
//     let c=0;
//     for(let i=0;i<num.length;i++){
//       if(num[i]%2==0)
//       c++;
//     }
//     console.log(c);
// }
// haha([1,2,3,8,6]);

// // Q56. Count Odd Numbers in Array
// // Input: [7, 9] → Output: 2
// function haha(num){
//     let c=0;
//     for(let i=0;i<num.length;i++){
//       if(num[i]%2!=0)
//       c++;
//     }
//     console.log(c);
// }
// haha([1,2,3,8,6]);

// // Q57. Print Only Positive Numbers
// // Input: [-1, 0, 5, 3, -2] → Output: 5 3
// function haha(num){
//     let c=0;
//     for(let i=0;i<num.length;i++){
//       if(num[i]>0)
//       c++;
//     }
//     console.log(c);
// }
// haha([1,2,3,8,-6,-9]);

// // Q58. Print Only Negative Numbers
// // Input: [-5, -2] → Output: -5 -2
// function haha(num){
//     let c=0;
//     for(let i=0;i<num.length;i++){
//       if(num[i]<0)
//       c++;
//     }
//     console.log(c);
// }
// haha([1,2,3,8,-6,-9]);

// // Q59. Print Elements Greater than 10
// // Input: [10, 11, 9] → Output: 11
// function haha(num){
//     let c=0;
//     for(let i=0;i<num.length;i++){
//       if(num[i]>10)
//       c++;
//     }
//     console.log(c);
// }
// haha([1,2,3,18,-6,-9]);

// // Q60. Average of Array Elements
// // Input: [5, 15] → Sum = 20 → Output: 10
// let avgArr = [16,5,10,20,28];
// let sum = 0;
// for(let i=0;i<avgArr.length;i++){
//     sum=sum+avgArr[i];
// }
// let avg = sum/(avgArr.length);
// console.log(avg);
















// function prime(num){
//     isPrime=num>1;
//     for(let i=2;i<=num;i++){
//         if(num%i===0)
//         isPrime=false;
//         break;
//     }
// console.log(isPrime)
// }
// prime(11);


// let n = 17;
// let isPrime = n > 1;

// for (let i = 2; i < n; i++) {
//   if (n % i === 0) {
//     isPrime = false;
//     break;
//   }
// }

// console.log(isPrime);













function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) { 
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            } else {
                break; 
            }
        }
    }
    console.log(arr);
}
insertionSort([5, 2, 9, 1, 5, 6]); 


