const add = function(num1, num2) {
  return num1 + num2; 
};

const subtract = function(num1, num2) {
	return num1 - num2; 
};

const sum = function(nums) {
  let total = 0; 
  for (let i = 0; i < nums.length; i++) {
    total += nums[i]; 
  }

  return total; 
	
};

const multiply = function(nums) {

  let total = 1; 
  for (let i = 0; i < nums.length; i++) {
    total *= nums[i]; 
  }

  return total; 

};



const power = function(num1, num2) {
  let exp = 1; 

  for (let i = 0; i < num2; i++) {
    exp *= num1; 
  }

  return exp; 
};

const factorial = function(num) {
  let result = 1; 

  for (let i = num; i > 0; i--) {
    result *= i; 
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
