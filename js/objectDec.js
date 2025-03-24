//Object destruction

const person = {
  name: "Berd",
  year: 2001,
  job: "Full Stack Developer",
  hobbies: {
    sport: "Football",
    games: "UFC",
  },
  sayHello: function () {
    console.log(`Hello, ${this.name}`);
  },
};

for (let key in person) {
  // iteration
  console.log(key);
}
person.sayHello();

//for in - faqat object uchun
//for of - faqat array uchun

//To measure length
console.log(Object.keys(person).length);
