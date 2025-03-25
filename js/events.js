const btn = document.querySelector("button");

// btn.onclick = function () {
//   console.log(1);
// };

// btn.ondblclick = function () {
//   console.log(2);
// };

btn.addEventListener("click", (event) => {
  event.preventDefault();   // to prevent the page from reloading;
  console.log(event.target);
  event.target.textContent = 'Button'
  event.target.style.backgroundColor = "red";
});
