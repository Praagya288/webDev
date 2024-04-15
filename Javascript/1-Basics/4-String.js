//1- Concatenation of Strings
/*
const name = "Praagya Jain" 
const repocount = 3 ;

// console.log(name + repocount); = not a good way to concatenate
// instead do this
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);
*/

//----------------------------------------------------------------------------
// 2- Some String methods
/**/
const username = "PraagyaJain" // direct way of declaring a string
const namet = new String("praagyaJain") // it creates a string object named 'namet'



// a -  Accessing the individual characters using indices
console.log(username[0]);

// b - Printing the length of the string
console.log(username.length);

// c - Changing to uppercase/lowercase
console.log(username.toUpperCase()); // note - this does not change the actual string
//proof ⬇
console.log(username);

// d - Accessing the character at an index
console.log(username.charAt(1));

// e - Accessing the index of a character
console.log(username.indexOf('P'));

// f - Accessing a substring from a string
const newStringone = username.substring(0,4);
console.log(newStringone);

// g - Trimming the spaces from a string
const newStringtwo = "       PraagyaJain"
console.log(newStringtwo);
console.log(newStringtwo.trim());

// h - Replacing something in a string. lets take url example
const url =  "www.google/com"
console.log(url.replace('/' , '.'))

// i - Checking a string inside the string
console.log(username.includes('Praagya'));
console.log(username.includes('Vegertarian'));

