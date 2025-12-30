// Q54. Minimum in Array
// Input: [-5, -2, -10] → Output: -10
function haha(num){
    let min=num[0];
    for(let i=0;i<num.length;i++){
        if(num[i]<min){
        min=num[i];
        }
    }
    console.log(min);
}
haha([1,2,3]);

