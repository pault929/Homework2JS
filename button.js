
var generateBtn = document.querySelector("#generate");
var upperCaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var lowerCaseCharacters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","v","w","x","y","z",];
var specialCharacters = ["@","%","+","\\","/","'","!","#","$","^","?",":",",",")","(","}","{","]","[","~","-","_",".",];
var numbers  = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var totalCharacters = [];

var confirmUppercase;
var confirmLowercase;
var confirmSpecialCharacters;
var confirmNumbers;
var characterCount;



function confirmCriteria() {
    alert("Welcome to the Password Generator - Lets begin by clicking OK!")

    characterCount = prompt("Please enter length of your password ; between 8 and 128 charcters.");
    // confirm count is atleast 8 and no more than 128 characters or alert user
      if (characterCount < 8 || characterCount > 128 ) {
      alert("Password must be between 8 & 128 characters long.");
      characterCount = prompt( "How long would you like your password to be - from 8 - 128 characters!");
      };
    confirmUppercase = confirm("Would you like to include UPPERCASE letters - OK  or CANCEL");
    confirmLowercase = confirm("Would you like to include lowercase letters - OK or CANCEL");
    confirmNumbers = confirm("Would you like to include numbers - OK or CANCEL");
    confirmSpecialCharacters = confirm("Would you like to include special characters - OK or CANCEL");  
      // check that at least one is true or alert user
      if (confirmLowercase || confirmUppercase || confirmNumbers || confirmSpecialCharacters ) {
      }
      else  { 
      alert("You must include one of the following CRITERIAS lowercase, uppercase, number, or special charater!");
      confirmUppercase = confirm("Would you like to include UPPERCASE letters - OK if yes, CANCEL if no");
      confirmLowercase = confirm("Would you like to include lowercase letters - OK if yes, CANCEL if no");
      confirmNumbers = confirm("Would you like to include numbers - OK if yes, CANCEL if no");
      confirmSpecialCharacters = confirm("Would you like to include special characters -  OK if yes, CANCEL if no");  
      }
  }
  
  //create final array for password variables
  function createFinalArray() {
    if (confirmUppercase) {
      Array.prototype.push.apply(totalCharacters, upperCaseCharacters);
    };
    if (confirmLowercase) {
      Array.prototype.push.apply(totalCharacters, lowerCaseCharacters);
    };   
    if (confirmNumbers) {
      Array.prototype.push.apply(totalCharacters, numbers);
    };
    if (confirmSpecialCharacters) {
      Array.prototype.push.apply(totalCharacters, specialCharacters)
    };
  };
  
  
  //generate password 
  function generatePassword(){
    confirmCriteria();
    createFinalArray();
    var password = "";
  for (var i = 0; i < characterCount; i++) {
      var character = totalCharacters[Math.floor(Math.random() * totalCharacters.length)];
      password +=character;
    };
  totalCharacters = [];
  return password
  };
  
  
  //write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.getElementById('password');
    passwordText.textContent = password;
  };
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

