let num1 = +prompt("Please Enter First Number: ");

let num2 = +prompt("Please Enter Second Number: ");

let operator = prompt("Please Enter Operation(+, - , *, /, %): ");

let result = eval(num1 + operator + num2);

alert(`${num1} ${operator} ${num2} = ${result}`);