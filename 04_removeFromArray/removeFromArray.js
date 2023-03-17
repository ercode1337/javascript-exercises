const removeFromArray = function(array, ...args) {
    array = array.filter(item => !args.includes(item)) // removes (args) from array
    return array; // returns array without (args)
}

// Do not edit below this line
module.exports = removeFromArray;
