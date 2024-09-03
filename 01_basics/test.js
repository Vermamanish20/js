const accountId = 14485
let accountEmail =  "Manish@google.com"
var accountPassword = "12345"
accountCity =  "Jaipur"
let accountState;

// accountId = 2
accountEmail = "Mv@Mv.com"
accountPassword = "212121"
accountCity = "Rajasthan"

console.log(accountId);


/*
Prefer not to use var 
bescause of issue in block scope and functional scope 
*/

console.table([accountId,accountEmail, accountPassword, accountCity, accountState])