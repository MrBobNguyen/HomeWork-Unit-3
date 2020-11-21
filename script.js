//All Characters String
var SpecChar = {
  Content: " !\"#$%&\'()*+,-.\/:;<=>?@[\\]^_`{|}~" ,
  Name: "SPECIAL CHARACTERS",
}
var LowChar = {
  Content: "abcdefghijklmnopqrstuvwxyz",
  Name: "LOWER CHARACTERS",
}
var UpChar = {
  Content: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  Name:"UPPER CHARACTERS",
}
var NumChar = {
  Content: "0123456789",
  Name: "NUMBERS",
}

//Pick One Random Character in a string then add it into another string
function AddRandomOneChar(CharString, StringResult)
{
  var CharStringArr = CharString.split("");
  var RandomPos = Math.floor(Math.random() * (CharStringArr.length-1) );
  StringResult.Content += CharStringArr[RandomPos];
  console.log(StringResult.Content)
}


//All Password Critia
function AskCritia(Critia, MixedChar, password)
{
  while (true) {
    var IsCritia = prompt("Do you want your password contain "+ Critia.Name +" ? (y/n)").toLowerCase();
    if (IsCritia == 'y') {
      MixedChar.Content += Critia.Content;
      AddRandomOneChar(Critia.Content, password)
      break;
    }
    else if (IsCritia == 'n') {
      break;
    }
    else{
      continue;
    }
  }


}

//Main Code Generator
function generatePassword()
{
  var password ={
    Content: "",
    Length: 0,
  }
  var MixedChar = {
    Content: ""
  }
  console.log(MixedChar);
  AskCritia(UpChar, MixedChar, password); console.log(password);
  AskCritia(LowChar, MixedChar, password); console.log(password);
  AskCritia(NumChar, MixedChar, password); console.log(password);
  AskCritia(SpecChar, MixedChar, password); console.log(password);
  do{
    var inputLength = prompt ("Enter the LENGTH for your password: (8 to 128)")  
    password.Length = parseInt(inputLength);

  } while ((password.Length<8) || (password.Length>128) || (isNaN(password.Length)));
  console.log(password.Length)

  while (password.Content.length < password.Length){
    AddRandomOneChar(MixedChar.Content, password)
  }
  //Mix for final password
  var realpassword ="";
  while (password.Content.length > 0)
  {
    //Get a character in password.Content and add it to the real password
    var RandomPos = Math.floor(Math.random() * (password.Content.length-1))
    realpassword += password.Content.substr(RandomPos,1)
    //Get a new password.Content after take out 1 random character
    var substr1 = password.Content.substring(0,RandomPos)
    var substr2 = password.Content.substring(RandomPos+1, password.Content.length)
    password.Content=substr1.concat(substr2);
   
  }


  return realpassword;

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
