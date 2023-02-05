const calculateGrade = e => {
    switch (true) {
        case e >= 90 && e <= 100:
            return "A+";
            break;
        case e >= 75 && e < 90:
            return "A";
            break;
        case e >= 60 && e < 75:
            return "B";
            break;
        case e >= 45 && e < 60:
            return "C";
            break;
        case e >= 30 && e < 45:
            return "D";
            break;
        case e >= 0 && e < 30:
            return "F";
            break;
        default:
            return "Invalid";
            break;
    }
}

const totalMarks = 500;
let courses = [];
let obtainedMarks = 0;

for (let i = 0; i < 5; i++) {
    courses[i] = +prompt(`Please Enter Course ${i + 1} Marks: `, 0);
    obtainedMarks += courses[i];
}

const percentage = obtainedMarks * 100 / totalMarks;

const grade = calculateGrade(percentage);

alert(`Your Grade is ${grade}`);