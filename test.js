let age = -66;

if(age > 0 && age <= 12){
    console.log("Child");
} else if( age >= 13 && age <= 17){
    console.log("Teenager");
} else if( age >= 18 && age <= 64) {
    console.log("Adult");
} else if(age >= 65) {
    console.log("Seniors");
} else {
    console.log("Invalid");
}