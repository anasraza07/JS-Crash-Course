// PRACTICING SOME COMPLICATED/DIFFERENT CONCEPTS

// let prevStudents = localStorage.getItem("students")
// let students = prevStudents ? JSON.parse(prevStudents) : [];

// function provideStudent() {
//     let stdObj = {
//         name: prompt("Enter your name"),
//         rollNo: prompt("Enter your roll number"),
//         subject: prompt("Enter your subject")
//     }
//     students.push(stdObj)
//     // console.log(stdObj);
//     let stringify = JSON.stringify(students)
//     localStorage.setItem("students", stringify)
//     console.log(students)
// }
// provideStudent()

// class Product {
//     constructor(title, amount) {
//         this.title = title
//         this.amount = amount
//     }
// }

// const product1 = new Product("QMobile", 12000)
// const product2 = new Product("Nokia", 30000)
// const products = [product1, product2];
// // console.log(products)
// products.forEach(p => {
//     console.log(p.title)
// })