//Function declaration

function showHelloWorld() {
    console.log("Hello World!")
}
showHelloWorld();

//Fuction expression

const showHelloWorld = function () {
    console.log("Hello World");
}
showHelloWorld()

//Arrow function

const calculate = (a, b) => {
  return a + b;
};
console.log(calculate(1, 1));
