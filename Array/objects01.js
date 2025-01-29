// SingleTon
// Object.create


// Object literls

const mySymbol = Symbol("Mykey01")
const jsUser ={
    name : "Shubham", //name is taken a "name" by default
    age : 25,
    "Full Name" :"Shubham Rananaware",
    [mySymbol] :"MyKey01",// use [] for the Symbol
    location : "Pune",
    email : "shubham@gmai.com",
    isLoggedIn : true

}
console.log(jsUser.name);
console.log(jsUser["name"]);
console.log( jsUser[mySymbol]);
console.log(typeof jsUser[mySymbol]);
console.log(jsUser["Full Name"]);

jsUser.email="rananware@gmail.com"

console.log(jsUser.email);

// Object.freeze(jsUser)
// console.log(jsUser);

// Adding Function in object

jsUser.gretting = function(){
    console.log('hello JSUser xxxx ');
    
}
jsUser.gretting1= function(){
    console.log(`hello JSUser ${this.name}` );
    
}
console.log(jsUser.gretting());
console.log(jsUser.gretting1());