//Conversion to Boolean
// Convert numbert to boolean
let bool0 = !1;      //false
let bool00 = !!1;     //true
let bool1 = !0;       //true
let bool01 = !!0;     //false
let bool2 = !123;     //false
let bool02 = !!123;   //true
let bool3 = !null;    //true
let bool03 = !!null;  //false
//convert string to boolean
let bool4= !"Hello";    //false
let bool04 = !!"Hello"; //true
let bool5 = !"";        //true"
let bool05 =!!"";       //false"

console.log(typeof bool0 + '\t'+ bool0);
console.log(typeof bool00 + '\t'+bool00) ;
console.log(typeof bool1 + '\t'+bool1) ;
console.log(typeof bool01 + '\t'+bool01) ;
console.log(typeof bool2 + '\t'+ bool2);
console.log(typeof bool02 + '\t'+ bool02);
console.log(typeof bool3 + '\t'+bool3) ;
console.log(typeof bool03 + '\t'+bool03);
console.log("=========================");
console.log(typeof bool4 + '\t'+bool4) ;
console.log(typeof bool04 + '\t'+ bool04);
console.log(typeof bool5 + '\t'+ bool5);
console.log(typeof bool05 + '\t'+ bool05);
