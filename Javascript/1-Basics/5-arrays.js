// Arrays

// () = parenthesis
// {} = braces or curly braces
// [] = square brackets



// array declaration
const arr = [ 1 , 2 , 3 ]
console.log(arr[0])

// note = In javascript, arrays can also store elements of different datatypes.
const arrtwo = [1 , 2 , "a" , "b" , "hell"]
console.log(arrtwo[4])

// Some array methods

// a - Pushing elements in array
arr.push(9)
console.log(arr)  // note =  no loop required for printing the array in javascript.  

// b - Pop elements in array
arr.pop()
console.log(arr);

// c - Checking the presence of an element in array
console.log(arr.includes(5))

// d - 
const newArr = arr.join() // converts array in string
console.log(arr)
console.log(newArr)
console.log(typeof(newArr));