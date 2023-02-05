let courses = [];

let course1 = prompt("Please Enter Course 1 Name", "computer");
courses.push(course1);
let course2 = prompt("Please Enter Course 2 Name", "computer");
courses.push(course2);
let course3 = prompt("Please Enter Course 3 Name", "computer");
courses.push(course3);
let course4 = prompt("Please Enter Course 4 Name", "computer");
courses.push(course4);
let course5 = prompt("Please Enter Course 5 Name", "computer");
courses.push(course5);

alert(courses);

let course1ValueEdit = prompt(courses[0], courses[0]);
courses.splice(0, 1, course1ValueEdit);
let course2ValueEdit = prompt(courses[1], courses[1]);
courses.splice(1, 1, course2ValueEdit);
let course3ValueEdit = prompt(courses[2], courses[2]);
courses.splice(2, 1, course3ValueEdit);
let course4ValueEdit = prompt(courses[3], courses[3]);
courses.splice(3, 1, course4ValueEdit);
let course5ValueEdit = prompt(courses[4], courses[4]);
courses.splice(4, 1, course5ValueEdit);

alert(courses);