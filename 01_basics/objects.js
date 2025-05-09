// singleton
//Object.create


// object literals

const mySym = Symbol("key1")

const JsUser ={
    name: "Hello",
    "full name": "Hello kese ho aap",
    [mySym]: "mykey1",
    age : 18,
    location : "New Delhi",
    email: "Hello@google.com",
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "Hi@google.com"
//Object.isFrozen(JsUser)
JsUser.email = "Hi@googlefhg.com"
//console.log(JsUser);


JsUser.greeting = function()
{
    console.log("Hello JS user");
    
}
// console.log(JsUser.greeting);
console.log(JsUser.greeting());


JsUser.greetingTwo = function()
{
    console.log(`Hello JS user,${this.name}`);
    
}
console.log(JsUser.greetingTwo());
