// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  //variable to store user's input
let passwordLength = window.prompt("How many characters would you like your password to contain?");
if (passwordLength == "") {
  alert("No value entered!");
  return;
} else if(passwordLength == null){
return false;
}
else if (isNaN(passwordLength)){
  alert ("Please provide a number!")
  return; 
} else if (passwordLength < 8){
  alert ("Password length must be at least 8 characters!")
  return; 
} else if (passwordLength > 128){
  alert ("Password length must be less than 128 characters!")
  return;
} 

// Variables to store users' input for charachter types
let uppCasedCharacters = confirm("Click OK to include upper cased characters")
let lowCasedCharacters = confirm ("Click OK to include lower cased characters")
let numCharacters = confirm ("Click OK to include numeric characters")
let spCharacters = confirm("Click OK to include special characters")

if(uppCasedCharacters === false &&
  lowCasedCharacters === false &&
  numCharacters === false &&
  spCharacters === false) {
    alert("Must select at least one character type!")
    return;
  } 
  
  let passwordObject = {
    length: passwordLength,
    hasLowerCasedCharacters: lowCasedCharacters,
    hasUpperCasedCharacters: uppCasedCharacters,
    hasNumericCharacters: numCharacters,
    hasSpecialCharacters: spCharacters
  }
  return passwordObject;
  
}


// Function for getting a random element from an array
function getRandom(arr) {
let randomItem = Math.floor(Math.random() * arr.length)
let randomItem2 = arr[randomItem];
return randomItem2;
}


// Function to generate password with user input
function generatePassword() {
  let passwordOptions = getPasswordOptions();

  let result = []
  let finalCharacter = []
  let possibleCharacter = []

  if (passwordOptions.hasSpecialCharacters) {
    possibleCharacter = possibleCharacter.concat(specialCharacters);
    finalCharacter.push(getRandom(specialCharacters))
  }
  
  
  if (passwordOptions.hasNumericCharacters){
    possibleCharacter = possibleCharacter.concat(numericCharacters);
    finalCharacter.push(getRandom(numericCharacters))
  }

  if (passwordOptions.hasUpperCasedCharacters){
    possibleCharacter = possibleCharacter.concat(upperCasedCharacters);
    finalCharacter.push(getRandom(upperCasedCharacters))

  if (passwordOptions.hasLowerCasedCharacters){
    possibleCharacter = possibleCharacter.concat(lowerCasedCharacters);
    finalCharacter.push(getRandom(lowerCasedCharacters))
  }

  }

  for (let i = 0; i < passwordOptions.length; i++ ) {
    var generated = getRandom(possibleCharacter);
    result.push(generated);
  }

  return result.join(" ");
 
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);