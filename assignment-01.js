/*
// no. 1
 var userOne = +prompt("Enter the first number");
var userSecond = +prompt("Enter the second number");
if (userOne > userSecond) {
    console.log(userOne)
}
else {
    console.log(userSecond);
}

// no. 2
 var userNum = +prompt("Enter your number with any sign");
if (userNum >= 0) {
    alert("The sign is +");
}
else if (userNum < 0) {
    alert("The sign is -");
}
else {
    alert("Enter the number only");
}

// no. 3
var firstNum = +prompt("Enter the first number");
var secondNum = +prompt("Enter the second number");
var thirdNum = +prompt("Enter the third number");
var fourthNum = +prompt("Enter the fourth number");
var fifthNum = +prompt("Enter the fifth number");

if (firstNum > secondNum && firstNum > thirdNum && firstNum > fourthNum && firstNum > fifthNum) {
    console.log("Large number is " + firstNum)
}
else if (secondNum > firstNum && secondNum > thirdNum && secondNum > fourthNum && secondNum > fifthNum) {
    console.log("Large number is " + secondNum);
}
else if (thirdNum > firstNum && thirdNum > secondNum && thirdNum > fourthNum && thirdNum > fifthNum)
    console.log("Large number is " + thirdNum);
else if (fourthNum > firstNum && fourthNum > secondNum && fourthNum > thirdNum && fourthNum > fifthNum)
    console.log("Large number is " + fourthNum);
else if (fifthNum > firstNum && fifthNum > secondNum && fifthNum > thirdNum && fifthNum > fourthNum)
    console.log("Large number is " + fifthNum);
else {
    alert("Enter correct number");
}

// no. 4
 for (var i = 0; i <= 15; i++) {
    if (i % 2 === 0)
        console.log(i + " is even");
    else {
        console.log(i + " is odd");
    }
}

// no. 5
 var userMarks = prompt("Enter Your Total Marks");
if (userMarks >= 90 && userMarks <= 100) {
    alert("Your grade is A")
}
else if (userMarks >= 80 && userMarks < 90) {
    alert("Your grade is B")
}
else if (userMarks >= 70 && userMarks < 80) {
    alert("Your grade is C")
}
else if (userMarks >= 60 && userMarks < 70) {
    alert("Your grade is D")
}
else if (userMarks < 60 && userMarks >= 0) {
    alert("Your grade is F")
}
else {
    alert("Enter valid number");
}

// no. 6
 for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    }
    else if (i % 3 === 0) {
        console.log("Fizz")
    }
    else if (i % 5 === 0) {
        console.log("Buzz")
    }
    else {
        console.log(i)
    }
}

// no. 7
 for (var i = 1; i <= 5; i++) {
    var star = "";
    for (var j = 0; j < i; j++) {
        star += "*" + " ";
    }
    console.log(star)
}
*/
