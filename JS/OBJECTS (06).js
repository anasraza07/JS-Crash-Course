// CLASS 06 | OBJECTS AND BROWSER STORAGES

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