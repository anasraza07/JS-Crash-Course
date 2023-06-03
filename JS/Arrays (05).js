// CLASS 05 | ARRAYS AND ITS METHODS

let arr = ["Apple", "Orange", "Mango"]
// arr.push() // add value at the last index
// arr.pop() // remove last index
// arr.shift() // remove first index of an array
// arr.unshift() // add value at the first index
// // arr.length = 3;
// // arr.splice(2, 1, 4, 5) // {from which index, deletecount}: remove or replace values
// let newArr = arr.slice(0, 1) // {from which index, how many?}: provide new copy of array
// console.log(arr)
// console.log(newArr)


// arr.forEach() // loop through array values
// arr.forEach(function (val, index, arr) { // arr parameter is not use too much
//     console.log(index, val);
// })

// arr.filter(): Filters array values |: sirf true aur false ka game hai bss, index bhi leta hai parameter main, naya array laake deraha hota hai that's why isko bhi var main save krna parta hai hamain
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

// arr.sort(): sorts array values, 2 parameter leta hai start se line by line
// let arr = [1, 9, 3, 4, 5, 6, 8, 2, 10];
// let sortedArr = arr.sort(function (a, b) {
//     // if (a > b) {
//     //     return 1; // 1 mtlb sb thk hai 
//     if (a < b) {
//         return 1;
//     } else {
//         return -1;
//     }

// });
// console.log(sortedArr);

// reduce():
// let arr = [1, 9, 3, 4, 5, 6, 8, 2, 10];
// let totalArr = arr.reduce(function (prevVal, curVal) { // phr next time previous main isko wo milega jo return hua hoga  
//     return prevVal + curVal;
// }, 0); // ye jo zero (end result hamara) paas kia hai ye hamain first time dega previous value main
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