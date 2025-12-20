// Q157. Remove Special Characters

function removeSpecial(str) {
    return str.replace(/[^a-zA-Z0-9]/g, "");
}
