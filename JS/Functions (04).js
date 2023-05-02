// CLASS 04 | FUNCTIONS

// Recursion:
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

// Closures => Scopes:
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