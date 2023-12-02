class Person {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}
	getDetails() {
		return (`The name of the person 3 is ${this.firstName +" "+ this.lastName}  and his age is ${this.age}.`);
	}
}

let person1 = new Person('Garunyaa', 'Shanmugam', '25');
let person2 = new Person('Kanimozhi', 'Ganapathy', '25');
let person3 = new Person("Hari ", "Krishnan", "21");  

console.log(`The name of the person 1 is ${person1.firstName} and her age is ${person1.age}.`);
console.log(`The name of the person 2 is ${person2.firstName} and her age is ${person2.age}.`);
console.log(person3.getDetails());