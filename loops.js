// for loop
console.log("for loop");
for (let i = 1; i <= 10; i++) {
     console.log(`n = ${i}`); 
}

// for-in loop
console.log("for-in loop");
let person = {
    Name: "Garu",
    Age: 25
};
for (let key in person) {
    console.log(`${key} : ${person[key]}`);
}

// for-of loop
console.log("for-of loop");
let fruits = ['Apple','Orange','Grapes'];
for (let fruit of fruits) {
    console.log(`Fruit: ${fruit}`);
}

// while loop
console.log("while loop");
let x = 0;
while (x <= 10) {
    console.log(`x = ${x}`);
    x++;
}

// do-while loop
console.log("do-while loop");
let num = 1;
do {
    console.log(`n = ${num}`);
    num++;
} while (num <= 15);