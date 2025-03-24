//spread operator (available from ES8)

//syntax
// const newArray = [...oldArray];
// const newObject = { ...oldObject };

// Copying an Array (Avoids Mutation)

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); // [1, 2, 3]
// This creates a new array instead of referencing the original one.

//Merging Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];

console.log(mergedArray); // [1, 2, 3, 4, 5, 6]

//Adding Elements to an Array
const numbers = [2, 3, 4];
const updatedNumbers = [1, ...numbers, 5];

console.log(updatedNumbers); // [1, 2, 3, 4, 5]

//Copying an Object
const person = { name: "Alice", age: 25 };
const newPerson = { ...person };

console.log(newPerson); // { name: "Alice", age: 25 }

//Merging Objects

const user = { name: "John", age: 30 };
const updatedUser = { ...user, location: "USA" };

console.log(updatedUser);
// { name: "John", age: 30, location: "USA" }

//working with functions

function log(a, b, c) {
  console.log("First parameter: ", a);
  console.log("Second parameter: ", b);
  console.log("Third parameter: ", c);
}
const arr = [1, 2, 3];
log(...arr);



//Spread (...) expands elements.
//Rest (...) collects multiple elements into an array.

