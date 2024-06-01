const value=30
const name = "Satyam"

console.log(`Hello this is ${name} and my current battery is ${value} now`)
console.log(`current cgpa is ${value}`);
console.log(`xyz ${value}`);

//declare string with object key-value pair
//string methods
const stringName = new String("Divyanshu,Satyam,Anshika,Komal")
console.log(stringName[0]);
console.log(stringName.__proto__);  //gives object
console.log(stringName.length);
console.log(stringName.indexOf('y'));
console.log(stringName.toUpperCase('Divyanshu'));
console.log(stringName.bold());
console.log(stringName.charAt(4));
console.log(stringName.indexOf('u'));
let substring = stringName.substring(0,4);
console.log(substring);

const newstring = stringName.slice(-8,4)  // gives substring form reverse as well
console.log(newstring);
const newString = "Divyanshuss"
console.log(newString);
console.log(newString.trim());    // remove all extra spaces

const url = "https://komal.com/komalsatyam2928"
console.log(url);
console.log(url.replace('komal','anshika')) //replace strings
console.log(url.includes('anshika')); //checks if string is exists or not
console.log(url.includes('komal')); //checks if string is exists or not
 
console.log(stringName.split('-'))