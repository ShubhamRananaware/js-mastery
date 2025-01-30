// 
const uName= "Shubha"
if (uName) { // here we didnt compre th string then also it is getiing true
    console.log(`user name is ${uName}`);
    
}
const ulName =""
if (ulName) {
    console.log("Blank True");
    
}else{
    console.log("Blank Truthy False");
    
}

 // examples of Falsy Value
 // false , 0, -0, Bigint 0n, "" ,Null,undefined,NaN

//  Truthy VALues 
// "0" , "False" ," ", [] ,function(){}, {}

const arr =[]
if (arr.length===0) {
    console.log("Array is empty");
    
}
const obj={}
if (Object.keys(obj).length===0) {
    console.log("Empty Object");
    
}
 
// Nullish Coalescing operator ?? null undefined
// it is used to avoid null and undefined values

let val1;
val1=10 ?? 20
console.log(val1);
val1= null ?? 2000
console.log(val1);
val1=null ?? undefined
console.log(val1);

val1= null?? undefined?? 512
console.log(val1);


// Ternary operator
// condition ? true : false
 
const price =200

price>100 ? console.log("price greater than 100") : console.log("False branch ");

