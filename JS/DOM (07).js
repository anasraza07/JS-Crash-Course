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