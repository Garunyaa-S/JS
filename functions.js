// Function declaration and call
function greet(name) {
    return `Hello ${name}!`;
}
console.log(greet('Hari'));

// Arrow function
let add = (a, b) => {
    return a+b;
}
console.log(`Addition of a and b is : ${add(3,5)}`);


// Function with default parameter
function divide (a, b = 5) {
    return a/b;
}
console.log(`Division of a by b is: ${divide(30)}`);

// Function expression
let multiply = function (a, b) {
    return a*b;
}
console.log(`Multiplication of a and b is: ${multiply(4, 8)}`);

// Function as Object
let calculate = {
    add: function (a,b) {
       return a+b; 
    },
    sub: function (a,b) {
        return a-b;
    }
}
console.log(`Addition of a and b is: ${calculate.add(6,7)}`);
console.log(`Subtraction of a and b is: ${calculate.sub(20,9)}`);

// Callback function
function sayHello (name, callback) {
    console.log(`Hello ${name}!`);
    callback();
}
function greet() {
    console.log("Have a good day.");
}
sayHello('Kathir', greet);