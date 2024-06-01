// use of const,let,var variable typess

const accountID = 145435
let accountEmail = "xyz123@gmail.com"
var accountPass = 'Jaipur'
accountcity ="Chennai"

//printing their outputs
console.log(accountID)
console.log(accountEmail)
console.log(accountPass)
console.log(accountcity)

//change the values and check what happens
accountEmail = 'gytuy@gmail.com'
//AccountID= 8878377  --> shows error becuase it is a const variable so value cannot be chnaged
accountPass='satyam'
accountcity = "Allahabd"

let accountstate //Variable with no assigned values shows undefined in the JS while printing th output

//use of console.table function to print multiple values in table 
console.table([accountEmail,accountID,accountPass,accountcity,accountstate])

