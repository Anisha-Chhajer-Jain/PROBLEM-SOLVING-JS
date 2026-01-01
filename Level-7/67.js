// Q67. Frequency of a Value
// Input: [5, 5, 5], value = 5 → Output: 3
function double(num,n){
    let c=0;
    for(let i=0;i<num.length;i++)
    {
        if(num[i]==n){
            c++;
        }
    }
    console.log(c);
}
double([5,6,7,5,5],5)
