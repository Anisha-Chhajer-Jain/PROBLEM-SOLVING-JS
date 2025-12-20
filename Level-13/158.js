// Q158. Count Words Length ≥ 5
function count(str) {
    let count = 0;
    let currentWordLength = 0;
    for (let i = 0; i <= str.length; i++) {
        if (i < str.length && str[i] !== " ") {
            currentWordLength++;
        } else {
            if (currentWordLength >= 5) {
                count++;
            }
            currentWordLength = 0;
        }
    }
    console.log(count);
}
count("Heyy!! I am an aspiring Full Stack Developer");