let inputValue = prompt("Please Enter a Phrase: ").toLowerCase();

inputValue = inputValue.split(" ").map(item => item[0].toUpperCase() + item.slice(1)).join(" ");

alert(inputValue);