// length
let text="Sparkout";
let length=text.length;
console.log(length)

// this is slice
let name="preetha";
console.log(name.slice(0,5))

let string="Garunyaa";
console.log(string.substring(0,5))

let text1 ="Methuna";
console.log(test1.substr(0,5))

// this is replace
let data="Hello all";
console.log(data.replace("all","world"))

// this is replace global wise
let global="keep working place & place"
let change=global.replace(/place/g,"wild")
console.log(change)

// this is replace incencetive
let incencetive="watching for tv"
let changing=incencetive.replace(/WATCHING/i,"keep watching")
console.log(changing)


// this is replace all
let para = "I love cats. cats are very easy to love. cats are very popular."
let repall=para.replaceAll("cats","dogs")
let repalla
console.log(repall)

// this is Uppercase
let upcase="i have to give your mobile"
let changingcase=upcase.toUpperCase();
console.log(changingcase)

// this is lowercase
let lowercase="I HAVE TO GIVE THE MOBILE"
let changinglower=lowercase.toLowerCase();
console.log(changinglower)


// this is concate
let concate='sheik';
let join='dwood';
let add=concate.concat("",join)
console.log(add)


// this is trim
let d="          hellow       ";
let trim=d.trim()
console.log(trim)

// this is padstart
let padof="5"
let chg=padof.padStart(4,"0")
console.log(chg)

// this is padend
let ass="6";
int=ass.padEnd(6,"9")
console.log(int)

// this is chartat
let  number="Hellow world"
chartat=number.charAt(0)
console.log(chartat)
