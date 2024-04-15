// `` = template literal or backticks


                // 1 - Normal working of functions
/*
function addTwoNumbers(num1 , num2){
    return (num1+num2);
}
result = addTwoNumbers(4,4)
console.log(result);
*/

                // 2 - Normal working +  `` usage explaination
/*
function loginUserMessage(username){    
    // return (username + " just logged in" )
     return `${username} just logged in`
}

console.log(loginUserMessage("Praagya"))
*/

                // 3 - Rest operator (spread operator)
/*             
// Note :   ... this is rest operator and may be spread operator also(more later)
function calculateCartPrice(...num1){
    return num1
}
// in the above lines ...num1 is taking all the values which are passed during
// the function call if ... is removed then only one value will be passed and 
// printed ie 40    
console.log(calculateCartPrice(40 , 50 , 60))
*/

                // 4 -  Functions and objects
/*
const user = {
    username : "Praagya" ,
    age : 20
}

function handleObject(anything){
    console.log(`Username is ${anything.username} and ${anything.age}`);
}

handleObject(user)

// instead of creating an object first and then passing it you can do this
handleObject({
    username : "Piyush" ,
    age : 26
})
*/

                    // 5 - Functions and arrays
/*
// Eg : lets return a value of an array using functions

const arr = [10 , 20 , 30]

function returnArray(anything){
    return anything[1]
}

console.log(returnArray(arr))

// instead of creating an array first and then passing it you can do this

console.log(returnArray([30 , 40 , 50]))
*/
