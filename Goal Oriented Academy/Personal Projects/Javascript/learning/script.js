//variables
// let x;
// x = 123;

// console.log(x)

// let age = 25;
// let price = 10.99;
// let gpa = 2.1;

// console.log('you are ${age} years old');
// console.log('the price is ${price}')
// console.log(typeof age)


// let firstName = 'Sandro';

//types
// console.log(typeof firstName)
// console.log(firstName)

// let students = 30;
// students += 1;
// students -= 1;
// students *= students;
// students /= students;
// students = students ** 3;
// students = students % 2;

// console.log(students);

//user input
// let username;

// username = window.prompt('whats ur username');

// console.log(username);

// let username;

// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textcontent = 'hello ${username}'
// }


// let age = window.prompt("How old are you")
// age = Number(age);
// age+=1;
// console.log(age, typeof age);

//type conversion
// let x = '0';
// let y = '0';
// let z = '0';

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);


//constants

// const =  a variable that can't be changed

// const PI = 3.14159;
// let radius;
// let circumference;

// radius = window.prompt('Enter the radius of a cirlce');
// radius = Number(radius);

// circumference = 2 * pi * radius;

// console.log(circumference)

//Math
// Math.PI
// Math.E

// let x = 3.21;
// let y = 2;
// let z;

// z = Math.round(x);
// z = Math.floor(x);
// z = Math.ceil(x);
// z = Math.trunc(x);
// z = Math.pow(x);
// z = Math.sqrt(x);
// z = Math.floor(x);
// z = Math.sin(x);
// z = Math.cos(x);
// z = Math.tan(x);
// z = Math.abs(x);
// z = Math.log(x);
// z = Math.sign(x);
// let max = Math.max(x, y, z)
// let min = Math.min(x, y, z)

// console.log(max)


//math random
// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max - min)) + min;

// console.log(randomNum);

// const myButton = document.getElementById('myButton');
// const label1 = document.getElementById('label1');
// const label2 = document.getElementById('label2');
// const label3 = document.getElementById('label3');
// const min = 1;
// const max = 6;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// myButton.onclick = function(){
//     randomNum1 = Math.floor(Math.random() * max) + min;
//     label1.textContent = randomNum1;
//     randomNum2 = Math.floor(Math.random() * max) + min;
//     label2.textContent = randomNum2;
//     randomNum3 = Math.floor(Math.random() * max) + min;
//     label3.textContent = randomNum3;
// }

// let age = 120;

// if(age >= 18){
//     console.log('you are old')
// }
// else{
//     console.log('you are young')
// }

// let time = 14;

// if(time < 12){
//     console.log('good morning')
// }
// else(
//     console.log('good afternoon')
// )

// let isStudent = false;

// if(isStudent){
//     console.log('you are a student')
// }
// else{
//     console.log('you are not a dtudent!')
// }

// let isStudent = true;

// if(isStudent){
//     console.log('you are a student')
// }
// else{
//     console.log('you are not a dtudent!')
// }

// let age = 16;
// let hasLicense = false;

// if(age >= 16){
//     console.log('you are old enough to drive')

//     if(hasLicense){
//         console.log('you have a license')
//     }
//     else{
//         console.log('you do not have your licesne yet')
//     }
// }
// else{
//     console.log('you must be 16+ to have a drivers license')
// }

// let age = 10;


// if(age >= 100){
//     console.log('you are too old to enter the site')
// }
// else if(age == 0){
//     console.log('you cant enter, you were just born')
// }
// else if(age >= 18){
//     console.log('you are old enough to enter this site')
// }
// else if(age < 0){
//     console.log('your age cant be below 0')
// }
// else{
//     console.log('you must be 18+')
// }

  
//while loops
// let counter = 0;

// while (counter < 3) {
//     alert("hello");
//     counter += 1;
// }

// let counter = 0;
// while (counter < 4) {
//   alert(counter);
//   counter = counter + 1;
// // }

// let counter = 5;

// while (counter < 10) {
//   console.log("Message" + counter);
//   counter = counter + 1;
// }

// let counter = 5;

// while (counter <= 10) {
//   console.log("Message" + counter);
//   counter = counter + 1;
// }

// let seats = 10;

// while (seats > 0) {
//   console.log("Seats left: " + seats);
//   seats = seats - 1;
// }

// let seats = 300;

// while (seats > 0) {
//   alert("Sell ticket");
//   seats = seats - 1;
// }


//for loops
// let i = 0;
// while (i < 5) {
//   alert("Message");
//   i = i + 1;
// }

// for (let i = 0; i < 3; i++) {
//     alert("Hello");
//   }


// let age = prompt('enter an age: 11')

// if(age >= 18){
//   console.log('hello')
// }
// else if(age == 5){
//   console.log('ah ok!')
// }

// let time  = 10;

// if(time < 12){
//   console.log('good morning')
// }
// else{
//   console.log('good afternoon')
// }

// let isStudent = true;

// if(isStudent){
//   console.log('hello')
// }
// else{
//   console.log('duh')
// }

// let age = 16;
// let hasLicense = fals;

// if(age >= 16){
//   console.log('u are old enough to drive')

//   if(hasLicense){
//     console.log('u have a license')
//   }
//   else{
//     console.log('u do not have your license, yet')
//   }
// }
// else{
//   console.log('u must be 16+ to have a license')
// }

// const myText = document.getElementById('myText');
// const mySubmit = document.getElementById('mySubmit');
// const resultElement = document.getElementById('resultElement')
// let age = 16

// mySubmit.onclick = function(){
//   age = myText.value;
//   age = Number(age);


//   if(age >= 10000){
//     resultElement.textContent = `u are too old to enter this site, go sleep dracula`
//   }
//   else if(age == 0){
//     resultElement.textContent = `bro what, ur not even bor yet dude!`
//   }
//   else if(age < 0){
//     resultElement.textContent = `ur age can not be below 0`
//   }
//   if(age  >= 18){
//     resultElement.textContent = `u are old enough to enter this site`
//   }
//   else{
//     resultElement.textContent = `u must be 18+ to enter this site`
//   }
// }



// let age = 16;
// let message = age >= 18 ? 'you are an adult' : 'you are a minor'
// console.log(message)

// let age = prompt('enter your age: ')

// let message = age >= 18 ? 'you are old' : 'you are young'
// console.log(message)


// let time = 9;
// let greeting = time < 12 ? 'its not midday bro' : 'now we are talking :Dd'
// console.log(greeting)


// let isStudent = true;

// let message = isStudent ? 'you are a student' : 'you are not a student'
// console.log(message)

// let purhaseAmount = 125;
// let discount = purhaseAmount >= 100 ? 'wow thats a lot' : 'no discount at all, sry'
// console.log(`your total is ${purchaseAmount - purchaseAmount * (discount /100)}`)

// let day = 1;

// switch(day){
//   case 1:
//     console.log('it is monday')
//     break;
//   case 2:
//     console.log('its tuesday')
//     break;
//   case 3:
//     console.log('its wednesday')
//     break;
//   case 4:
//     console.log('its thursday')
//     break;
//   case 5:
//     console.log('its friday')
//     break;
//   case 6:
//     console.log('its saturday')
//     break;
//   case 7:
//     console.log('its sunday')
//     break;
//   default:
//     console.log(`${day} is not a day`)
// }

// let testScore = 92;
// let letterGrade;

// switch(true){
//   case testScore >= 90:
//     letterGrade = 'A'
//     break;
//   case testScore >= 80:
//     letterGrade = 'B'
//     break;
//   case testScore >= 70:
//     letterGrade = 'C'
//     break;
//   default:
//     letterGrade = 'F'
//     break;
  
// }

// console.log(letterGrade)


// let username = '        SandroZabakhidze   ';

// // let u = username.length
// // console.log(u)

// // username = username.trim()
// // console.log(username)

// username = username.toUpperCase()
// username = username.trim()
// console.log(username)

// // let a = username.indexOf(1)
// // console.log(a)




// function Car(make, model, year, color){
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color
// }

// const car1 = new Car("toyota", "mustang", 2024, "red");
// const car2 = new Car('chevrolet', 'camero', 2025, 'blue')

// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);


// function Person(name, age, lastname){
//     this.name = name,
//     this.age = age,
//     this.lastname = lastname
//     this.refer = function(){console.log(`your name is ${this.name}.`)}
// }

// const person1 = new Person('sandro', 16, 'zabakhidze')

// console.log(person1.name)
// console.log(person1.age)
// console.log(person1.lastname)

// person1.refer()







// const numbers = [1,2,3,4,5]


// const isEven = (number) => number % 2 === 0;


// const evenNumbers = numbers.filter(isEven)

// console.log(evenNumbers)

// const numbers = [1, 2, 3, 4, 5, 6]

// const double = (i) => i *2

// const doubleNumbers = numbers.map(double)

// console.log(doubleNumbers)

// const words = ['apple', 'banana', ' cherry', 'date', 'fig', 'grape']



// const longWords = (word) => word.length > 5;

// const result = words.filter(longWords)

// console.log(result)



// const people = [
//     { name: 'alice', age: 25},
//     { name: 'sandro', age: 15},
//     { name: 'davit', age: 18},
//     { name: 'gio', age: 19}
// ]


// const isAdult = (person) => person.age >= 18;


// const adults = people.filter(isAdult)

// console.log(adults)




// const numbers = [1,2,3,4,5]


// const square = (number) => number ** 2;


// const squares = numbers.map(square)

// console.log(squares)


















// const people = [
//     { name: 'alice', age: 25},
//     { name: 'sandro', age: 15},
//     { name: 'davit', age: 18},
//     { name: 'gio', age: 19}
// ]


// const getName = (person) => person.name;
// const getAge = (person) => person.age

// const names = people.map(getName)
// const ages = people.map(getAge)

// console.log(names, ages)



//node '.\Personal Projects\Javascript\learning\script.js'


// // Custom filter function
// const manualFilter = (array, callback) => {
//     const result = [];
//     for (let i = 0; i < array.length; i++) {
//       if (callback(array[i], i, array)) {
//         result.push(array[i]);
//       }
//     }
//     return result;
//   };
  
//   // Array of numbers
//   const numbers = [1, 2, 3, 4, 5, 6];
  
//   // Callback function to test whether a number is even
//   const isEven = (number) => number % 2 === 0;
  
//   // Use manualFilter to create a new array with only even numbers
//   const evenNumbers = manualFilter(numbers, isEven);
  
//   console.log(evenNumbers); // Output: [2, 4, 6]


// // Custom filter function
// const manualFilter = (array, callback) => {
//     const result = [];
//     for (let i = 0; i < array.length; i++) {
//       if (callback(array[i], i, array)) {
//         result.push(array[i]);
//       }
//     }
//     return result;
//   };
  
//   const items = [
//     { name: "apple", type: "fruit" },
//     { name: "carrot", type: "vegetable" },
//     { name: "banana", type: "fruit" },
//     { name: "spinach", type: "vegetable" }
//   ];
  
//   const isFruit = (item) => item.type === "fruit";
  
//   const fruits = manualFilter(items, isFruit);
  
//   console.log(fruits); 




