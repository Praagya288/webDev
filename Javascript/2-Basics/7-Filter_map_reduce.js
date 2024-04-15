
                // 1 -  Filter 

// JavaScript's `filter()` method creates a new array by selecting elements that meet a specified condition set by a provided function.
/*

                // 1(a) - Using filter in arrays
                
                const myNums = [1,2,3,4,5,6,7,8,9,10]

// one way
const newNums1 = myNums.filter( (num) => num > 4 );

console.log(newNums1)

// one more way
// Note : here we are have used curcly braces so we have to add a return statement . (discussed before in 4-)
const newNums2 = myNums.filter( (num) => {
    return num > 4
} );

console.log(newNums2)
*/



                // 1(b) - Using filter in arrays with (for each) loop
/*
const myNums = [1,2,3,4,5,6,7,8,9,10]


// Applying Filtering in arrays using (for each) loop
myNums.forEach( (nums)=> {
    if(nums>4){
        console.log(nums)
    }
})
*/

// Applying Filtering in arrays using (for each) loop and storing the filtered elements in the new array
/*
const newNums = []

myNums.forEach( (num)=> {
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums)
*/



                // 2 - Maps (discusses earlier also)
/*
const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map( (num)=> num + 1)

// console.log(newNums);

const newNums = myNums.forEach( (num) => {
    return num + 1 
})
console.log(newNums);
*/

                 // 3 - Chaining
// To understand = Hitesh video 'Filter map reduce' timestamps 20:55/38:45
// Note : Chaining means using more methods simultaneosly

/*

// normal 
const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.map( (nums) => nums*10 )
console.log(newNums)

// applying one more map onto a map ie chaininng
const newNums2 = myNums.map( (nums) => nums*10 ).map( (num) => num + 1)
console.log(newNums2)

// applying filer on map  ie again chaininng
const newNums3 = myNums.map( (nums) => nums*10 ).map( (num) => num + 1).filter((num) => num>40)
console.log(newNums3)


// Now the entire above chaining can be writtenn like this also
const newNums4 = myNums.map( (nums) => nums*10 )
                 .map( (num) => num + 1)
                 .filter((num) => num>40)
console.log(newNums4)

*/


// Imp Note : Higher order array loops are : maps , filter() , reduce() , sort()  , forEach()  
// and some of already discusses in previous files

                // 4 - Reduce - 
// skipped for now , understand when needed
/*
const myNums = [1,2,3]

const myTotal = myNums.reduce( function(acc , currval){
    return acc + currval
} , 0)

console.log(myTotal)
*/