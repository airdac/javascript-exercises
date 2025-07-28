const convertToCelsius = function(Farenheit) {
  const Celsius = (Farenheit - 32) * 5/9;
  return Math.round(Celsius * 10) / 10;
};

const convertToFahrenheit = function(Celsius) {
  const Farenheit = Celsius * 9/5 + 32;
  return Math.round(Farenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
