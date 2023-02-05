let firstName = prompt("Please Enter Your First Name: ");

let lastName = prompt("Please Enter Your Last Name: ");

let age = +prompt("Please Enter Your Age: ");

alert(`Hello ${firstName} ${lastName}, You are ${age} year${age > 1 ? "s" : ""} old`);