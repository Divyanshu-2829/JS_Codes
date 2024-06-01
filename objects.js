//singleton 

//object literal

const jsuser={
    name: "Divyanshu",
    age:18,
    location:"Prayagraj",
    email:"aditya.singh0096@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Mon", "Tue", "Wed", "Thu"]
}

    //accessing the objects

console.log(jsuser.email);
console.log(jsuser["email"]);

//access symbols in the object
const mysym = Symbol("Key1")


const jsuser1={
    name: "Anshika",
    age:16,
    [mysym]:"mykey1",
    location:"Prayagraj",
    email:"betubittu.singh2829@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Mon", "Tue", "Wed", "Thu"]
}

    console.log(jsuser1[mysym]);

    //other functions
    jsuser1.email = "anshika@gmail.com"// modify the email property
    //Object.freeze(jsuser1); // freeze the object
    console.log(jsuser1);
    jsuser1.email ="anshika@google.com"

    jsuser1.greeting =function()
    {
        console.log("hello my love komu");
    }

    jsuser1.greetingtwo =function()
    {
        console.log(`Most loving caring and sweetest my wifuuuu --${this.name}`);
    }

    console.log(jsuser1.greeting());
    console.log(jsuser1.greetingtwo());
    
   
    // object part 2

    const tinderuser = new Object()
    const tinderuser2 = {}

    console.log(tinderuser);
    console.log(tinderuser2);

    tinderuser.id = "123abs"
    tinderuser.name = "Komal"
    tinderuser.isLoggedIn =true;
    console.log(tinderuser);

    let regularuser = {
        email:"xyz@gmail.com",
        userfullname:{
                firstname:"Komal",
                lastname:"satyam"
        }
    }

    console.log(regularuser.userfullname);

    //Merging of an object 
    const object1 = {1:"a",2:"b"}
    const object2 = {3:"c",4:"d"}
    //const object3 = Object.assign(object1,object2) // merge multiple objects
    const object3 ={...object1,...object2}
    console.log(object3);


    //array of multiple objects 
    const users = [{
        name:"Anshika divyanshu singh",
        age : 16
    },
    {
        name :"Komal satyam singh",
        age: 16
    }
    ]
    console.log(users);
    console.log(Object.keys(users));//for all keys 
    console.log(Object.values(users));//for all values
    console.log(Object.entries(users));//for all entries 

    console.log(users.entries("Komal satyam singh"));