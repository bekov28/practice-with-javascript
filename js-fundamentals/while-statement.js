// while (tekshiruvSharti) {
//   //  qaytariladigan kod
// }

// Misol:
//While loopdan foydalanib 'Salom dunyo' yozuvini 10 marta ekranga chiqaring:
// let i = 0;
// while (i < 10) {
//   console.log("Salom dunyo");
//   i++;
// }
//While loopdan foydalanib 1dan 10gacha bolgan sonlar yigindisini hisoblang
let i = 1;
sum = 0;

while (i <= 10) {
  sum += i;
  i++;
}
console.log(`Summa: ${sum}`);


// Do/while - while kamida bir marta ishga tushishi kafolatlangan! (false berilsa ham kamida 1marta ishga tushadi)

// Do/whiledan foydalanib, 'Salom dunyo' yozuvini 10 marta ekranga chiqaring
let f = 0;
do {
  console.log("Salom dunyo");
  i++;
} while (i < 10);
