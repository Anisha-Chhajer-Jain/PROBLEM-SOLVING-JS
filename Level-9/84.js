
// Q84. Triangle with Repeated Row Number
// For N = 4:
// 1
// 2 2
// 3 3 3
// 4 4 4 4

for (let i = 1; i <= 10; i++) {
  let row = "";
  for (let j = 1; j <= 10; j++) {
    row += (i * j) + " ";
  }
  console.log(row);
  // console.log(`Table of ${i}: ${row.trim()}`);
}

