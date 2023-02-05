let name = prompt("Please Enter Your Name: ");

let date = prompt("Please Enter Your DoB(date): ", "01");

let month = prompt("Please Enter Your DoB(date): ", "01");

let year = prompt("Please Enter Your DoB(date): ", "1999");

console.log(`Hello ${name}, Good Morning, AfterNoon, Evening or Night`);

console.log(`Your DOB is ${date}/${month}/${year}`);

let dob = new Date(`${month}/${date}/${year}`);

let currentDate = new Date();

let ageSeconds = currentDate.getSeconds() > dob.getSeconds() ? currentDate.getSeconds() - dob.getSeconds() : 60 + currentDate.getSeconds() - dob.getSeconds();
let ageMinute = currentDate.getMinutes() > dob.getMinutes() ? currentDate.getMinutes() - dob.getMinutes() : 60 + currentDate.getMinutes() - dob.getMinutes();
let ageHour = currentDate.getHours() > dob.getHours() ? currentDate.getHours() - dob.getHours() : 23 + currentDate.getHours() - dob.getHours();
let ageDay = currentDate.getDate() > dob.getDate() ? currentDate.getDate() - dob.getDate() : 31 + currentDate.getDate() - dob.getDate();
let ageMonth = currentDate.getMonth() > dob.getMonth() ? currentDate.getMonth() - dob.getMonth() : 12 + currentDate.getMonth() - dob.getMonth();
let ageYear = currentDate.getMonth() - dob.getMonth() < 0 ? currentDate.getFullYear() - dob.getFullYear() - 1 : currentDate.getFullYear() - dob.getFullYear();

console.log(`You are ${ageYear} years ${ageMonth} Month ${ageDay} Days ${ageHour} Hours ${ageMinute} Minutes ${ageSeconds} Seconds old`);

let totalDays = Math.floor((currentDate.getTime() - dob.getTime()) / 1000 / 60 / 60 / 24);

console.log(`You Age in Days ${totalDays}`);

dob = new Date();

currentDate = new Date(`${month}/${date}/${currentDate.getFullYear() + 1}`);

ageSeconds = currentDate.getSeconds() > dob.getSeconds() ? currentDate.getSeconds() - dob.getSeconds() : 60 + currentDate.getSeconds() - dob.getSeconds();
ageMinute = currentDate.getMinutes() > dob.getMinutes() ? currentDate.getMinutes() - dob.getMinutes() : 60 + currentDate.getMinutes() - dob.getMinutes();
ageHour = currentDate.getHours() > dob.getHours() ? currentDate.getHours() - dob.getHours() : 23 + currentDate.getHours() - dob.getHours();
ageDay = Math.abs((currentDate.getMonth() - dob.getMonth()) * 30 + (currentDate.getDate() > dob.getDate() ? currentDate.getDate() - dob.getDate() : 31 + currentDate.getDate() - dob.getDate()));

console.log(`How much time left in your next birthday? ${ageDay} days ${ageHour} hours ${ageMinute} minutes ${ageSeconds} seconds`);
console.log(`happy Birth Day ${name}.  Today is Your ${ageYear}th Birthday`);