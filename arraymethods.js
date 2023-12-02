let flowers = ["rose", "jasmine", "lily", "aster"];
flowers[1] = "sunflower";

// Changing an array element
console.log(`An array after changing an element is: ${flowers}`);

// Converting an array to a string
console.log(`An array after converting it to string is: ${flowers.toString()}`);

// Array length
console.log(`Length of the array is: ${flowers.length}`);

// push()
console.log(`Length of the array after push(): ${flowers.push("lotus")}`);
console.log(flowers);

// pop()
console.log(`The last element removed from an array is: ${flowers.pop()}`);
console.log(flowers);

// shift()
console.log(`The first element removed from an array is: ${flowers.shift()}`);
console.log(flowers);

// unshift()
console.log(`Length of an array after added an element to the beginning is: ${flowers.unshift('Hibiscus')}`);
console.log(flowers);

// join()
console.log(flowers.join());

// delete()
console.log(`The first flower is: ${flowers[0]}`);
delete flowers[0];
console.log(`The first flower after using delete() method is: ${flowers[0]}`);

// concat()
let birds = ['Peacock', 'Parrot', 'Pigeon'];
let animals = ['Rabbit', 'Cat', 'Dog'];
console.log(`The concatenated array is: ${birds.concat(animals)}`);

// flat()
let fruits = [['Orange', 'Apple'],['Mango', 'Grapes'],['Papaya', 'Banana']];
console.log(`The flattened array is: ${fruits.flat()}`);

// splice() - add elements
let vegetables = ['Carrot','Beetroot','Cucumber','Cabbage'];
vegetables.splice(3, 0, 'Broccoli', 'Corn');
console.log(`The new array of vegetables is: ${vegetables}`);

// splice() - removes elements
console.log(`Removed element from vegetables is: ${vegetables.splice(1,1)}`);
console.log(vegetables);

// slice()
console.log(`Sliced part of an array starting from array element 2 is: ${vegetables.slice(2)}`);

// sort()
console.log(`Alphabetically sorted array: ${vegetables.sort()}`);

// reverse()
vegetables.sort();
console.log(`Reversed array: ${vegetables.reverse()}`);