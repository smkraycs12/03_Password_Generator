// Assignment Code and event listener for prompting paramater questions
document.querySelector("#generate").addEventListener('click', writePassword);

//Arrays for character selection
//lowercase array
var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//uppercase array
var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//number array
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//symbol array
var symbols = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];


// Prompt to confirm length of password
function generatePassword() {
  var passwordLength = prompt("How long do you want your password?(must be 8 to 36 characters)");
  
  // Loop to repeat the prompt for password length if it is outside of parameters
  while (passwordLength < 8  || passwordLength > 36) {
    alert("Password must be between 8-36 characters in length. Please pick an acceptable value");
    var passwordLength = prompt("How long do you want your password?(must be 8 to 36 characters)");
  }

  // alert repeating back the length of the password
  alert("You want your password to be" + " " + passwordLength + " " +"characters long.")

  // Questions for setting which types of characters will be in the password

  // confirmation for lowercase letters
  var passwordLower = confirm("Do you want lowercase letters in the password?");

  // confirmation for uppercase letters
  var passwordUpper = confirm("Do you want uppercase letters in the password?");

  // confirmation for numbers
  var passwordNumbers = confirm("Do you want numbers in the password?");

  // confirmation for symbols
  var passwordSymbols = confirm("Do you want symbols in the password?");

    // Loop for if no character types are selected
    while(passwordLower === false && passwordUpper === false && passwordNumbers === false && passwordSymbols === false) {
      alert("Atleast one character type is required for password to generate.")
      //Repeats of the character confirmation
      var passwordLower = confirm("Do you want lowercase letters in the password?");
      var passwordUpper = confirm("Do you want uppercase letters in the password?");
      var passwordNumbers = confirm("Do you want numbers in the password?");
      var passwordSymbols = confirm("Do you want symbols in the password?");
     }

    //  var containing the character for the password
    var passwordCharacters = []

    // adds lowercase letters if confirmed
  if (passwordLower) {
    passwordCharacters = passwordCharacters.concat(lettersLower);
  }
    // adds uppercase letters if confirmed
  if (passwordUpper) {
    passwordCharacters = passwordCharacters.concat(lettersUpper);
  }
    // adds numbers if confirmed
  if (passwordNumbers) {
    passwordCharacters = passwordCharacters.concat(numbers);
  }
    // adds symbols if confirmed
  if (passwordSymbols) {
    passwordCharacters = passwordCharacters.concat(symbols);
  }
    // blank string that is filled with random characters from passwordCharacters array
    var genPassword = ""

    // Loop that creates the password 
    for (var i = 0; i < passwordLength; i++) {
      genPassword = genPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
   }
    return genPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}