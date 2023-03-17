const reverseString = function(string) {
    let newString = ""; // stores new reversed string
    for (let i = string.length - 1; i >= 0; i--) { // loop
        newString += string[i]; 
    }
    return newString; // returns the reversed string
};

// Do not edit below this line
module.exports = reverseString;
