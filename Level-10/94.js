//94.
let student = [
  {name: "Anisha", marks: 98},
  {name: "Prashant", marks: 95},
  {name: "Pal", marks: 93}
];

let top = student[0];

for (let i = 1; i < student.length; i++) {
  if (student[i].marks > top.marks) {
    top = student[i];
  }
}
console.log(top.marks);
console.log(top.name); 