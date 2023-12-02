let text = "Sparkout";
console.log(`Length of the string is: ${text.length}`);

let name = "Garunyaa";
console.log(`The sliced part of the string is: ${name.slice(0,4)}`);

let str = "Preetha";
console.log(`The extracted part of the string by substring() method is: ${str.substring(0,4)}`);

let string = "Methuna";
console.log(`The extracted part of the string by substr() method is: ${string.substr(0,5)}`);

let text1 = "Hello All";
console.log(`A string after using replace() method is: ${text1.replace("All", "World!")}`);

let text2 = "Jenny was a Catholic because her mother was a Catholic. Jenny's mother was a Catholic because her father was a Catholic."
console.log(`A sentence after using replaceAll() method is: ${text2.replaceAll("Catholic", "Christian")}`);

let text3 = "sri";
console.log(`The uppercase string is: ${text3.toUpperCase()}`);

let text4 = "JAYASURYA";
console.log(`The lowercase string is: ${text4.toLowerCase()}`);

let txt1 = "Hello";
let txt2 = "World";
console.log(`The concatenated string is: ${txt1.concat(" ", txt2)}`);

let text5 = "    Garu    ";
console.log(`The trimmed string is: ${text5.trim()}`);

let text6 = "    Chandrikha    ";
console.log(`The string after using trimStart() method is: ${text6.trimStart()}`);

let text7 = "    Kani    ";
console.log(`The string after using trimEnd() method is: ${text7.trimEnd()}`);

let str1 = "G";
console.log(str1.padStart(4, "S"));

let str2 = "S";
console.log(str2.padEnd(4,"G"));

let str3 = "Shanmugam";
console.log(`Character at given position is: ${str3.charAt(4)}`);

console.log(`Character code at given position is: ${str3.charCodeAt(3)}`);

let str4 = "Sparkout Tech";
console.log(str4.split(" "));