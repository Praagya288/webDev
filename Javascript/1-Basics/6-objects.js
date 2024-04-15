                   // 1 - objects

// Object Creation
// Note : the elements at the left of semicolon are automatically
// considered as string

// 1 - 
/*
const Jsuser = {
    name : "Praagya" ,
    email : "praagyajain288@gmail.com" ,
    age :  20 
}

// Common way to access the elements of objects
console.log(Jsuser.name);


// Another way to access the elements of objects
console.log(Jsuser["name"]);
*/


        // 2 - Overwrite and freeze
/*
// Overwrite
Jsuser.email = "praagyajain2828@gmail.com"
console.log(Jsuser.email);

// Freeze ie now the object cannot be changed
Object.freeze(Jsuser)

Jsuser.email = "praagyajain2883@gmail.com"
console.log(Jsuser.email); // email will be 2828 only
*/


                // 3 - Object Creation Part-2

// This is object creation using String literal - (done above)
/*
const oyoUser = {
    name : "rohan" ,
    age : 30 
}
*/

// This is object creation by singleton method or by new keyword
/*
const tinderUser = new Object()

tinderUser.name = "Rohan"
tinderUser.age = 30
console.log(tinderUser.name);
*/

                // 4 -  Nesting in Objects
/*
const normalUser = {
    email : "praagyajain288@gmail.com" ,

    fullname : {
        firstname : "Praagya" ,
        lastname  : "Jain"
    }
}
console.log(normalUser.fullname)
console.log(normalUser.fullname.firstname)
console.log(normalUser.fullname.lastname)
*/

                // 5 -  Concatenation of Objects
                /*
const obj1 = { name : "Praagya" , age : 20}
const obj2 = { weight : "80" , sem : 6}

// This is called spread operator.
const obj3 = {...obj1 , ...obj2}
console.log(obj3);  
*/


                 // 6- Some more accessing the elements
/*
//  Note : 
//         These things are used when working with database

//         In Objects 
//          - Keys are on left of semicolon
//          - Values are on right of semicolon
 
const Jsuser = {
    name : "Praagya" ,
    email : "praagyajain288@gmail.com" ,
    age :  20 
}
console.log(Jsuser);
console.log(Object.keys(Jsuser));
console.log(Object.values(Jsuser));
*/

            // 7 - Objects Destructuring -imp

// Old way
/*
const course = {
    coursename : "Js in hindi",
    price : 0 ,
    courseInstructor : "Hitesh" 
}
console.log(course.courseInstructor);
*/


// destructure way - instead of course.courseInstructor only
                  // courseInstructor can be written in console log
/*
const course = {
    coursename : "Js in hindi",
    price : 0 ,
    courseInstructor : "Hitesh" 
}

// destructure
const {courseInstructor}  = course  
console.log(courseInstructor);

// destructure with another name
const {courseInstructor : cI}  = course  
console.log(cI);
*/
