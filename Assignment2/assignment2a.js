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

/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

/*****************************  
* Step 1   
*****************************/ 
var e1, e2, e3, e4, e5, e6, e7, str;

/*****************************  
* Step 2   
*****************************/ 
function capFirstLetter(str){
  var up = (str.substr(0,1)).toUpperCase();
  var low = (str.substr(1)).toLowerCase();
  return up+low;
}
e1 = prompt("Enter first name: ", "kirby");
//console.log(capFirstLetter(e1));  

/*****************************  
* Step 3   
*****************************/
var getAge = function(birth){
  var year = (new Date()).getFullYear();
  return year-birth;
}
e2 = prompt("Enter birth year: ", "1995");
e2 = getAge(e2);
//console.log(getAge(e2));

/*****************************  
* Step 4   
*****************************/
e3 = prompt("Enter college name: ", "seneca college");
var split = e3.split(" ");
e3 = capFirstLetter(split[0]) + " " + capFirstLetter(split[1]);

/*****************************  
* Step 5   
*****************************/
e4 = prompt("Enter 5 favorite sports: ", "hockey,football,basketball,tennis,golf");
e4 = e4.replace(/football/, "soccer");
e4 = e4.split(",");
e5 = prompt("Enter an extra favorite sport: ", "formula 1");
e4.push(e5);
//console.log(e4[1]);

/*****************************  
* Step 6   
*****************************/
for(var i = 0; i < e4.length; i++){
  e4[i] = e4[i].toUpperCase();
}

e4.sort();

//console.log(e4);

/*****************************  
* Step 7  
*****************************/
function getDateString(myDate){
  var year = myDate.getFullYear();
  var month = myDate.getMonth();
  var date = myDate.getDate();
  if(month+1 < 10){
    month = "0" + String(month+1);
}
  if(date < 10){
    date = "0" + String(date);
  }
  var currentDate = String(year) + "-" + String(month) +"-" + String(date);
  return currentDate;
}
e6 = new Date();
e7 = getDateString(e6);
//console.log(e7);


/*****************************  
* Step 7  
*****************************/

var str = "User info: \n" 
  + "\nname (e1): " + capFirstLetter(e1)
  + "\nage (e2): " + e2
  + "\nschool (e3): " + e3
  + "\nfavorite sports (e4):\n\t" + e4.join("\n\t")
  + "\ncurrent date (e7): " + e7;

console.log(str);






