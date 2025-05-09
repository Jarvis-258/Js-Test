//const tinderUser = new Object() -> singleton

const tinderUser ={}
tinderUser.id = "123abc"
tinderUser.name = "Tom"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularUser = {
    email: "some@google.com",
    fullname: {
        userfullname: {
            firstname: "Tom",
            lastname: "Jerry"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname.lastname);

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "c", 4: "d"}

//const obj3 = { obj1,obj2 }
//const obj3 = Object.assign({},obj1, obj2)
const obj = {...obj1, ...obj2}
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "a@google.com"
    },

    {
        id: 1,
        email: "a@google.com"
    },

    {
        id: 1,
        email: "a@google.com"
    },

    {
        id: 1,
        email: "a@google.com"
    },

    {
        id: 1,
        email: "a@google.com"
    },
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    couseInstructor: "hello"
}

//course.couseInstructor

const {couseInstructor: instructor} = course

// console.log(couseInstructor);
console.log(instructor);

// {
//     name: "AK"
//     cousename: "English"
//     price: "Free"
// }