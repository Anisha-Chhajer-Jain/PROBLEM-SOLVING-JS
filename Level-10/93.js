//93.
let str = "anisha";
let obj = {};

for (let i = 0; i < str.length; i++) {
  let ch = str[i];
  obj[ch] = (obj[ch] || 0) + 1;
}

console.log(obj);

//-------------------------------------------------------------------------------------------------

let str1 = "anisha";
let obj1 = {};

for (let i = 0; i < str1.length; i++) {
  let ch = str1[i];

  if (obj1[ch] === undefined) {
    obj1[ch] = 1;
  } else {
    obj1[ch]++;
  }
}

console.log(obj1);