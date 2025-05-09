//   Immediately invoked function Expressions (IIFE)

// (function chai ()
// {
//     console.log(`DB Connect`);
    
// }) ()
// chai()

(function chai ()
{
    //named IIFE
    console.log(`DB Connect`);
    
}) ();

  // without named IIFE/ with permeater
((name) => {
    console.log(`DB Connect Two ${name}`);
    
})('jar')