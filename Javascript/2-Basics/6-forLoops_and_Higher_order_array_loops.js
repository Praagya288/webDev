//  confusion
 // 1 -  (for of) loop


// (for of) in arrays
/*
const arr = [1,2,3,4,5]

for(const i of arr){
    console.log(i)
}
*/

// (for of) in strings
/*
const greetings = "Hello World" 

for(const j of greetings){
    console.log(j)
}

Note :
// (for of) loops does not work in objects

*/
                // 2 - Maps (More later)
/*
// Note : store only unique values and maintains the order in which data is inserted

const map =  new Map()
map.set('IN' ,  "India")
map.set('USA' ,  "United states of america")
map.set('Fr' ,  "France")

console.log(map)

// Using (for of) loop in maps
for(const i of map){
    console.log(i)
}

// Performing array destructing. ie [c,d]
for(const [c , d] of map){
    console.log( c , ':' , d)
}
*/

                // 3 - (for in) loop 

// (for in) loop in objects
/*
const myObj = {
    cpp : "c++" ,
    rb : "ruby" ,
    swift : "swift by apple"
}

for (const i in myObj){
    console.log(i , ":" , myObj[i])
}
*/


// (for in) loop in arrays
/*
const arr = [11,22,43,11,25]

for(const i in arr){
    console.log(arr[i])
}
*/


                // 4 - (for each) loop
// Note : (for each) loop does not return any value
/*
// (for each) loop in arrays

const coding = ["js" , "ruby" , "java" , "python"]

coding.forEach( function(val){
    console.log(val)
})

// (for each) loop in arrays

coding.forEach(  (item) => {
    console.log(item);
} )


// one more way

function printMe(item){
    console.log(item)
}

coding.forEach(printMe)
*/


// for each loop in objects
/*
const myCoding = [
    {
        languageName : "Javascript" ,
        languageFileName : "js" 
    },
    {
        languageName : "Java" ,
        languageFileName : "java" 
    },
    {
        languageName : "python" ,
        languageFileName : "py" 
    }

]

myCoding.forEach( (item)=> {
    console.log(item.languageName)
} )
*/