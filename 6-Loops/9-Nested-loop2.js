//Nested loop Example
const height = 10;
//lable the outer loop
outerloop: 
for (let i = 1; i <= height; i++) {
  let row = "";
  //label the inner loop
  innerloop:
  for (let j = 1; j <= i; j++) {
    if (i >= 7) break outerloop;  // Quit the outer loop
    row += "*"; 
  }
    console.log(row);
}