function demo()
{
    console.log("Komu is prettiest of all time");
    console.log("Komu is cutest of all time");
    console.log("Komu is beautiest of all time");
    console.log("Komu is loving of all time");
    console.log("Komu is caring of all time");
    console.log("Komu is bestest of best of all time");
}

demo()

function add(a,b)
{
    return a + b;
}

const sum = add(1,2)
console.log(sum);

//function calculatecartprice(num1){
//    return num1;
//}
//
//const ans = calculatecartprice(288)
//console.log(ans);
//
function calculatecartprice(...num1){//use of "..."  rest operator
    return num1;
}

console.log(calculatecartprice(288,345,986))

const user={
    username:"divyanshu",
    price:199
}

function handleobject(anyobject){
    console.log(`username is ${user.username} and price is ${user.price}`);
}

handleobject(user)
handleobject({user})