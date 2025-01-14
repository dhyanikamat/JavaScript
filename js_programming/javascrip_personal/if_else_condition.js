/* If else conditionals
The "if" statement in JavaScript is used to execute a block of code if a certain
 condition is met. The "else" clause is used to execute a block 
 of code if the condition is not met.

Here is the basic syntax for an "if" statement:
*/

if (condition) {
    // code to be executed if condition is true
  }

  // Here is the syntax for an "if" statement with an "else" clause:

  if (condition) {
    // code to be executed if condition is true
  } else {
    // code to be executed if condition is false
  }

  // example 1

  let x = 10;
if (x > 5) {
  console.log("x is greater than 5");
} else {
  console.log("x is not greater than 5");
}

//If else ladder
/*The "if-else ladder" is a control structure in JavaScript that allows you to execute 
a different block of code depending on multiple conditions. It is called a ladder 
because it consists of multiple "if" and "else" statements arranged in a ladder-like fashion.

Here is the syntax for an "if-else ladder": 
*/

if (condition1) {
    // code to be executed if condition1 is true
  } else if (condition2) {
    // code to be executed if condition1 is false and condition2 is true
  } else if (condition3) {
    // code to be executed if condition1 and condition2 are false and condition3 is true
  } 
  else {
    // code to be executed if all conditions are false
  }

  // example 2


let age = 10;
if (age > 15) {
  console.log("x is greater than 15");
} else if (age > 10) {
  console.log("x is greater than 10 but less than or equal to 15");
} else if (age > 5) {
  console.log("x is greater than 5 but less than or equal to 10");
} else {
  console.log("x is less than or equal to 5");
}


// Example 2

