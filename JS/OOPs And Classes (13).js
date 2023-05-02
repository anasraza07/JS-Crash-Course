// // CLASS 13 | OOPs AND CLASSES
// class Product {
//     constructor(title, amount, description) { // round brackets main object key ki values aayengi as a parameter
//         this.title = title; // ... jo = ke baad assign hongi for e.g (title ke andr)
//         this.price = amount;
//         this.details = description;
//     }
// }

// const product1 = new Product("LED TV", 100000, "4K Ultra HD Display")
// const product2 = new Product("Android Phone", 84000, "Android 12 OS")
// const product3 = {
//     title: "Android Phone",
//     price: 1200,
//     details: "Good"
// }
// console.log(product1, product2, product3);
// // console.log(product1 instanceof Product);
// console.log(product3 instanceof Product);

// class Shape {
//     constructor(id, x, y) {
//         this.id = id
//         // this.run = function () { // this is not good, it is wrong bcuz is tarh ye method hr obj ke liye banjayega aur space ghairega
//         // }

//         // this.move(x, y)
//     }
//     move(x, y) { // ... jabke ye aesa nhi karega method isi tarh banne chahiye classes main
//         this.x = x
//         this.y = y
//     }
// }
// const square = new Shape("Square", 5, 6);
// const rectangle = new Shape("Rectangle", 5, 6);
// square.move(5, 6);
// rectangle.move(6, 5);
// console.log(square, rectangle);

// const product3 = {
//     title: "Android Phone",
//     price: 1200,
//     details: "Good"
// }
// console.log(product3)
// // Prototype main objects ke methods hote hain properties hoti hain uski apni aur jo bhi additional hoota hia wo sb

// const students = [];
// class Student {
//     constructor(fullName, rollNo, batch, subject) {
//         this.fullName = fullName;
//         this._rollNo = rollNo;
//         this.batch = batch;
//         this.subject = subject;
//         this.attendence = [];
//     }

//     // get rollNo() {
//     //     return this._rollNo;
//     // }

//     markAttendence() {
//         this.attendence.push(new Date());
//     }

//     static sayYourName() {
//         console.log("Volunteer")
//     }
// }

// class Volunteer extends Student { // extend means uski tamam properties iske andr daaldo
//     static data = "IT IS A STATIC DATA"; // it is a static property
//     constructor(fullName, rollNo, batch, subject) {
//         super(fullName, rollNo, batch, subject); // super() call krta hai constructor ko means
//         this._haveVolunteered = "HTML";
//         this.canVolunteerIn = [];
//     }

//     addVolunteerSkill(skill) {
//         this.canVolunteerIn.push(skill);
//     }

//     // // Getter And Setter
//     // get allVolunteerSkills() {
//     //     return this.canVolunteerIn.join(" ");
//     // }

//     // set haveVolunteered(skill) { // setter ke andr parameter lena laazmi hai
//     //     if (skill !== "") {
//     //         this._haveVolunteered = skill;
//     //     }
//     // }

//     // static sayYourName() { // it is a static method
//     //     console.log("Volunteer")
//     // }
// }


// const hamza = new Student("Hamza Iqbal", 1234, 01, "Javascript");
// const shahzad = new Volunteer("Shahzad Iqbal", 1235, 01, "Javascript");
// hamza.markAttendence()
// // hamza.addVolunteerSkill("HTML") // Output: error bcuz hamza main ye function hi nhi dia hai
// shahzad.markAttendence()
// shahzad.addVolunteerSkill("HTML")
// shahzad.addVolunteerSkill("CSS")
// // shahzad.sayYourName(); // Output: error bcuz class ke naam ke saath call hota hai static method
// Volunteer.sayYourName() // Student main static method ho tb bhi chalega bcuz parent ke static methods bhi child main aajate hain extend krne se
// // console.log(Volunteer.data)


// students.push(hamza);
// students.push(shahzad);

// // console.log(students);
// console.log(hamza.rollNo);
// // console.log(shahzad.allVolunteerSkills);
// // shahzad.haveVolunteered = "CSS"
// // console.log(shahzad._haveVolunteered);
