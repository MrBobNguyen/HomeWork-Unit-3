//All Characters String
var SpecChar = " !\"#$%&\'()*+,-.\/:;<=>?@[\\]^_`{|}~" ;
var LowChar = "abcdefghijklmnopqrstuvwxyz";
var UpChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var NumChar = "0123456789";
var MixedChar = SpecChar + LowChar + UpChar + NumChar;




//Main Code Generator
function generatePassword()
{

}



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
