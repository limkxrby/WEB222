/*******************************************************************************
* WEB222 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca
* Academic Policy. No part of this assignment has been copied manually or
* electronically from any other source (including web sites) or distributed to
* other students.
*
* Name: Kirby Lim Student ID: 131684177 Date: 6/10/2018
*
******************************************************************************/


// an array of course objects
var courses = [
    { code: 'APC100', name: 'Applied Professional Communications', hours: 3, url: 'http://www.senecacollege.ca/' },
    { code: 'IPC144', name: 'Introduction to Programming Using C', hours: 4, url: 'https://scs.senecac.on.ca/~ipc144/' },
    { code: 'ULI101', name: 'Introduction to Unix/Linux and the Internet', hours: 4, url: 'https://cs.senecac.on.ca/~fac/uli101/live/' },
    { code: 'IOS110', name: 'Introduction to Operating Systems Using Windows', hours: 4, url: 'https://cs.senecac.on.ca/~fac/ios110' },
    { code: 'EAC150', name: 'College English', hours: 3, url: null }
];

// prototype object for creating student objects
var student = { 
   name: "", 
    dob: new Date(),
    sid: "",
    program: "", 
    gpa: 4.0,
    toString:  function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
};

/************************************************************
 * Start your Part B code here. Do not change the code above.
 ************************************************************/
// task 1 
var store = courses.pop();
delete courses.pop();
console.log("*** Task 1 ***");
console.log("Course " + store.code + " was deleted from the array (courses)\n" 
            + "Adding new course objects into the array (courses)");

var ibc233, oop244, web222, dbs201 = Object.create(courses);
ibc233 = { code : 'IBC233', name: 'iSeries Business Computing', hours: 4, url: 'https//scs.senecac.on.ca/~ibc2333/'};
oop244 = { code: 'OOP244', name: 'Introduction to Object Oriented Programming', hours: 4, url: 'https//scs.senecacon.ca/~oop244/'};
web222 = { code: 'WEB222', name: 'Internet I - Internet Fundamentals', hours: 4, url: 'https//scs.senecac.on.ca/~web222/'};
dbs201 = { code: 'DBS201', name: 'Introduction to Database Design and SQL', hours: 4, url: 'https/scs.senecac.on.ca/~dbs201/'};
courses.push(ibc233, oop244, web222, dbs201);

//output
var str = "Course objects in the array (courses):\n";
for (var x in courses){
   str += '"' + courses[x].code + ", " + courses[x].name + ", " + courses[x].hours + " hours/week, website: " + courses[x].url + '\n';
}
console.log(str);


// task 2
var person = Object.create(student);
var students = [person[0] = {name: 'John Smith', bod: "9/10/1999", sid: '010456101', program: 'CPA', gpa: 4}, 
                person[1] = {name: 'Jim Carrey', bod: "1/17/1992", sid: '012345678', program: 'CPD', gpa: 3.5}, 
                person[2] = {name: 'Justin Bieber', bod: "3/1/1994", sid: '0987654321', program: 'CAN', gpa: 3},
                person[3] = {name:  'Justing Tredueau', bod: "1/12/1992", sid: '123456789', program: 'CPA', gpa: 4}];
                                                       
//output
console.log("\n*** Task 2 ***\n")
console.log("Student objects in the array (students):")
function studentInfo(item, index) {
console.log(index + ": Student info for " + item.name + ": born on " + item.bod + ", student id " + item.sid + ", progrem " + item.program + ", current GPA " + item.gpa + '\n');
}
students.forEach(studentInfo);
