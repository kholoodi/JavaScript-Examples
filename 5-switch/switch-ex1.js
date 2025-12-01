const dayNumber = 4; 
let dayName;

switch (dayNumber) {
  case 1:{
    dayName = "Sunday";
    console.log(dayName); }
    break;
  case 2:{
    dayName = "Monday";
    console.log(dayName); }
    break;
  case 3:{
    dayName = "Tuesday ";
    console.log(dayName); }
    break; 
  case 4:{
    dayName = "Wednesday";
    console.log(dayName);  }
    break;
 case 5:{
     dayName = "Thursday";
     console.log(dayName); }
    break;
 case 6:
     dayName = "Friday ";
    break;
 case 7:{
     dayName = "Saturday ";
    console.log(dayName); }
    break;
  default:
    console.log("Please enter the right day number. \nThe day numbers are between 1 to 7, where 1 is Sunday.");
}


