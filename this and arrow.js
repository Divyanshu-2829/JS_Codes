const user = {
    username: "divyanshu",
    price: 162,

welcomemessage: function() {
    console.log(`${this.username},welcome to the website`);
    console.log(this);
    }

    
}
user.welcomemessage()
user.username = "Satyam"
user.welcomemessage()
console.log(this);

const user2 ={
    city:"London",
    country:"United States",
    

welcome:function (){
    console.log(`welcome to the ${this.city} in the ${this.country}`);
    console.log(this);
}
}
user2.welcome()

function chai()
{
    console.log("this is the function");
    console.log(this);
    console.log(this.username);//cannot use this in functions only in objects

}
chai()

//Arrow functions
console.log("Arrow functions started here");

const chai2 = () =>{
    let userkanaam= "Priya"
    city:"raipur"
    console.log(this.userkanaam)
    console.log(this)
}
chai2()

const sum = (num1,num2) =>{
    return num1 + num2
}

console.log(sum(3,4)); 
console.log("Implicit return arrow function not using curly brackets");
const sum1 = (num1,num2) => num1 + num2
console.log(sum1(3,4));