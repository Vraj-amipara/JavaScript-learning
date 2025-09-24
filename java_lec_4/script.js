let fruits = ["apple", "banana", "grapes", "mango"];
console.log(fruits);
console.log(fruits[2]);
console.log(fruits.length);
fruits[1] = "orange";


// for loop in array
let name = ["harshit", "mohit", "nitish", "sumit", "ankit", "manish", "rohit"];

for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}

// fot of loop
let city = ["delhi", "mumbai", "kolkata", "chennai"];

for (let n of city) {
    console.log(n);
}

// Qs.1 For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
// Find the average marks of the entire class.

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let m of marks) {
    sum = sum + m;
}

console.log("Average marks of the class is: " + sum / marks.length);
console.log(`Average marks of the class is: ${sum / marks.length}`);

// Qs.2 For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

let prices = [250, 645, 300, 900, 50];
let ind = 0;

for (let i = 0; i < prices.length; i++) {
    let offer = prices[i] / 10;
    prices[i] = prices[i] - offer
}
console.log(prices);

// Array mathods 

// push() -> add element at last
// pop() -> remove element from last
// tostring() -> convert array to string
// concat() -> merge two or more arrays
// unshift() -> add element at start
// shift() -> remove element from start
// slice() -> extract a section of an array and return a new array
// splice() -> add, remove or replace elements at a specific index
// indexOf() -> find index of an element
// includes() -> check if an element is present or not (return true/false)

let animals = ["tiger", "lion", "elephant"];
animals.push("deer"); //push at last
console.log(animals);

animals.pop("dear"); //pop from last
console.log(animals);

animals.unshift("monkey"); //add at start
console.log(animals);

animals.shift("monkwy"); //remove from start
console.log(animals);

console.log(animals.toString()); //convert array to string

let birds = ["peacock", "parrot"];
let newArray = animals.concat(birds); //merge two arrays
console.log(newArray);

let hiros = ["ironman", "thor"];
console.log(hiros.unshift("supermen")); //add at start
console.log(hiros);

console.log(hiros.shift("supermen")); //remove from start
console.log(hiros);

let cars = ["audi", "bmw", "ferrari", "lamborghini"];
console.log(cars);

console.log(cars.slice(1, 3)); //extract a section of an array and return a new array

let num = [0, "apple",12, -4 + 12 * 8 / 3 ,(15,25,60), 1, "banana", "banana",44,"grapes",85,14,3, "grapes",7,6,1,9, "mango"];
num.splice("kiwi",11,4,"apple","banana",12);

// let num_89 = ["kiwi",0, "apple",28 ,(15,25,60), 1, "banana", "banana",44,"grapes","apple","banana",12,6,1,9, "mango"];
