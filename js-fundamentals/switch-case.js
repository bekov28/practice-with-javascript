// Notes:
// break va defaultni olib tashlamaslik kerak;

const number = 2;
let output;

switch (number) {
  case 1:
    output = "bir";
    break;
  case 2:
    output = "ikki";
    break;
  default:
    output = "topilmadi";
    break;
}
console.log(`Qiymat: ${output}`);

//Misol:
//Berilgan 2 son ustida ko'rsatilgan arifmetik amalni bajaring va natijasini konsolga chiqaring:

const simpleCalculator = (num1, num2, operation) => {
  switch (operation) {
    case "add":
      console.log(`Yig'indisi: ${num1 + num2}`);
      break;
    case "subtract":
      console.log(`Ayirmasi: ${num1 - num2}`);
      break;
    case "multiply":
      console.log(`Ko'paytmasi: ${numb1 * num2}`);
      break;
    case "divide":
      console.log(`Bo'linmasi: ${num1 / num2}`);
      break;
    default:
      console.log(`Aniqlanmagan amal`);
  }
};
const a = 20;
const b = 5;
const operation = "subtract";
simpleCalculator(a, b, operation);
