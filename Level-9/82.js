
// Q82. Right-Angled Triangle of *
// For N = 4:
// *
// * *
// * * *
// * * * *
// 

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j + " ";
  }
  console.log(row);
}

