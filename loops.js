let arr =[1,32,7,9,10]
let sum = 0;
console.log("-----loop------");
for( let i=0;i<arr.length;i++)
{
    sum = sum +arr[i]
}
console.log(sum);

console.log("------Nested Loops------");
for(let i=0;i<5;i++)
{
    console.log(`The outer loop value is ${i}`)
    for(let j=1;j<=10;j++)
   {
       // console.log(`The inner loop value is ${j} and inner loop is ${i}`);
       
       console.log(i + '*' + j + '=' + i*j);
    }
}

//Break and Continue
console.log("-----BREAK keword-------");
for(let index=0 ;index <=20;index++)
{
    if(index==5)
    {
        console.log("5 is detected");
        break;
    }
    console.log(`the value of i is ${index}`);
}

//continue 
console.log("-------CONTINUE keword-----");
for(let index=0 ;index <=20;index++)
{
    if(index==5)
    {
        console.log("5 is detected");
        continue;
    }
    console.log(`the value of i is ${index}`);
}

console.log("------WHILE LOOP---------");

let index =0;
 while(index<=10)
 {
    console.log(`value of index is ${index}`);
    index = index + 2;
 }

 let array = ["ant","kite","drop"]

 let a =0 ;
 while(a<array.length)
 {
    console.log(`array values are ${array[a]}`);
    a++;
 }

 console.log("------DO WHILE LOOP---------");

 let score =1;
 do
 {
    console.log(`score is ${score}`);
    score++
 }
 while(score<=10)