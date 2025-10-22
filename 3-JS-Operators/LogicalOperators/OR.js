// OR  Operator
console.log( true || true); //true
console.log( true || false); //true
console.log( false || true); //true
console.log( false || false); //false

console.log( 0 || 5); // 5
console.log( 5 || 0); // 5
console.log( 5 || 10); // 5

let str0 = 'Hello';
let str1 = ''; 
let str2 = 'World'; 
console.log(str0 || str1); //Hello
console.log(str1 || str2); //World
console.log(str0 || str2); //Hello
// OR with nudefined and null
console.log(undefined || true ); // true
console.log(null || true ); // true

//Multiple OR
console.log( true || true || false); //true
console.log( true || 5 || null); //true
console.log( 2 || 5 || 3); //2