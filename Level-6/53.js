
// Q53. Maximum in Array
// Input: [-5, -2, -10] → Output: -2
function haha(num){
    let max=num[0];
    for(let i=0;i<num.length;i++){
        if(num[i]>max){
        max=num[i];
        }
    }
    console.log(max);
}
haha([1,2,3]);

