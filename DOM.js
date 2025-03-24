//Eski usul

// const box = document.getElementById('box');   //doim birinchi elementni qaytaradi
// const box = document.getElementsByClassName('box');
// const buttons = document.getElementsByTagName('.circle');   //result is an array


//Yangi usul
const box = document.querySelector('#box')    //yuqoridagilarni o'z ichiga oladi 
const buttons = document.querySelectorAll('button')

//style in JS

box.style.backgroundColor = 'red';
box.style.width= '400px';

//to create div
const div = document.createElement('div');
div.classList.add('heart');   //to create a new class to div
document.body.append(div);   //html body ni eng oxiriga div qo'shadi
document.body.prepend(div);  //eng boshiga div qo'shish
div.textContent = 'Hello World'; //textni o'zgartirish uchun







