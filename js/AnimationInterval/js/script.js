const btn = document.querySelector("#btn");

const moveCar = () => {
  const car = document.querySelector(".car");
  let position = 0;

  const animationId = setInterval(moving, 10);

  function moving() {
    if (position === 1000) {
      clearInterval(animationId);
    } else {
      position++;
      car.style.left = position + "px";
    }
  }
};

btn.addEventListener("click", moveCar);

//setTimeout

// setTimeout(() => {
//   console.log("Delayed for 2 secs");
// }, 2000);

//setTimeOutni setInterval holatida ham qilish mumkin:

// let id = setTimeout(function log() {
// 	console.log('Hello World')
// 	id = setTimeout(log, 1000)
// }, 1000)

// let timerId,
//   index = 0;

// btn.addEventListener("click", () => {
//   timerId = setInterval(logger, 500);
// });

// function logger() {
//   if (index === 5) {
//     clearInterval(timerId);
//   }
//   console.log("Hello World");
//   index++;
// }
