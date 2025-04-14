/**let randomNumber;

do{
    randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log("Generated number:", randomNumber);
}while(randomNumber !== 7)*/

const prompt = require('prompt-sync')();

let actualPwd = prompt("Please set the password:");

let enterPwd = prompt("Please enter the pwd:");
while(enterPwd !== actualPwd) {
    console.log("Enter the correct password");
    enterPwd = prompt("Please enter the correct password(Do not enter number or leaves it blank:");
}
console.log("Password is correct");