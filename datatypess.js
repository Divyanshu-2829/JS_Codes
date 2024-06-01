// primitive data types are always stored in STACK memory

//7 Types : string, number, boolean ,null,undefined,symbol,BigInt


const score =100;
const scoreValue =200.3;

const isLogggenIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123")
const id2 =Symbol("123")

console.log(id ==id2)

//BigInteger
const bigNumber = 78278677387989797n
console.log(bigNumber);

//Non-primitive / Refrence types are always stored in the HEAP memory

//types: Array,Objects,Functions

const heros = ["shaktiman" ,"naagraj","doga" ]

//objects are in curly brackets 
console.log("craete object and store in any variable");
let obj ={
    name: 'Divyanshu',
    age : 21,
    Id: "BT21CSE162"
}
console.log(obj);

console.log("create object without storing in any variable");
{
    name:"hero"
    age:"20"
    id:"csed162"
}
//creation of function
const myFunction = function(){
    console.log("hello world")
}
myFunction()

console.log(typeof myFunction);


//use of function and access inside the object

let userOne = {
    email:"xyz@gmail.com",
    upi:"xyz@ybl"
}

let userTwo =userOne
console.log(userOne.email);
console.log(userTwo.email);