// Primitive

// 7 type : String, Number, Boolearn, null, undefined, Symbol, BigIn

const score = 100
const scoreValue = 100.3

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId );
//const bigNumber = 45676545677654336543n

// Reference (Non-Primitive)

// Array, Function, Object

const heros = ["Ironman", "Hanuman", "Superman"]
let Myobj = {
    name :"OM",
    age : 18,
}

// Used function variable

const MyFunction = function()
{
console.log("Hello Word");

}

console.log(typeof bigNumber);




// ************************* Memory ********************************* //

// Memory are 2 type : -> 
// Stack () -> Primitive - change in Copy 
// Heap () -> Non-Primitive - change in original


let myName = "Ram"

let anothername = "kese ho bhai"

console.log(myName);
console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "two@google.com"

console.log(userOne.email);
console.log(userTwo.email);

