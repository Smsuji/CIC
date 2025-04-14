
/*const prompt = require('prompt-sync')(); // import the prompt-sync package

let n = prompt("Please enter a number greater than 10:");
while(n<=10) {
    console.log("Enter number greater than 10");
    n = prompt("Please enter a number greater than 10:");
}
console.log("Vaid number");*/

const prompt = require('prompt-sync')();

let age, isCitizen;

do {
    age = prompt("Enter your age:");
    isCitizen = prompt("Enter your Citizenship status:");
} while(age === "" || isCitizen !== "yes" && isCitizen !== "no");

//age = Number(age);

if(age >= 18 && isCitizen == "yes"){
    console.log("You are eligible for vote");
} else {
    console.log("you are not eligible for vote");
}

