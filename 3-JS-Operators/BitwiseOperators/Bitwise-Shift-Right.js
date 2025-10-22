//  Bitwise Operators 
/* How present 0, 1, 2, 3 and 4 numbers in binary with 8 bit (byte)
   0 = 00000000
   1 = 00000001
   2 = 00000010
   3 = 00000011
   4 = 00000100
   */
//Left Right (>>)
const a = 3;
let b = a >> 1;
let c = a >> 2;
const binaryString = b.toString(2);
const eightBitBinary = binaryString.padStart(8, '0');
console.log(b +"\t"+ eightBitBinary); //1       00000001
const binaryString0 = c.toString(2);
const eightBitBinary0 = binaryString0.padStart(8, '0');
console.log(c +"\t"+ eightBitBinary0); //0       00000000

/*
To represent a number in 8-bit binary in JavaScript,
 the toString(2) method is used to convert the decimal number to its binary string representation, 
and then padStart(8, '0') is applied to ensure it is 8 bits long with leading zeros if necessary.
*/