// stack and heap memory 
/*
**Stack:**
  - Stores local variables and function call information.
  - Used for primitive types.
  - When you take a value, you get a copy.

**Heap:**
  - Used for dynamic memory allocation (objects).
  - When you take a value, you get a reference to the original object.
*/




let myYoutubename = "hitehs.com" ;

let anothername   = myYoutubename 

anothername = "chaiaurcode" 

console.log(myYoutubename);
console.log(anothername)    

let user1 = {
    username : "Praagyajain" ,
    height : 5 
}

let user2 = user1 ;
user2.height  = 6 ;

console.log(user1.height)