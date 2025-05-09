const user = {
   username : "Anand",
    price : 199,

    welcomeMessage: function()
    {
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
        
    }
    
}
// user.welcomeMessage()
// user.username = "Jar"
// user.welcomeMessage()

console.log(this);

// function one()
// {
//     let username = "ram"
//     console.log(this.username);
    
// }
// one()

const chai = () =>
{
    let username = "jar"
    console.log(this);
    
}

// chai()
      
// ------ explecty------ //

// const addtwo = (num1, num2) => 
//     {
//   return num1 + num2

//  }

// ------- inplecity -------- //

// const addtwo = (num1, num2) => num1 + num2
// const addtwo = (num1, num2) => (num1 + num2)

const addtwo = (num1, num2) =>( {username : "Anand"})
console.log(addtwo(3,4));


