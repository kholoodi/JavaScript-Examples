// AND  Operator
console.log( true && true); //true
console.log( true && false); //false
console.log( false && true); //false
console.log( false && false); //false

console.log( 0 && 5); //0
console.log( 5 && 0); //0
console.log( 5 && 10); //10
// With string && oprateror  returns the large value, with empty value returns nothing 
let str0 = 'Hello';
let str1 = ''; 
let str2 = 'World'; 
console.log(str0 && str1); 
console.log(str1 && str2); 
console.log(str0 && str2); // World
// AND with nudefined and null
console.log(undefined && true ); // undefined
console.log(null && true ); // null

//Multiple AND
console.log( true && true && false); //false
console.log( true && 5 && null); //null
console.log( 2 && 5 && 3); //3