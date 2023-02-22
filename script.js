// Assignment Code
var generateBtn = document.querySelector("#generate");

pwdElements = {

  pwdLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  pwdUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  pwdNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  pwdCharacters: ["!", "@", "-", ".", "/", "#", ": ", "; ", "$", " % ", " & ", ", ", " < ", " > ", "(", ")", " * ", " + ", "=", " ? ", "[", "]", " ^ ", "_",
    "`", "}", "|", "~"]


}





// Write password to the #password input
function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);

var generatePassword(); {

  result = "";



  var upperCase;
  var lowerCase;
  var characters;
  var numbers;
  var passwordLength = 0;

  pwdCriteria.pwdLength = 0;

  if (passwordLength < 8 || passwordLength > 128) {

    var passwordText = document.querySelector("#password");
  }



  passwordText.value = password;



  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
}
function Choice
Prompts() {
  pwdLowerCase = confirm("lower case letters?");
  pwdUpperCase = confirm("pper case letters?");
  pwdNumbers = confirm("numbers?");
  pwdCharacters = confirm("special characters?");
}