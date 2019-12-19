// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
//Function Decleration
function add(n) {
  return n+1;
}

// Function Expression
let sum = function(n) {
  return n+1;
};

// Arrow Function
let sum = n => n+1;

// Arrow Function With Curly Bracket

let sum = n => {
  return n+1;
};

// Function Invocation

add(21); // "22"


/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
//Function Decleration
function subtract(n) {
  return n-1;
}

// Function Expression
let subtract = function(n) {
  return n-1;
};

// Arrow Function
let subtract = n => n-1;

// Arrow Function With Curly Bracket

let subtract = n => {
  return n-1;
};

// Function Invocation

subtract(21); // "20"

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
//Function Decleration
function add2num(a, b) {
  return a + b;;
}

// Function Expression
let sum2num = function(a, b) {
  return a + b;;
};

// Arrow Function
let sum2num = (a, b) => a + b;

// Arrow Function With Curly Bracket

let sum2num = (a, b) => {
  return a + b;
};

// Function Invocation

add(20,  30); // "50"
/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
//Function Decleration
function subtract2num(a, b) {
  return b - a;
}

// Function Expression
let subtract2num = function(a, b) {
  return b - a;
};

// Arrow Function
let subtract2num = (a, b) => b - a;

// Arrow Function With Curly Bracket

let subtract2num = (a, b) => {
  return b - a;
};

// Function Invocation

subtract(21, 30); // "9"

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
