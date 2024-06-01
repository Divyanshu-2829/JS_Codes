const arr =[1,2,3,4 ,5,6,7,8,9,10,11]
const arr2 =['a', 'b', 'c', 'd', 'e']
console.log(arr);
console.log(arr2);
arr.push(22)
arr2.push('ee')
console.log(arr[0]);
console.log(arr);
console.log(arr2);
arr.pop()
arr2.pop()
console.log(arr);
console.log(arr2);

//unshift function()

arr.unshift(98) //push the value at first index in the array
console.log(arr);

//shift function()
arr.shift() //It pops the value which is pushed in unshift operation
console.log(arr);
//some array functions 
console.log(arr.includes(9));
console.log(arr.indexOf(9));
console.log(arr.indexOf(4));
console.log(arr.length);
console.log(arr.toString(9));
console.log(typeof 'e');

// slice , splice array function

console.log("A",arr); //gives name  of array and then print it values 
console.log("printing slice function");
const newarr = arr.slice(1,3) //it cannot change the original array in slice
console.log(newarr);
console.log("B",arr);
console.log("printing splice function");
const newarr2 = arr.splice(1,3) //it changes the original array
console.log(newarr2);
console.log("C",arr);

//arrays and concatenation

const heros =["batman", "superman", "spiderman"]
const villains = ["naag","ajgar","raaka"]
//heros.push(villains)
console.log(heros);
const newhv =heros.concat(villains);
console.log(newhv);

//spread two arrys
console.log("spread two arrays using '...'");
const spreadarray = [...heros,...villains]
console.log(spreadarray);

//using array flat function
console.log("using flat function")
const multiarray = [1,2,3,[33,6,44],47,[0,9,[21,34]]]
const newmultiarray = multiarray.flat(Infinity) //for splitting multi-D arrays in one array
console.log(newmultiarray)
console.log(multiarray)

//isarray function

console.log(Array.isArray("Divyanshu"));
console.log(Array.from("Divyanshu"));
console.log(Array.of("Divyanshu"));

console.log(Array.from({name:"divyanhsu"}));//special case for this 
console.log(Array.from({key:8}));


