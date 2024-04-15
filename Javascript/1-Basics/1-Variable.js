/*
    const = variable declared with const means that there values cannot be reassigned.

    let = Allows variable usage within the nearest block scope.
  
    var = Allows variable usage in the parent scope where it is declared.
*/

// 1 - Const 
/*
    const country = "Bharat"
    country = "India" // this line will give an error saying "assignment to constant variable"
    console.log(country)
*/

// 2 - Let
/*
function variables()
{
    if(condition = true){

        let a = 4 
        console.log(a)
    }
// console.log(a) // this line will give an error saying "a is not defined"
}
variables()
*/

// 3 - Var
/*
function variables(){
    
    if(condition = true){
        var a = 4 
        console.log(a)
    }
    console.log(a) // no error becuase the line is still in the parent scope of a 
}
console.log(a) // this line will give an error saying "a is not defined" because the variable 
// is not within the parent scope
variables()
*/



// 4 - Read
/*
const accountName =  "Praagya" ;
let accountEmail = "praagyajain288@gmail.com"
var accountPassword = "abc" ;


// trick to print all the variables together
console.log([accountName , accountEmail , accountPassword ]);
*/