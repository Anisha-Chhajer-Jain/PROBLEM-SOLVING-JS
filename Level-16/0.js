// // // // setTimeout(() => {
// // // // console. log("settimeout 2");
// // // // }, 0);

// // // // console. log("Start");

// // // // setImmediate(() => {
// // // // console. log("Immediate task");
// // // // });
// // // // for (let i = 0; i < 1e9; i++) {
// // // // }

// // // // console. log ("End");
// // // let count = 1;

// // // const intervalId = setInterval(function () {
// // //   console.log("Interval count:", count);
// // //   count++;

// // //   if (count > 5) {
// // //     clearInterval(intervalId);
// // //     console.log("Interval stopped");
// // //   }
// // // }, 1000);
// // // console. log ("End");
// // // setTimeout(() => {
// // // console. log("settimeout 2");
// // // }, 999);


// // console.log("start");

// // let count = 1;

// // const intervalId = setInterval(() => {
// //   console.log("Count:", count);
// //   count++;

// //   if (count > 5) {
// //     clearInterval(intervalId);
// //     console.log("Interval stopped");
// //   }
// // }, 1000);

// // console.log("End");

// // setTimeout(() => {
// //   console.log("settimeout 2");
// // }, 1000);


// // console. log("start");


// // setImmediate(() => console.log("Immediate 1"));

// // console. log("End");

// // setImmediate(() => console.log("Immediate 2"));

// // setTimeout(() => {
// // console. log("settimeout 2");
// // }, 0);

// // setImmediate(() => console.log("Immediate 3"));
// setTimeout(()=>{
// console. log("settimeout 2");
// }, 0);
// setImmediate(() => console.log("Immediate 1"));
// setImmediate(() => console. log("Immediate 2"));
// setImmediate(() => console. log("Immediate 3"));


console. log("Start");

setImmediate(() => {
console. log("Immediate task");
});

for (let i = 0; i < 1e9; i++) {
// Heavy blocking loop
}
console. log("End");