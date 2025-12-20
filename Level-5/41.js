
var sen = "i ate an apple today"

//-------------------------------------------------

var s=0;
sen =sen.trim()
for (i of sen){
    if(i.charCodeAt() == 32){
        s++;
    }
}
console.log(s+1)