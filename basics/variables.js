const accountID = 112233
let accountEmail = "anand@google.com"
var accountPassword = "12345"


accountCity = "New Delhi"
let accountState;

//  accountID = 2 // not allowed

 accountEmail = "jarvis@google.com"
 accountPassword = "1212121"
 accountCity = "Noida"
 
 console.log(accountID);

 /*
    Prefer not to be used var 
    because of issue in block-scope and function-scope
 */

 console.table ([accountID, accountEmail, accountPassword, accountCity,accountState])