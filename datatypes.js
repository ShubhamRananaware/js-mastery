let name ="shubham"
let age = 25
let isLoggedin = true
let undefined ;
let nullll= null

/*
 *******PRIMITIVE DATATYPES--> 7(Called By Value)
   When ever you try to copy them then the original refrence is not
given to you instide the copy is created and that is given to you and The 
changes made are reflected in the copy only not the orignal one   
                                        
String =""
Number => 2 to the Power 53
Boolean = t/F
Null => Standalon Value (Object TYpe)(EMpty  EKDAM Khali)
undefined 
Symbol => Unique
BigInt => For Big Numbers

********Non Primitive (REfrence)

Array
Object
Functions
*/
 
 console.log(typeof name);
 console.log(typeof age );
 console.log(typeof undefineed);
 console.log(typeof nullll);
 console.log(typeof isLoggedin);
 
 /*

 Javascript is statically typed language or dynamically typed language
 --> JavaScript is a dynamically typed language.
    >  Dynamic typing means you don’t have to declare the type of a variable when you create it.
    > The type of the variable is determined at runtime, based on the value assigned to it.
    > You can even change the type of a variable after it has been declared.

 */ 


    /*  ********Non Primitive (REfrence)
             datatypes
    Array--->object
    Object--->Object
    Functions--->FunctionObject
    */

let FirstNames =["Shubham","Prasad","Shruti"]
console.log(FirstNames);
console.log(typeof FirstNames);
let myObj = {
    name : "ARK",
    email: "ak@gmail.com "
}
console.log(myObj);
console.log(typeof myObj);


let funct=  function() {
    console.log("Hiiiiiiii");   
}

console.log(typeof funct);