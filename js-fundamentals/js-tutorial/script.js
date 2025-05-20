// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// let answers = [];
// let questions = [
//   "What is your name?",
//   "What is your favorite color?",
//   "What is your favorite animal?",
// ];

// for (let i = 0; questions.length > i; i++) {
//   answers[i] = prompt(questions[i]);
// }
// console.log(answers);

// let age = prompt("Yoshingiz nechchida?");

// switch (age) {
//   case "18":
//     alert("Sizni yoshiz 18da");
//     break;
//   case "25":
//     alert("Sizni  yoshiz 25da");
//     break;
//   default:
//     alert("Sizni yoshiz nomalum");
// }
// let p = document.querySelector("p");
// console.log(p);

let text = document.querySelector("p");
text.addEventListener("mouseenter", function () {
  text.textContent = "Hello Friends!";
});

text.addEventListener("mouseleave", function () {
  text.textContent = "Hello World!";
});

