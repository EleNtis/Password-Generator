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

let upperCasedCharacters = confirm("Click OK to include upper cased characters")
let lowerCasedCharacters = confirm ("Click OK to include lower cased characters")
let numericCharacters = confirm ("Click OK to include numeric characters")
let specialCharacters = confirm("Click OK to include special characters")

if(upperCasedCharacters === false &&
  lowerCasedCharacters === false &&
  numericCharacters === false &&
  specialCharacters === false) {
    alert("Must select at least one character type!")
    return;
  } 
}
getPasswordOptions()

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  let passwordOptions = getPasswordOptions();

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