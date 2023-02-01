var price = 100;
//  console.log(typeof price);
var price = '100';
// console.log(typeof price);
var isHappy = true;
// console.log(typeof isHappy);
var romantic;
// console.log(typeof romantic);
/* var nam = "false";
console.log(typeof nam); */

// advanced
var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(1);
sum = parseFloat(sum);
// console.log(sum);

//toFixed with parseInt
var a = 333, b = 666;
var c = a + b;
console.log('total num:', c);
c = c.toFixed(2); //toFixed() for fractional number
console.log(c);
c = parseInt(c);
console.log(c);