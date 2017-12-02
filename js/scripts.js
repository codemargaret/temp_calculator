var saySomething = function(whatToSay){
  alert(whatToSay);
};

var multiply = function(number1,number2){
  return number1*number2;
};

var divide = function(number1,number2){
  return number1/number2;
};

var remainder = function(number1,number2){
  return number1% number2;
};

var add = function(number1,number2){
  return number1+number2;
};

var subtract = function(number1,number2){
  return number1-number2;
};

var celsiusToFahrenheit = function(number1){
  return number1*1.8+32;
};

var fahrenheitToCelsius = function(number1){
  return (number1-32)/1.8;
};

// user prompts below
var number1 = parseInt(prompt("Enter a number:"));
var result = fahrenheitToCelsius(number1);
alert(result);
