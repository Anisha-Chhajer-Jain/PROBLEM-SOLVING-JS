
function triple(arr) {
  let res = [];
  for (let n of arr){
    res.push(n * 3);
  }
  console.log(res);
}
triple([1,3,4])

//------------------------------------------------------------------------------------------------

function tripleArray(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i] * 3);
    }
console.log(res);
}
tripleArray([1,3,4])
