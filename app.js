// var canot be start with  a number 
// only _ and $ speacial charachters cAN BE used

// string.includes() : it will return true or false
// a = a * 2; or a*=2; is same but second one is shorthand
// ** is to the power sign


// Recursion
// function writeData(data, times) {
//     document.write(data);
//     if (times > 0) {
//         writeData(data, times - 1)
//     }
// }
// writeData("Hello", 5);

// function factorial(num) {
//     if (num > 1) {
//         return num * factorial(num - 1)
//     }
//     return 1
// }

// console.log(factorial(5));

// Closures => Scopes
// Global scope (parent) => whole file
// local scope (child) => inside function

// let abc = 7; // Global scope

// function print(abc) {
//     // abc = local scope
//     return function (def) { // anonymous function
//         console.log(abc + def);
//     }
// }

// let innerFunction = print(7);
// innerFunction(7);
// let innerFunction2 = print(8);
// innerFunction2(5);

// closures isi kaam aate hain aksar : aesa var banaane ke liye jo ke access naa hosake bahar se bhi
// function saveUrl(url) {
//     return function () {
//         fetch(url)
//             .then(response => response.json())
//             .then(json => console.log(json))
//     }
// }

// // Save URL
// let makeRequest = saveUrl("https://jsonplaceholder.typicode.com/todos")

// // Request attempt
// makeRequest();
// makeRequest();

// closure naa ho to koi bhi url change kr skta hai jese ke:
// let url = "https://jsonplaceholder.typicode.com/todos"
// function saveUrl() {
//     return function () {
//         fetch(url)
//             .then(response => response.json())
//             .then(json => console.log(json))
//     }
// }

// // Save URL
// let makeRequest = saveUrl()

// // Request attempt
// makeRequest();
// // url = "bxhsbchsbsbcijb"
// makeRequest();

// let arr = ["Apple", "Orange", "Mango"]
// arr.forEach() // loop through array values
// arr.forEach(function (val, index, arr) { // arr parameter is not use too much
//     console.log(index, val);
// })

// arr.filter() : Filters array values |: sirf true aur false ka game hai bss, index bhi leta hai parameter main, naya array laake deraha hota hai that's why isko bhi var main save krna parta hai hamain
// let arr = [1, 9, 3, 4, 5, 6, 8, 2, 10];
// let filteredArr = arr.filter(function (val) {
//     return val % 2 === 0;
//     // if (val % 2 === 0) {
//     //     return true;
//     // }
//     // else {
//     //     return false;
//     // }

// })
// console.log(filteredArr, arr);

// arr.sort() : sorts array values, 2 parameter leta hai start se line by line
// let arr = [1, 9, 3, 4, 5, 6, 8, 2, 10];
// let sortedArr = arr.sort(function (a, b) {
//     // if (a > b) {
//     //     return 1;
//     if (a < b) {
//         return 1;
//     } else {
//         return -1;
//     }

// });
// console.log(sortedArr); 

// reduce()
// let arr = [1, 9, 3, 4, 5, 6, 8, 2, 10];
// let totalArr = arr.reduce(function (prevVal, curVal) {
//     return prevVal + curVal;
// }, 0);
// console.log(totalArr);

// let arr = ["Happy", "Birthday", "Anas"];
// let finalStr = arr.reduce(function (prevVal, curVal) {
//     return prevVal + " " + curVal;
// }, "");

// console.log(finalStr);

// yehi kaam forEach() se:
// let arr = ["Happy", "Birthday", "Anas"];
// let finalStr = "";
// arr.forEach(function (val) {
//     finalStr += "   " + val

// });
// console.log(finalStr);

// array.map() : khud cover krna hai

// Objects
// let person = {
//     name: "Nadir",
//     cnic: 123456,
//     eyesColor: "black",
//     canSpeakEnglish: false,
//     speak: function (sentence) {
//         console.log(sentence + this.name); // ye faida hai object ke andr method banaane ka ke "this" wala keyword apne obj ka name khud legaaa
//     }
// };

// let person2 = { // person2 = Object
//     name: "Ameen", // name: "Ameen" = Property
//     cnic: 123456, // cnic = Key
//     eyesColor: "black", // "black" = Value
//     canSpeakEnglish: false,
//     speak: function (sentence) {
//         console.log(sentence + this.name); // ye faida hai object ke andr method banaane ka ke "this" wala keyword apne obj ka name khud legaaa
//     }
// };

// person.speak("Hello, I'm ")
// person2.speak("Hello, I'm ")
// console.log(person.name);

// is tarah to banta hai manually again nd again banaate raho
// let student1 = {
//     name: "Hamza",
//     rollNo: 420,
//     teacher: "Nadir",
//     className: "javascript"
// };

// let student2 = {
//     name: "Farrukh",
//     rollNo: 421,
//     teacher: "Ameen",
//     className: "CSS"
// };

// lekin is tarh functions ko as a employee use krke banao objects jese:
// function provideStudents(name1, rollNo1, teacher1, className1) {
//     return {
//         name: name1,
//         rollNo: rollNo1,
//         teacher: teacher1,
//         className: className1
//     }
// }

// // user se input leke save krwaana:
// let prevStudents = localStorage.getItem("students"); // get from localStorage
// // console.log(prevStudents)
// let students = prevStudents ? JSON.parse(prevStudents) : []; // ab agr localStorage main kch nhi hogaa to ye null dega | null ka mtlb hai khaali kch nhi jaga hai lekin wo empty hai, so null is false | au agr koi bhi data aajata hai to wo if ke andr true show karegaaa.
// function provideStudents() {
//     let stdObj = {
//         name: prompt("Enter Name"),
//         rollNo: +prompt("Enter Roll No"),
//         teacher: prompt("Enter Teacher Name"),
//         className: prompt("Enter Your Class")
//     }
//     students.push(stdObj);
//     console.log(students);
//     let stringify = JSON.stringify(students) // converted to String
//     localStorage.setItem("students", stringify) // saved to LocalStorage
// }
// // localStorage.setItem("name", "anas");

// let obj = {name: "anas"};
// obj.name = "ubaid";
// delete obj.name; // delete keyword returns boolean value

// console.log(obj)

// CLASS 07 : DOM (Document Object Modal)
// let myPara = document.getElementById("my-para"); 
// myPara.innerText = "Hello"; // to is whole updation ko ham kehte hain dom manipulation.

// let myPara = document.querySelector("p"); // sbse pehla p laake dedega 
// let myPara = document.querySelector("#my-para"); // id laake dega is naam ki 
// myPara.innerHTML = "<b>Pakistan Zindabad</b>" // jb poori html likhni ho to innerHTML use kro.
// console.log(myPara);

// let myPara = document.querySelector("#my-para");
// myPara.innerHTML = "<b>Pakistan Zindabad</b>";
// myPara.style.backgroundColor = "#000"; // black
// myPara.style.color = "#fff"; // white

// setInterval(function () {
//     if (myPara.style.display === "none") {
//         myPara.style.display = "block";

//     } else {
//         myPara.style.display = "none";
//     }
// }, 500)

// let yourPara = document.querySelector("#your-para");
// yourPara.innerHTML = "<b>Pakistan Zindabad</b>";
// yourPara.style.backgroundColor = "#000"; // black
// yourPara.style.color = "#fff"; // white
// yourPara.style.width = "100%";

// setInterval(function () {
//     let width = yourPara.style.width;
//     if (width === "100%") {
//         yourPara.style.width = "30%"
//     } else {
//         width = +width.replace("%", "");
//         yourPara.style.width = width + 10 + "%";
//     }
// }, 500)

// setTimeout : khud cover krna hai

// let newPara = document.querySelector("#new-para");
// newPara.innerHTML = "<b>Pakistan Zindabad</b>";
// setInterval(function () {
//     let color1 = Math.floor(Math.random() * 16777215).toString(16);
//     let color2 = Math.floor(Math.random() * 16777215).toString(16);
//     console.log(color1, color2);
//     // let color1 = Math.round(Math.random() * 1000000);
//     // let color2 = Math.round(Math.random() * 1000000);
//     newPara.style.backgroundColor = "#" + color1;
//     newPara.style.color = "#" + color2;
// }, 500)

// let dataThatCanChange = "asdf";
// dataThatCanChange = "qwert";
// const dataThatCannotBeChange = "zxcv"; // can be use for functions or for e.g.
// const myPara = document.querySelector("#my-para");
// dataThatCannotBeChange = "anmass" // error
