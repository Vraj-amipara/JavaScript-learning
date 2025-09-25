function myFunction() {
  console.log("Hello");
  console.log("How are you?");
}

myFunction();
myFunction(); //secoubd time print

function myNewFunction(msg) {
  console.log(msg);
}

myNewFunction("hello my new function !");

// add tow Number

function mySum(x, y) {
  // console.log(x + y);
  s = x + y;
  return s;
}

let val = mySum(34, 40);
console.log(val);

// Arrow function

const multiSum = (a, b) => {
  console.log(a * b);
};

const printHello = () => console.log("hello");

// Qs. Create a function using the “function” keyword that takes a String as an argument & returns the number of vowels in the string.

function countVowels(str) {
  let count = 0;
  for (const char of str) {
    // console.log(char); // char ne console ma laava mate
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}

// same kaam in Arrow Function

const myVowels = (str) => {
  let count = 0;
  for (const char of str) {
    // console.log(char); // char ne console ma laava mate
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}
