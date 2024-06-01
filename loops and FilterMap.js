const coding =["js","java","ruby","python","cpp"]

const values = coding.forEach((item)=>{
    console.log(item);
})

console.log(values);

const mynums = [1,2,3,4,5,6,7,8,9,10]

const res = mynums.filter((num)=>{ return num > 5
})
console.log(res);

const narr = []

mynums.forEach((num)=>{
    if(num>4)
    {
        narr.push(num)
    }
})
console.log(narr);


const books = [
    { title: 'book one' , genre :'Fiction', publish : 1981,
        edition :2004},
    { title: 'book two' , genre :'Non-Fiction', publish : 1992,
        edition :2008},
    { title: 'book three' , genre :'History', publish : 1980,
        edition :2007},
    { title: 'book four' , genre :'Non-Fiction', publish : 1987,
        edition :2010},
    { title: 'book five' , genre :'Science', publish : 1981,
        edition :2005},
    { title: 'book six' , genre :'History', publish : 1981,
        edition :1987},
    { title: 'book seven' , genre :'Fiction', publish : 1982,
        edition :2004},  
]

let userbooks = books.filter  ( (bk)=> bk.genre ==='History')
    console.log(userbooks);

userbooks = books.filter( (bk)=> bk.publish>=2000 && bk.genre ==='Non-Fiction')
console.log(userbooks);

const mynumss = [1,2,3,4,5,6,7,8,10]

const x = mynumss.map((num)=> num + 10).map( (num)=> num + 1).filter( (num) => num>=4)
console.log(x)

