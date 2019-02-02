function formValidation() {
    clearerrors();
     var result = validateCity();
     result = validateUsername() && result;
     result = validatePassword() && result;
     result = validateZipCode() && result;
     result = confirmPassword() && result;
     result = validateStreet() && result;

     return result;
     
   }

// validate password
function validatePassword(){     
var errors = document.querySelector("#errors");	 
var valid = false;
var oneCap = false;
var oneNum = false;
var alphString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var capString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numString = "0123456789"
var inputValue = document.form1.password.value.trim();
// check if 8 characters long
if(inputValue.length >= 8){
 // check if first character is a letter
 if (alphString.indexOf(inputValue.substr(0,1))>= 0) {
     //check if there is a capital letter and a number in the input value
    for (var i = 0; i < inputValue.length; i++){
        if (capString.indexOf(inputValue.substr(i,1))>= 0){
            oneCap = true;
        }
        if (numString.indexOf(inputValue.substr(i,1))>= 0){
            oneNum = true;
        }
    }
    // prints specific error if one is false and check if both capital letter and number is present in the input
    if (oneCap == false && oneNum == true){
        errors.innerHTML += "<p>Password must have at least one number and a capital letter!</p>"
    }else if (oneNum == false){
        errors.innerHTML += "<p>Password must have at least one number!</p>"
    } else if (oneCap == false){
        errors.innerHTML += "<p>Password must have at least one capital letter!</p>"
    }
 }else{
  errors.innerHTML += "<p>Password must start with a letter!</p>";
 }
}
else{
  errors.innerHTML += "<p>Password must have at least 8 characters!</p>";
}

return valid = (oneCap == true && oneNum == true); // returns the result of validation
 }


 // confirm password validation
 function confirmPassword(){
    var errors = document.querySelector("#errors");	 
    var valid = false;
    var inputValue1 = document.form1.password.value.trim();
    var inputValue2 = document.form1.pwconfirm.value.trim();
//check if both input for password match
    if (inputValue1 == inputValue2){
        valid = true;
    }else{
        errors.innerHTML += "<p>Password did not match!</p>";
    }
    return valid;
 }


// validate zipcode
function validateZipCode(){
    var errors = document.querySelector("#errors");	 
    var valid = false;
    var alphString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numString = "0123456789"
    var inputValue = document.form1.zipcode.value.trim();
    if(inputValue.length >= 6){
     //check format if (Letter Digit Letter Digit Letter Digit)
        for (var i = 0; i < inputValue.length; i++){
            if (alphString.indexOf(inputValue.substr(i,1) )>= 0 && (i % 2 == 0)){
                valid = true;
            }
            else if (numString.indexOf(inputValue.substr(i,1) )>= 0 && (i % 2 == 1)){
                valid = true;
            }   
            else {
                valid = false;
                errors.innerHTML += "<p>Zipcode must be in Canadian format!</p>"; 
                break;
            }

        } 

    }else{
      errors.innerHTML += "<p>Zipcode must have at least 6 characters!</p>";
    }
    
    
    return valid; // returns result for validation
     }
    

 // validate city
 function validateCity() {
    var errors = document.querySelector("#errors");
    var allLetters = true;
    var elem = document.getElementById("city"); 
    var inputValue = elem.value.trim();
    inputValue = inputValue.toUpperCase();  
    for (var i = 0; i < inputValue.length; i++) {
         // check input are all letters
         if (inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z" )  { 
             // ends for loop if other characters is found
             allLetters = false;
             i = inputValue.length; 
             errors.innerHTML += "<p>City must contain letters only!</p>";
        // city.focus();
 }
    } 		
    return allLetters;; // passed allLetters if true or false

 }  


 // validate username
   function validateUsername() {
  var errors = document.querySelector("#errors");	
  var valid = false;
  var alphString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var inputValue = document.form1.username.value.trim();
 if(inputValue.length >= 6){
   // check if first character is a letter
   if (alphString.indexOf(inputValue.substr(0,1))>= 0) {
      valid = true;
   }else{
    errors.innerHTML += "<p>Username must start with a letter!";
   }
}
else{
    errors.innerHTML += "<p>Username must have at least 6 characters!";
}
  return valid; // passed for validation
   }


//validate street
function validateStreet(){ 
    var errors = document.querySelector("#errors");	 
    var valid = true;
    var numString = "0123456789"
    var inputValue = document.form1.street.value.trim();
    // check for number strings
        for (var i = 0; i < inputValue.length; i++){
            if (numString.indexOf(inputValue.substr(i,1) )>= 0) {
                valid = false;
                errors.innerHTML += "<p>Street name cannot contain numbers!</p>";
                break;
            }   

        }
    
    return valid; // returns result for validation
     }
    

 function clearerrors() {
      document.querySelector("#errors").innerHTML = "";
   }
