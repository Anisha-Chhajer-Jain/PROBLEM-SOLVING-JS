// Q152. Count 'the' as Whole Word

function countThe(str) {
    let words = str.toLowerCase().split(" ");
    let count = 0;
    for (let w of words) if (w === "the") count++;
    console.log(count);
}
countThe("The horse the the")

//------------------------------------------------------------------------------------------------------

function count(str) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (i == 0 && str[i] == "t" && str[i + 1] == "h" && str[i + 2] == "e" && str[i + 3] == " ") {
            count++;
        }

        else if (str[i] == "t" && str[i - 1] == " " && str[i + 1] == "h" && str[i + 2] == "e" && str[i + 3] == " " || (i == str.length - 1)) {
            count++;
        }
    }
    console.log(count);
}
count("the the t")

