// at()
let mobiles = ['Vivo', 'Oppo','Samsung','Oneplus'];
console.log(`Indexed element is: ${mobiles.at(1)}`); // output: Oppo

// copyWithin()
console.log(`Overwrited array: ${mobiles.copyWithin(2,0)}`); // copies array elements to another position in an array

// entries()
let m = mobiles.entries();
console.log(`An Array Iterator object with key/value pairs: `);

for(let x of m) {
    console.log(`${x}`);
} 

// every()
let ages = [20, 25, 21, 19];
console.log(ages.every(checkAdult)); // returns true

function checkAdult(age) {
    return age > 18;
}

// filter()
console.log(ages.filter(checkAge)); // returns [25,21]

function checkAge(age) {
    return age >= 21;
}

// find()
console.log(ages.find(check_age)); // returns 19

function check_age(age) {
    return age < 20;
}

// findIndex()
console.log(ages.findIndex(ageCheck)); // returns 3

function ageCheck(age) {
    return age < 20;
}

// fill()
console.log(mobiles.fill('Redmi')); // fills all elements with Redmi

// flatMap()
let array = [2,4,6,8,10];
console.log(`New array is: ${array.flatMap((x) => x*2)}`);

// forEach()
let bird = "";
let birds = ['Peacock', 'Sparrow', 'Parrot', 'Pigeon'];
birds.forEach(Birds);
console.log(bird);

function Birds(item,index) {
    bird += `${index}: ${item} `;
}

// includes()
console.log(`${birds.includes("Parrot")}`); // returns true

// indexOf()
console.log(`Index : ${birds.indexOf('Sparrow')}`); // Index: 1

// isArray()
console.log(`${Array.isArray(birds)}`); // returns true

// from()
let text = "ABCDEFG";
console.log(`New array by using from() is: ${Array.from(text)}`) //creates an array from string

// lastIndexOf()
let fruits = ['Apple', 'Orange', 'Grapes', 'Apple', 'Papaya'];
console.log(`${fruits.lastIndexOf('Apple')}`); // returns 3

// map()
let arr = [4, 9, 16, 25, 36, 49, 64, 81];
console.log(`${arr.map(Math.sqrt)}`); // output: 2,3,4,5,6,7,8,9