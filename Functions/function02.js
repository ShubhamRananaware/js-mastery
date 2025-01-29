
function cart(num1){
    return `${num1}`
}
console.log(cart(100));
// if user enter multiple value >>>

function cart11 (...num1) {// (num) will take only the fist value 
    // we need to use rest operator looks same as spread operator ... it wil return the array
    return num1
}
console.log(cart11(100,200,300,400));

// same for Object as parameter noww (passing object as the parameter)

const user ={
    name:"shubham",
    age : 24
}
function forObject(anyobject){
    console.log(`helllo all my name is ${anyobject.name} and my age is ${anyobject.age}`);
    
    return anyobject
}

console.log(forObject(user));
console.log(forObject(user.age));
console.log(forObject(
     {
        name : "prasad",
        age :31 
     }) 
   );


// Passing Array as the input
 const arr=[10,29,22,12,21]
  function forarray(anyarray){
    console.log(anyarray[0]);
    
    return anyarray
  }
  console.log(forarray(arr));
  console.log(forarray([222,333,444,555]));
  
  