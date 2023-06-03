// Synchronous And Asynchronous : two behavious of coding how to run
// synchronous means line by line code runs | that's why javascript is synchronous programming language.
// asynchronous ye krta hai ke agr koi code execute hone main time lagaa raha hai to aage further code run krdega

// // Sync Example | by default in js
// alert("Hello World");
// console.log("Hello Pakistan");

// // Async Example | or event loop
// function runAfter1Sec() {
//     setTimeout(function () {
//         console.log("done")
//     }, 2000)
// }
// runAfter1Sec();
// console.log("Hello Pakistan");

// Callbacks : ye hote hain functions | wo functions jo async behaviour main hamara kaam complete hone ke baad chalte hain | jisko ham chalaate hain jb hamara kaam comp hojaata hai | jis function ko ham as a parameter pass krte hain
// function runAfter1Sec(val, cb) {
//     setTimeout(function () {
//         // console.log("done")
//         // console.log(typeof)
//         let data = 5 + val;
//         cb(data);
//     }, 1000)
// }
// // function toBeExecutedWhenDone(dataToGet) {
// //     console.log("Yes, It's done", dataToGet);
// // }

// // runAfter1Sec(10, toBeExecutedWhenDone); // we can give arguments like this with callback func.
// // or can be done like following: (without function name)
// runAfter1Sec(10, function (dataToGet) {
//     console.log("Yes, It's done", dataToGet);
// });
// console.log("Hello Pakistan");

// Callback Hell
// function runAfter1Sec(val, cb) {
//     setTimeout(function () {
//         // console.log("done")
//         // console.log(typeof)
//         let data = 5 + val;
//         cb(data);
//     }, 1000)
// }
// runAfter1Sec(10, function (dataToGet) {
//     runAfter1Sec(dataToGet, function (dataToGet1) {
//         runAfter1Sec(dataToGet1, function (dataToGet2) { // Callback Hell
//             console.log(dataToGet2);
//         });
//     });
// });
// console.log("Hello Pakistan");

// Promise:

// function runAfter1Sec(val) {
//     return new Promise(function (resolve) {
//         setTimeout(function () {
//             let data = 5 + val;
//             resolve(data); // resolve main wohi function call horaha hota hai jo neeche .then main hota hai.
//         }, 1000);
//     });
// }

// runAfter1Sec(5)
//     .then(function (data) {
//         return runAfter1Sec(data);
//     })//.then(function (data) {
//         return runAfter1Sec(data);
//     }).then(function (data) {
//         return runAfter1Sec(data);
//     }).then(function (data) {
//         console.log(data)
//     });


// function runAfter1Sec(val) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             let data = 5 + val;
//             if (data % 2 === 0) {
//                 resolve(data);
//             } else reject("Odd number detected")
//         }, 1000);
//     });
// }
// runAfter1Sec(6)
//     .then(function (data) {
//         return runAfter1Sec(data);
//     }).catch(function (error) {
//         console.error(error);
//     })

// // Async/Await:
// async function run() { // async functions by default returns a promise
//     const data = await runAfter1Sec(5);
//     const data1 = await runAfter1Sec(data);
//     const data2 = await runAfter1Sec(data1);
//     const data3 = await runAfter1Sec(data2);
//     // console.log(data3)
//     return data3;
// }
// run().then(function (data3) {
//     console.log(data3)
// })

// // Try and Catch in async/await
// (async function () {
//     try {
//         const data = await runAfter1Sec(6);
//     } catch (err) {
//         console.error(err);
//     }
// })();