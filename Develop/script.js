//things to keep in mind:
//length of the password box prompted 
//choose length of atleast 8 characters and no more than 128 characters
//ask character types to be included in the password
//ask whether you need a lowercase
//ask for uppercase
//ask fir numeric
//ask fir special characters
//atleast one character type should be selected
//when all prompts are answered then password is generated
//copy the password 


// Assignment Code
var generateBtn = document.querySelector("#generate");



//Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "`", "%", "^", "&", "*", "-", "_", "+", "=", "~", "?",":","/"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


//Prompt to confirm the Password Requirements
function questions() {
  var isValid = false;
  do {
    var length = prompt("Choose password length between 8 and 128 characters");
    var askNumber = confirm("Do you want your password to include numbers?");
    var askLowerCase = confirm("Do you want your password to include lower case letters?");
    var askUpperCase = confirm("Do you want your password to include upper case letters?");
    var askSpecial = confirm("Do you want your password to include special characters?");
    var responses = {
      length: length,
      askNumber: askNumber,
      askLowerCase: askLowerCase,
      askUpperCase: askUpperCase,
      askSpecial: askSpecial
    } 
    if((length < 8)||(length > 128))
    alert("Choose number between 8 and 128");
    else if((!askNumber)&&(!askLowerCase)&&(!askUpperCase)&&(!askSpecial))
    alert("Must choose at least one type.");
    else
    isValid = true;

  } while(!isValid);
  return responses;
} 

  // get user response and create a Password
  function generatePassword() {
    var passwordOptions = questions();
    var possibleCombo = [];
    var finalPassword = "";
  
  
  
    if (passwordOptions.askNumber) {
      for (var i of number)
        possibleCombo.push(i);
    }
    if (passwordOptions.askLowerCase) {
      for (var i of lowerCase)
        possibleCombo.push(i);
    }
    if (passwordOptions.askUpperCase) {
      for (var i of upperCase)
        possibleCombo.push(i);
    }
    if (passwordOptions.askSpecial) {
      for (var i of special)
        possibleCombo.push(i);
    }
  
  
    console.log(possibleCombo);
  
  
    for (var i = 0; i < passwordOptions.length; i++) {
      finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
      
    }
    console.log(finalPassword);
  
    return finalPassword;
  }
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

