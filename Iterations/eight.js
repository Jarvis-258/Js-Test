const myNums = [1,2,3]

// const myTotle = myNums.reduce(function (acc, currval)
// {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)

 const myTotle = myNums.reduce((acc, curr) =>acc+curr,0)

console.log(myTotle);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },

    {
        itemName: "java course",
        price: 4999
    },

    {
        itemName: "mobile dev course",
        price: 5999
    },

    {
        itemName: "data science course",
        price: 12999
    },

    {
        itemName: "Python course",
        price: 3999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
