//------------------ Dates -------------------- //

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

//let myCreatedDate = new Date (2024, 4, 14)
// let myCreatedDate = new Date (2024, 4, 14, 5, 3)
// let myCreatedDate = new Date ("2024-05-14")
 let myCreatedDate = new Date ("05-14-2025")
// let myCreatedDate = new Date (2024, 0, 14)
//console.log(myCreatedDate.toLocaleString());

let myTimeStam = Date.now()
// console.log(myTimeStam);

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`
newDate.toLocaleString('default',{
    weekday: "long",
   
})