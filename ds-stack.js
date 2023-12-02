class Stack {
	constructor() {
		this.animals = [];
	}
push(element) {
	this.animals.push(element);
}

pop() {
	if (this.animals.length == 0) // returns top most element and removes it from the stack
		return "Underflow";
	return this.animals.pop();
}

peek() {
	return this.animals[this.animals.length - 1]; // return the top most element from the stack
}

isEmpty() {
	return this.animals.length == 0; // return true if stack is empty
}

size() {
    return this.animals.length;
}

printStack() {
	let str = "";
	for (let i = 0; i < this.animals.length; i++)
		str += this.animals[i] + " ";
	return str;
}
}

let stack = new Stack();

// Adding element to the stack
stack.push("Dog");
stack.push("Cat");
stack.push("Rabbit");
stack.push("Deer");

console.log(stack.pop()); // returns Deer

console.log(stack.peek()); // returns Rabbit

console.log(stack.size()); // Output: 3

console.log(stack.isEmpty()); // returns false

console.log(stack.printStack()); // prints [Dog, Cat, Rabbit]