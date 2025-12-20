// Q158. Count Words Length ≥ 5

function countLongWords(str) {
    return str.split(" ").filter(w => w.length >= 5).length;
}
