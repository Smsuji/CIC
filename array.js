//let numbers = [];   //empty array
// let numbers = [1,2,3,4,5];   //empty array
// console.log(numbers[2]);
/** let fruits = ["apple","banana"];
console.log(fruits);

//push - adds it to the last place.
fruits.push("orange");
console.log(fruits);
//pop - remove the last one
fruits.pop();
console.log(fruits);

//shift - remove the first one
let numbers = [2,3,4];
let first = numbers.shift();
console.log(first);
console.log(numbers);

//unshift - add to the first place
numbers.unshift(1);
console.log(numbers);

//slice
let animals = ["cat", "dog", "fox", "wolf"];
let ani = animals.slice(1,3); // start from 1st index and leave the last one. // ['dog','fox']
console.log(ani);

//splice
let colors = ['red','blue','green'];
colors.splice(1,1,'yellow','orange');
console.log(colors);

colors.splice(1,1); // deletes yellow(bcoz starts from 1st index and it will delete only one item)
colors.splice(1,2); // deletes yellow and orange (bcoz starts from 1st index and it will delete two item)
console.log(colors); 

//sort
// let rainbow = ["voilet","blue","green","indigo"];
let rainbow = [3,5,2,1,6,7,4];
rainbow.sort();
console.log(rainbow);
rainbow.reverse();
console.log(rainbow); 

//concat()
let fname = [1,2,3];
let lname = [4,5,6];
console.log(fname.concat(lname));

//join()
let words = ["hello","world","!"];
let sentence = words.join(" ");
console.log(sentence);  

//indexOf() amd lastIndexOf()
let b = ["apple","banana", "cherry", "apple"]
console.log(b.indexOf("apple"));
console.log(b.lastIndexOf("apple")); 

//include()
let c =[1,2,3,4,5];
console.log(c.includes(3)); //where this c array includes the number 3 or not. if includes it give true as output
console.log(c.includes(9));

//spread operator
//copying arrays
let array1 = [1,2,3,4];
let array2 = [...array1];
console.log(array2);

//Merging arrays
let array3 = [5,6,7,8];
let merged = [...array1, ...array3];
console.log(merged);   

//2D array
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

//Accessing specific element
console.log(matrix[0][2]);  //output:3

//Iterate through rows and columns
for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length ; j++){
        console.log(matrix[i][j]);
    }
}

//Modify an element
matrix[1][1] = 42;
console.log(matrix); */

//forEach(callback)
let number = [1,2,3];
number.forEach(num=>console.log(num));
