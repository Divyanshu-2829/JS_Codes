const array = [1,2,3,4,56,];

const initvalue = 0;
const sumwithinitial = array.reduce(
    (accumulator , currentvalue) => accumulator + currentvalue,
    initvalue );  
console.log(sumwithinitial);

const mynums = [1,2,3,4]

const mytotal = mynums.reduce((acc,currval)=>{
    console.log(`the accumaltor value is ${acc} and current value is ${currval}`);
    return acc + currval },0)

    console.log(mytotal);

    const cart = [
        {
            itemname :"sareee",
            price: 10900
        },
        {
            itemname :"lahnga",
            price: 10244
        },
        {
            itemname :"Kangan",
            price: 1970
        },
        {
            itemname :"Payal",
            price: 10670
        },
        {
            itemname :"Ghungroo",
            price: 10000
        },

    ]

    const res = cart.reduce((acc,item)=>
{
    return acc+item.price},0)

    console.log(res);