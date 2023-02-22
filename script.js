// Assignment Code
var generateBtn = document.querySelector("#generate");



var pwdLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var pwdUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var pwdNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var pwdCharacters = ["!", "@", "-", ".", "/", "#", ": ", "; ", "$", " % ", " & ", ", ", " < ", " > ", "(", ")", " * ", " + ", "=", " ? ", "[", "]", " ^ ", "_",
  "`", "}", "|", "~"];








// Write password to the #password input
function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordOptions = []
  var finalPassword = []



  var upperCase;
  var lowerCase;
  var characters;
  var numbers;
  var passwordLength = 0;


  passwordLength = prompt("How many characters do you want the password to be? \n Note: Must be between 8-128 characters")
  if (passwordLength < 8 || passwordLength > 128) {
alert("Please choose an appropriate password length")
return "Please choose an appropriate password length"
  }

  if (passwordLength === undefined) {
    return "The Password";
  }
  var hasUpperCaseLetter = confirm("Do you want Uppercase Letters in you Password?")
  var hasLowerCaseLetter = confirm("Do you want Lowercase Letters in you Password?")
  var hasNumbers = confirm("Do you want Numbers in you Password?")
  var hasCharacters = confirm("Do you want Characters in you Password?")

  if(!hasUpperCaseLetter && !hasLowerCaseLetter && !hasNumbers && !hasCharacters){
    alert("Please choose at least one character type")
    return "Please choose at least one character type";
  }


  if (hasUpperCaseLetter) {
    passwordOptions = passwordOptions.concat(pwdUpperCase)


  }
  if (hasLowerCaseLetter) {
    passwordOptions = passwordOptions.concat(pwdLowerCase)
  }
  if (hasNumbers) {
    passwordOptions = passwordOptions.concat(pwdNumber)
  }
  if (hasCharacters) {
    passwordOptions = passwordOptions.concat(pwdCharacters)
  }
  console.log("passwordOptions", passwordOptions);

  for (var i = 0; i < passwordLength; i++) {
    finalPassword.push(passwordOptions[Math.floor(Math.random() * passwordOptions.length)])
  }


  console.log(finalPassword);

  return finalPassword.join("");


  //[] 
  //{} 
  //()
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// prompts for password criteria
function ChoicePrompts() {
  pwdLowerCase = confirm("lower case letters?");
  pwdUpperCase = confirm("upper case letters?");
  pwdNumbers = confirm("numbers?");
  pwdCharacters = confirm("special characters?");
}