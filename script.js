let generateBtn = document.querySelector("#generate");
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];

// Assignment 



function generatePassword() {
  
  let selectedCharacters = [];
  let pickLower;
  let pickUpper;
  let pickNumber;
  let pickSymbol;
  
  
  
  let numberOfChar = parseInt(prompt("Please choose password length between 8 and 128 characters."));
  
  if (!numberOfChar) {
    alert("must enter number");
    return null;
  } else if (numberOfChar < 8 || numberOfChar > 128) {
    alert("must enter number between 8 and 128");
    return null;
  } else {
    
    pickLower = confirm("do you want to pick lowercase?");
    pickUpper = confirm("do you want to pick uppercase?");
    pickNumber = confirm("do you want to pick numbers?");
    pickSymbol = confirm("do you want to pick symbols?");
    
    if(!pickLower && !pickNumber && !pickSymbol && !pickUpper) {
      alert("You must choose atleast one option!")
      return "";
    }
    
    
  }
  
  if(pickLower) {
    selectedCharacters.push(...lowerCase);
  }
  if(pickUpper) {
    selectedCharacters.push(...upperCase);
  }
  if(pickNumber) {
    selectedCharacters.push(...number);
  }
  if(pickSymbol) {
    selectedCharacters.push(...symbols);
  }
  var generatedPwd = [];
  
  for(let i = 0; i < numberOfChar; i++) {
    
    let pick = Math.floor(Math.random() * selectedCharacters.length);
    
    generatedPwd.push(selectedCharacters[pick]);
    
  };
  
  return generatedPwd.join("");
  
  
  
};







// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  
  
  passwordText.value = password;
  
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
