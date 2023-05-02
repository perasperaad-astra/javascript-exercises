const convertToCelsius = function(fahrenheit) {
  let converted = (fahrenheit - 32) * (5/9); 
  return Number(converted.toFixed(1)); 
};

const convertToFahrenheit = function(celsius) {
  return Number((celsius * (9 / 5) + 32).toFixed(1)); 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
