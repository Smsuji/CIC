/**const key = "email"
const objj = {
	name: "Alice",
	email: "alice@hotmail.com",
};

console.log(objj.email); */

/**let robot = {
    name: "Gemini",
    greet: function(){
        return `Hello, my name is ${this.name}`;
    }
}

console.log(robot.greet());
console.log(robot.name); */

/**const person = {
    name: "Alice",
    age:25,
    city: "NewYork"
};

console.log(person.age);
console.log(person["city"]); */

/**const person = {
    name: "Alice",
};

person.age = 25; // Dot notation
person["city"] = "New York"; // Bracket notation

console.log(person); */

/**const person = {
    name: "Alice",
    age : 25
};

person.age = 27; // Dot notation
console.log(person);*/

/**const book = {
    title : "1984",
    author : "George orwell"
};

delete book.author;
console.log(book);*/

/**let person = {
    name : "suji",
    age : 35,
    isStudent : true
};
console.log(person.name);
console.log(person["age"]);
console.log(`student: ${person.isStudent}`); */

/**const vehicle = {
    type : "bike",
    speed : 20
};
vehicle.isElectric = false;
console.log(vehicle);*/

/**const user = {
    name : "Alice",
    age : 24
}
age = 25;
console.log(user);*/

/**const movie = {
    title : "Inception",
    year : 2010,
    genre : "Sci-Fi"
};
delete movie.year;
console.log(movie); */

/**const library = {
    books : ["book1","book2", "book3"]
};*/

const animal = {
    type : "cat",
    legs : 4,
    greet: function(){
        return `Hello, I am a ${this.type}`;
    } 
};
console.log(animal.greet());