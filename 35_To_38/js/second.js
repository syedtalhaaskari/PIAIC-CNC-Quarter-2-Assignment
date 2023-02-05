const factorial = num => {
    if (num <= 1) return 1;
    return num * factorial(num - 1);
}

let num = factorial(+prompt("Please Enter Number: "));

console.log(num);