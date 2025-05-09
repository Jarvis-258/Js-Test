
function sayMyName()
{
console.log(A);
console.log(N);
console.log(A);
console.log(N);
console.log(D);

}
//sayMyName()

// function addTwoNumber(num1,num2)
// {
//     console.log(num1 + num2);

// }

function addTwoNumber(num1,num2)
{
    // let result = num1 + num2
    // return result
   return num1 + num2 
}
const result = addTwoNumber(3,4)
//console.log("result:", result);

function loginUserMessage(username){
    if(username === undefined)
    {
       console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Hello Bro"));
//console.log(loginUserMessage(""));
//console.log(loginUserMessage());

// ---------- Shopping cart ------- //

function calculateCartPrice(val1, val2 ,...num1)
{
return num1
}
// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "ram",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username: "om",
    price : 200
})

const myNewArray = [100,200,300,400]
   function returnSecondValue(getArray)
   {
    return getArray[1]
   }
//    console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([100,200,300,400,]));

   