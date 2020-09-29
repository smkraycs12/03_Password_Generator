// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// function for gen lowercase letters 
function getRandomLower() {
  const lowers = 'abcdefghijklmnopqrstuvwxyz';
  return lowers[Math.floor(Math.random() * lowers.length)];
}

// funstion for gen uppercase letters
function getRandomUpper() {
  const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return uppers[Math.floor(Math.random() * uppers.length)];
}

// func for gen random number between 0-9 
function getRandomNumb() {
  const numbs = '0123456789';
  return numbs[Math.floor(Math.random() * numbs.length)];
}

// func for gen random symbols
function getRandomSymbol() {
  const symbols = '!@#$%^&*()[]{}+=<>/:;';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
