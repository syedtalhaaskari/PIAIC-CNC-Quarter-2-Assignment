let num = +prompt("Please Input Number: ", 0);

let gNum = Math.ceil(num);

let text = "This is a dummy text";

let slicedText = text.slice(0, gNum);

let reversedText = "";

for (let i = slicedText.length - 1; i >= 0; i--) {
    reversedText += slicedText[i];
}

alert(reversedText);