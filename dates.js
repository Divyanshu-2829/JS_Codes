//Dates

let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toLocaleString());
console.log(mydate.toDateString());
console.log(typeof mydate);

let createdate = new Date(2023,0,23)
console.log(createdate.toString());
console.log(createdate.toDateString());
console.log(createdate.toLocaleString());


//TimeStamps

let timestamp=Date.now();
console.log(timestamp);
console.log(createdate.getTime());
console.log(Math.floor(Date.now()/1000));


let newdate = new Date()
console.log(newdate)
console.log(newdate.getFullYear())
console.log(newdate.getMonth())
console.log(newdate.getDay())

console.log( newdate.toLocaleDateString('default',{
    weekday: "long"
}))
