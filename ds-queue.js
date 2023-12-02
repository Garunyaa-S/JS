class Queue {
	constructor() {
		this.persons = [];
	}
enqueue(name) {
	this.persons.push(name);
}

dequeue() {
	if (this.isEmpty()) {
        return null;
    }
    return this.persons.shift();
}

peek() {
	return this.persons[this.persons.length - 1]; // return the top most element from the stack
}

isEmpty() {
	return this.persons.length == 0; // return true if stack is empty
}

size() {
    return this.persons.length;
}
}

let queue = new Queue();

// Adding element to the stack
queue.enqueue("Sri");
queue.enqueue("Hari");
queue.enqueue("Garu");
queue.enqueue("Kathir");

console.log(queue.dequeue()); // returns Sri

console.log(queue.peek()); // returns Kathir

console.log(queue.size()); // Output: 3

console.log(queue.isEmpty()); // returns false