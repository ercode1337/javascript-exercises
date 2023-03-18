const caesar = function(str, shift) { // encrypt by using caesar
    let encodedStr = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    for (let char of str) {
        let index = alphabet.indexOf(char.toLowerCase());
        // account for negative shifts
        if (shift < 0) shift = alphabet.length + shift;
        // handle non-letters
        if (index === -1) {
            encodedStr += char;
            continue;
        }
        // calculate new index
        index = index + (shift % alphabet.length);
        // wrap around
        if (index >= alphabet.length) index = index - alphabet.length;
        // add letter to encoded string
        encodedStr += (char === char.toUpperCase()) ? alphabet[index].toUpperCase() : alphabet[index];
    }
    
    return encodedStr;
}

// Do not edit below this line
module.exports = caesar