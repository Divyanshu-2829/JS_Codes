//Immediatly Invoked Function Expression

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})(); //";" use this for termination
// ()() --> First () means definition of the function and 
 //Second () means the excecution call

 //When the pollution problem created by the global scope so to remove that pollution variabl we can use the IIFE

 // By Arrow Function 
console.log("Using Arrow function");
 ( (name)=> {
    //unnamed IIFE
    console.log(`DB CONNECTED ${name}` )
 })("Satyam");

