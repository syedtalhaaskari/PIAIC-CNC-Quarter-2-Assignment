const toTitleCase = text => {
    return text.toLowerCase().split(" ").map(item => item[0].toUpperCase() + item.slice(1)).join(" ")
}

let inputValue = prompt("Please Enter a Phrase: ");

inputValue = toTitleCase(inputValue);

console.log(inputValue);