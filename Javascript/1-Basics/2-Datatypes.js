              // 1 - Datatypes in Javascript

/*
Note - 1
In JavaScript, data types such as numbers, strings, booleans, objects, etc., exist similar to other programming languages. However, unlike languages like Java or C, JavaScript does not require explicit declaration of data types when defining variables. For example, when assigning a value to a variable using `const`, `let`, or `var`, you can directly assign any data type without explicitly specifying its type. JavaScript automatically determines the data type based on the value assigned.

Note - 2
A variable that has not been assigned a value is of type undefined.


Note-3
1 - Primitive datatypes = int , float , etc.

2 - Non-Primitive datatypes (Reference datatypes) =  arrays , object , functions etc.
*/

// 1 - Arrays
    const houses = ["Jal" , "Agni" , "Dhara" ]

// 2 - Objects = everything inside a curly brace is object
    let myobj = {
        name : "Praagya" ,
        age : 20 
    }

// 3 - Functions
    const myFunc = function(){
        console.log("Hello , inside a function");
    }



// Typeof operator
/*
let a = 3 ;
let b ;

console.log(typeof a);
console.log(typeof b);
*/
//-------------------------------------------------------------------------------
              // 2 - Datatype Conversion

/*
let score3 = "33"
console.log(typeof score3)
let conversion = Number(score3) // datatype conversion from string to int
console.log( conversion)

let score4 = true
console.log(typeof score4);
let conversion2 = Number(score4) // datatype conversion from boolean to int
console.log(conversion2)

let score5 = 1
console.log(typeof score5);
let conversion3 = Boolean(score5) // datatype conversion from number to boolean
console.log(conversion3);

let score6 = 10 
console.log(typeof score6)
let conversion4 = String(score6) // datatype conversion from number to string
console.log(conversion4)
*/