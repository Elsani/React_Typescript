var greet = 'Hello World';
var num1 = 5;
var num2 = 3;
var total = function (num1, num2) { return num1 + num2; };
var template = "".concat(greet, ", This is my template in typescript.").concat(num1, " + ").concat(num2, " = ").concat(total(num1, num2));
console.log(template.includes('This is not'));
