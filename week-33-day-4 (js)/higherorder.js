// function callme() {
//     console.log("Hello world!");
// }

// callme();

// callme.language = 'English';
// console.log(callme.language);

// ------------------ Everything in javascript is an object and even functions are objects

// function square(x) {
//     return x*x;
// }

// const square = function (x) {
//     return x*x;
// }

// const somevar = square;

// const number = 10;

// console.log(somevar(number));

// ------------- assigning function definition to variables works

// function formalGreet() {
//     console.log('How are you?')
// }

// function casualGreet() {
//     console.log('What\'s up?')
// }

// function greet(type, formal, casual) {
//     if(type=='formal') {
//         formal();
//     } else {
//         casual();
//     }
// }

// greet('casual', formalGreet, casualGreet);


//----- MAP -------------


// let arr1 = [1,2,3];
// let arr2 = []; //Output: 2,4,6

// console.log(arr2);

// for(let i=0; i< arr1.length; i++) {
//     arr2.push(arr1[i]*2);
// }

// arr1.forEach(function(v) {
//     arr2.push(v*2)
// })

// console.log(arr2);

// // With map

// let arr3 = arr1.map(function(v) { 
//     return v*2;
// });

// console.log(arr3);

// let arr4 = arr1.map((v) => v*2);

// console.log(arr4, "arr4");

///Eg2

// const birthYears = [1980, 1985, 1990, 1995, 2000, 2004];
// const ages = [];
// const current= 2021;

// for(let i=0; i< birthYears.length; i++) {
//     ages.push(current-birthYears[i]);
// }

// console.log(ages, 'ages');

// let ages_map = birthYears.map((z)=>current-z);

// console.log(ages_map, 'ages_map');

// let user_list = [
//     {
//       "id": 7,
//       "email": "michael.lawson@reqres.in",
//       "first_name": "Michael",
//       "last_name": "Lawson",
//       "avatar": "https://reqres.in/img/faces/7-image.jpg"
//     },
//     {
//       "id": 8,
//       "email": "lindsay.ferguson@reqres.in",
//       "first_name": "Lindsay",
//       "last_name": "Ferguson",
//       "avatar": "https://reqres.in/img/faces/8-image.jpg"
//     },
//     {
//       "id": 9,
//       "email": "tobias.lawson@reqres.in",
//       "first_name": "Tobias",
//       "last_name": "Lawson",
//       "avatar": "https://reqres.in/img/faces/9-image.jpg"
//     }]

// let filtered_users = [];

// for(let i=0;i<user_list.length;i++) {
//     if(user_list[i].last_name=='Lawson') {
//         filtered_users.push(user_list[i])
//     }
// }

// console.log(filtered_users, 'without filter');

// let fusers = user_list.filter((v)=>v.last_name=='Lawson');

// console.log(fusers, 'with filter');

// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let sum = 0;

// for(let i=0;i<numbers.length;i++) {
//     sum = sum + numbers[i];
// }

// console.log(sum, 'sum with loop');

// function sumreducer(accumulator, currentValue) {
//     return accumulator+currentValue;
// }

// let sum2 = numbers.reduce(sumreducer, 0); //intial value to reduce

// console.log(sum2, 'sum with reduce');


if(0) console.log("0 is true");
if(-1) console.log("-1 is true");
if(1) console.log("1 is true");
if(true) console.log("true is true");
if(false) console.log("false is true");
if('harsh') console.log("harsh is true");
if(10/2) console.log("10/2 is true");
if(null) console.log("null is true");
if(undefined) console.log("undefined is true");