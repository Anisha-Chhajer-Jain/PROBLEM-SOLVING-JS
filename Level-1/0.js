// function evenOdd(num){
//     if(num%2==0){
//         console.log("Even");
//     }
//     else{
//         console.log("Odd");
//     }
// }
// evenOdd(10);


// function maximum(a,b){
//     if(a>b){
//         console.log("A is Greater");
//     }
//     else{
//         console.log("B is Greater");
//     }
// }
// maximum(16,20);




// function maximum(a,b,c){
//     if(a>b && a>c){
//         console.log("A is Greater");
//     }
//     else if(b>c){
//         console.log("B is Greater");
//     }
//     else{
//         console.log("C is Greater");
//     }
// }
// maximum(16,200,36);


// function positiveNegative(num){
//     if(num>0){
//         console.log("Positive no.");
//     }
//     else if(num<0){
//         console.log("Negative no.");
//     }
//     else{
//         console.log("ZERO");
//     }
// }
// positiveNegative(-5);


function mautKaKhel(age){
    if(age>=0 && age<=12){
        console.log("Child");
    }
    else if(age>=13 && age<=19){
        console.log("Teenager");
    }
    else{
        console.log("Adult");
    }
}
mautKaKhel(18);



//function mautKaKhel(marks){
//     if(marks>=90 && marks<=100){
//         console.log("A");
//     }
//     else if(marks>=80 && marks<=89){
//         console.log("B");
//     }
//     else if(marks>=70 && marks<=79){
//         console.log("C");
//     }
//     else if(marks>=60 && marks<=69){
//         console.log("D");
//     }
//     else{
//         console.log("E");
//     }
// }
// mautKaKhel(89);



// function divisibleByFive(num){
//     if(num%5==0){
//         console.log("Divisible by 5");
//     }
//     else{
//         console.log("Not Divisible by 5");
//     }
// }
// divisibleByfive(10);



// function divisible(num){
//     if(num%5==0 && num%3==0){
//         console.log("Divisible by both 3 & 5");
//     }
//     else{
//         console.log("Not Divisible by both");
//     }
// }
// divisible(15);


























// let n = -100;
// n = Math.abs(n);
// console.log(n);

// n = String(n);
// console.log(n, typeof(n));

// let arr = n.split("");
// console.log(arr);

// console.log(arr.length);



// function countDigits(n) {
//     n = Math.abs(n); 
//     if (n === 0) return 1; 
//     let count = 0;
//     while (n > 0) {
//         count++;
//         n = Math.floor(n / 10); 
//     }
//     return count;
// }
// console.log(countDigits(98));   



// let n=23442;
//     let count = 0;
//     while (n > 0) {
//         count++;
//         n = Math.floor(n / 10); 
//     }
// console.log(count);



// function sumOfDigits(n) {
//     n = Math.abs(n); // ignore sign
//     let sum = 0;

//     for (let i = n; i > 0; i = Math.floor(i / 10)) {
//         sum += i % 10;
//     }
//     return sum;
// }
// console.log(sumOfDigits(123)); // 6



function product_of_digits(N){
    var product = 1,temp = Math.abs(N),digi;
    while(temp > 0){
        digi = temp % 10;
        product = product * digi;
        temp = Math.floor(temp /10);
    }
    console.log(product);
}
product_of_digits(123);







// function productOfDigits(n) {
//     n = Math.abs(n);
//     let product = 1;

//     for (let i = n; i > 0; i = Math.floor(i / 10)) {
//         product *= (i % 10);
//     }

//     return product;
// }
// console.log(productOfDigits(46));  // 24



// function reverseNumber(n) {
//     let sign = n < 0 ? -1 : 1;
//     n = Math.abs(n);

//     let rev = 0;

//     for (let i = n; i > 0; i = Math.floor(i / 10)) {
//         rev = rev * 10 + (i % 10);
//     }

//     return sign * rev;
// }
// console.log(reverseNumber(-321)); // -123



// function isPalindrome(n) {
//     let original = n;
//     let sign = n < 0 ? -1 : 1;
//     n = Math.abs(n);

//     let rev = 0;

//     for (let i = n; i > 0; i = Math.floor(i / 10)) {
//         rev = rev * 10 + (i % 10);
//     }

//     return rev * sign === original;
// }
// console.log(isPalindrome(0));   // true



// function isPrime(n) {
//     if (n <= 1) return false;

//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) return false;
//     }

//     return true;
// }
// console.log(isPrime(2));  




// function prime(n) {
//     if (n <= 1) 
//     return false;
    
//     let c = 0;
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) {
//             c++;
//         }
//     }
//     return c === 0; 
// }
// console.log(prime(17)); // true

  



// function printPrimes(N) {
//     for (let num = 2; num <= N; num++) {
//         let isPrime = true;

//         for (let i = 2; i * i <= num; i++) {
//             if (num % i === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }

//         if (isPrime) {
//             console.log(num);
//         }
//     }
// }

// // Example:
// printPrimes(10); 


// function fibonacci(N) {
//     let a = 0, b = 1;

//     for (let i = 1; i <= N; i++) {
//         console.log(a);  
//         let next = a + b; 
//         a = b;            
//         b = next;
//     }
// }

// fibonacci(5); // Output: 0 1 1 2 3


// function gcd(a, b) {
//     let gcdValue = 1;

//     for (let i = 1; i <= Math.min(a, b); i++) {
//         if (a % i === 0 && b % i === 0) {
//             gcdValue = i;
//         }
//     }

//     return gcdValue;
// }

// console.log(gcd(12, 18)); // 6



// function gcd(a, b) {
//     let gcdValue = 1;

//     for (let i = 1; i <= Math.min(a, b); i++) {
//         if (a % i === 0 && b % i === 0) {
//             gcdValue = i;
//         }
//     }

//     return gcdValue;
// }

// function lcm(a, b) {
//     return (a * b) / gcd(a, b);
// }

// console.log(lcm(4, 6)); // 12





//while loop works when the condition in while loop is true but idhar kuch nhii horha true so no output
// let check=true;
// for(let i=0;i<=10;i++){
//     check=false;
// }
// while(check){
//     console.log("Hello");
// }








// function length(s) {
//     return s.length;
// }
// console.log(length("JavaScript"));


// function length(str) {
//     let count = 0;
//     for (let i in str) {
//         count++;
//     }
//     return count;
// }
// console.log(length("Anisha"));         




// let n = "Anisha";
// for (let i = 0; i < n.length; i++) {
//     console.log(n[i]);
// }



// let n = "anisha";
// let vowel=0;
// for (let i = 0; i < n.length; i++) {
//     if( n[i]=='a' || n[i]=='e' || n[i]=='i' || n[i]=='o' ||n[i]=='u'){
//         vowel++;
//     }
// }
// console.log(vowel);



// let n = "anisha";
// let consonants=0;
// for (let i = 0; i < n.length; i++) {
//     if( n[i]!='a' && n[i]!='e' && n[i]!='i' && n[i]!='o' && n[i]!='u'){
//         consonants++;
//     }
// }
// console.log(consonants);



// function upper(str) {
//     let result = "";

//     for (let i = 0; i < str.length; i++) {
//         let ch = str[i];
//         let code = ch.charCodeAt(0);
//         if (code >= 97 && code <= 122) {
//             result += String.fromCharCode(code - 32);
//         } else {
//             result += ch; 
//         }
//     }
//     return result;
// }
// console.log(upper("anisha")); 



// let str="Anisha";
//     let result = "";

//     for (let i = 0; i < str.length; i++) {
//         let ch = str[i];
//         let code = ch.charCodeAt(0);
//         if (code >= 97 && code <= 122) {
//             result += String.fromCharCode(code - 32);
//         } else {
//             result += ch; 
//         }
//     }
//     return console.log(result);





// function lower(str) {
//     let result = "";

//     for (let i = 0; i < str.length; i++) {
//         let ch = str[i];
//         let code = ch.charCodeAt(0);
//         if (code >= 65 && code <= 90) {
//             result += String.fromCharCode(code + 32);
//         } else {
//             result += ch; 
//         }
//     }
//     return result;
// }
// console.log(lower("ANISHA")); 





// let str="PRASHANT";
//     let result = "";

//     for (let i = 0; i < str.length; i++) {
//         let ch = str[i];
//         let code = ch.charCodeAt(0);
    //     if (code >= 65 && code <= 90) {
    //         result += String.fromCharCode(code + 32);
    //     } else {
    //         result += ch; 
    //     }
    // }
    // return console.log(result);



// let n = "ANIsha";
// for (let i = n.length-1; i >= 0; i--) {
//     console.log(n[i]);
// }



let n = "ANIsha";
let rev=0;
for (let i = n.length-1; i >= 0; i--) {
    rev=rev+n[i];
}
console.log(rev);
if(rev==n){
        return true;
    }
    else{
        return false;
}























// let n = -100;
// n = Math.abs(n);
// console.log(n);

// n = String(n);
// console.log(n, typeof(n));

// let arr = n.split("");
// console.log(arr);

// console.log(arr.length);



// function countDigits(n) {
//     n = Math.abs(n); 
//     if (n === 0) return 1; 
//     let count = 0;
//     while (n > 0) {
//         count++;
//         n = Math.floor(n / 10); 
//     }
//     return count;
// }
// console.log(countDigits(98));   



// let n=23442;
//     let count = 0;
//     while (n > 0) {
//         count++;
//         n = Math.floor(n / 10); 
//     }
// console.log(count);



// function sumOfDigits(n) {
//     n = Math.abs(n); // ignore sign
//     let sum = 0;

//     for (let i = n; i > 0; i = Math.floor(i / 10)) {
//         sum += i % 10;
//     }
//     return sum;
// }
// console.log(sumOfDigits(123)); // 6



// function product_of_digits(N){
//     var product = 1,temp = Math.abs(N),digi;
//     while(temp > 0){
//         digi = temp % 10;
//         product = product * digi;
//         temp = Math.floor(temp /10);
//     }
//     console.log(product);
// }
// product_of_digits(123);







// function productOfDigits(n) {
//     n = Math.abs(n);
//     let product = 1;

//     for (let i = n; i > 0; i = Math.floor(i / 10)) {
//         product *= (i % 10);
//     }

//     return product;
// }
// console.log(productOfDigits(46));  // 24



// function reverseNumber(n) {
//     let sign = n < 0 ? -1 : 1;
//     n = Math.abs(n);
//     let rev = 0;
//     for (let i = n; i > 0; i = Math.floor(i / 10)) {
//         rev = rev * 10 + (i % 10);
//     }
//     return sign * rev;
// }
// console.log(reverseNumber(-321)); // -123



// function reverse(num, rev = 0) {
//     if (num === 0) 
//     return rev;

//     let digit = num % 10;
//     rev = rev*10+digit;
//     return reverse(Math.floor(num / 10), rev);
// }

// console.log("Reversed:", reverse(345));





//  function reverse(num, rev = 0) {
//     if (num === 0) 
//     return rev;

//     let digit = num % 10;
//     rev = rev*10+digit;
//     return reverse(Math.floor(num / 10), rev);
// }

// console.log("Reversed:", reverse(345));


// let num =100;
// let check = 1;
// if(num<0){
//     check = -1;
//     num=math.abs(num);
// }
// num = Number(String(num).split("").reverse().join(""))*check;
// console.log(num);




// function isPalindrome(n) {
//     let original = n;
//     let sign = n < 0 ? -1 : 1;
//     n = Math.abs(n);

//     let rev = 0;

//     for (let i = n; i > 0; i = Math.floor(i / 10)) {
//         rev = rev * 10 + (i % 10);
//     }
//     return rev * sign === original;
// }
// console.log(isPalindrome(0));   // true








// function isPrime(n) {
//     if (n <= 1) return false;

//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) return false;
//     }

//     return true;
// }
// console.log(isPrime(2));  




// function prime(n) {
//     if (n <= 1) 
//     return false;
    
//     let c = 0;
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) {
//             c++;
//         }
//     }
//     return c === 0; 
// }
// console.log(prime(17)); // true

  
  
  
//   let n = 13;
// let count = 0;

// for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//         count++;
//     }
// }

// console.log(count === 2 ? "Number is prime" : "Number is not prime");

  



//   let n = 13;
// let count = 0;

// for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//         count++;
//     }
// }

// if(count==0){
//     console.log("")
// }







// function printPrimes(N) {
//     for (let num = 2; num <= N; num++) {
//         let isPrime = true;

//         for (let i = 2; i * i <= num; i++) {
//             if (num % i === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }

//         if (isPrime) {
//             console.log(num);
//         }
    // }
// }

// // Example:
// printPrimes(10); 


// function fibonacci(N) {
//     let a = 0, b = 1;

//     for (let i = 1; i <= N; i++) {
//         console.log(a);  
//         let next = a + b; 
//         a = b;            
//         b = next;
//     }
// }

// fibonacci(5); // Output: 0 1 1 2 3


// function gcd(a, b) {
//     let gcdValue = 1;

//     for (let i = 1; i <= Math.min(a, b); i++) {
//         if (a % i === 0 && b % i === 0) {
//             gcdValue = i;
//         }
//     }

//     return gcdValue;
// }

// console.log(gcd(12, 18)); // 6



// function gcd(a, b) {
//     let gcdValue = 1;

//     for (let i = 1; i <= Math.min(a, b); i++) {
//         if (a % i === 0 && b % i === 0) {
//             gcdValue = i;
//         }
//     }

//     return gcdValue;
// }

// function lcm(a, b) {
//     return (a * b) / gcd(a, b);
// }

// console.log(lcm(4, 6)); // 12





//while loop works when the condition in while loop is true but idhar kuch nhii horha true so no output
// let check=true;
// for(let i=0;i<=10;i++){
//     check=false;
// }
// while(check){
//     console.log("Hello");
// }





// function isPalindrome(n) {
//     let original = n;
//     let sign = n < 0 ? -1 : 1;
//     n = Math.abs(n);

//     let rev = 0;

//     for (let i = n; i > 0; i = Math.floor(i / 10)) {
//         rev = rev * 10 + (i % 10);
//     }
//     return rev * sign === original;
// }
// console.log(isPalindrome(0));   // true





// function reverse(num, rev = 0) {
//     if (num === 0) return rev;

//     let digit = num % 10;
//     rev = rev * 10 + digit;

//     return reverse(Math.floor(num / 10), rev);
// }
// function isPalindrome(num) {
//     let reversed = reverse(num);
//     return reversed === num;
// }
// let n = 121;
// if (isPalindrome(n)) {
//     console.log(n + " is a Palindrome");
// } else {
//     console.log(n + " is NOT a Palindrome");
// }










// function length(s) {
//     return s.length;
// }
// console.log(length("JavaScript"));


// function length(str) {
//     let count = 0;
//     for (let i in str) {
//         count++;
//     }
//     return count;
// }
// console.log(length("Anisha"));         




// let n = "Anisha";
// for (let i = 0; i < n.length; i++) {
//     console.log(n[i]);
// }



// let n = "anisha";
// let vowel=0;
// for (let i = 0; i < n.length; i++) {
//     if( n[i]=='a' || n[i]=='e' || n[i]=='i' || n[i]=='o' ||n[i]=='u'){
//         vowel++;
//     }
// }
// console.log(vowel);



// let n = "anisha";
// let consonants=0;
// for (let i = 0; i < n.length; i++) {
//     if( n[i]!='a' && n[i]!='e' && n[i]!='i' && n[i]!='o' && n[i]!='u'){
//         consonants++;
//     }
// }
// console.log(consonants);



// function upper(str) {
//     let result = "";

//     for (let i = 0; i < str.length; i++) {
//         let ch = str[i];
//         let code = ch.charCodeAt(0);
//         if (code >= 97 && code <= 122) {
//             result += String.fromCharCode(code - 32);
//         } else {
//             result += ch; 
//         }
//     }
//     return result;
// }
// console.log(upper("anisha")); 



// let str="Anisha";
//     let result = "";

//     for (let i = 0; i < str.length; i++) {
//         let ch = str[i];
//         let code = ch.charCodeAt(0);
//         if (code >= 97 && code <= 122) {
//             result += String.fromCharCode(code - 32);
//         } else {
//             result += ch; 
//         }
//     }
//     return console.log(result);





// function lower(str) {
//     let result = "";

//     for (let i = 0; i < str.length; i++) {
//         let ch = str[i];
//         let code = ch.charCodeAt(0);
//         if (code >= 65 && code <= 90) {
//             result += String.fromCharCode(code + 32);
//         } else {
//             result += ch; 
//         }
//     }
//     return result;
// }
// console.log(lower("ANISHA")); 





// let str="PRASHANT";
//     let result = "";

//     for (let i = 0; i < str.length; i++) {
//         let ch = str[i];
//         let code = ch.charCodeAt(0);
    //     if (code >= 65 && code <= 90) {
    //         result += String.fromCharCode(code + 32);
    //     } else {
    //         result += ch; 
    //     }
    // }
    // return console.log(result);



// let n = "ANIsha";
// for (let i = n.length-1; i >= 0; i--) {
//     console.log(n[i]);
// }



// let n = "ANINA";
// let rev=0;
// for (let i = n.length-1; i >= 0; i--) {
//     rev=rev+n[i];
// }
// // console.log(rev);
// if(rev==n){
//         console.log("true");
//     }
//     else{
//         console.log("false");
// }


// let n = "hahahha";
// let i1 = 0;
// let j1 = n.length - 1;

// while (i1 <= j1) {
//     if (n[i1] == n[j1]) {
//         console.log("Is Palindrome");
//         return;
//     }
//     i1++;
//     j1--;
//     // else {
//     //     console.log("Not a palindrome");
//     //     break;
//     // }
// }
// console.log("Not a palindrome");



// let n = "anisha";
// let occur=0;
// for (let i = 0; i < n.length; i++) {
//     if( n[i]=='a' || n[i]=='A'){
//         occur++;
//     }
// }
// console.log(occur);




// function removeSpaces(str) {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== " ") {
//             result += str[i];
//         }
//     }
//     return result;
// }
// console.log(removeSpaces("heyoo cutiesss"));  




























// let n = "anisha jain";
// let occur=0;
// for (let i = 0; i < n.length; i++) {
//     if( n[i]==" "){
//         occur++;
//     }
// }
// console.log(occur+1);





// let n = "anisha";
// let occur=0;
// for (let i = 0; i < n.length; i++) {
//     if( n[i]=='a' || n[i]=='A'){
//         occur=replace('a','e');
//     }
// }
// console.log(occur);





// let str="Javascript";
// for(let i=0;i<str.length;i++){
//     console.log(str.charCodeAt(i));
// }

















// let str="ANISHA";
//     let result = "";

//     for (let i = 0; i < str.length; i++) {
//         let ch = str[i];
//         let code = ch.charCodeAt(0);
//         if (code >= 65 && code <= 90) {
//             result += String.fromCharCode(code + 32);
//         } else {
//             result += ch; 
//         }
//     }
//     return console.log(result);
////////////////////////////////////////////////////////
// let str="HELLO WORLD";
// let res="";

// for(let i=0;i<str.length; i++){
// let ascii=str.charCodeAt(i);

// if(ascii>=65 && ascii <= 90){
// ascii=ascii+32;
// }
// let char=String.fromCharCode(ascii);
// res=res+char;
// }
// console.log(res);
//////////////////////////////////////////////////////////

// let str="ANISHA";
//     let result = "";

//     for (let i = 0; i < str.length; i++) {
//         let ch = str[i];
//         let code = ch.charCodeAt(0);
//         if (code >= 65 && code <= 90) {
//             result += String.fromCharCode(code + 32);
//         } else {
//             result += ch; 
//         }
//     }
//     return console.log(result);
////////////////////////////////////////////////////////


// let n = "ANIsha";
// for (let i = n.length-1; i >= 0; i--) {
//     console.log(n[i]);
// }



// str="prashant";
// console.log(str);
// let rev=str.split("");
// // console.log(rev);
// rev.reverse();
// // rev.join();
// console.log(rev.join());



// str="prashant";
// console.log(str);

// console.log(str.split("").reverse().join(""));


// function multiply(a, b) {
//     return a * b;
// }



// let n = "";
// let rev=0;
// for (let i = n.length-1; i >= 0; i--) {
//     rev=rev+n[i];
// }
// // console.log(rev);
// if(rev==n){
//         console.log("true");
//     }
//     else{
//         console.log("false");
// // }

// let str="madam";
// let i=0;
// let j=str.length-1;
// while(i<=j){
//     if(str[i]!=str[j]){
//         console.log("Not Palindrome");
//         return;
//     }
//     i++;
//     j--;
// }



// let n = "anisha";
// let occur=0;
// for (let i = 0; i < n.length; i++) {
//     if( n[i]=='a' || n[i]=='A'){
//         occur++;
//     }
// }
// console.log(occur);



//we can also do with continue if str==""
// function removeSpaces(str) {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== " ") {
//             result += str[i];
//         }
//     }
//     return result;
// }
// console.log(removeSpaces("heyoo cutiesss"));  


// let str="I need sleep"
// let res="";
// for(let i=0;i<str.length; i++){
// if(str[i] == " "){
// continue;
// }
// res=res+str[i];
// }
// console.log(res);

// console.log(str.split("").join(""));



// let arr=str.split(" ");
// console.log(arr);

// let res=arr.join(""):
// console. log(res)





















