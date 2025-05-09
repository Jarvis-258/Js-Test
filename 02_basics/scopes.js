// let a = 10
// const b = 20
// var c = 30

// {} -> scopes

//global scope
let a = 300
if (true)
{
    let a = 10
const b = 20
// var c = 30
//inner scope

// console.log("inner: ", a);

}

// console.log(a);
// console.log(b);
// console.log(c);


// --------------- nested-scope ----------------- //

function one ()
{
    const username = "Anand"

    function two()
    {
        const website = "youtube"

        console.log(username);
        
    }
    // console.log(website);
     two()
    
}
// one()

if(true)

    {
        const username ="anand"
        if(username === "anand")
        {
            const website = "youtube"
            // console.log(username + website);
            
        }
        // console.log(website);
        
    }
    // console.log(username);
    

//  ---------------------- interesting ----------------- //
console.log(addone(5));

function addone(num)
{
  return num +1
}
// addone(5)

console.log(addTwo(5));

const addTwo = function(num)
{
    return num +2
}
// addTwo(5)