const fibonacci = function(num) {
    if (typeof num === 'string') {
        num = parseInt(num);
    }
    if (Number.isInteger(num) && num >= 0) {
    let i;
    let fib = [0, 1];

    for (i = 2; i <= num; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
        return fib[num];
    }
    else {
        return 'OOPS';
    }

};

// Do not edit below this line
module.exports = fibonacci;
