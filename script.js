// Assignment Code
var generateBtn = document.querySelector("#generate");

pwdElements = {

  pwdLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  pwdUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  pwdNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  pwdCharacter: ["!", "@", "-", ".", "/", "#", ": ", "; ", "$", " % ", " & ", ", ",
    " \ ", " < ", " > ", "(", ")", " * ", " + ", "=", " ? ", "[", "]", " ^ ", "_",
    "`", "}", "|", "~"]


}





// Write password to the #password input
function writePassword() {

  var Pwd = generatePassword();

  var passwordText = document.querySelector("#password");


  passwordElements.Pwd = password;

}
generateBtn.addEventListener("click", writePassword);

var generatePassword(); {

  var result = "";



  var upperCase;
  var lowerCase;
  var numbers;
  var characters;
  var passwordLength = 0;

  var passwordText = document.querySelector("#password");
  var (password.Length < 8 + passwordLength > 128) {


  }



  passwordText.value = password;



  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
