let totalMarks = 500;

let courses = [];
let obtainedMarks = 0;

for(let i = 0; i < 5; i++) {
    courses[i] = +prompt(`Please Enter Course ${i + 1} Marks: `);
    obtainedMarks += courses[i];
}

let percentage = obtainedMarks * 100 / totalMarks;

alert(`Your Percentage is ${percentage}%`);