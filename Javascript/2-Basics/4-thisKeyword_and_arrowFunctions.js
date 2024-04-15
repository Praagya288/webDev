
                // 1 - This keyword 
// this refers to the current context (more later) . Note : below code does not explain the this keyword much , dont get confused
/*
const user = {
    username : "Praagya" ,
    price : 100 ,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to the website`)
    }
}

user.welcomeMessage()
user.username = "Jain"
user.welcomeMessage()
*/

                // 2 - This keyword inside function
// this keyword is used in objects only 
/*
function example(){
    let username = "Praagya" 
    age = 20 
    console.log(this.username);
}
example()

// Note : this keyword cannot be used in arrow functions also
*/


                // 3 - Arrow Functions

// one syntax 
/*
const addOne = (num) => {
    return num + 1 
}

console.log(addOne(4))
*/

// Another syntax
/*
const addTwo = (num) => num + 2 

console.log(addTwo(4))
*/

// Another syntax
/*
const addBoth = (num1 , num2) => (num1 + num2)

console.log(addBoth(2,3))
*/

// Another syntax. In this case we are returning objects
/*
const addBoth = (anything) => ({ 
    username : "Praagya" ,
    age : 20 
})

console.log(addBoth())
*/


/*
Note : Important note from the above topic 3 - Arrow Function. (Imp for react)
IN THE RIGHT SIDE (after =>)
when you are using curly braces {} you have to write the return keyword
but when you use parenthesis () you dont have to write  the return keyword.

so we may call it as "implicit return"  when we are not writing return keyword
and  we may call it as "explicit return"  when we are writing return keyword
*/



function example(){
    console.log("inside a function")

}
