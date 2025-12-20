
let obj2 = {name: "Anisha", age: 18};
let values = [];

for (let key in obj2) {
  values.push(obj2[key]);
}

console.log(values); 


//


let marks={math: 80, science: 90, english: 70};
let res=Object.keys(marks)
console.log(res)