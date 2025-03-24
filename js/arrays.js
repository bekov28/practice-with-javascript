
//Arrays

const colors = ["green", "black", "yellow", "brown", "white"];

console.log(colors);
console.log(colors[0]);
console.log('Arrayni oxirgi elementini ochirish: ', colors.pop())
console.log('Arrayni oxiriga yangi element qoshish: ', colors.push('blue'))
console.log('Arrayni boshiga element qoshish: ', colors.unshift('pink'))
console.log('Arrayni boshidagi elementni ochiradi: ', colors.shift())

console.log(colors);

//Shift va unshiftni iloji boricha ishlatmaslik kerak, chunki elementdagi turgan indeksi o'zgarib ketishi mumkin

//Array iteration methods (3 methods)


const cars = ['Mers', 'Daewoo', 'BMW', 'Mitsubishi', 'Hyundai']
cars.sort();    //sort method   -> only sorts strings in an alphabetical order  -> not applicable for numbers
console.log(cars)   

for(let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}

for (let car of cars) {
    console.log(car)
}

cars.forEach((item, index, arr) => {
  console.log(`${index}: ${item} in array ${arr}`)
})

//Split and join methods to create array

const socialMedia = 'Youtube, Instagram, Facebook';
const arr = socialMedia.split(', ')
const text = arr.join('- ')
console.log(arr)
console.log(text)

