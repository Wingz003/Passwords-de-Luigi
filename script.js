let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
let allCodes = [...lowerCase, ...upperCase, ...number, ...symbols];
// Assignment 

let generateBtn = document.querySelector("#generate");
function generatePassword() {
 
  question = parseInt(prompt("Please choose password length between 8 and 128 characters."));

  if(!question) {
    alert("Have a nice day!")
  } else if(question < 8 || question > 128) {
    question = parseInt(prompt("Incorrect parameters. Please try again with 8 - 128 chars."));
  } else {
    pickLowerCase = confirm("Would you like lowercase characters?");
    pickUpperCase = confirm("Would you like uppercase characters?");
    pickNumber = confirm("Would you like numerical characters?");
    pickSymbols = confirm("Would you like Symbol characters?");
    
  };
 
  
  let arr = [];
  
  for(let i = 0; i < allCodes.length; i++) {
    
    let pick = Math.floor(Math.random() * allCodes.length);
    
    arr.push(allCodes[pick]);
    
  }
  
  console.log(arr.join(""));
}


// Write password to the #password input
function writePassword() {
  
  
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
  
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//   a. Password Length 8 < 128
//   b. Uppercase, Lowercase, Numbers, Symbols
// 2. validate the input
// 3. Generate password based on criteria
// 4. Display password on page.