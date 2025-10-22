//  Bitwise Operators 
/* How present 0, 1, 2 and 3 numbers in binary with 8 bit (byte)
   0 = 00000000
   1 = 00000001
   2 = 00000010
   3 = 00000011
   */
const a = 2;
const b = 3; 
//AND (&)
let c = a & b;
const binaryString = c.toString(2);
const eightBitBinary = binaryString.padStart(8, '0'); 
console.log(c +"\t"+ eightBitBinary ); //2       00000010
/*
To represent a number in 8-bit binary in JavaScript,
 the toString(2) method is used to convert the decimal number to its binary string representation, 
and then padStart(8, '0') is applied to ensure it is 8 bits long with leading zeros if necessary.
*/