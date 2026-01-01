

// Q66. Find Index of a Value
// Given an array and a value, return index or -1.
// Input: [10, 20, 30], value = 40 → Output: -1
function double(num,n){
    for(let i=0;i<num.length;i++)
    {
        if(num[i]==n)
        {
        console.log("1");
        }
        else{
            console.log("-1");
        }
    }
}
double([10,20,30],40);