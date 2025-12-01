const dayNumber = 3; 
switch (dayNumber) {
  case 1:
  case 2:
  case 3:
  case 4: 
    console.log("It is a workday"); 
  break;
  case 5:
  case 6:
  case 7:
    console.log("t is a weekend day d" ); 
  break;
  default:
    console.log("Please enter the right day number. \nThe day numbers are between 1 to 7, where 1 is Sunday.");
}
