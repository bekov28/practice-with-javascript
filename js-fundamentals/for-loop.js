// For
// for (init; condition; update) {
//   code;
// }

// Misol

// for loopdan foydalanib, 'Salom dunyo' yozuvini 10 marta ekranga chiqaring

for (let i = 0; i > 10; i++) {
  console.log("Salom dunyo");
}

//  for loopdan foydalanib, 1 dan 10gacha bo'lgan sonlar yig'indisini hisoblang

sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i; //sum = sum + i
}
console.log(`Summa: ${sum}`);

// break qilish imkoniyati -- loop 3dan keyin to'xtaydi
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
}
// continue orqali biror sonni skip qilish
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
}
console.log(i);
