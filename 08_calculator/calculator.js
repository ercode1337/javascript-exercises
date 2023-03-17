const add = function(oneSum, secSum) {
	let result = oneSum + secSum;
  return result;
};

const subtract = function(oneSum, secSum) {
	let result = oneSum - secSum;
  return result;
};


const sum = function(arr) {
  if(arr.length == 0){
    return 0;
  }
  else if(arr.length == 1){
    return arr[0];
  }
  else{
    let sum = 0;
    for(let i=0; i < arr.length; i++){
      sum += arr[i];
    }
    return sum;
  }
};

const multiply = function(arr) {
  if(arr.length == 0){
    return 0;
  }
  else if(arr.length == 1){
    return arr[0];
  }
  else{
    let mult = 1;
    for(let i=0; i < arr.length; i++){ // loop start
      mult *= arr[i];
    }
    return mult;
  }
};

const power = function(oneSum, secSum) {
  let result = Math.pow(oneSum, secSum);
	return result;
};

const factorial = function(number) {
  let result = 1;

  for (let i = 2; i <= number; i++) {
    result = result * i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
