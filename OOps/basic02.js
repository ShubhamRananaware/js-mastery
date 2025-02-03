// array is also object 
// string is aslo the object 

// function lets check

function fn1(number) {
    return number*2
}

// console.log(fn1(2));
console.log(fn1.prototype);// op {}>> object

function user(UserName, age) {
 this.userName=UserName
 this.age=age
}
user.prototype.increaseAge=function(){
   this.age++
}
const u1=new user("shubham",23)
const u2= user("Sr",20)

console.log(u1);
console.log(u2);



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a 
new JavaScript object.

A prototype is linked: The newly created object gets linked to the
prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with
the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called,
if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
