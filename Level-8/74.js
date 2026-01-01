
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
let arr01 = [1, 2, 3, 4];
let arr0 = [1, 2, 2, 3];
let res7 = [];
let i = 0;
let j = 0;
while (i < arr.length && j < arr2.length) {
    if (arr01[i] == arr2[j]) {
        res7.push(arr01[i]);
        i++;
        j++;
    }
    else if (arr01[i] > arr01[j]) {
        j++;
    }
    else {
        i++;
    }
}
console.log(res7);
//--------filter and include together//------------------- OR -----------------------------------------------
let arr74 = [1, 2, 3, 4];
let arr4 = [3, 4, 5];
let intersection = arr74.filter(item => arr4.includes(item));
console.log(intersection);



