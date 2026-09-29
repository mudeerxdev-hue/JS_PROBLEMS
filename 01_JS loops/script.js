// // ==============
// // QUESTION-NO-01
// // ==============
// let num = 1;

// while (num >= 10) {
//   console.log(num);
//   num++;
// }

// // ==============
// // QUESTION-NO-02
// // ==============

// let evenNum = 1;

// for (let evenNum = 0; evenNum <= 50; evenNum++) {
//   console.log(evenNum);
// }

// // ==============
// // QUESTION-NO-03
// // ==============

// let i = 10;

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// console.log("Happy New Year");

// // ==============
// // QUESTION-NO-04
// // ==============

// let multiNum = Number(prompt("Enter the number"));

// for (let num = 1; num <= 10; num++) {
//   console.log(`${multiNum} x ${num} = ${multiNum * num}`);
// }

// // ==============
// // QUESTION-NO-05
// // ==============

// let sum = 0;
// let sumNumber = Number(prompt("Enter the sum number"));

// for (let i = 0; i < sumNumber; i++) {
//   sum = sum + i;
// }
// console.log(`this is the sumNumber is ${sumNumber}and total sum is ${sum}`);

// // ==============
// // QUESTION-NO-06
// // ==============

// let correctPassword = "test123";
// let Password = "";

// while (Password !== correctPassword) {
//   Password = prompt("enter your password");
//   if (Password !== correctPassword) {
//     console.log("Please Try Again");
//   } else {
//     console.log("Succsesfully Login");
//   }

// }

// // ==============
// // QUESTION-NO-07
// // ==============

// let num = Number(prompt("Enter the positive Number"));

// while (num <= 0) {
//   num = Number(prompt("please Enter the positive Number"));
// }

// console.log(`${num} is positive number`);

// // ==============
// // QUESTION-NO-08
// // ==============

// let marks = [78, 92, 65, 88, 55, 73];
// let total = 0;

// for (let i = 0; i < marks.length; i++) {
//   console.log(marks[i]);
//   total = total + marks[i];
// }

// console.log(total);

// // ==============
// // QUESTION-NO-09
// // ==============

// let prices = [500, 1200, 350, 800, 150];
// let total = 0;

// for (let i = 0; i < prices.length; i++) {
//   console.log(prices[i]);
//   total = total + prices[i];
// }
// console.log(`The total product prices is ${total}`);

// // ==============
// // QUESTION-NO-10
// // ==============

// let students = ["Ali", "Ahmed", "Sara", "Ayesha", "Hamza"];
// let alt = "Hello";

// for (const student of students) {
//   console.log(`${alt} ${student}`);
// }

// // ==============
// // QUESTION-NO-10
// // ==============

// let products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Printer"];
// let searchBtn = prompt("enter the product name!");
// for (let i = 0; i < products.length; i++) {
//   if (products[i] === searchBtn) {
//     console.log("Product Found");
//   }
// }

// // ==============
// // QUESTION-NO-11
// // ==============

// let students = {
//   name: "Ali",
//   age: 20,
//   course: "JavaScript",
//   city: "Peshawar",
// };

// for (const student in students) {
//   console.log(`${student} : ${students[student]}`);
// }

// // ==============
// // QUESTION-NO-12
// // ==============

// let word = "javascript";

// for (let i = 0; i < word.length; i++) {
//   console.log(word.length);
// }

// // ==============
// // QUESTION-NO-13
// // ==============

let numbers = [12, 45, 7, 89, 23, 56];
let lagestNum = Math.max(...numbers);
let smallestNUm = Math.min(...numbers);
console.log(numbers);
console.log(lagestNum);
console.log(smallestNUm);
