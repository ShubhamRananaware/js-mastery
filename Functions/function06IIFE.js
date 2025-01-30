// IIFE ==> Immediately Invoked Function Expression (Function)(Its Call) mandatory;

function f1(){
 console.log("hello");
 
}
f1();

(function f(){
    console.log("hello F1");
    
})();

((namee)=>{
    console.log(`hello ${namee} ` );
    
})("Shubham Dada");