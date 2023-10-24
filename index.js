//Problem 1: Write a function to calculate the area of a triangle.
function calculateTriangle(base, height) {
  return (base * height) / 2;
}
let area = calculateTriangle(10, 12);
//console.log(area);

//Problem 2: Write a function to convert degrees to radians.
function degreeToRadians(degree) {
  return (degree * Math.PI) / 180;
}
let radians = degreeToRadians(70);
//console.log(radians);

//Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.
function calculateFactorial(number) {
  if (number == 0 || number < 0) {
    return 1;
  }
  return number * calculateFactorial(number - 1);
}
let factorial = calculateFactorial(10);
//console.log(factorial);

//Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.
function isPrime(num) {
  return num > 1 ? true : false;
}
let primeNumCheck = isPrime(5);
//console.log(primeNumCheck);

//Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.
let arr1 = ["Intersteller ", "Inception "];
let arr2 = ["Appolo 13 ", "Tenet"];
function mergeArrays(array1, array2) {
  return array1.concat(array2);
}
let newArray = mergeArrays(arr1, arr2);
//console.log(newArray);

//Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.
function isLeapYear(year) {
  return year % 4 == 0 ? "This is a leap year" : "Not leap year";
}
let leapYearCheck = isLeapYear(2022);
//console.log(leapYearCheck);

//Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.
let array = ["apple", "mango", "pineapple", "apple", "guava", "pineapple"];
function removeDuplicates(arr) {
  return [new Set(arr)];
}
let nArray = removeDuplicates(array);
//console.log(nArray);

//Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.
let temperature = 90;
function convertToCelsius(tempInFahren) {
  return ((tempInFahren - 32) * 5) / 9;
}
let Celsius = convertToCelsius(temperature);
//console.log(Celsius);

//Problem 9: Write a function to find the maximum of five numbers.
let numbers = [5, 3, 9, 11];
function findMaxNum(num) {
  return Math.max(...numbers);
}
let maximumNumber = findMaxNum(numbers);
//console.log(maximumNumber);

//Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]
let sampleStr = "Superman";
function evenOdd(str) {
  //return sampleString.length / 2 == 0 ? "Even" : "Odd";
  for (let i = 1; i <= str.length; i++) {
    return str.length % 2 == 0 ? "even" : "odd";
  }
}
let output = evenOdd(sampleStr);
//console.log(output);

//1. Explain the difference between 'if...else' and 'switch' statements for conditional logic.

//2. What is JavaScript, and what is its primary purpose in web development?
//Ans: Javascript is a object-oriented programming language. Its primary purpose is to makes website dynamic and interactive.

//3. Explain the difference between var, let, and const when declaring variables in JavaScript.
//Ans: var is a global scope on the other hand let and const are block scope.
// We can update or redeclair var, let can be updated but not re-declaredd.
// and const cant be updated or redeclared.

//4. Explain the concept of "scope" in JavaScript and the difference between global and local scope.
//And: Generally scope means '{}' , here in this curly bracket is a scope or block. That means when we write javascript code like block scope
// variables and function in the {} curly bracket  and these variables and function only can be access in the bracket ,
//We can't access them outside of the curly bracket . Its called scope .

//Difference between global scop and local scope:
//Global variable are those declared outside of block using var keyword.
//When we declared a variable with var , we can access the variable inside or outside of block , that why var called global variable .But sometimes when we write
//lot of javascript code then global variable can do problem .
//and Local variable are those declared inside of block using let and const keyword. let and const (local scope)
//When we declared a local variable like let or const , it can be access only in the same scope , we cant access from others scope or globally.
// There are was some problem with global varibel (var) but  after entry of var and let , these problem has been solved . The good practice is to use local variable let and const .

//5. What is the difference between "null" and "undefined" in JavaScript?
//Ans: 'null' means an empty value and 'undefined' means the variable has been declared but value of the variable is not assigned.
