const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(  function (item)
// {
//    console.log(item);
   
// }
// )

// coding.forEach( (value)=> {
//     console.log(value);
    
// } )

// function printMe (value)
// {
//     console.log(value);
    
// }
// // coding.forEach(printMe)

// coding.forEach (( iteam, index, arr) =>{
//   console.log(iteam, index, arr);
  
// })

const myCodding = [
    {
        languageName: "JavaScript",
        languageFlileName : " js"
    },

     {
        languageName: "Java",
        languageFlileName : " java"
    },

     {
        languageName: "python",
        languageFlileName : " py"
    },
]
myCodding.forEach((item)=>{
    console.log(item.languageName);
    
})