// Function expression vs declaration  (more later)
 
        // 1 - Function expression (normal way)
/*
const addOne = function addOne(num){
    return num + 1 
}
    
console.log(addOne(3))
*/

        // 2 - Function expression

const addTwo = function addTwo(num){
    return num + 2 
}
    
console.log(addTwo(3))


    
// Note : the main taught till now between these two is 
// that in the normal way the function can be called 
// before its declaration but this is not possible
// in the other way(expression way)