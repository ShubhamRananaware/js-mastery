// variable in detail let and const 
let arr =[10,12,1211]
console.log("let ",arr);
arr=[201.201,21000]// we can re assign them and modify also
arr.push(101)
console.log("let ",arr);
const arr1= [22,11,33,44]
console.log("Const  ", arr1);
//arr1=[11,11,11,11] // we cannot reassign to const varables 
arr1.push(555) // we can modify them
console.log("const ",arr1);

// now Scope 
let a=100
var c = 200
console.log("Var c =",c);

if (true) {
    let a = 10
    const b = 11
    var c = 12
    console.log("Inner :",a);
    console.log("Inner :",b);
    console.log("Inner :",c);
    
}
console.log(a);// value will be 100 not 10 becuse a is defined globally not 
// console.log(b);// error because value is not defined globally 
console.log(c);// value of c is changed  as it is defined in the if block



