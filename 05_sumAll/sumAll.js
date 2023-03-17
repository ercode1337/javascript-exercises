const sumAll = function(numOne, numTwo) {
    if (numOne < 0 || numTwo < 0) {
        return "ERROR";
    }
    if (numOne > numTwo) {
        let all = 1;

        for (let i = numTwo; i < numOne; i++) {
            all += (i + 1)
        }
        return all;
    }
    if (Number.isInteger(numOne) && Number.isInteger(numTwo)) {
        let all = 1;
    
        for (let i = numOne; i < numTwo; i++){
            all += (i + 1) 
        }
    
        return all;
    } 
    else {
        return 'ERROR'
    }
}

// Do not edit below this line
module.exports = sumAll;
