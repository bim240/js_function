1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.

```js
function calculateDogAge(dogAge, rate=7) {
	return (`"Your doggie is ${dogAge*rate} years old in dog years!"`);
}
```
2. 🎖Write a function named calculateSupply that:
  * [ ] takes 2 arguments: age, amount per day.
  * [ ] calculates the amount consumed for rest of the life (based on a constant max age).
  * [ ] outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
  * [ ] Accept floating point values for amount per day, and round the result to a round number.

```js
const finalAge = 100;
function calculateSupply(age, amountPerDay) {
	return (`You will need ${Math.round((finalAge-age)*amountPerDay*365)} to last you until the ripe old age of ${finalAge}`);
}

```
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Store a celsius temperature into a variable.
  * [ ] Convert it to fahrenheit and output "NN°C is NN°F".
  * [ ] Create a function called fahrenheitToCelsius:
  * [ ] Now store a fahrenheit temperature into a variable.
  * [ ] Convert it to celsius and output "NN°F is NN°C."

```js
var tempcelsius = 30;
var tempfahren = 98;

function celsiusToFahrenheit() {
	return (`${tempcelsius}°C is ${tempcelsius*1.8+32}°F`);
}

function fahrenheitToCelsius() {
	return (`${tempferen}°F is ${(tempfahren-32)*(5/9)}°C`);
}
```
4. 🎖The function below returns true if the parameter age is greater than 18. Otherwise it asks for a confirmation and returns its result:

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Did parents allow you?");
  }
}
```
  4.1 🎖Convert the above function using ternary operator.
  ```js
  function checkAge(age) {
    age > 18 ? true : confirm("Did parents allow you?");
  }
  ```

  4.2 🎖Convert the above function using `||` operator.
  ```js
  function checkAge(age) {
    return (age > 18 ||  confirm("Did parents allow you?") );
  }
  ```
Will the function work differently if else is removed like below?

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Did parents allow you?");
}
```
Is there any difference in the behavior of these two variants? If there is what is that?
no there is not because once a return statement is encountered rest of the code wont be excuted. and also if
second return statement was before 1st then we would have problem.


5. 🎖 Write a function pow(x,n) that returns x in power n.

  * [ ] Use prompt to take values for x and n, and then shows the result of pow(x,n) using alert.
  * [ ] In this task the function should support only natural values of n: integers greater then 1.

```js
var base = prompt("Enter the base");
var power = prompt("Enter the power");

function pow(x,n) {
  if (n%1 == 0 && n > 1 && x >1)
    alert(x**n)
  else 
    alert("The number below 1 is not allowed")
}


// After writing code uncomment to check the answer.
// pow(3, 2); // 9
// pow(3, 3); // 27
// pow(1, 100); // 1
// pow(-31, 2); // "The number below 1 is not allowed"

6. 🎖Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n. Return the result accordingly.

``js
var limit = prompt("Enter the limit");
var result;
var operation = prompt("Enter + or * for sum or multiplication");

for (let i = 1; i <= limit; i++) {
  if (operation =='+')
    result+=i;
  else if (operation == '*')
    result*=i;
  else
    alert("Choose right operation ")
}
console.log(result);

```
6. 🎖Write a program that asks the user for a number n using prompt and prints the sum of the numbers 1 to n

```js
var limit = prompt("Enter the limit");
function sumNnum (n) {
  return ((n*n+1)/2);
}
```
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71

```js
var limit = prompt("Enter the limit");
var result = 0;

function sumNnum (n) {

  for (let i = 0; i <= n;i++) {
    if (n % 7 ==0 || n % 5 == 0)
      result += i;
  }
  return result;
  
}
```

8. 🎖Write a function `min` that takes two arguments and returns their minimum.

```js

function min (a, b) {
  if (a>b)
    return b;
  return a;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
```