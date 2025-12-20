
let str = "Anishaaa";
let toggle = "";
for (let i = 0; i < str.length; i++) {
    let ch=str[i];

    if(ch>='a' && ch<='z'){
        toggle += ch.toUpperCase();
    }
    else if(ch>='A' && ch<='Z') {
        toggle += ch.toLowerCase();
    }
    else{
        toggle += ch;
    }
}
console.log(toggle);  
