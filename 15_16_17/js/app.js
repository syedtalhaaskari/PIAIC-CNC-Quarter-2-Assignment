let courses = [];

for (let i = 0; i < 5; i++) {
    courses[i] = prompt(`Please Enter Course ${i + 1} Name: `, "");
}

alert(courses);

for (let i = 0; i < 5; i++) {
    courses[i] = prompt(courses[i], courses[i]);
}

alert(courses);