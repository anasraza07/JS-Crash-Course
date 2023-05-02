// CLASS 08 : DATE AND TIME
// * new Date(): ye eik class hai new ke baad jo bhi aata hai wo eik class ka naam hota hai jo object detaa hai banaakr

// const date = new Date();
// console.log(date);
// console.log(date.getDate());
// const months = ["January", "Feb", "March", "Apr", "May", "June"]
// console.log(months[date.getMonth()]);
// console.log(date.getFullYear());

// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// * time aur date system se leke aaraha hota hai internet se nhi.


// const doomsDay = new Date();
// doomsDay.setDate(15);
// doomsDay.setMonth(10);
// doomsDay.setFullYear(2025);
// doomsDay.setHours(0);
// doomsDay.setMinutes(0);

// const date = new Date();

// let diff = doomsDay.getTime() - date.getTime();

// console.log((diff / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1)); // 365.25 for leap year,
// toFixed() always return string

// Digital Clock
// setInterval(function () { // function ka naam dena zaruri nhi anonymous bhi deskte hain
//     const hoursElem = document.getElementById("hours");
//     const minutesElem = document.getElementById("minutes");
//     const secondsElem = document.getElementById("seconds");
//     const amPmElem = document.getElementById("amPm");

//     const date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     let amPm = "AM";
//     if (hours > 11) {
//         amPm = "PM";
//         if (hours > 12) {
//             hours -= 12;
//         }
//     }

//     hours < 10 ? hours = "0" + hours : hours = hours;
//     minutes < 10 ? minutes = "0" + minutes : minutes = minutes;
//     seconds < 10 ? seconds = "0" + seconds : seconds = seconds;

//     hoursElem.innerText = hours;
//     minutesElem.innerText = minutes;
//     secondsElem.innerText = seconds;
//     amPmElem.innerText = amPm;
// }, 1000)
