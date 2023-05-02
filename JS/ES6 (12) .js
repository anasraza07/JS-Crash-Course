// CLASS 12 | ES6

// // Arrow functions

// function add(a, b) { // Normal functions
//     return a + b;
// }

// const subtract = (x, y) => { // Arrow functions
//     return x - y;
// }

// const multiply = (x, y) => x * y; // no need of curly brackets or return keywords (by default it will return your statement)

// const round = num => Math.round(num); // no need of round brackets when one parameter is required

// console.log(subtract(5, 3));
// console.log(multiply(5, 3));
// console.log(round(5.97786));

// const obj = {
//     name: "Saylani",
//     print: function () {
//         // setTimeout(function () { // this will not work bcuz normal function make scopes
//         //     console.log(this.name)
//         // }, 2000)
//         setTimeout(() => { // ... while arrrow functions doesn't make scope of its own
//             console.log(this.name)
//         }, 2000)
//     }
// }

// obj.print();

// // Default parameters
// function add(x = 5, y = 10) { // default parameters
//     return x + y;
// }
// console.log(add(3, 5)); // when arguments is passed it will ignore default parameterrs

// // Rest Paramerter
// function printAll(x, y, ...z) { // Rest paramerter
//     console.log(x, y, z)
// }
// printAll(1, 2, 3, 4, 5, 6, 7) // arguments after x and y will add in an array

// // Short Syntax for Objects
// const firstName = "Anas"
// const lastName = "Raza"

// Destructuring
// const obj = {
//     // firstname:firstName,
//     // lastName:lastName
//     firstName, // short syntax for objects
//     lastName,
//     // printName: function () {
//     //     console.log(this.firstName, this.lastName);
//     // }
//     printName() { // short syntax for making methods in an object
//         console.log(this.firstName, this.lastName);
//     }
// };

// obj.printName();
// // console.log(obj)

// // To Get key in an object with the same name
// const obj = {
//     firstName: "Anas",
//     lastName: "Raza"
// }

// // const firstName = obj.firstName;
// const {firstName} = obj; // short syntax for getting keys in object and storing it in variable
// console.log(firstName);

// // To Get index in an array with the same index and then to store it in variable.
// const arr = ["Ishaq", "Bhojani", "Saylani"];
// const [firstInd, lastInd, abc] = arr;
// // const [, lastInd] = arr; // for getting 1st index of array
// console.log(lastInd)
// // console.log(abc)
// // console.log(firstInd)

// // Spread Operators
// const arr = ["Ishaq", "Bhojani", "Saylani"];
// const newArr = ["Some Data", ...arr, "Another Data"];
// console.log(newArr);
// const obj = {
//     firstName: "Anas",
//     lastName: "Raza"
// }
// const newObj = {
//     index: 01,
//     ...obj,
//     hobby: "Video Games",
//     firstName: "Muneer"
// }
// console.log(newObj);

// // OOPs (Object Oriented Programming) | Classes
// const obj = {
//     name: "LED TV",
//     price: 100000
// }
// const obj2 = {
//     title: "Samsung Mobile Phone",
//     amount: 140000
// }

// const products = [obj, obj2];
// products.forEach(p => console.log(p.name)); // Output: 2nd one will be showing undefined

// class Product {
//     constructor(title, price) {
//         this.title = title;
//         this.price = price;
//     }
// }

// const product1 = new Product("LED TV", 100000);
// const product2 = new Product("Samsung Galaxy", 140000);
// const products = [product1, product2];

// products.forEach(p => console.log(p.title)); // now it is good | this is the one use of classes
















// Constructor functions => self learning 