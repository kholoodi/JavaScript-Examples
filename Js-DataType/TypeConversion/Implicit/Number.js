//Conversion to Number
let num0 = '10' / 2; // Converts '10' to 2
let num1 = '10' - '2'; // Converts '10' and '2' to 10 and 2
let num2 ='10' * false; // Converts false to 0
let num3 = '10' - true; // Converts true to 1
let num4 ='hello' / 2 // converts 'hello' to NaN
console.log(typeof num0 + '\t'+ num0);
console.log(typeof num1 + '\t'+ num1);
console.log(typeof num2 + '\t'+ num2);
console.log(typeof num3 + '\t'+ num3);
console.log(typeof num4 + '\t'+ num4);
console.log("=========================");

//Convert null to 0 
let num5 = 10 + null; 
let num6 = 10 * null;  
let num7 = 10 -null;
let num8 = null / 2; 
console.log(typeof num5 + '\t'+ num5);
console.log(typeof num6 + '\t'+ num6) ;
console.log(typeof num7 + '\t'+num7) ;
console.log(typeof num8 + '\t'+num8);
console.log("=========================");

//The undefined converts types number and boolean to NaN
let num9 = 10 * undefined;
let num10 = false +undefined;
console.log(typeof num9 + '\t'+num9);
console.log(typeof num10 + '\t'+num10);

