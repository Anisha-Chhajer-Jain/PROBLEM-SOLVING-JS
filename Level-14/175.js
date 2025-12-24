
// Q175. Elements at Even Indices
const taskMap = new Map();
let requestId = 101;
const callback = () => {
    requestId = 20;
    console.log(requestId);
};
taskMap.set(requestId, callback);
const task = taskMap.get(requestId);
task();






// function evenIndexElements(arr) {
//     let res = [];

//     for (let i = 0; i < arr.length; i += 2) {
//         res.push(arr[i]);
//     }

//     return res;
// }

