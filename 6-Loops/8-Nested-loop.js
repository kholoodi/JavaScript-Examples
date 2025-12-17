//Nested loop Example
// Number of rows 
const height = 5;
//1- outer loop control the rows 
for (let i = 1; i <= height; i++) {
  // A variable to save the current row
  let row = "";
  
  // 2- inner loop to control the columns (stars)
  // This  will be executed by the current i value's
  for (let j = 1; j <= i; j++) {
    row += "*";     // Add a star to the row 
  }
  
  // print the row and move to the next one 
  console.log(row);
}